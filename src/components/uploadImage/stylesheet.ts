import {
    StyleSheet
} from 'react-native';
import {
    colors 
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(58, 71, 107, 0.3)",
        borderColor: "rgba(58, 71, 107, 0.5)",
        justifyContent: "center",
        borderStyle: "dashed",
        alignItems: "center",
        position: "relative",
        borderRadius: 20,
        borderWidth: 2,
        width: "100%",
        height: 200
    },
    image: {
        height: 65,
        width: 65
    },
    title: {
        color: colors.primary,
        fontSize: 18,
    },
    cameraButton: {
        backgroundColor: colors.panel,
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
        borderRadius: 50,
        padding: 12,
        height: 50,
        right: 10,
        width: 50,
        top: 10
    }
});
export default styles;
