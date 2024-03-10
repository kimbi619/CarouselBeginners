import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppCarousel from './components/AppCarousel';
import Parallax from './components/Parallax';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppCarousel /> */}
      <Parallax />
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
