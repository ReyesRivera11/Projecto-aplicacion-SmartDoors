import { View, Text, Touchable, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Door = () => {
  const navigation = useNavigation();
  const handleRegisters = () => {
    navigation.navigate("Users");
  }
  return (
    <View style={styles.container}>

      <Text style={styles.textTitle}>Estado de la puerta</Text>
      <Text style={styles.textInfo}>Puerta cerrada</Text>
      <FontAwesome5 name="door-closed" size={100} color="black"/>

      <Text style={styles.textControl}>Control</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttonOpen}>
          <Entypo name="lock-open" size={48} color="red" />
          <Text>Abrir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonClose}>
          <Ionicons name="lock-closed" size={48} color="green" />
          <Text>Cerrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerButtom}>
          <Text style={styles.textTitle}>Ultimo acceso</Text>
          <View style={styles.containerInfo}>
            <View style={styles.containerDates}>
              <Text style={styles.textLabel}>Usuario:</Text>
              <Text>Juan Perez</Text>
            </View>
            <View style={styles.containerDates}>
              <Text style={styles.textLabel}>Fecha:</Text>
              <Text>25/02/2024</Text>
            </View>
            <View style={styles.containerDates}>
              <Text style={styles.textLabel}>Hora:</Text>
              <Text>04:50 pm</Text>
            </View>
          </View>
      </View>
      <TouchableOpacity
        onPress={()=>handleRegisters()}
      >
        <Text style={{color:"#0D259D"}}>Ver mas accesos</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Door