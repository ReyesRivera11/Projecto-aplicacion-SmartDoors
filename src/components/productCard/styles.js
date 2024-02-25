import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        backgroundColor:"#efeeee",
        padding:10,
        width:"49%"
    },
    img:{   
        width:150,
        height:100,
        resizeMode:"contain",   
    },
    containerImg:{
        alignItems: "center",
        marginVertical:20
    },
    txtDescription:{
        color:"gray",
        fontWeight:"bold",
        marginTop:10,
        textAlign: "justify",
    },
    containerButtom:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-between",
        marginTop:20
    }
});