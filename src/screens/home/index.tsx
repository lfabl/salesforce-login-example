import React, {
    useEffect,
    useState
} from 'react';
import {
    PermissionsAndroid,
    Platform,
    FlatList,
    View,
    Text
} from 'react-native';
import {
    useGlobalState
} from '../../context';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {
    SERVICE_URL,
    MAIN_URL
} from '../../constants';
import api from '../../api';
import stylesheet from './stylesheet';
import UserInfo from '../../components/userInfo';
import StateCard from '../../components/stateCard';
import SVGPlus from '../../assets/svgs/svgPlus';
import Button from '../../components/button';
import {
    colors 
} from '../../theme';
import PropertyCard from '../../components/propertyCard';
import {
    useNavigation 
} from '@react-navigation/native';

const DUMMY_DATA = [
    {
        images: [
            "https://i.ibb.co/JyrC7fr/balcony.png",
            "https://i.ibb.co/dW6whYG/Kediler.jpg"
        ],
        address: "Katy, Texas, 77450",
        address2: "1884 Candlelight Drive",
        lastModifiedAt: "11/14/2021",
        preLoss: 8,
        postLoss: null
    }
];

const Home = () => {
    const navigation = useNavigation();
    const [globalState] = useGlobalState();

    const [myID, setMyID] = useState(null);
    const [data, setData] = useState(DUMMY_DATA); // or []

    useEffect(() => {
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

    const renderCards = ({
        item,
        index
    }) => {
        return <PropertyCard
            {...item}
            onPress={() => {
                navigation.navigate("propertyDetail", {
                    data: item
                });
            }}
            style={{
                ...stylesheet.item
            }}
        />;
    };

    return <View
        style={[
            stylesheet.container
        ]}
    >
        <UserInfo
            userName='Jenifer'
            userType='Customer 12'
            logo={require("../../assets/images/gir.png")}
        />
        <FlatList
            data={data}
            renderItem={renderCards}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<View
                style={[
                    stylesheet.emptyContainer
                ]}
            >
                <StateCard
                    image={require("../../assets/images/homeEmpty.png")}
                    content="Add Property to get Started"
                    action={{
                        title: "Add Property",
                        onPress: () => navigation.navigate("propertyNewEdit", {
                            pageType: "new"
                        }),
                        image: <SVGPlus/>
                    }}
                />
            </View>}
            contentContainerStyle={[
                stylesheet.contentContainer
            ]}
            ListHeaderComponent={data && data.length ? <View
                style={[
                    stylesheet.propertiesTitleContainer
                ]}
            >
                <Text
                    style={[
                        stylesheet.propertiesTitle
                    ]}
                >
                    Properties
                </Text>
                <Button
                    image={<SVGPlus
                        color={colors.primary}
                        size={1.3}
                    />}
                    onPress={() => {
                        navigation.navigate("propertyNewEdit", {
                            pageType: "new"
                        });
                    }}
                    color="transparent"
                    style={{
                        ...stylesheet.propertiesCreateButton
                    }}
                />
            </View> : null}
        />
    </View>;
};
export default Home;
