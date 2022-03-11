import React, {
    useEffect,
    useState,
    useRef
} from 'react';
import {
    TouchableOpacity,
    ScrollView,
    Animated,
    Image,
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
import {
    colors 
} from '../../theme';
import SVGPlus from '../../assets/svgs/svgPlus';
import ExpandableCard from '../../components/expandableCard';
import InspectionItem from '../../components/inspectionItem';
import Dialog from '../../components/dialog';

const DUMMY_DATA = {
    exterior: 2,
    interior: 9,
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
    ]
};

const Inspection = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {
        metaData,
        data = DUMMY_DATA
    } = route.params;

    const [isExpandExterior, setIsExpandEexterior] = useState(false);
    const [isExpandInterior, setIsExpandInterior] = useState(false);
    const [isExpandDocuments, setIsExpandDocuments] = useState(false);
    const [isActiveCreateInspectionDialog, setIsActiveCreateInspectionDialog] = useState(false);
    const [selectedInspectionType, setSelectedInspectionType] = useState("pre");
    const [switchWidth, setSwitchWidth] = useState(0);

    const switchAnim = useRef(new Animated.Value(0)).current;

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
                    {data.type === "preLoss" ? "Pre-Loss Inspection" : "Post-Loss Inspection"}
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

    const renderHeader = () => {
        return <View
            style={[
                stylesheet.headerContainer
            ]}
        >
            <Image
                source={{
                    uri: "https://www.polomobilya.com/img/product/b/soho-tv-unitesi-12731.jpeg"
                }}
                style={[
                    stylesheet.image
                ]}
            />
            <View
                style={[
                    stylesheet.headerContent
                ]}
            >
                <Text
                    style={[
                        stylesheet.headerText1
                    ]}
                >
                    {metaData.address2}
                </Text>
                <Text
                    style={[
                        stylesheet.headerText2
                    ]}
                >
                    {metaData.address}
                </Text>
            </View>
        </View>;
    };

    const renderInspectionSectionTitle = () => {
        return <View
            style={[
                stylesheet.inspectionSectionTitleContainer
            ]}
        >
            <Text
                style={[
                    stylesheet.inspectionSectionTitle
                ]}
            >
                Inspection Item
            </Text>
            <Button
                image={<SVGPlus
                    color={colors.primary}
                    size={1.5}
                />}
                color="transparent"
                onPress={() => {
                    setIsActiveCreateInspectionDialog(true);
                }}
                style={[
                    stylesheet.plusButton
                ]}
            />
        </View>;
    };

    return <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={[
            stylesheet.container
        ]}
    >
        {renderHeader()}
        {renderInspectionSectionTitle()}
        <ExpandableCard
            count={data.exterior}
            title="Exterior"
            isExpand={isExpandExterior}
            onPress={() => setIsExpandEexterior(!isExpandExterior)}
        >
            
        </ExpandableCard>
        <ExpandableCard
            count={data.interior}
            title="Interior"
            isExpand={isExpandInterior}
            onPress={() => setIsExpandInterior(!isExpandInterior)}
        >
            
        </ExpandableCard>
        <ExpandableCard
            count={data.documents.length}
            title="Documents"
            isExpand={isExpandDocuments}
            onPress={() => setIsExpandDocuments(!isExpandDocuments)}
        >
            {
                data.documents.map((item) => {
                    return <InspectionItem
                        {...item}
                        style={{
                            ...stylesheet.inspectionItem
                        }}
                    />;
                })
            }
        </ExpandableCard>
        <Dialog
            isActive={isActiveCreateInspectionDialog}
            content={<View>
                <View
                    style={[
                        stylesheet.switchContainer
                    ]}
                    onLayout={({
                        nativeEvent
                    }) => {
                        setSwitchWidth(nativeEvent.layout.width);
                    }}
                >
                    <TouchableOpacity
                        onPress={() => Animated.timing(switchAnim, {
                            toValue: 0,
                            useNativeDriver: true,
                            duration: 300
                        }).start()}
                        style={[
                            stylesheet.switch1,
                            {
                                width: (switchWidth - 12) / 2
                            }
                        ]}
                    >
                        <Text
                            style={[
                                stylesheet.switchText1
                            ]}
                        >
                    Pre
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Animated.timing(switchAnim, {
                            toValue: 1,
                            useNativeDriver: true,
                            duration: 300
                        }).start()}
                        style={[
                            stylesheet.switch2,
                            {
                                width: (switchWidth - 12) / 2
                            }
                        ]}
                    >
                        <Text
                            style={[
                                stylesheet.switchText2
                            ]}
                        >
                    Post
                        </Text>
                    </TouchableOpacity>
                    <Animated.View
                        style={[
                            stylesheet.switchIndicator,
                            {
                                width: (switchWidth / 2) - 12,
                                transform: [{
                                    translateX: switchAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [6, (switchWidth / 2) + 6]
                                    })
                                }]
                            }
                        ]}
                    />
                </View>
                <Button
                    title="Continue"
                />
            </View>}
            onClose={() => setIsActiveCreateInspectionDialog(false)}
            title="Create Inspection"
        />
    </ScrollView>;
};
export default Inspection;
