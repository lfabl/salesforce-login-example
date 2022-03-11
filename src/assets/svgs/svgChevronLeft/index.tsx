import React from "react";
import Svg, {
    ClipPath,
    Path,
    Defs,
    G
} from 'react-native-svg';

const SVGChevronLeft = ({
    size = 1,
    color = "#000",
    ...props
}) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        transform={[{
            scale: size
        }]}
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                d="M11.53.22a.75.75 0 0 1 0 1.06L4.81 8l6.72 6.72a.75.75 0 1 1-1.06 1.06L3.22 8.53a.75.75 0 0 1 0-1.06L10.47.22a.75.75 0 0 1 1.06 0Z"
                fill={color}
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="transparent" d="M0 0h16v16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default SVGChevronLeft;
