import React, {
    useEffect
} from 'react';
import {
    View
} from 'react-native';
import {
    useNavigation
} from '@react-navigation/native';
import {
    AUTH_URL
} from '../../constants';
import stylesheet from './stylesheet';
import {
    WebView
} from 'react-native-webview';

const Login = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });
    }, []);

    return <View
        style={stylesheet.container}
    >
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
