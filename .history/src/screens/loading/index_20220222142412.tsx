import React, {
    useEffect
} from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';
import {
    useNavigation
} from '@react-navigation/native';
import stylesheet from './stylesheet';
import storage from '../../storage';
import {
    REFRESH_TOKEN_GRANT_TYPE,
    CLIENT_SECRET,
    CLIENT_ID
} from '../../constants';

const Loading = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });

        if(!storage.getString("token")) {
            
            navigation.navigate("login");
            return () => {};
        }

        // TODO: Token control.
        navigation.navigate("home");
    }, []);

    const refreshToken = () => {
        const params = new URLSearchParams({
            client_secret: CLIENT_SECRET,
            client_id: CLIENT_ID,
            grant_type: REFRESH_TOKEN_GRANT_TYPE,
            username: username,
            password: password
        });

        fetch(`${AUTHORIZATION_URL}?${params}`, {
            method: "POST"
        })
            .then((res) => res.json())
            .then((res) => {
                if(res.error) {
                    Alert.alert("Authentication error", res.error_description);
                    return;
                }

                Toast.show('Successfully logged in.', Toast.SHORT);

                if(rememberMe) {
                    storage.set("token_instance", res.instance_url);
                    storage.set("token", res.access_token);
                }

                setGlobalState({
                    accessToken: res.access_token
                });
                navigation.navigate("home");
            })
            .catch((err) => {
                storage.delete("token_instance");
                storage.delete("token");
                Alert.alert("An error occurred", err.message);
            });
    };

    return <View
        style={stylesheet.container}
    >
        <ActivityIndicator
            size="large"
            color="#444444"
        />
    </View>;
};
export default Loading;
