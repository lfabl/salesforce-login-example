import React, {
    useEffect,
    useState 
} from 'react';
import {
    ScrollView,
    FlatList,
    View,
    Text
} from 'react-native';
import {
    useNavigation,
    useRoute 
} from '@react-navigation/native';
import stylesheet from './stylesheet';
import SVGChevronLeft from '../../assets/svgs/svgChevronLeft';
import Button from '../../components/button';
import PropertyCard from '../../components/propertyCard';
import StateCard from '../../components/stateCard';
import SVGPlus from '../../assets/svgs/svgPlus';
import {
    colors 
} from '../../theme';
import InspectionCard from '../../components/inspectionCard';

const DUMMY_DATA = [
    {
        type: "preLoss",
        exterior: 8,
        interior: 9,
        status: 0,
        createdOn: "11/14/2021",
        documents: [
            {
                title: "Insurance Policy",
                fileType: "pdf",
                createdDate: "11/04/2021"
            },
            {
                title: "Inspection Report",
                fileType: "pdf",
                createdDate: "11/04/2021"
            }
        ],
        lastModified: "11/14/2021"
    }
];

const PropertyDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {
        data
    } = route.params;

    const [isActiveInspectionDialog, setIsActiveInspectionDialog] = useState(false);
    const [_data, setData] = useState(DUMMY_DATA); // or []

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
        });
    }, []);

    const renderCards = ({
        item,
        index
    }) => {
        return <InspectionCard
            {...item}
            onPress={() => navigation.navigate("inspection", {
                data: item,
                metaData: data 
            })}
        />;
    };

    return <FlatList
        data={_data}
        renderItem={renderCards}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={[
            stylesheet.container
        ]}
        ListEmptyComponent={<View
            style={[
                stylesheet.emptyContainer
            ]}
        >
            <StateCard
                image={require("../../assets/images/homeEmpty.png")}
                content="Add Inspection to get Started"
                action={{
                    title: "Add Property",
                    onPress: () => setIsActiveInspectionDialog(true),
                    image: <SVGPlus/>
                }}
            />
        </View>}
        contentContainerStyle={[
            stylesheet.contentContainer
        ]}
        ListHeaderComponent={_data && _data.length ? <View>
            <PropertyCard
                {...data}
                onEdit={() => {
                    navigation.navigate("propertyNewEdit", data);
                }}
            />
            <View
                style={[
                    stylesheet.propertiesTitleContainer
                ]}
            >
                <Text
                    style={[
                        stylesheet.propertiesTitle
                    ]}
                >
                    Inspection
                </Text>
                <Button
                    image={<SVGPlus
                        color={colors.primary}
                        size={1.3}
                    />}
                    onPress={() => {
                        setIsActiveInspectionDialog(true);
                    }}
                    color="transparent"
                    style={{
                        ...stylesheet.propertiesCreateButton
                    }}
                />
            </View>
        </View> : null}
    />;
};
export default PropertyDetail;
