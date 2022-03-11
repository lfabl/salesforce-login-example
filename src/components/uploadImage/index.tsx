import React from 'react';
import {
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import SVGCamera from '../../assets/svgs/svgCamera';
import {
    colors 
} from '../../theme';
import stylesheet from './stylesheet';

interface IUploadImageProps {
    onPress: () => void;
};

const UploadImage = ({
    onPress
}: IUploadImageProps) => {
    return <TouchableOpacity
        style={[
            stylesheet.container
        ]}
        onPress={onPress}
    >
        <Image
            source={require("../../assets/images/multiimage.png")}
            style={[
                stylesheet.image
            ]} 
        />
        <Text
            style={[
                stylesheet.title
            ]}
        >
            Click here to upload image
        </Text>
        <TouchableOpacity
            onPress={onPress}
            style={[
                stylesheet.cameraButton
            ]}
        >
            <SVGCamera
                color={colors.primary}
            />
        </TouchableOpacity>
    </TouchableOpacity>;
};
export default UploadImage;
