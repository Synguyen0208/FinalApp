import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import AuthStackScreen from './AuthStacks';
import HomeTab from './HomeTab';
import { auth } from '../../firebase';
import { SignInContext } from '../Context/authContext';
import { Provider } from 'react-redux';
import configureStore from '../global/root/store/configureStore';

export default function Main() {
  const { signedIn, dispatchSignedIn } = useContext(SignInContext);
  const store = configureStore();
  useEffect(() => {
    try {
      const user = auth.currentUser.toJSON();
      let type = null;
      if (user) {
        type = 'signed-in';
      }
      dispatchSignedIn({
        type: 'UPDATE_SIGN_IN',
        payload: { userToken: type },
      });
    } catch {}
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        {signedIn.userToken === null ? <AuthStackScreen /> : <HomeTab />}
      </Provider>
    </NavigationContainer>
  );
}
