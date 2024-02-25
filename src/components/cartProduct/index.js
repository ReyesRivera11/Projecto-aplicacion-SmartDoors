import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
const CartProduct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={require("../../../assets/puerta.jpg")} />
      </View>

      <View style={styles.containerInfo}>
        <Text>LookSmart</Text>
        <Text>$8,780</Text>
        <Text style={styles.textDescription}>Puerta inteligente con huella dactilar y teclado.</Text>
      </View>

        <View style={styles.conteinerButtons}>
          <TouchableOpacity>
            <AntDesign name="minuscircleo" size={24} color="black" />
          </TouchableOpacity>
          <Text>10</Text>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="#0D259D" />
          </TouchableOpacity>

      </View>

    </View>
  )
}

export default CartProduct