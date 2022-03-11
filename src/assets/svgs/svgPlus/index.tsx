import React from "react";
import Svg, {
    Path
} from 'react-native-svg';

const SVGPlus = ({
    size = 1,
    color = "#fff",
    ...props
}) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        style={[
            {
                transform: [{
                    scale: size
                }]
            },
            props.style
        ]}
        {...props}
    >
        <Path
            d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-8-9.828A8 8 0 1 0 2 10v.172ZM11 15H9v-4H5V9h4V5h2v4h4v2h-4v4Z"
            fill={color}
        />
    </Svg>
);

export default SVGPlus;