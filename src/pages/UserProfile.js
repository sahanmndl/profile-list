import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";

const UserProfile = ({route}) => {

    const {name, username, email, address, phone, website, company} = route.params

    return (
        <View style={{flex: 1, paddingHorizontal: 24, paddingTop: 20, backgroundColor: 'white'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 0.15, alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={{height: 100, width: 100, borderRadius: 100}}
                        source={{ uri: `https://ui-avatars.com/api/?name=${username}&background=random` }}
                    />
                    <Text style={{marginTop: 10, fontSize: 20, fontWeight: '700'}}>{name}</Text>
                </View>
                <View style={{flex: 0.85, marginTop: 50}}>
                    <TextInput
                        style={{backgroundColor: 'white', marginBottom: 20}} 
                        mode="flat"
                        label="Email Address"
                        placeholder="Email Address"
                        value={email}
                        underlineColor="#9E9E9E"
                        activeUnderlineColor="#4CAF50"
                        editable={false}
                    />
                    <TextInput
                        style={{backgroundColor: 'white', marginBottom: 20}} 
                        mode="flat"
                        label="Username"
                        placeholder="Username"
                        value={username}
                        underlineColor="#9E9E9E"
                        activeUnderlineColor="#4CAF50"
                        editable={false}
                    />
                    <TextInput
                        style={{backgroundColor: 'white', marginBottom: 20}} 
                        mode="flat"
                        label="Phone"
                        placeholder="Phone"
                        value={phone}
                        underlineColor="#9E9E9E"
                        activeUnderlineColor="#4CAF50"
                        editable={false}
                    />
                    <TextInput
                        style={{backgroundColor: 'white', marginBottom: 20}} 
                        mode="flat"
                        label="Website"
                        placeholder="Website"
                        value={website}
                        underlineColor="#9E9E9E"
                        activeUnderlineColor="#4CAF50"
                        editable={false}
                    />
                    <Text style={{fontSize: 17, fontWeight: '700', marginBottom: 4}}>Address</Text>
                    <TouchableOpacity style={{padding: 8, borderRadius: 4, borderWidth: 0.5, borderColor: '#9E9E9E', marginBottom: 20}}>
                        <Text style={{fontSize: 15}}>Street: {address.street}</Text>
                        <Text style={{marginVertical: 4, fontSize: 15}}>Suite: {address.suite}</Text>
                        <Text style={{fontSize: 15}}>City: {address.city}</Text>
                        <Text style={{marginVertical: 4, fontSize: 15}}>Zipcode: {address.zipcode}</Text>
                        <Text style={{fontSize: 15}}>Latitude: {address.geo.lat}, Longitude: {address.geo.lng}</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 17, fontWeight: '700', marginBottom: 4}}>Company</Text>
                    <TouchableOpacity style={{padding: 8, borderRadius: 4, borderWidth: 0.5, borderColor: '#9E9E9E', marginBottom: 20}}>
                        <Text style={{fontSize: 15}}>{company.name}</Text>
                        <Text style={{marginVertical: 4, fontSize: 15, color: "#757575"}}>{company.catchPhrase}</Text>
                        <Text style={{fontSize: 15, color: "#757575"}}>{company.bs}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default UserProfile