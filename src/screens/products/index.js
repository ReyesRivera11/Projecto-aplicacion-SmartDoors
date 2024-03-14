import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import { AntDesign } from '@expo/vector-icons';
import ProductCard from '../../components/productCard/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { cerrarSesion } from '../../api/auth';
import { useAuth } from '../../contexto/auth';

const Home = () => {
  const navigation = useNavigation();
  const {autenticado,setAutenticado,setUsuario} = useAuth();
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleLogout = async() => {
    try {
      console.log("Cliked")
      const res = await cerrarSesion();
      if(res){
        AsyncStorage.removeItem("usuario")
        .then(()=>{
          console.log('Elemento borrado con éxito');
          setUsuario(null);
          setAutenticado(false);
          navigation.navigate('Login');
        })
      }
    } catch (error) {
      console.log(error)
    }
  }   
  
  
  return (
    <View style={styles.container}>
     <View style={styles.containerBar}>
        <Image style={styles.img} source={require("../../../assets/logo.png")}/>
        {
          autenticado ? (
            <TouchableOpacity
              onPress={()=>handleLogout()}
              style={{justifyContent: 'center',alignItems:"center"}}
            >
              <Feather name="log-out" size={24} color="#0D259D" />
              <Text>Log-out</Text>
            </TouchableOpacity>
          ):(
            <TouchableOpacity
              onPress={()=>handleLogin()}
              style={{justifyContent: 'center',alignItems:"center"}}
            >
              <AntDesign name="login" size={24} color="#0D259D" />
              <Text>Login</Text>
            </TouchableOpacity>
          )
        }
     </View>

     <View style={styles.containerSearch}>
        <View style={styles.inpContainer}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput style={{marginLeft:10,width:"90%"}} placeholder='Busca un producto'/>
        </View>
        <TouchableOpacity>
            <AntDesign name="indent-left" size={24} color="black" />
        </TouchableOpacity> 
     </View>

     <View style={styles.containerProducts}>
        <ProductCard/> 
        <ProductCard/> 
     </View>

    </View>
  )
}

export default Home