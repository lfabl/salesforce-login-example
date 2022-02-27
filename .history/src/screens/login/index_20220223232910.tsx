import React, {
    useEffect,
    useState
} from 'react';
import {
    TouchableOpacity,
    ScrollView,
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
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-simple-toast';

const Login = () => {
    const navigation = useNavigation();

    const [globalState, setGlobalState] = useGlobalState();

    const [rememberMe, setRememberMe] = useState(false);
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
            grant_type: NEW_TOKEN_GRANT_TYPE,
            username: username,
            password: encodeURIComponent(password)
        });

        const urlWithParams = `${TOKEN_URL}?${params}`;

        fetch(urlWithParams, {
            method: "POST"
        })
            .then((res) => res.json())
            .then((res) => {
                console.error(res);
                if(res.error) {
                    Alert.alert("Authentication error", res.error_description);
                    return;
                }

                Toast.show('Successfully logged in.', Toast.SHORT);

                if(rememberMe) {
                    storage.set("token_instance", res.instance_url);
                    storage.set("token", res.access_token);
                }

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

    return <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={stylesheet.container}
    >
        <Image
            source={require("../../assets/images/logo.png")}
            style={stylesheet.logo}
        />
        <View
            style={stylesheet.contentContainer}
        >
            <Text>
                Username
            </Text>
            <TextInput
                value={username}
                onChangeText={e => setUsername(e)}
                style={stylesheet.textInput}
            />
            <Text>
                Password
            </Text>
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
                    Log In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setRememberMe(!rememberMe);
                }}
                style={stylesheet.rememberMeContainer}
            >
                <CheckBox
                    value={rememberMe}
                    onValueChange={(e) => setRememberMe(e)}
                />
                <Text
                    style={stylesheet.rememberMeText}
                >
                    Remember me
                </Text>
            </TouchableOpacity>
            <View
                style={stylesheet.footerContainer}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("forgotPassword")}
                >
                    <Text
                        style={stylesheet.footerText}
                    >
                        Forgot Your Password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("register")}
                >
                    <Text
                        style={stylesheet.footerText}
                    >
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>;
};
export default Login;
