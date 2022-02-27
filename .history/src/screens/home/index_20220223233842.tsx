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

        const params = new URLSearchParams({
            name: "Ucucu keci"
        });
        console.log(globalState.accessToken);

        fetch("https://gablesinsurancerecovery.my.salesforce.com/services/data/v20/sobjects/Account/", {
            method: "POST",
            headers: {
                "Authorization": "OAuth " + globalState.accessToken
            },
            body: JSON.stringify({
                "Content-Type": "application/json",
                "Accept": "application/json",
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
