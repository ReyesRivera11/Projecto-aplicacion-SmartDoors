import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop:50,
        width:"100%"
      },
      textTitle:{
        fontWeight:"bold",
        fontSize:20,
        marginBottom:20,
        color:"black",
      },
      textInfo:{
        color:"gray",
        fontWeight:"bold",
        paddingBottom:50
      },
      containerButtons:{
        flexDirection:"row",
        gap:50,
        marginTop:50,
        marginBottom:30
      },
      buttonOpen:{
        backgroundColor:"#efeeee",
        padding:20,
        borderRadius:20
      },
      buttonClose:{
        backgroundColor:"#efeeee",
        padding:20,
        borderRadius:20
      },
      containerButtom:{
        // backgroundColor:"#efeeee",
        width:"100%",
        padding:20,
        borderRadius:50    
      },
      containerInfo:{
        width:"100%",
        gap:20
      },
      textLabel:{
        fontWeight:"bold"
      },
      containerDates:{
        flexDirection:"row",
        gap:20,
        backgroundColor:"#efeeee",
        borderBottomWidth:2,
        borderBottomColor:"#D7D6D6",
        padding:10,
        borderRadius:10
      },
      textControl:{
        marginTop:20,
        fontSize:20,
        fontWeight:"bold",
      }

});