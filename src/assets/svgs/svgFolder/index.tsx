import React from "react";
import Svg, {
    Path
} from 'react-native-svg';

const SVGFolder = ({
    color = "#000",
    size = 1,
    ...props
}) => (
    <Svg
        width={14}
        height={12}
        fill="none"
        style={{
            transform: [{
                scale: size
            }]
        }}
        {...props}
    >
        <Path
            d="M13.49 1H6.7L5.85.15 5.5 0h-5L0 .5v11l.5.5h13l.5-.5v-10l-.51-.5Zm-.51 8.49V11h-12V5h4.49l.35-.15.86-.86h6.31v1.5l-.01 4Zm0-6.49h-6.5l-.35.15-.86.86H.99v-3h4.29l.85.85.36.15h6.5l-.01.99Z"
            fill={color}
        />
    </Svg>
);

export default SVGFolder;
