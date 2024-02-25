import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems: 'center',
        marginTop:50,
    },
    imgContainer:{
        justifyContent:"center",
        alignItems: 'center',
    },
    img:{
        width:200,
        height:200
    },
    containerTop:{
        width:"100%",
        alignItems:"flex-start",
        marginBottom:50,
        paddingHorizontal:20
    },
    containerForm:{
        padding:20,
        marginTop:10,
        gap:15,
        flex:1
    },
    textTop:{
        textAlign: 'center',
        fontSize:25,
        marginBottom:30
    },
    containerButton:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
    },
    button:{
        backgroundColor:"#0D259D",
        width:280,
        padding:20,
        borderRadius:100
    },
    btnText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:18
    },
    containerBottom:{
        marginTop:80,
        flexDirection:"row",
        padding:20,
        marginBottom:20,
        width:"100%",
        justifyContent:"center",
        gap:10,
    }
    
});