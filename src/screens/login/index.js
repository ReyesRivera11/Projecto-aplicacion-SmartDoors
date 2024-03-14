import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { LabeledInput } from '../../components/input';
import { Fontisto  } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { loginRes } from '../../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../contexto/auth';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const {autenticado,setAutenticado,setUsuario} = useAuth();
    const navigation = useNavigation();

    const handleBack = () =>{
      navigation.goBack();
    };
    const hanldeSignUp = () =>{
      navigation.navigate('Signup');
    };
    const handleLogin = async() => {
      try {
        const data = {
          correo:email,
          password
        }
        const res = await loginRes(data);
        if(res){
          const dataString = JSON.stringify(res.data);
          AsyncStorage.setItem('usuario',dataString)
          .then(()=>console.log("Dato guardado"))
          .catch(e=>console.log(e))
           setAutenticado(true);
           setUsuario(dataString);
           navigation.navigate('NavBar');
           setEmail("");
           setPassword("");
        }
      } catch (error) {
        setError(true);
        setErrorMessage(error.response.data.message);
        console.log(error.response.data.message);
      }
    }
    if(error){
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
      }, 5000);
    }
    
    // useEffect(()=>{
    //   AsyncStorage.getItem('usuario')
    //   .then(storedDataString => {
    //     // Convierte la cadena a su formato original
    //     const storedData = JSON.parse(storedDataString);    
    //     if(storedData){
    //       const usuario = storedData.data;
    //       if(usuario)navigation.navigate('NavBar');
    //       console.log("usuario borrado" + usuario)
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error al recuperar datos:', error);
    //   });
    // },[])
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={()=>handleBack()}>
            <AntDesign name="arrowleft" size={28} color="black"/>
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require("../../../assets/login.png")} />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.textTop}>Iniciar Sesion</Text>
        {
          error&&(
            <Text style={styles.errorMessage}>
              {errorMessage}
            </Text>
          )
        }
        <LabeledInput
            icon={<Fontisto name="email" size={24} color="black" />}
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            flag={false}
        />
        <LabeledInput
            icon={<MaterialIcons name="password" size={24} color="black" />}
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            pass={true}
        />
        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button}>
                <Text 
                  style={styles.btnText}
                  onPress={()=>handleLogin()}
                >
                  INICIAR
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.containerBottom}>
            <Text>No tienes una cuenta?</Text>
            <Pressable
              onPress={()=>hanldeSignUp()}
            >
                <Text style={{color:"#0D259D"}}>Registrar</Text>
            </Pressable>
        </View>
      </View> 
    </View>
  )
}

export default Login