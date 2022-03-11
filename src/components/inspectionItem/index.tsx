import React from 'react';
import {
    ViewStyle,
    View,
    Text
} from 'react-native';
import SVGPencil from '../../assets/svgs/svgPencil';
import {
    colors 
} from '../../theme';
import Button from '../button';
import stylesheet from './stylesheet';

interface IInspectionItemProps {
    createdDate: string;
    fileType: string;
    style: ViewStyle;
    title: string;
};

const InspectionItem = ({
    createdDate,
    fileType,
    title,
    style
}: IInspectionItemProps) => {
    return <View
        style={[
            stylesheet.container,
            style
        ]}
    >
        <Text
            style={[
                stylesheet.title
            ]}
        >
            {title}
        </Text>
        <View
            style={[
                stylesheet.fileTypeContainer
            ]}
        >
            <Text
                style={[
                    stylesheet.fileType
                ]}
            >
                {fileType.toUpperCase()}
            </Text>
            <Text
                style={[
                    stylesheet.fileTypeTitle
                ]}
            >
                File type
            </Text>
        </View>
        <View
            style={[
                stylesheet.dateContainer
            ]}
        >
            <Text
                style={[
                    stylesheet.date
                ]}
            >
                {createdDate}
            </Text>
            <Text
                style={[
                    stylesheet.dateTitle
                ]}
            >
                Created On
            </Text>
        </View>
        <Button
            image={<SVGPencil
                color={colors.primary}
            />}
            color="transparent"
            style={[
                stylesheet.editButton
            ]}
        />
    </View>; 
};
export default InspectionItem;
