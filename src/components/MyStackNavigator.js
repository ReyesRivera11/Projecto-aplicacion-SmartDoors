
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Main from '../screens/main';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/welcome';
import NavBar from './NavBar';
import Users from '../screens/users';

const Stack = createNativeStackNavigator();
const MyStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Users"
                    component={Users}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator