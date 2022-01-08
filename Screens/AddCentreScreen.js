import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

export default function AddCentreScreen({ route }) {
  const navigationRoute = route.params;
  useEffect(() => {
    navigationRoute
      .getParent()
      ?.setOptions({ tabBarStyle: { display: 'none' } });
    return () =>
      navigationRoute.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigationRoute]);
  return (
    <View style={styles.container}>
      <Text>Form add</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc6cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
