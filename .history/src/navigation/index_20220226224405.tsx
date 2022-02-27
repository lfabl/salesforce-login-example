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
import LoadingPage from '../screens/loading/_index';
import HomePage from '../screens/home';
import ForgotPasswordPage from '../screens/forgotPassword';
import {
    useGlobalState 
} from '../context';

const Stack = createStackNavigator();

const MainStack = () => {
    const navigation = useNavigation();
    const [globalState] = useGlobalState();

    useEffect(() => {
        if(!globalState.accessToken) {
            navigation.navigate("login");
            return;
        }
        navigation.navigate("home");
    }, [globalState.accessToken]);

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
