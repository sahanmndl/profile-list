import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserItem from "../components/UserItem";

const UserList = () => {

    const [isConnected, setIsConnected] = useState()
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const fetchUsers = async () => {
        NetInfo.fetch().then((state) => setIsConnected(state.isConnected)) 
        setIsLoading(true)
        try {
            const response = await fetch(`http://jsonplaceholder.typicode.com/users`)
            const json = await response.json()
            setUsers([...json])
            await AsyncStorage.setItem('users', JSON.stringify(users))
        } catch (e) {
            if(!isConnected) {
                const storedData = await AsyncStorage.getItem('users')
                if(storedData !== null) {
                    setUsers([...JSON.parse(storedData)])
                    Toast.show({
                        type: 'info',
                        text1: 'No internet connection',
                        text2: 'Using stored data'
                    })
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'No internet connection',
                        text2: 'Unable to fetch data'
                    })
                } 
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Unable to fetch data'
                })
            }
        } finally {
            setIsLoading(false)
            setRefresh(false)
        }
    }

    const onRefresh = () => {
        setRefresh(true)
        fetchUsers()
    }

    const noResultsDisplay = () => {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '700'}}>
                    Cannot fetch data! Pull down to refresh
                </Text>
            </View>
        )
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size="small" color={'coral'} /> : (
                <FlatList
                    data={users}
                    keyExtractor={({id}) => id}
                    refreshing={refresh}
                    onRefresh={onRefresh}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={noResultsDisplay}
                    renderItem={({item}) => (
                        <UserItem item={item} />
                    )}
                />
            )}
        </View>
    )
}

export default UserList

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10,
        backgroundColor: 'white'
    }
})