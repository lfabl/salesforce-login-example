import React, {
    useEffect
} from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';
import stylesheet from './stylesheet';

const Loading = ({
    navigation
}) => {
    useEffect(() => {
        navigation.setOptions({
            header: null
        });
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
