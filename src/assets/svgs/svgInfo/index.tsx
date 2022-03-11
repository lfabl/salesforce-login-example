import React from "react";
import Svg, {
    Path
} from 'react-native-svg';

const SVGInfo = ({
    color = "#000",
    size = 1,
    ...props
}) => (
    <Svg
        width={25}
        height={25}
        fill="none"
        style={{
            transform: [{
                scale: size
            }]
        }}
        {...props}
    >
        <Path
            d="M12.5 0C5.597 0 0 5.597 0 12.5S5.597 25 12.5 25 25 19.403 25 12.5 19.403 0 12.5 0Zm0 22.88c-5.731 0-10.38-4.649-10.38-10.38C2.12 6.769 6.77 2.12 12.5 2.12c5.731 0 10.38 4.649 10.38 10.38 0 5.731-4.649 10.38-10.38 10.38Z"
            fill={color}
        />
        <Path
            d="M11.16 7.59a1.34 1.34 0 1 0 2.679 0 1.34 1.34 0 0 0-2.678 0Zm2.01 3.124h-1.34c-.123 0-.223.1-.223.223v7.59c0 .123.1.223.223.223h1.34c.122 0 .223-.1.223-.223v-7.59c0-.122-.1-.223-.223-.223Z"
            fill={color}
        />
    </Svg>
);

export default SVGInfo;
