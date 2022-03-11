import React, {
    useEffect
} from 'react';
import {
    Text
} from 'react-native';
import {
    NavigationContainer,
    useNavigation
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack';
import {
    createBottomTabNavigator 
} from '@react-navigation/bottom-tabs';
import {
    useGlobalState 
} from '../context';
import SVGHome from '../assets/svgs/svgHome';
import {
    colors 
} from '../theme';
import SVGChat from '../assets/svgs/svgChat';
import SVGCog from '../assets/svgs/svgCog';

import LoginPage from '../screens/login';
import RegisterPage from '../screens/register';
import LoadingPage from '../screens/loading/index';
import HomePage from '../screens/home';
import ChatPage from '../screens/chat';
import SettingsPage from '../screens/settings';
import ForgotPasswordPage from '../screens/forgotPassword';
import PropertyNewEditPage from '../screens/propertyNewEdit';
import PropertyDetailPage from '../screens/propertyDetail';
import InspectionPage from '../screens/inspection';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomStack = () => {
    return <Tab.Navigator
        initialRouteName="home"
        screenOptions={({
            route
        }) => ({
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.background,
                borderTopWidth: 0,
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                    width: 0
                },
                borderWidth: 0,
                paddingTop: 6,
                elevation: 0,
                height: 60
            },
            tabBarLabel: ({
                focused
            }) => {
                let pageName = "";
                switch(route.name) {
                case "home":
                    pageName = "Home";
                    break;
                case "chat":
                    pageName = "Chat";
                    break;
                case "settings":
                    pageName = "Settings";
                    break;
                }
                return <Text
                    style={{
                        color: focused ? colors.primary : colors.hideBody,
                        fontWeight: focused ? "bold" : "500",
                        paddingBottom: 6
                    }}
                >
                    {pageName}
                </Text>;
            },
            tabBarIcon: ({
                focused
            }) => {
                switch(route.name) {
                case "home":
                    return <SVGHome
                        color={focused ? colors.primary : colors.hideBody}
                    />;
                case "chat":
                    return <SVGChat
                        color={focused ? colors.primary : colors.hideBody}
                    />;
                case "settings":
                    return <SVGCog
                        color={focused ? colors.primary : colors.hideBody}
                    />;
                }
            }
        })}
    >
        <Tab.Screen name="home" component={HomePage}/>
        <Tab.Screen name="chat" component={ChatPage} />
        <Tab.Screen name="settings" component={SettingsPage} />
    </Tab.Navigator>;
};

const MainStack = () => {
    const navigation = useNavigation();
    const [globalState] = useGlobalState();

    useEffect(() => {
        if(globalState.accessToken && globalState.accessToken !== "") {
            navigation.navigate("app");
        }
    }, [globalState.accessToken]);

    return <Stack.Navigator
        initialRouteName='loading'
    >
        <Stack.Screen name="loading" component={LoadingPage} />
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="register" component={RegisterPage} />
        <Stack.Screen name="forgotPassword" component={ForgotPasswordPage} />
        <Stack.Screen name="propertyNewEdit" component={PropertyNewEditPage} />
        <Stack.Screen name="propertyDetail" component={PropertyDetailPage} />
        <Stack.Screen name="inspection" component={InspectionPage} />
        <Stack.Screen
            name="app"
            component={BottomStack}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>;
};

const Root = () => {
    return <NavigationContainer>
        <MainStack/>
    </NavigationContainer>;
};
export default Root;
