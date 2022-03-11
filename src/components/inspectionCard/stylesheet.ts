import {
    StyleSheet
} from 'react-native';
import {
    colors 
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.panel,
        marginHorizontal: 10,
        borderRadius: 10
    },
    headerContainer: {
        borderBottomColor: colors.seperator,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        marginBottom: 20
    },
    headerTitle: {
        color: colors.body,
        fontWeight: "600",
        fontSize: 20
    },
    section: {
        borderBottomColor: colors.seperator,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        flexDirection: "row",
        paddingVertical: 10,
        paddingBottom: 26
    },
    shortColumn: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    longColumn: {
        justifyContent: "center",
        alignItems: "center",
        flex: 2
    },
    count: {
        color: colors.body,
        marginBottom: 6,
        fontSize: 16
    },
    countTitle: {
        fontSize: 10
    }
});
export default styles;
