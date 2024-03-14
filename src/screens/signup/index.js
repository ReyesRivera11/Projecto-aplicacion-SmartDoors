import { View, Text, Image, TouchableOpacity, Pressable, ScrollView, Alert } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { LabeledInput } from '../../components/input';
import { Fontisto  } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { registrar } from '../../api/auth';


const SignUp = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [error,setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");

    const navigation = useNavigation();
    const handleBack = () =>{
      navigation.goBack();
    };
    
  const hanldeLogin = () =>{
    navigation.navigate('Login');
  };
  const handleRegister = async() =>{
    try {
      const data = {
        nombre,
        apellido,
        correo:email,
        password
      }
      if(password !== confirmPassword){
        setError(true);
        setErrorMessage("Las contraseñas no coinciden");
      }else{
        const res = await registrar(data);
        if(res){
          Alert.alert("Usuario registrado correctamente.");
          navigation.navigate('Login');
          setNombre("");
          setApellido("");
          setConfirmPassword("");
          setPassword("");
          setEmail("");
        }
      }
      
    } catch (error) {
      setError(true);
      // console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };
  if(error){
    setTimeout(() => {
      setError(false);
      setErrorMessage("");
    }, 5000);
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={()=>handleBack()}>
            <AntDesign name="arrowleft" size={28} color="black"/>
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require("../../../assets/signup.png")} />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.textTop}>Crea una cuenta</Text>
        {
          error&&(
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )
        }
        <LabeledInput
            icon={<AntDesign name="user" size={24} color="black" />}
            label="Nombre"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
            placeholder="Nombre"
            flag={false}
            type="default"
        />
        <LabeledInput
            icon={<Feather name="user" size={24} color="black" />}
            label="Apellido"
            value={apellido}
            onChangeText={(text) => setApellido(text)}
            placeholder="Apellido"
            flag={false}
            type="default"
        />
        
        <LabeledInput
            icon={<Fontisto name="email" size={24} color="black" />}
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            flag={false}
            type="default"
        />
        <LabeledInput
            icon={<MaterialIcons name="password" size={24} color="black" />}
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            pass={true}
            // type="default"
        />
        <LabeledInput
            icon={<MaterialIcons name="password" size={24} color="black" />}
            label="Confirmar password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder="Confirmar password"
            pass={true}
            // type="default"
        />
        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={()=>handleRegister()}>
                <Text style={styles.btnText}>REGISTRAR</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.containerBottom}>
            <Text>Ya tienes una cuenta?</Text>
            <Pressable
              onPress={()=>hanldeLogin()}
            >
                <Text style={{color:"#0D259D"}}>Login</Text>
            </Pressable>
        </View>
      </View> 
    </ScrollView>
  )
}

export default SignUp