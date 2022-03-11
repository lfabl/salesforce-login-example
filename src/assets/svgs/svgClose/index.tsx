import React from "react";
import Svg, {
    Path
} from 'react-native-svg';

const SVGClose = ({
    size = 1,
    color = "#000",
    ...props
}) => (
    <Svg
        width={13}
        height={13}
        fill="none"
        style={{
            transform: [{
                scale: size
            }]
        }}
        {...props}
    >
        <Path
            d="m7.416 6.004 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4.29-4.3 4.29 4.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095l-4.3-4.29Z"
            fill={color}
        />
    </Svg>
);

export default SVGClose;
