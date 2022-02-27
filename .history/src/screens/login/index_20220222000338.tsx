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
import storage from '../../storage';

const Login = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });
    }, []);

    const handleOAuthCallback = (event) => {
        const loginInfo = querystring.parse(event?.returnValue.split('#')[1]);
        storage.set("token_instance", loginInfo.instance_url);
        storage.set("token", loginInfo.access_token);
        navigation.navigate("home");
    };

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