import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';     
import { Entypo } from '@expo/vector-icons';

export const LabeledInput = ({ icon, label, value, onChangeText, placeholder,pass }) => {
  const [flag,setFlag] = useState(true);
  const hanldePass = () => {
    setFlag(!flag);
  }
  return (
    <View style={styles.inputContainer}>
      {icon}
      <View>
        {value ? <Text style={styles.textEmail}>{label}</Text> : null}
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          style={styles.input}
          secureTextEntry={pass && flag ? true: false}
        />
      </View>
      {
        pass ? (
          <TouchableOpacity onPress={()=>hanldePass()}>
            {
              flag 
              ? <AntDesign name="eye" size={24} color="black" /> 
              : <Entypo name="eye-with-line" size={24} color="black" />
            }
         </TouchableOpacity>
        ): null
      }
    </View>
  );
};

