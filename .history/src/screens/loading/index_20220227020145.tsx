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

const Loading = () => {
    const navigation = useNavigation();
    const [globalState] = useGlobalState();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
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
