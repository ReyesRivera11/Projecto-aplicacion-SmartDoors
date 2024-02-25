import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
            <View style={styles.circuloTop}></View>
      </View>

      <View style={styles.containerCenter}>
        <Image style={styles.img} source={require("../../../assets/logo.png")} /> 
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.circuloBottom}></View>
      </View>
    </View>
  )
}

export default Main