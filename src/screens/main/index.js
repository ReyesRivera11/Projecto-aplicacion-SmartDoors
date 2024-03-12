import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import Animated,{FadeIn} from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <Animated.View 
        entering={FadeIn.delay(200).duration(1000).springify()} 
        style={styles.containerTop}
      >
            <View style={styles.circuloTop}></View>
      </Animated.View>

      <Animated.View 
        entering={FadeIn.delay(600).duration(1000).springify()}  
        style={styles.containerCenter}
      >
        <Image style={styles.img} source={require("../../../assets/logo.png")} /> 
      </Animated.View>

      <Animated.View 
        style={styles.containerBottom}
        entering={FadeIn.delay(400).duration(1000).springify()} 
      >
        <View style={styles.circuloBottom}></View>
      </Animated.View>
    </View>
  )
}

export default Main