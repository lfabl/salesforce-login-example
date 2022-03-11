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
        flex: 1
    },
    propertiesTitleContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 4,
        padding: 10
    },
    propertiesTitle: {
        fontWeight: "700",
        color: "black",
        fontSize: 18
    },
    propertiesCreateButton: {
        alignSelf: "baseline",
        paddingHorizontal: 20
    },
    item: {
        margin: 20
    }
});
export default styles;
