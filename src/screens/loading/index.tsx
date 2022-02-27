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

const Loading = () => {
    const navigation = useNavigation();
    const [globalState] = useGlobalState();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });

        const storageToken = storage.getString("token");
        if(!storageToken) {
            navigation.navigate("login");
        }

        // TODO: If token already taken, a new one will be received via the refresh token then redirect to home page. ( auto login on initial. )
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
