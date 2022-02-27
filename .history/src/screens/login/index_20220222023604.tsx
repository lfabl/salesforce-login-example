import React, {
    useEffect
} from 'react';
import {
    Linking,
    Button,
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
import stylesheet from './stylesheet';

const Login = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });

        /*
        Linking.addEventListener("url", handleOAuthCallback);

        return () => {
            Linking.removeAllListeners("url");
        };
        */
    }, []);

    /*
    const handleOAuthCallback = (event) => {
        const loginInfo = querystring.parse(event?.returnValue.split('#')[1]);
        storage.set("token_instance", loginInfo.instance_url);
        storage.set("token", loginInfo.access_token);
        navigation.navigate("home");
    };
    */

    return <View
        style={stylesheet.container}
    >
        <Text>Fakir fakir</Text>
        <Button
            title="Fakirle"
            onPress={() => {
                fetch(AUTH_URL, {
                    method: "POST",
                    body: JSON.stringify({
                        username: "met2net3-nmpu@force.com",
                        password: "142536asdf"
                    })
                })
                .then((res) => {
                    console.error("res:", res);
                })
                .catch((err) => {
                    console.error("err:", err.message);
                });
            }}
        />
        {/*<WebView
            source={{
                uri: AUTH_URL
            }}
            javaScriptEnabled={true}
            startInLoadingState={true}
        />*/}
    </View>;
};
export default Login;
