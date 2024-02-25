import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons';
const ProductCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={require("../../../assets/puerta.jpg")} />
      </View>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "600" }}>LookSmart</Text>
        <Text style={styles.txtDescription}>
          Puerta inteligente con huella dactilar y teclado.
        </Text>
      </View>
      <View style={styles.containerButtom}>
        <Text>$8,780</Text>
        <TouchableOpacity style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductCard