import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex:1
    },
    imageBackground: {
        resizeMode: 'cover', // Opcional: puedes ajustar el modo de redimensionamiento de la imagen
        justifyContent: 'center',
        width:"100%",
        height:300,
        alignItems: 'center'
    },
    mainText:{
        color: 'white',
        fontSize:50,
        fontWeight: 'bold',
    },
    textDes:{
        color: 'white',
        fontWeight:"600"
    },
    content:{
        marginHorizontal:15,
        height:"100%"
    },
    text:{
        fontSize:18
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"
    },
    img:{
        width:80,
        height:80,
        marginVertical:"auto"
    },
    containerCont:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:15
    }
});