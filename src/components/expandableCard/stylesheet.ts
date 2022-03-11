import {
    StyleSheet
} from 'react-native';
import {
    colors 
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flexDirection: "column",
        width: "100%",
        padding: 20
    },
    headerContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    headerTitle: {
        color: colors.body,
        fontWeight: "700",
        fontSize: 18
    },
    headerRightContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    count: {
        color: colors.accent
    },
    countContainer: {
        backgroundColor: colors.shadowRed,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginRight: 30,
        minWidth: 30,
        padding: 4
    }
});
export default styles;
