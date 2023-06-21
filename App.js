import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello World!!!!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <StartGameScreen />
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
