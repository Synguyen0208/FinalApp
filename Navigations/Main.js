import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { SignInContext } from '../Context/authContext';
import MainNavigation from './MainNavigation';
import LoginScreen from '../Screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackScreen from './AuthStacks';
import HomeTab from './HomeTab';
import ForgotPasswordScreen from '../Screens/login/ForgorPassword';

const MainStack = createStackNavigator();
export default function Main() {
  const { signedIn } = useContext(SignInContext);
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        {/* <MainStack.Screen
      <MainStack.Navigator initialRouteName="MainScreen">
        <MainStack.Screen
          name="LoginScreen"
          component={AuthStackScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        <MainStack.Screen
          name="MainScreen"
          component={HomeTab}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="ForgotScreen"
          component={ForgotPasswordScreen}
          options={{ title: null }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
