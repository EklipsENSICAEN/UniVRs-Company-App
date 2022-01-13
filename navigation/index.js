import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import QrCodeScanner from '../QrCodeScanner'
import Profil from '../Profil'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="QrCodeScanner" component={QrCodeScanner} options={{headerShown:false}} />
      <Stack.Screen name="Profil" component={Profil} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}
export default MyStack;