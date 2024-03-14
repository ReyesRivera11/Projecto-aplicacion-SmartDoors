import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    imageBackground: {
        resizeMode: 'cover', // Opcional: puedes ajustar el modo de redimensionamiento de la imagen
        justifyContent: 'center',
        width:"100%",
        height:300,
        alignItems: 'center',
        marginBottom:10
    },
    textHeader:{
        fontWeight:"bold",
        color:"white",
        fontSize:40,
        
    },
    contentText:{
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems: 'center',
    },
    content:{
        marginHorizontal:20,
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
        fontSize:20,
        fontWeight:"bold",
    },
    textDes:{
        fontSize:18,
        textAlign:"center"
    }
});