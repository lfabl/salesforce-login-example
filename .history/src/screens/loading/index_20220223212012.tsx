import React, {
    useEffect
} from 'react';
import {
    ActivityIndicator,
    Alert,
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
    TOKEN_URL,
    CLIENT_ID
} from '../../constants';
import Toast from 'react-native-simple-toast';
import {
    useGlobalState 
} from '../../context';

const Loading = () => {
    const navigation = useNavigation();

    const [globalState, setGlobalState] = useGlobalState();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });

        const storageToken = storage.getString("token");
        if(!storageToken) {
            navigation.navigate("login");
            return () => {};
        }

        if(!refreshToken(storageToken)) {
            navigation.navigate("login");
            return () => {};
        }

        navigation.navigate("home");
    }, []);

    const refreshToken = (token) => {
        const params = new URLSearchParams({
            grant_type: REFRESH_TOKEN_GRANT_TYPE,
            client_secret: CLIENT_SECRET,
            client_id: CLIENT_ID,
            refresh_token: token
        });

        fetch(`${TOKEN_URL}?${params}`, {
            method: "POST"
        })
            .then((res) => res.json())
            .then((res) => {
                if(res.error) {
                    Alert.alert("Authentication error", res.error_description);
                    return;
                }

                Toast.show('Successfully logged in.', Toast.SHORT);

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
