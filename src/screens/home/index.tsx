import React, {
    useEffect,
    useState
} from 'react';
import {
    PermissionsAndroid,
    Platform,
    Button,
    View,
    Text
} from 'react-native';
import {
    useGlobalState
} from '../../context';
import {
    useNavigation
} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {
    MAIN_URL,
    SERVICE_URL 
} from '../../constants';
import api from '../../api';

const Home = () => {
    const navigation = useNavigation();

    const [globalState] = useGlobalState();

    const [myID, setMyID] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            header: () => null
        });

        api({
            url: `${MAIN_URL}/services/oauth2/userinfo`,
            accessToken: globalState.accessToken
        })
            .then((res) => {
                setMyID(res.user_id);
            })
            .catch((err) => {
                console.error("err:", err);
            });
    }, []);

    const uploadFile = async () => {
        if(Platform.OS === "android") {
            const fileAccessPermission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Permission required",
                    message: "If you want send the file, you should let us to our access.",
                    buttonPositive: "Allow",
                    buttonNegative: "Not allow"
                }
            );

            if(fileAccessPermission !== PermissionsAndroid.RESULTS.GRANTED) {
                alert("Permission denied.");
                return;
            }
        }

        const file = await DocumentPicker.pickSingle({
            type: DocumentPicker.types.pdf,
            allowMultiSelection: false
        });

        RNFetchBlob.fs.readFile(file.uri, "base64")
            .then((data) => {
                sendFile(SERVICE_URL, data);
            })
            .catch(err => {
                console.error(err.message);
            });
    };

    const sendFile = (url: string, data: string) => {
        fetch(`${url}/ContentVersion`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${globalState.accessToken}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "Title": "Test file",
                "PathOnClient": "testfile.pdf",
                "ContentLocation": "S",
                "OwnerId": myID,
                "VersionData": data
            })
        })
            .then((res) => res.json())
            .then((res) => {
                console.error(res);
                console.error(res.message);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return <View>
        <Text>Home page</Text>
        <Text>Your token is: {globalState.accessToken}</Text>
        <Button
            title="Upload a File"
            onPress={uploadFile}
        />
    </View>;
};
export default Home;
