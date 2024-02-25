import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import { FontAwesome } from '@expo/vector-icons';   
import { AntDesign } from '@expo/vector-icons';
import ProductCard from '../../components/productCard/ProductCard';
import NavBar from '../../components/NavBar';
const Home = () => {
  return (
    <View style={styles.container}>

     <View style={styles.containerBar}>
        <Image style={styles.img} source={require("../../../assets/logo.png")}/>
        <View style={styles.containerCart}>
            <FontAwesome name="shopping-cart" size={30} color="#0D259D" />
            <View style={styles.containerContador}>
                <Text style={styles.textContador}>9+</Text> 
            </View>
        </View>
     </View>

     <View style={styles.containerSearch}>
        <View style={styles.inpContainer}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput style={{marginLeft:10,width:"90%"}} placeholder='Busca un producto'/>
        </View>
        <TouchableOpacity>
            <AntDesign name="indent-left" size={24} color="black" />
        </TouchableOpacity> 
     </View>

     <View style={styles.containerProducts}>
        <ProductCard/> 
        <ProductCard/> 
     </View>
     <NavBar/> 

    </View>
  )
}

export default Home