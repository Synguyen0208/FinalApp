import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
const AuthStack = createStackNavigator();

const AuthStackScreen = ({ navigation }) => (
  <AuthStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        headerShown: false,
      }}
    />
  </AuthStack.Navigator>
);
export default AuthStackScreen;
