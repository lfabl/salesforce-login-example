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
        borderRadius: 5,
        borderWidth: 1
    },
    submit: {
        backgroundColor: "#3a476b",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 5
    },
    submitText: {
        color: "#ffffff",
        fontSize: 16
    }
});
export default stylesheet;
