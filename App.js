import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './src/screens/auth/onBoardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './src/screens/auth/FirstScreen';
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style = {{flex:1}}>
    <NavigationContainer>

    <Stack.Navigator>
    <Stack.Screen  options={{ headerShown: false, }}  name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="onBoarding" component={OnboardingScreen} />
   
    </Stack.Navigator>
  </NavigationContainer>
  </SafeAreaView>
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
