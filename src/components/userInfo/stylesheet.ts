import {
    StyleSheet    
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#c9c9c9",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        width: "100%",
        padding: 10,
        paddingBottom: 20,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    profile: {
        borderRadius: 25,
        marginRight: 10,
        height: 50,
        width: 50
    },
    welcome: {
        color: "black",
        fontSize: 20
    },
    userName: {
        fontWeight: "bold"
    },
    userType: {
        fontWeight: "600",
        fontSize: 16
    },
    title: {
        flexDirection: "column"
    },
    logo: {
        height: 50,
        width: 50
    }
});
export default styles;