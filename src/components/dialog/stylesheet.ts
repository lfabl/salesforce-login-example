import {
    StyleSheet
} from 'react-native';
import {
    colors 
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.modalBackground,
        flex: 1
    },
    dialogContainer: {
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
        padding: 20,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    contentContainer: {
        backgroundColor: colors.background,
        alignSelf: "center",
        borderRadius: 10,
        width: "100%",
        padding: 20
    },
    headerContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        color: colors.body,
        fontWeight: "700",
        fontSize: 20
    },
    content: {
        
    }
});
export default styles;
