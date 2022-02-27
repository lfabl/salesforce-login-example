import React from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';
import stylesheet from './stylesheet';

const Loading = () => {
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
