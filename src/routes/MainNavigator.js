import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserList from "../pages/UserList";
import UserProfile from "../pages/UserProfile";

const Stack = createStackNavigator()

function MainNavigator() {
    return(
        <Stack.Navigator initialRouteName="UserList">
            <Stack.Screen
                name="UserList"
                component={UserList}
                options={{title: "Users", headerTitleAlign: 'center'}}
            />
            <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{title: "Profile", headerTitleAlign: 'center'}}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator