import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop:50,
        width:"100%"
      },
      img:{
        width:200,
        height:200,
        resizeMode:"contain",
      },
      textHead:{
        fontWeight:"bold",
        marginBottom:5,
        fontSize:18
      },
      textInfo:{
        color:"gray",
        fontSize:12
      },
      containerForm:{
        width:"100%",
        padding:20,
        flex:1,
        gap:10
      },
      btnHuella:{
        backgroundColor:"#0D259D",
        width:"100%",
        padding:10,
        borderRadius:10
      },
      textHuella:{
        fontWeight:"bold",
        color:"white",
        textAlign:"center"
      },
      textEstado:{
        textAlign:"center",
        marginTop:10,
        color:"gray",
        marginBottom:10
      },
      textGuardar:{
        textAlign:"center",
        color:"#0D259D",
        marginTop:40,
        fontSize:18
      }
});