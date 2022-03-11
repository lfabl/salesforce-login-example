import {
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    colors 
} from '../../theme';

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.panel,
        padding: 20
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerContent: {
        flexDirection: "column",
        marginLeft: 20
    },
    image: {
        borderRadius: 10,
        height: 100,
        width: 120
    },
    headerText1: {
        fontWeight: "500",
        marginBottom: 6,
        fontSize: 18
    },
    headerText2: {
        color: colors.body,
        fontWeight: "700",
        fontSize: 18
    },
    inspectionSectionTitleContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20,
        marginTop: 14
    },
    plusButton: {
        paddingHorizontal: 20
    },
    inspectionSectionTitle: {
        color: colors.body,
        fontWeight: "700",
        fontSize: 20
    },
    inspectionItem: {
        marginBottom: 10
    },
    switchContainer: {
        backgroundColor: colors.shadowPrimary,
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: 20
    },
    switchText1: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 18,
        zIndex: 99
    },
    switchText2: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 18,
        zIndex: 99
    },
    switchIndicator: {
        backgroundColor: colors.panel,
        position: "absolute",
        width: windowWidth,
        borderRadius: 50,
        zIndex: 88,
        bottom: 6,
        top: 6
    },
    switch1: {
        zIndex: 99,
        flex: 1
    },
    switch2: {
        zIndex: 99,
        flex: 1
    }
});
export default styles;
