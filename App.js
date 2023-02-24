import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import MainNavigator from "./src/routes/MainNavigator";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style='dark' />
        <MainNavigator />
      </NavigationContainer>
      <Toast />
    </>
  );
}