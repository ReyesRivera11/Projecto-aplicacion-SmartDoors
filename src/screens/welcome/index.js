import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styes } from './styles'
const Welcome = () => {
  return (
    <View style={styes.container}>
      <View style={styes.omitirContainer}>
        <TouchableOpacity><Text style={styes.omitirText}>Omitir</Text></TouchableOpacity>
      </View>
      <View style={styes.containerImg}>
        <Image style={styes.img} source={require("../../../assets/welcome.png")} />
      </View>
      <View style={styes.containerBottom}>
        <Text style={styes.textBienvenido}>BIENVENIDO</Text>
        <Text style={styes.textDes}>
          Smart Doors es una empresa dedicada a la fabricación y venta de puertas inteligentes 
          que garantiza la seguridad de tu hogar.
        </Text>

        <View style={styes.containerButtons}>
          <TouchableOpacity style={styes.btnRegistrar}>
            <Text style={styes.textRegistrar}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styes.btnLogin}>
            <Text>Registrar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Welcome