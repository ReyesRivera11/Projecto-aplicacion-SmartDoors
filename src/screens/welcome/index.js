import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styes } from './styles'
import Animated, { FadeInDown, FadeInRight, FadeInLeft, FadeInUp, BounceIn } from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useAuth } from '../../contexto/auth';

const Welcome = () => {
  const navigation = useNavigation();
  const {autenticado} = useAuth();

  const hanldeLogin = () =>{
    navigation.navigate('Login');
  };
  const hanldeSignUp = () =>{
    navigation.navigate('Signup');
  };
  const handleOmitir = () =>{
    navigation.navigate('NavBar');
  };
  
  useEffect(()=>{
    if(autenticado) return navigation.navigate('NavBar');
  },[])
  return (
    <View style={styes.container}>
      <Animated.View
        style={styes.omitirContainer}
        entering={BounceIn.delay(400).duration(1000).springify()}
      >
        <TouchableOpacity
          onPress={() => handleOmitir()}
        >
          <Text style={styes.omitirText}>
            Omitir
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={styes.containerImg}
        entering={FadeInDown.delay(400).duration(1000).springify()}
      >
        <Image style={styes.img} source={require("../../../assets/welcome.png")} />
      </Animated.View>
      <View style={styes.containerBottom}>
        <Animated.Text
          style={styes.textBienvenido}
          entering={FadeInRight.delay(400).duration(1000).springify()}
        >
          BIENVENIDO
        </Animated.Text>
        <Animated.Text
          style={styes.textDes}
          entering={FadeInLeft.delay(400).duration(1000).springify()}
        >
          Smart Doors es una empresa dedicada a la fabricación y venta de puertas inteligentes
          que garantiza la seguridad de tu hogar.
        </Animated.Text>

        <Animated.View
          style={styes.containerButtons}
          entering={FadeInUp.delay(600).duration(1000).springify()}
        >
          <TouchableOpacity 
            style={styes.btnRegistrar}
            onPress={()=>hanldeSignUp()}
          >
            <Text style={styes.textRegistrar}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styes.btnLogin}
            onPress={()=>hanldeLogin()}
          >
            <Text style={{ textAlign: "center" }}>Login</Text>
          </TouchableOpacity>

        </Animated.View>

      </View>
    </View>
  )
}

export default Welcome