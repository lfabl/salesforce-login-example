import React, {
    useEffect
} from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    useNavigation
} from '@react-navigation/native';
import {
    WebView
} from 'react-native-webview';
import {
    AUTH_URL
} from '../../constants';

const Login = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });
    }, []);

    return <View>
        <Text>Login page</Text>
        <WebView
            source={{
                uri: AUTH_URL
            }}
            javaScriptEnabled={true}
            startInLoadingState={true}
        />
    </View>;
};
export default Login;
