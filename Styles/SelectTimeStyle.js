import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5",
        width: "90%",
        marginTop: 20,
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: 30,
        overflow: "hidden"
    },

    header: {
        margin: 20,
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 1,
        color: "#202020",
    },

    content: {
        display:"flex",
        padding: 10,
        alignItems:"center"
    },

    options: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },

    selection_btn: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: "#E9E9E9",
        margin: 10,
        padding: 5
    },

    default_btn_text:{
        fontSize: 25,
        textAlign:"center",
    },

    submit_btn: {
        margin: 10,
        width: "50%",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: "#E9E9E9",
    },

    active_btn: {
        borderColor: "green",
        borderWidth: 3
    }
  
});

export default styles;