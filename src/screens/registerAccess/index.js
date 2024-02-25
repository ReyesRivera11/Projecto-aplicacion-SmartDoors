import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import NavBar from '../../components/NavBar'
import { LabeledInput } from '../../components/input'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Access = () => {
    const [pin,setPin] = useState("");
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.textHead}>Registrar</Text>
      <Text style={styles.textInfo}>
        Registra a usuarios que pueden tener acceso a tu hogar
      </Text>
      <Image style={styles.img} source={require("../../../assets/register.png")} />
     <View style={styles.containerForm}>
        <TouchableOpacity style={styles.btnHuella}>
            <Text style={styles.textHuella}>Escanear huella</Text>
        </TouchableOpacity>
        <Text style={styles.textEstado}>Procesando....</Text>
        <LabeledInput
            icon={<FontAwesome5 name="fingerprint" size={24} color="black" />}
            label="ID Huella"
            placeholder="ID Huella"
            flag={false}
            type={"number-pad"}
        />
        <LabeledInput
            icon={<Ionicons name="keypad" size={24} color="black" />}
            label="Pin"
            value={pin}
            onChangeText={(text) => setPin(text)}
            placeholder="Pin"
            flag={false}
            type={"number-pad"}
        />
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
        <TouchableOpacity>
            <Text style={styles.textGuardar}>Guardar</Text>
        </TouchableOpacity>
     </View> 
      {/* <NavBar/> */}
    </View>
  )
}

export default Access