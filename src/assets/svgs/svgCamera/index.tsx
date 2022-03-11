import React from "react";
import Svg, {
    Path
} from 'react-native-svg';

const SVGCamera = ({
    color = "#000",
    size = 1,
    ...props
}) => (
    <Svg
        width={20}
        height={18}
        fill="none"
        style={{
            transform: [{
                scale: size
            }]
        }}
        {...props}
    >
        <Path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill={color} />
        <Path
            d="M18 2h-3.17L13.59.65A1.99 1.99 0 0 0 12.12 0H7.88c-.56 0-1.1.24-1.48.65L5.17 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z"
            fill={color}
        />
    </Svg>
);

export default SVGCamera;
