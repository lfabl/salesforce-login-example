import React, {
    useEffect
} from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';
import stylesheet from './stylesheet';
import storage from '../../storage';

const Loading = ({
    navigation
}) => {
    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });

        if(!storage.getString("token")) {
            navigation.navigate("login");
        }
        navigation.navigate("home");
    }, []);

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
