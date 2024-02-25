import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
const NavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
         <Feather name="shopping-bag" size={24} color="#0D259D" />
        <Text style={{color:"#0D259D"}}>Productos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="shoppingcart" size={24} color="gray" />
        <Text style={{color:"gray"}}>Carrito</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="profile" size={24} color="gray" />
        <Text style={{color:"gray"}}>Perfil</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavBar