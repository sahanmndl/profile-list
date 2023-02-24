import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const UserItem = ({item}) => {

    const navigation = useNavigation()
    const {name, username, email, address, phone, website, company} = item

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => requestAnimationFrame(() => {
                navigation.navigate('UserProfile', {
                    name: name,
                    username: username, 
                    email: email, 
                    address: address, 
                    phone: phone,
                    website: website,
                    company: company
                })
            })}
        >
            <Image
                style={{height: 95, width: 90, borderRadius: 8, alignSelf: 'flex-start'}}
                source={{ uri: `https://ui-avatars.com/api/?name=${username}&background=random` }}
            />
            <View style={{
                marginHorizontal: 30, 
                flex: 1, 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{fontSize: 15, fontWeight: '700'}}>{name}</Text>
                    <Text style={{fontSize: 14, color: '#757575'}}>{username}</Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={22} color='#757575' />
            </View>
        </TouchableOpacity>
    )
} 

export default UserItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#E0E0E0',
        borderWidth: 0.5
    }
})