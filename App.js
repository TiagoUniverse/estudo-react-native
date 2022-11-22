import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from "./assets/image_maker_te6J43SJkSC9.png";

export default function App() {
  return (
    <View style={styles.container}>

      <Image source={logo} style={{ width: 305, height: 159}} />

      <Text>Tiago César está na área! Bem vindo ao meu app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
