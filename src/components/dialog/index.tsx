import React, {
    ReactNode 
} from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import {
    Portal
} from 'react-native-portalize';
import SVGClose from '../../assets/svgs/svgClose';
import {
    colors 
} from '../../theme';
import Button from '../button';
import stylesheet from './stylesheet';

interface IDialogProps {
    onClose: () => void;
    content: ReactNode;
    isActive: boolean;
    title: string;
};

const Dialog = ({
    isActive = false,
    content,
    onClose,
    title
}: IDialogProps) => {
    if(!isActive) {
        return null;
    }

    return <Portal>
        <View
            style={[
                stylesheet.container
            ]}
        >
            <TouchableOpacity
                onPress={onClose}
                style={{
                    flex: 1
                }}
            >
                <View style={{
                    flex: 1 
                }}></View>
            </TouchableOpacity>
            <View
                style={[
                    stylesheet.dialogContainer
                ]}
            >
                <View
                    style={[
                        stylesheet.contentContainer
                    ]}
                >
                    <View
                        style={[
                            stylesheet.headerContainer
                        ]}
                    >
                        <Text
                            style={[
                                stylesheet.title
                            ]}
                        >
                            {title}
                        </Text>
                        <Button
                            color="transparent"
                            onPress={onClose}
                            image={<SVGClose
                                color={colors.hideBody}
                                size={1.5}
                            />}
                            style={{
                                paddingHorizontal: 20
                            }}
                        />
                    </View>
                    <View
                        style={[
                            stylesheet.content
                        ]}
                    >
                        {content}
                    </View>
                </View>
            </View>
        </View>
    </Portal>;
};
export default Dialog;
