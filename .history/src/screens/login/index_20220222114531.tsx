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
    }, []);

    const login = () => {
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
            storage.set("token_instance", res.instance_url);
            storage.set("token", res.access_token);
        })
        .catch((err) => {
            alert(err.message);
            storage.delete("token_instance");
            storage.delete("token");
        });
    };

    return <View
        style={stylesheet.container}
    >
        <Text>Fakir fakir</Text>
        <Button
            title="Fakirle"
            onPress={() => login()}
        />
    </View>;
};
export default Login;
