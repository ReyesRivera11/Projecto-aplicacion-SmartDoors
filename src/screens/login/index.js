import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput, Pressable } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { LabeledInput } from '../../components/input';
import { Fontisto  } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigation = useNavigation();
    const handleBack = () =>{
      navigation.goBack();
    };
    const hanldeSignUp = () =>{
      navigation.navigate('Signup');
    };
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
                <Text style={styles.btnText}>INICIAR</Text>
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