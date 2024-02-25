import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/screens/main';
import Welcome from './src/screens/welcome';
import Home from './src/screens/home';
import Login from './src/screens/login';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Main/>  */}
      <Welcome/>
      {/* <Home/> */}
      {/* <Login/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
