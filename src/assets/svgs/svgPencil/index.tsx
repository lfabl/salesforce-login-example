import React from "react";
import Svg, {
    Path
} from 'react-native-svg';

const SVGPencil = ({
    color = "#000",
    size = 1,
    ...props
}) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        style={{
            transform: [{
                scale: size
            }]
        }}
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 15 12 3l3 3L3 18H0v-3ZM13 2l2-2 3 3-2.001 2.001L13 2Z"
            fill={color}
        />
    </Svg>
);

export default SVGPencil;
