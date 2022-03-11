import React, {
    useEffect,
    useState
} from 'react';
import {
    ScrollView,
    View,
    Text
} from 'react-native';
import stylesheet from './stylesheet';
import {
    useNavigation,
    useRoute 
} from '@react-navigation/native';
import Button from '../../components/button';
import SVGChevronLeft from '../../assets/svgs/svgChevronLeft';
import {
    colors 
} from '../../theme';
import UploadImage from '../../components/uploadImage';
import TextInput from '../../components/textInput';
import SelectDropdown from 'react-native-select-dropdown';
import MapView from 'react-native-maps';
import Dialog from '../../components/dialog';
import SVGCamera from '../../assets/svgs/svgCamera';
import SVGImages from '../../assets/svgs/svgImages';

const PropertyNewEdit = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {
        pageType
    } = route.params;

    const [isActiveNewPhotoDialog, setIsActiveNewPhotoDialog] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return <Button
                    image={<SVGChevronLeft
                        size={1.25}
                    />}
                    color="transparent"
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{
                        paddingHorizontal: 10,
                        marginLeft: 15
                    }}
                />;
            },
            headerTitleAlign: "center",
            headerTitle: () => {
                return <Text
                    style={{
                        textAlign: "center",
                        fontWeight: "600",
                        color: "black",
                        fontSize: 20
                    }}
                >
                    Property
                </Text>;
            },
            headerRight: () => {
                return <Button
                    title="SAVE"
                    color="transparent"
                    textColor={colors.primary}
                    style={{
                        paddingHorizontal: 10,
                        marginRight: 15
                    }}
                    onPress={() => {
                        
                    }}
                />;
            }
        });
    }, []);

    const renderNewImage = () => {
        return <UploadImage
            onPress={() => {
                setIsActiveNewPhotoDialog(true);
            }}
        />;
    };

    const renderEditImages = () => {
        return null;
    };

    const renderDelete = () => {
        return <Button
            title="Delete"
            color="transparent"
            textColor={colors.accent}
            onPress={() => {

            }}
            style={{
                marginBottom: 20
            }}
        />;
    };

    const renderAddress = () => {
        return <View
            style={[
                stylesheet.sectionContainer,
                {
                    paddingTop: 32
                }
            ]}
        >
            <Text
                style={[
                    stylesheet.sectionTitle
                ]}
            >
            Address
            </Text>
            <TextInput
                placeholder="Enter your address"
                style={{
                    ...stylesheet.input
                }}
            />
            <TextInput
                placeholder="Enter your address"
                style={{
                    ...stylesheet.input
                }}
            />
        </View>;
    };

    const renderCity = () => {
        return <View
            style={[
                stylesheet.sectionContainer
            ]}
        >
            <Text
                style={[
                    stylesheet.sectionTitle
                ]}
            >
            City
            </Text>
            <TextInput
                placeholder="Enter your city"
                style={{
                    ...stylesheet.input
                }}
            />
        </View>;
    };

    const renderStateAndZipCode = () => {
        return <View
            style={[
                stylesheet.sectionContainer,
                {
                    flexDirection: "row"
                }
            ]}
        >
            <View
                style={[
                    stylesheet.horizontalSectionContainer,
                    {
                        marginRight: 10
                    }
                ]}
            >
                <Text
                    style={[
                        stylesheet.sectionTitle
                    ]}
                >
                State
                </Text>
                <SelectDropdown
                    data={["test", "test2"]}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                    }}
                    buttonStyle={{
                        backgroundColor: colors.softBackground,
                        width: "100%",
                        height: 60
                    }}
                    buttonTextStyle={{
                        color: colors.hideBody
                    }}
                />
            </View>
            <View
                style={[
                    stylesheet.horizontalSectionContainer,
                    {
                        marginLeft: 10
                    }
                ]}
            >
                <Text
                    style={[
                        stylesheet.sectionTitle
                    ]}
                >
                Zip Code
                </Text>
                <TextInput
                    placeholder="Enter your zip code"
                    style={{
                        ...stylesheet.input
                    }}
                />
            </View>
        </View>;
    };

    const renderMap = () => {
        return <MapView
            initialRegion={{
                latitude: 37.0835187,
                longitude: 36.2520994,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            style={{
                marginBottom: 40,
                marginTop: 10,
                width: "100%",
                height: 200
            }}
        />;
    };

    return <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={[
            stylesheet.container
        ]}
        contentContainerStyle={{
            paddingBottom: 20
        }}
    >
        {
            pageType === "new" ?
                renderNewImage()
                :
                renderEditImages()
        }
        {renderAddress()}
        {renderCity()}
        {renderStateAndZipCode()}
        {renderMap()}
        {
            pageType === "edit" ?
                renderDelete()
                :
                renderDelete()
        }
        <Dialog
            title="Primary Property Picture"
            isActive={isActiveNewPhotoDialog}
            onClose={() => setIsActiveNewPhotoDialog(false)}
            content={<View
                style={[
                    stylesheet.dialogButtonsContainer
                ]}
            >
                <Button
                    image={<SVGCamera
                        color={colors.panel}
                        size={1.5}
                    />}
                    style={{
                        borderBottomRightRadius: 0,
                        borderTopRightRadius: 0,
                        paddingVertical: 20,
                        marginRight: 1,
                        height: "100%",
                        flex: 1
                    }}
                />
                <Button
                    image={<SVGImages
                        size={1.25}
                        color={colors.panel}
                    />}
                    style={{
                        borderBottomLeftRadius: 0,
                        borderTopLeftRadius: 0,
                        paddingVertical: 20,
                        height: "100%",
                        marginLeft: 1,
                        flex: 1
                    }}
                />
            </View>}
        />
    </ScrollView>;
};
export default PropertyNewEdit;
