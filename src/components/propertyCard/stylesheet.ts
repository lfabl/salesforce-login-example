import {
    StyleSheet
} from 'react-native';
import {
    colors 
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.panel,
        flexDirection: "column",
        marginHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 6,
        marginBottom: 10
    },
    image: {
        borderRadius: 6,
        height: 150
    },
    contentContainerCustomStyle: {
        overflow: "hidden",
        borderRadius: 6
    },
    rightIcon: {
        marginHorizontal: 10
    },
    addressContainer: {
        borderBottomColor: colors.seperator,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        flexDirection: "row",
        borderBottomWidth: 1
    },
    address2: {
        color: colors.hideBody,
        marginBottom: 6,
        fontSize: 18
    },
    address: {
        color: colors.body,
        marginBottom: 20,
        fontSize: 18
    },
    detailsContainer: {
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 20
    },
    detailContentContainer: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        flex: 1
    },
    detailContent: {
        color: colors.body,
        fontWeight: "bold",
        marginBottom: 6,
        fontSize: 16
    },
    detailContentTitle: {
        color: colors.hideBody,
        fontSize: 12
    },
    verticalSeperator: {
        backgroundColor: colors.seperator,
        height: "100%",
        width: 1
    },
    addressesContent: {
        flexDirection: "column"
    }
});
export default styles;
