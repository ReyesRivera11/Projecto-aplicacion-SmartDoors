import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        gap:15,
        alignItems: "center",
        marginBottom:30
    },
    img:{
        width:60,
        height:60,
        resizeMode:"contain",   
    },
    containerImg:{
        width:"20%",
        backgroundColor:"#efeeee",
        padding:10,
        borderRadius:20,
        justifyContent:"center",
        alignItems: "center",
    },
    containerInfo:{
        width:"50%",
        gap:5
    },
    textDescription:{
        color:"gray",
        fontSize:12
    },
    containerButtom:{
        flexDirection:"column",
        width:"20%",
    },
    conteinerButtons:{
        flexDirection:"row",
        gap:8,
    },
});