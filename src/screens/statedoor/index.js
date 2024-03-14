import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { abrirPuerta, cerrarPuerta } from '../../api/puerta';
const Door = () => {
  const navigation = useNavigation();
  const [isOpen,setIsOpen] = useState(false);

  const handleRegisters = () => {
    navigation.navigate("Users");
  }
  const handleOpen = async () => {
    setIsOpen(true);
    try {
        const res = abrirPuerta({"estado":"ON"});
        if(res){
          setIsOpen(true);
        }else{
          setIsOpen(false);
        }
    } catch (error) {
      setIsOpen(false);
      console.log(error)
    }
  }
  const handleClose = async () => {
    try {
      const res = await cerrarPuerta({"estado":"OFF"});
      if(res){
        setIsOpen(false);
      }else{
        setIsOpen(true);
      }
    } catch (error) {
      setIsOpen(true);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Estado de la puerta</Text>
      <Text style={styles.textInfo}>
        {
          isOpen ? "Puerta abierta" : "Puerta cerrada"
        }
      </Text>
      {
        isOpen ? (
          <FontAwesome5 name="door-open" size={100} color="red"/>
        ):(
          <FontAwesome5 name="door-closed" size={100} color="green"/>
        )
      }
      <Text style={styles.textControl}>Control</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttonOpen} onPress={()=>handleOpen()}>
          <Entypo name="lock-open" size={48} color="red" />
          <Text>Abrir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonClose} onPress={()=>handleClose()}>
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