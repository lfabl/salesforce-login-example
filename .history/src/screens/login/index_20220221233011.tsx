import React, {
    useEffect
} from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    useNavigation
} from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });
    }, []);

    return <View>
        <Text>Login page</Text>
    </View>;
};
export default Login;
