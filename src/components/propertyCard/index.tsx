import React, {
    useRef
} from 'react';
import {
    TouchableOpacity,
    Dimensions,
    Image,
    View,
    Text
} from 'react-native';
import stylesheet from './stylesheet';
import Carousel from 'react-native-snap-carousel';
import SVGChevronRight from '../../assets/svgs/svgChevronRight';
import {
    colors 
} from '../../theme';
import Button from '../button';
import SVGPencil from '../../assets/svgs/svgPencil';

interface IPropertyCardProps {
    onPress: () => void;
    images: Array<string>;
    address: string;
    address2: string;
    lastModifiedAt: string;
    preLoss: number;
    onEdit: () => void;
    postLoss: number;
};

type PropertyCardRenderItem = {
    item: string;
};

type PropertyCardRenderDetailContent = {
    content: string | number;
    title: string;
};

const PropertyCard = ({
    address,
    address2,
    images,
    lastModifiedAt,
    onEdit,
    onPress,
    postLoss,
    preLoss
}: IPropertyCardProps) => {
    const carouselRef = useRef(null);

    const cardWidth = Dimensions.get("window").width - 30;

    const renderHeader = () => {
        return <View
            style={[
                stylesheet.header
            ]}
        >
            <Carousel
                data={images}
                sliderWidth={cardWidth}
                itemWidth={cardWidth - 10}
                contentContainerCustomStyle={[
                    stylesheet.contentContainerCustomStyle
                ]}
                loop={true}
                autoplay={false}
                autoplayDelay={3000}
                autoplayInterval={3000}
                enableSnap={true}
                scrollEnabled={true}
                horizontal={true}
                renderItem={({
                    item
                }: PropertyCardRenderItem) => {
                    return <Image
                        resizeMode="contain"
                        source={{
                            uri: item
                        }}
                        style={[
                            {
                                width: cardWidth - 65
                            },
                            stylesheet.image
                        ]}
                    />;
                }}
            />
            <TouchableOpacity
                onPress={onPress}
                style={[
                    stylesheet.rightIcon
                ]}
            >
                <SVGChevronRight
                    size={1.75}
                    strokeWidth={2}
                    color={colors.primary}
                />
            </TouchableOpacity>
        </View>;
    };

    const renderAddresses = () => {
        return <View
            style={[
                stylesheet.addressContainer
            ]}
        >
            <View
                style={[
                    stylesheet.addressesContent
                ]}
            >
                <Text
                    style={[
                        stylesheet.address2
                    ]}
                >
                    {address2}
                </Text>
                <Text
                    style={[
                        stylesheet.address
                    ]}
                >
                    {address}
                </Text>
            </View>
            {
                onEdit ?
                    <Button
                        onPress={onEdit}
                        color="transparent"
                        image={<SVGPencil
                            color={colors.primary}
                        />}
                        style={{
                            paddingHorizontal: 20
                        }}
                    />
                    :
                    null
            }
        </View>;
    };

    const renderDetails = () => {
        return <View
            style={[
                stylesheet.detailsContainer
            ]}
        >
            {renderDetailContent({
                content: lastModifiedAt,
                title: "Last Modified"
            })}
            {verticalSeperator()}
            {renderDetailContent({
                title: "PRE-LOSS",
                content: preLoss
            })}
            {verticalSeperator()}
            {renderDetailContent({
                title: "POST-LOSS",
                content: postLoss
            })}
        </View>;
    };

    const renderDetailContent = ({
        content,
        title
    }: PropertyCardRenderDetailContent) => {
        return <View
            style={[
                stylesheet.detailContentContainer
            ]}
        >
            <Text
                style={[
                    stylesheet.detailContent
                ]}
            >
                {content ? content : "-"}
            </Text>
            <Text
                style={[
                    stylesheet.detailContentTitle
                ]}
            >
                {title}
            </Text>
        </View>;
    };

    const verticalSeperator = () => {
        return <View
            style={[
                stylesheet.verticalSeperator
            ]}
        ></View>;
    };

    return <View
        style={[
            stylesheet.container
        ]}
    >
        {renderHeader()}
        <TouchableOpacity
            onPress={onPress}
        >
            {renderAddresses()}
            {renderDetails()}
        </TouchableOpacity>
    </View>;
};
export default PropertyCard;
