import React, {
    useEffect
} from 'react';
import {
    View
} from 'react-native';
import {
    useNavigation
} from '@react-navigation/native';
import {
    NEW_TOKEN_GRANT_TYPE,
    AUTHORIZATION_URL,
    CLIENT_SECRET,
    RESPONSE_TYPE,
    REDIRECT_URI,
    TOKEN_URL,
    CLIENT_ID
} from '../../constants';
import storage from '../../storage';
import stylesheet from './stylesheet';
import {
    useGlobalState
} from '../../context';
import Toast from 'react-native-simple-toast';

const Login = () => {
    const navigation = useNavigation();
    const [globalState, setGlobalState] = useGlobalState();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });
    }, []);

    return <View
        style={stylesheet.container}
    >
        
    </View>;
};
export default Login;
