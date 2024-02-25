import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    containerCenter:{
        flexDirection:"column",
        justifyContent: 'center',
        alignContent: 'center',
    },
    img:{
        width:200,
        height:200,
        resizeMode:"contain",
    },
    containerTop:{
        alignItems:"flex-end",
        width:"100%"
    },
    containerBottom:{
        alignItems:"flex-start",
        width:"100%"
    },
    circuloTop:{
        backgroundColor:"#0D259D",
        height:200,
        width:200,
        borderRadius:100,
        marginRight:-50,
        marginTop:-50,
    },
    circuloBottom:{
        backgroundColor:"#0D259D",
        height:200,
        width:200,
        borderRadius:100,
        marginLeft:-50,
        marginBottom:-50,
    }
  });