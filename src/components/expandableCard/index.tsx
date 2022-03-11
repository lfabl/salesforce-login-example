import React, {
    ReactNode
} from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import SVGChevronBottom from '../../assets/svgs/svgChevronBottom';
import SVGChevronRight from '../../assets/svgs/svgChevronRight';
import stylesheet from './stylesheet';

interface IExpandableCard {
    emptyContent?: string;
    onPress: () => void;
    children: ReactNode;
    isExpand: boolean;
    title: string;
    count: number;
};

const ExpandableCard = ({
    emptyContent = "No Data",
    isExpand,
    children,
    onPress,
    title,
    count
}: IExpandableCard) => {
    return <TouchableOpacity
        onPress={onPress}
        style={[
            stylesheet.container
        ]}
    >
        <View
            style={[
                stylesheet.headerContainer,
                {
                    marginBottom: isExpand ? 20 : 0
                }
            ]}
        >
            <Text
                style={[
                    stylesheet.headerTitle
                ]}
            >
                {title}
            </Text>
            <View
                style={[
                    stylesheet.headerRightContainer
                ]}
            >
                <View
                    style={[
                        stylesheet.countContainer
                    ]}
                >
                    <Text
                        style={[
                            stylesheet.count
                        ]}
                    >
                        {count}
                    </Text>
                </View>
                {
                    isExpand ?
                        <SVGChevronBottom
                            strokeWidth={3}
                            size={1.15}
                        />
                        :
                        <SVGChevronRight
                            size={2}
                        />
                }
            </View>
        </View>
        <View>
            {
                isExpand ?
                    children ?
                        children
                        :
                        <Text>
                            {emptyContent}
                        </Text>
                    :
                    null
            }
        </View>
    </TouchableOpacity>;
};
export default ExpandableCard;
