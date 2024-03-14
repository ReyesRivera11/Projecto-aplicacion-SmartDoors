import { View, Text, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'

const Acerca = () => {
  return (
    <ScrollView>
        <ImageBackground 
            style={styles.imageBackground} 
            source={require("../../../assets/acerca.jpg")}>
        <View style={styles.contentText}>
            <Text style={styles.textHeader}>
                Acerca de
            </Text>
        </View>
      </ImageBackground>
      <View>
        <View style={styles.content}>
            <Text style={styles.textTitle}>¿Quiénes somos?</Text>
            <Text style={styles.textDes}>En DoorCraft, nos enorgullece ser los artífices de soluciones únicas y elegantes para tu hogar. Somos más que una empresa que vende puertas; somos creadores de experiencias que transforman espacios y definen la entrada a tu mundo.</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.textTitle}>Misión</Text>
            <Text style={styles.textDes}>En DoorCraft, nos comprometemos a proporcionar puertas de la más alta calidad que fusionen la estética con la funcionalidad. Nos esforzamos por superar las expectativas de nuestros clientes, ofreciendo soluciones personalizadas que reflejen su individualidad y protejan lo que más valoran.</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.textTitle}>Visión</Text>
            <Text style={styles.textDes}>Ser reconocidos como líderes en la industria de puertas, llevando la innovación y el diseño a nuevos horizontes. En DoorCraft, aspiramos a ser la elección predilecta de aquellos que buscan más que una puerta: una expresión de su estilo, seguridad y conexión con el hogar.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Acerca