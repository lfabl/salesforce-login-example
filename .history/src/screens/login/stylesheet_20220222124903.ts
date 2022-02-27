import {
    StyleSheet
} from 'react-native';

const stylesheet = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    logo: {
        alignSelf: "center",
        marginBottom: 40,
        marginTop: 40
    },
    textInput: {
        borderColor: "#d3d3d3",
        paddingHorizontal: 15,
        marginBottom: 20,
        color: "#444444",
        borderRadius: 5,
        borderWidth: 1
    },
    submit: {
        backgroundColor: "#3a476b",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        borderRadius: 5
    },
    submitText: {
        fontWeight: "600",
        color: "#e5e5e5",
        fontSize: 16
    },
    contentContainer: {
        borderColor: "#d3d3d3",
        borderRadius: 8,
        borderWidth: 1,
        padding: 20
    },
    rememberMeContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10
    },
    rememberMeText: {
        fontSize: 10
    },
    footerContainer: {
        justifyContent: "space-between",
        flexDirection: "row"
    }
});
export default stylesheet;
