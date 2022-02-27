import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    useGlobalState
} from '../../context';

const Home = () => {
    const [globalState] = useGlobalState();

    return <View>
        <Text>Home page</Text>
        <Text>Your token is: {globalState.accessToken}</Text>
    </View>;
};
export default Home;
