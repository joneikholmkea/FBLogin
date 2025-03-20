import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import NextScreen from './NextScreen';
import GoogleLogin from './GoogleLogin';
const Stack = createStackNavigator()
import { AuthProvider } from './AuthContext';

// tilbage 10.30

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName='GoogleLogin'>
          <Stack.Screen name='GoogleLogin' component={GoogleLogin} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='NextScreen' component={NextScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

