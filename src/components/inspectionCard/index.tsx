import React from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import SVGChevronRight from '../../assets/svgs/svgChevronRight';
import SVGFolder from '../../assets/svgs/svgFolder';
import SVGInfo from '../../assets/svgs/svgInfo';
import stylesheet from './stylesheet';

interface IInspectionCardProps {
    documents: Array<any>;
    lastModified: string;
    createdOn: string;
    status: number;
    exterior: number;
    interior: number;
    onPress: () => void;
    type: string;
};

const InspectionCard = ({
    lastModified,
    documents,
    createdOn,
    exterior,
    interior,
    onPress,
    status,
    type
}: IInspectionCardProps) => {
    const renderInfo = ({
        longSection,
        title,
        count
    }) => {
        return <View
            style={[
                longSection ? {
                    ...stylesheet.longColumn
                } : {
                    ...stylesheet.shortColumn
                }
            ]}
        >
            <Text
                style={[
                    stylesheet.count
                ]}
            >
                {count === 0 ? "-" : count}
            </Text>
            <Text
                style={[
                    stylesheet.countTitle
                ]}
            >
                {title}
            </Text>
        </View>;
    };

    return <TouchableOpacity
        onPress={onPress}
        style={[
            stylesheet.container
        ]}
    >
        <View
            style={[
                stylesheet.headerContainer
            ]}
        >
            <Text
                style={[
                    stylesheet.headerTitle
                ]}
            >
                {type === "preLoss" ? "Pre-Loss" : "Post-Loss"}
            </Text>
            <SVGChevronRight
                size={1.75}
                style={{
                    marginRight: 10
                }}
            />
        </View>
        <View
            style={[
                stylesheet.section
            ]}
        >
            <View
                style={[
                    stylesheet.shortColumn
                ]}
            >
                <SVGInfo/>
            </View>
            {renderInfo({
                title: "Created On",
                count: createdOn,
                longSection: true
            })}
            {renderInfo({
                title: "Last Modified",
                count: lastModified,
                longSection: true
            })}
            {renderInfo({
                title: "Status",
                count: status,
                longSection: false
            })}
        </View>
        <View
            style={[
                stylesheet.section,
                {
                    paddingVertical: 20,
                    paddingTop: 30
                }
            ]}
        >
            <View
                style={[
                    stylesheet.shortColumn
                ]}
            >
                <SVGFolder
                    size={1.5}
                />
            </View>
            {renderInfo({
                title: "Exterior",
                count: exterior,
                longSection: true
            })}
            {renderInfo({
                title: "Interior",
                count: interior,
                longSection: true
            })}
            {renderInfo({
                title: "Documents",
                count: documents.length,
                longSection: false
            })}
        </View>
    </TouchableOpacity>;
};
export default InspectionCard;
