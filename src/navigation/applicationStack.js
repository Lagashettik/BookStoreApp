import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../components/authentication/signIn';
import Registration from '../components/authentication/registration';
import Dashboard from '../components/dashboard/dashboard';

const Stack = createStackNavigator()

const ApplicationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='dashboard' headerMode='none' >
                <Stack.Screen name='signIn' component={SignIn} />
                <Stack.Screen name='registration' component={Registration} />
                <Stack.Screen name='dashboard' component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationStack;