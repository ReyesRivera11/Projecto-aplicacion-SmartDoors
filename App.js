
import { StyleSheet, Text, View } from 'react-native';
import MyStackNavigator from './src/components/MyStackNavigator';

import { AuthProvider } from './src/contexto/auth';

export default function App() {
  return (
    <AuthProvider>
      <MyStackNavigator/>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
