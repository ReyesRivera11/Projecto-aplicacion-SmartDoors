import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import CartProduct from '../../components/cartProduct';

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity>
            <AntDesign name="arrowleft" size={28} color="black" />
        </TouchableOpacity>
        <View style={styles.containerTextTop}>
            <Text style={styles.textCart}>Carrito</Text>
        </View>
      </View>
      <ScrollView style={styles.containerProducts}>
          <CartProduct/>
          <CartProduct/>
      </ScrollView>

      <View style={styles.containerTotal}>

        <View style={styles.containerAmount}>
          <Text>Subtotal:</Text>
          <Text>$8,780</Text>
        </View>

        <View style={styles.containerAmount}>
          <Text>Descuento:</Text>
          <Text>$0.00</Text>
        </View>

        <View style={styles.containerAmount}>
          <Text style={{fontWeight:"bold"}}>Total:</Text>
          <Text>$8,780</Text>
        </View>
        <TouchableOpacity style={styles.buttonPay}>
          <Text style={styles.textPay}>Pagar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Cart