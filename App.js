import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Title from './components/Title'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    // <View style={styles.container} >
      <NavigationContainer>
          <MyStack/>
      </NavigationContainer>
     /* <Home/> */
    // </View>
   
  );
  
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,

  },
  
});
