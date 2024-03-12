import Home from '../../screens/home';
import Access from '../../screens/registerAccess';
import Door from '../../screens/statedoor';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    
      <Tab.Navigator
        sceneContainerStyle={
          {
            backgroundColor: "white",
          }
        } screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Productos"
          component={Home}
          options={
            {
              tabBarIcon: ({ color, size }) =>
                <Entypo name="shop" size={size} color={color} />
            }
          }
        />
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
      </Tab.Navigator>
   
  )
}

export default NavBar