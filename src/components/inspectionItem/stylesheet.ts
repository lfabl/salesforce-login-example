import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        flex: 8
    },
    fileTypeContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 4
    },
    fileType: {
        fontWeight: "800"
    },
    dateContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 5
    },
    date: {
        fontWeight: "800"
    },
    editButton: {
        paddingHorizontal: 10,
        flex: 1
    }
});
export default styles;
