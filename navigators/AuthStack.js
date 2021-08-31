import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Auth = createStackNavigator();
//TODO: set here the navigator for the authentification flow
const AuthStack = () => {
    return (
        <NavigationContainer>
            <Auth.Navigator>

            </Auth.Navigator>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AuthStack;