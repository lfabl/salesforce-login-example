import {
    StyleSheet
} from 'react-native';
import {
    colors 
} from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.panel,
        padding: 20,
        flex: 1
    },
    sectionContainer: {
        paddingVertical: 10
    },
    sectionTitle: {
        fontWeight: "700",
        marginBottom: 12,
        fontSize: 18
    },
    input: {
        marginBottom: 8
    },
    horizontalSectionContainer: {
        flexDirection: "column",
        flex: 1
    },
    dialogButtonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    }
});
export default styles;
