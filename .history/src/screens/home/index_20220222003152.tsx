import React from 'react';
import {
    View,
    Text
} from 'react-native';
import storage from '../../storage';

const Home = () => {
    return <View>
        <Text>Home page</Text>
        <Text>Your token is: {storage.getString("token")}</Text>
    </View>;
};
export default Home;
