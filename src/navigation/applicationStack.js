import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../components/authentication/signIn';
import Registration from '../components/authentication/registration';

const Stack = createStackNavigator()

const ApplicationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='signIn' headerMode='none' >
                <Stack.Screen name='signIn' component={SignIn} />
                <Stack.Screen name='registration' component={Registration} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationStack;