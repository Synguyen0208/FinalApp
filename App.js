import { StyleSheet } from 'react-native';
import React from 'react';
import { SignInContextProvider } from './Context/authContext';
import Main from './Navigations/Main';

export default function App() {
  return (
    <SignInContextProvider>
      <Main />
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
