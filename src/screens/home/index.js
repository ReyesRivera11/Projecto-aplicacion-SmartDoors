import { View, Text, ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import { styles } from './style'


const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground 
        style={styles.imageBackground} 
        source={require("../../../assets/puerta-inicio.jpg")}>
        <Text style={styles.mainText}>DoorCraft</Text>
        <Text style={styles.textDes}>Abriendo el futuro con tecnología y seguridad</Text>
      </ImageBackground>
      <View style={styles.content} >
        {/* <Text style={styles.text}>
          En DoorCraft, nos enorgullece ser los artífices de soluciones únicas y elegantes para tu hogar. Somos más que una empresa que vende puertas; somos creadores de experiencias que transforman espacios y definen la entrada a tu mundo.
        </Text> */}
        <View style={styles.containerCont}>
          <Text style={styles.title}>Compromiso con la Calidad</Text>
          <Image style={styles.img} source={require("../../../assets/medallas.png")}/>
          <Text style={styles.text}>En cada detalle, reflejamos nuestro compromiso inquebrantable con la calidad. Cada puerta que sale de nuestro taller es una obra maestra cuidadosamente elaborada, fusionando artesanía tradicional con las últimas innovaciones en diseño.</Text>
        </View>
        <View style={styles.containerCont}>
          <Text style={styles.title}>Servicio Personalizado</Text>
          <Image style={styles.img} source={require("../../../assets/public-service.png")}/>
          <Text style={styles.text}>En DoorCraft, entendemos que cada hogar es único. Por eso, ofrecemos un servicio personalizado que va más allá de la simple venta. Nuestro equipo de expertos está aquí para guiarte en la elección de la puerta perfecta que complemente tu estilo de vida y necesidades específicas.</Text>
        </View>
        <View style={styles.containerCont}>
          <Text style={styles.title}>Sostenibilidad y Responsabilidad</Text>
          <Image style={styles.img} source={require("../../../assets/responsabilidad.png")}/>
          <Text style={styles.text}>Nos preocupamos por el medio ambiente y trabajamos activamente para reducir nuestro impacto. Utilizamos materiales sostenibles y prácticas responsables en todo nuestro proceso de fabricación, asegurando que cada puerta DoorCraft sea una elección consciente y responsable.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home