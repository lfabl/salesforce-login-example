import React, {
    useEffect
} from 'react';
import {
    ActivityIndicator,
    Linking,
    View
} from 'react-native';
import {
    useNavigation
} from '@react-navigation/native';
import stylesheet from './stylesheet';
import storage from '../../storage';

const Loading = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });

        Linking.addEventListener("url", handleOAuthCallback);

        return () => {
            Linking.removeAllListeners("url");
        };
    }, []);

    const handleOAuthCallback = (event) => {
        const loginInfo = querystring.parse(event?.returnValue.split('#')[1]);
        storage.set("token_instance", loginInfo.instance_url);
        storage.set("token", loginInfo.access_token);
        navigation.navigate("home");
    };

    return <View
        style={stylesheet.container}
    >
        <ActivityIndicator
            size="large"
            color="#444444"
        />
    </View>
};
export default Loading;
