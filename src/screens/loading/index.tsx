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
import {
    useGlobalState 
} from '../../context';
import storage from '../../storage';
import {
    refreshToken 
} from '../../api';

const Loading = () => {
    const navigation = useNavigation();
    const [globalState, setGlobalState] = useGlobalState();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });

        const storageToken = storage.getString("refreshToken");
        if(!storageToken) {
            navigation.navigate("login");
        }

        refreshToken({
            refreshToken: storageToken
        })
            .then((newAccessToken) => {
                storage.set("token", newAccessToken);
                setGlobalState({
                    accessToken: newAccessToken
                });
            })
            .catch(err => {
                if(err.toString() === "invalid_grant") {
                    navigation.navigate("login");
                }
            });
    }, []);

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
