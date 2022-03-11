import {
    StyleSheet
} from 'react-native';
import {
    colors 
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        padding: 10,
        flex: 1
    },
    emptyContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    contentContainer: {
        paddingBottom: 30
    },
    propertiesTitleContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 6,
        marginTop: 10,
        padding: 10
    },
    propertiesTitle: {
        fontWeight: "700",
        color: "black",
        fontSize: 18
    },
    propertiesCreateButton: {
        paddingHorizontal: 20,
        alignSelf: "baseline"
    }
});
export default styles;
