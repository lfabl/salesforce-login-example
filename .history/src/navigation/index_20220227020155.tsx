import React, {
    useEffect 
} from 'react';
import {
    NavigationContainer,
    useNavigation
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import LoginPage from '../screens/login';
import RegisterPage from '../screens/register';
import LoadingPage from '../screens/loading/index';
import HomePage from '../screens/home';
import ForgotPasswordPage from '../screens/forgotPassword';

const Stack = createStackNavigator();

const MainStack = () => {
    const navigation = useNavigation();

    return <Stack.Navigator initialRouteName='loading'>
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
