import { StyleSheet } from "react-native";

export const styes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop:50,
        width:"100%"
      },
      omitirContainer:{
        width:"100%",
        alignItems:"flex-end",
        paddingRight:50,
        marginTop:20
      },
      omitirText:{
        fontWeight:"bold",
      },
      img:{
        width:320,
        height:320,
        resizeMode:"contain",
    },
    containerImg:{
        marginTop:40
    },
    textBienvenido:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        marginBottom:10
    },
    containerBottom:{
        marginTop:50,
        paddingHorizontal:10
    },
    textDes:{
        textAlign:"center",
    },
    containerButtons:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:50,
        gap:50
    },
    btnLogin:{
        borderWidth:3,
        borderRadius:100,
        borderColor:"#0D259D",
        padding:15
    },
    btnRegistrar:{
        backgroundColor:"#0D259D",
        padding:15,
        borderRadius:100,
    },
    textRegistrar:{
        color:"white",
        fontWeight:"bold"
    }

});