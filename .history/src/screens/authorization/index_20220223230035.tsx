import React, {
    useEffect
} from 'react';
import {
    Linking,
    View
} from 'react-native';
import {
    useRoute
} from '@react-navigation/native';
import WebView from 'react-native-webview';

type AuthorizationParams = {
    urlWithParams: string
};

const Authorization = () => {
    const route = useRoute<{
        params: AuthorizationParams,
        key: string,
        name: string,
        path: string
    }>();
    const params = route.params;

    useEffect(() => {
        console.error(params);
        Linking.addEventListener("url", handleOAuthCallback);

        return () => {
            Linking.removeAllListeners("url");
        };
    }, []);

    const handleOAuthCallback = async (event) => {
        console.error(event.url);
        const loginInfo = querystring.parse(event.url.split("#")[1]);
        console.error(loginInfo);
    };

    return <View style={{
        flex: 1
    }}>
        <WebView
            source={{
                uri: params.urlWithParams
            }}
            javaScriptEnabled={true}
            startInLoadingState={true}
        />
    </View>;
};
export default Authorization;