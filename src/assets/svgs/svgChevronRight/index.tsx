import React from "react";
import Svg, {
    Path
} from 'react-native-svg';

const SVGChevronRight = ({
    size = 1,
    strokeWidth = 1.5,
    color = "#000",
    style,
    ...props
}) => (
    <Svg
        width={7}
        height={11}
        style={{
            transform: [{
                scale: size
            }],
            ...style
        }}
        fill="none"
        {...props}
    >
        <Path
            d="m1 9.5 4.5-4.25L1 1"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default SVGChevronRight;
