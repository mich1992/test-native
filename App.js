import Navigator from './src/navigations/Navigator'
import {  View } from 'react-native';
import { StyleSheet } from 'react-native-web';


export default function App() {
  return (
    <View  style={styles.container}>
      <Navigator/>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    fontSize: "10px"

  }
})
