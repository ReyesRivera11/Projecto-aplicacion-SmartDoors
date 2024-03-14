import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        backgroundColor:"white",
    },
    imgContainer:{
        justifyContent:"center",
        alignItems: 'center',
    },
    img:{
        width:100,
        height:100
    },
    containerTop:{
        width:"100%",
        alignItems:"flex-start",
        paddingHorizontal:20
    },
    containerForm:{
        paddingHorizontal:20,
        flex:1,
        gap:15
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
        flexDirection:"row",
        padding:20,
        width:"100%",
        justifyContent:"center",
        gap:10,
    },
    errorMessage:{
        textAlign:"center",
        color:"red"
    }
    
});