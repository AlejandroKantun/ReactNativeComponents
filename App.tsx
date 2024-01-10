import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
//This app will show the main components for React Native
 const App =()=> {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
}
export default App;
