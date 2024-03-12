import React from 'react';
import { View, Text,ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Fontisto, Entypo } from '@expo/vector-icons';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
const AccessInfoCard = () => {
  const navigator = useNavigation();
  const handleBack = () =>{
    navigator.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity
          onPress={()=>handleBack()}
        >
          <AntDesign name="arrowleft" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Acceso a tu hogar</Text>
      </View>

      <ScrollView style={{width:"100%"}}>
        <View style={styles.card}>
            <View style={styles.componentInfo}>
            <AntDesign name="user" size={24} color="#0D259D" />
            <Text style={styles.infoText}>Juan Pérez</Text>
            </View>
            <View style={styles.componentInfo}>
            <Fontisto name="date" size={24} color="#0D259D" />
            <Text style={styles.infoText}>26/02/2024</Text>
            </View>
            <View style={styles.componentInfo}>
            <Entypo name="clock" size={24} color="#0D259D" />
            <Text style={styles.infoText}>07:35</Text>
            </View>
        </View>
        <View style={styles.card}>
            <View style={styles.componentInfo}>
            <AntDesign name="user" size={24} color="#0D259D" />
            <Text style={styles.infoText}>Juan Pérez</Text>
            </View>
            <View style={styles.componentInfo}>
            <Fontisto name="date" size={24} color="#0D259D" />
            <Text style={styles.infoText}>26/02/2024</Text>
            </View>
            <View style={styles.componentInfo}>
            <Entypo name="clock" size={24} color="#0D259D" />
            <Text style={styles.infoText}>07:35</Text>
            </View>
        </View>
      </ScrollView>
      
    </View>
  );
};



export default AccessInfoCard;
