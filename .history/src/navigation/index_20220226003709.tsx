import React from 'react';
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import LoginPage from '../screens/login';
import RegisterPage from '../screens/register';
import LoadingPage from '../screens/loading/_index';
import HomePage from '../screens/home';
import ForgotPasswordPage from '../screens/forgotPassword';

const Stack = createStackNavigator();

const MainStack = () => {
    return <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="loading" component={LoadingPage} />
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="register" component={RegisterPage} />
        <Stack.Screen name="forgotPassword" component={ForgotPasswordPage} />
        <Stack.Screen name="home" component={HomePage} />
    </Stack.Navigator>;
};

const Root = () => {
    return <NavigationContainer>
        <MainStack/>
    </NavigationContainer>;
};
export default Root;
