import React from 'react';
import {
    TextInput as NativeTextInput
} from 'react-native';
import stylesheet from './stylesheet';

const TextInput = ({
    ...props
}) => {
    return <NativeTextInput
        {...props}
        style={[
            stylesheet.input,
            props.style
        ]}
    />;
};
export default TextInput;
