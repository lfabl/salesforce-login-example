import React from 'react';
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';

import LoginPage from '../screens/login';
import RegisterPage from '../screens/register';
import LoadingPage from '../screens/loading';
import HomePage from '../screens/home';

const Stack = createStackNavigator();

const Root = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="loading" component={LoadingPage} />
            <Stack.Screen name="login" component={LoginPage} />
            <Stack.Screen name="register" component={RegisterPage} />
            <Stack.Screen name="home" component={HomePage} />
        </Stack.Navigator>
    </NavigationContainer>;
};
export default Root;
