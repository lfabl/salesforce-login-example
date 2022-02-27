import React, {
    useEffect
} from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    useGlobalState
} from '../../context';
import {
    useNavigation
} from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const [globalState] = useGlobalState();

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });

        fetch("https://gablesinsurancerecovery.my.salesforce.com/services/data/v21.0/sobjects/Account/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "OAuth " + globalState.accessToken
            },
            body: JSON.stringify({
                "Name": "Ucucu keci"
            })
        })
            .then((res) => res.json())
            .then((res) => {
                console.error("res:", res);
            })
            .catch((err) => {
                console.error("err:", err);
            });
    }, []);

    return <View>
        <Text>Home page</Text>
        <Text>Your token is: {globalState.accessToken}</Text>
    </View>;
};
export default Home;
