import React, {
    useEffect,
    useState
} from 'react';
import {
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
    View,
    Text
} from 'react-native';
import {
    useNavigation
} from '@react-navigation/native';
import {
    AUTHORIZATION_URL,
    TOKEN_GRANT_TYPE,
    CLIENT_SECRET,
    CLIENT_ID
} from '../../constants';
import storage from '../../storage';
import stylesheet from './stylesheet';
import {
    useGlobalState
} from '../../context';

const Login = () => {
    const navigation = useNavigation();

    const [globalState, setGlobalState] = useGlobalState();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });
    }, []);

    const login = () => {
        const params = new URLSearchParams({
            client_secret: CLIENT_SECRET,
            client_id: CLIENT_ID,
            grant_type: TOKEN_GRANT_TYPE,
            username: "met2net3-nmpu@force.com",
            password: "142536asdf"
        });

        fetch(`${AUTHORIZATION_URL}?${params}`, {
            method: "POST"
        })
        .then((res) => res.json())
        .then((res) => {
            storage.set("token_instance", res.instance_url);
            storage.set("token", res.access_token);
            setGlobalState({
                accessToken: res.access_token
            });
            navigation.navigate("home");
        })
        .catch((err) => {
            storage.delete("token_instance");
            storage.delete("token");
            Alert.alert("An error occurred", err.message);
        });
    };

    return <View
        style={stylesheet.container}
    >
        <Image
            source={require("../../assets/images/logo.png")}
            style={stylesheet.logo}
        />
        <TextInput
            value={username}
            onChangeText={e => setUsername(e)}
            style={stylesheet.textInput}
        />
        <TextInput
            value={password}
            onChangeText={e => setPassword(e)}
            secureTextEntry={true}
            style={stylesheet.textInput}
        />
        <TouchableOpacity
            onPress={() => login()}
            style={stylesheet.submit}
        >
            <Text
                style={stylesheet.submitText}
            >
                Giriş Yap
            </Text>
        </TouchableOpacity>
    </View>;
};
export default Login;
