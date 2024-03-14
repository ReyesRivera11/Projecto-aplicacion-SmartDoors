import Products from '../../screens/products';
import Access from '../../screens/registerAccess';
import Door from '../../screens/statedoor';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from "../../screens/home";
import { useAuth } from '../../contexto/auth';
import Acerca from '../../screens/acerca';
const Tab = createBottomTabNavigator();

const NavBar = () => {
  const {autenticado} = useAuth();
 
  return (
    <Tab.Navigator
      sceneContainerStyle={
        {
          backgroundColor: "white",
        }
      } screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={
          {
            tabBarIcon: ({ color, size }) =>
              <Entypo name="home" size={size} color={color} />
          }
        }
      />
      <Tab.Screen
        name="Acerca"
        component={Acerca}
        options={
          {
            tabBarIcon: ({ color, size }) =>
              <AntDesign name="questioncircleo" size={size} color={color} />
          }
        }
      />
      <Tab.Screen
        name="Productos"
        component={Products}
        options={
          {
            tabBarIcon: ({ color, size }) =>
              <Entypo name="shop" size={size} color={color} />
          }
        }
      />
       
      {
         autenticado&& (
          <>
            <Tab.Screen
              name="Registrar"
              component={Access}
              options={{
                tabBarIcon: ({ color, size }) =>
                  <AntDesign name="plussquareo" size={24} color={color} />
              }}
            />
            <Tab.Screen
              name="Puerta"
              component={Door}
              options={{
                tabBarIcon: ({ color, size }) =>
                  <FontAwesome5 name="door-closed" size={size} color={color} />
              }}
            />
          </>
        )
      }
    </Tab.Navigator>

  )
}

export default NavBar