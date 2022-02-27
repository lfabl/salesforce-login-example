import React, {
    useEffect
} from 'react';
import {
    Button,
    View,
    Text
} from 'react-native';
import {
    useNavigation
} from '@react-navigation/native';
import {
    AUTHORIZATION_URL,
    TOKEN_GRANT_TYPE,
    CLIENT_SECRET,
    CLIENT_ID
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
                const params = new URLSearchParams({
                    client_secret: CLIENT_SECRET,
                    client_id: CLIENT_ID,
                    grant_type: TOKEN_GRANT_TYPE,
                    username: "met2net3-nmpu@force.com",
                    password: "142536asdf"
                });
                fetch(`${AUTHORIZATION_URL}?${params}`, {
                    method: "POST"
                })
                .then((res) => res.json())
                .then((res) => {
                    console.error("res:", Object.keys(res));
                })
                .catch((err) => {
                    console.error("err:", err.message);
                });
            }}
        />
    </View>;
};
export default Login;
