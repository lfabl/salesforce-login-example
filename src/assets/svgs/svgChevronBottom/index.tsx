import React from "react";
import Svg, {
    Path
} from 'react-native-svg';

const SVGChevronBottom = ({
    size = 1,
    color = "#000",
    strokeWidth = 2,
    style,
    ...props
}) => (
    <Svg
        width={18}
        height={10}
        fill="none"
        style={{
            transform: [{
                scale: size
            }],
            ...style
        }}
        {...props}
    >
        <Path
            d="m1 1 8 8 8-8"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default SVGChevronBottom;
