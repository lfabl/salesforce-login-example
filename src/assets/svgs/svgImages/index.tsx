import React from "react";
import Svg, {
    Path
} from 'react-native-svg';

const SVGImages = ({
    size = 1,
    color = "#000",
    ...props
}) => (
    <Svg
        width={25}
        height={22}
        fill="none"
        style={{
            transform: [{
                scale: size
            }]
        }}
        {...props}
    >
        <Path
            d="M3.906 4.883v16.015a.977.977 0 0 0 .977.977h19.14a.977.977 0 0 0 .977-.977V4.883a.977.977 0 0 0-.977-.977H4.883a.977.977 0 0 0-.977.977ZM18.22 6.9a2.246 2.246 0 1 1-2.26 2.246 2.255 2.255 0 0 1 2.26-2.246ZM5.456 20.377v-4.662l5.994-5.38 4.579 4.558-5.518 5.484H5.456Zm17.981 0h-10.79l7.06-7.03 3.73 3.186v3.844Z"
            fill={color}
        />
        <Path
            d="M.977 0A.977.977 0 0 0 0 .977v16.796a.977.977 0 0 0 .977.977h1.367V3.32a.977.977 0 0 1 .976-.976h18.555V.977A.977.977 0 0 0 20.898 0H.977Z"
            fill={color}
        />
    </Svg>
);

export default SVGImages;
