import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
      padding: 20,
      alignItems: 'center',
      width:"100%",
      marginTop:20
    },
    containerTop: {
      flexDirection: 'row',
      width:"100%",
      marginBottom: 20,
    },
    textHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    card: {
      backgroundColor: 'white',
      width:"100%",
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
      marginBottom:10
    },
    componentInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    infoText: {
      marginLeft: 10,
      fontSize: 16,
    },
  });