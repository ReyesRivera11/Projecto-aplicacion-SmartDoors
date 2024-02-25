import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:15,
        backgroundColor:"#efeeee",
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:15,
        height:60,
    },
    input:{
        height:40,
        width:250,
        // backgroundColor:"black"
    },
    textEmail:{
        fontSize:10,
        color:"gray",
        fontWeight:"bold"
    }
})