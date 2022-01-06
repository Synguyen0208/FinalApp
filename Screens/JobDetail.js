import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import CardPro from '../component/CardJob';

export default function JobDetail({ route, navigation }) {
  const navigationRoute = route.params.params.navigation;
  const data = route.params.params.data;
  useEffect(() => {
    navigationRoute
      .getParent()
      ?.setOptions({ tabBarStyle: { display: 'none' } });
    return () =>
      navigationRoute.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigationRoute]);

  return (
    <View style={styles.container}>
      {Object.keys(data).map((value, index) => {
        return (
          <View style={styles.row}>
            <Text style={styles.title}>{value}</Text>
            <Text style={styles.value}>{data[value]}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: '5%',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    width: '30%',
  },
  value: {
    width: '70%',
    fontWeight: 'bold',
  },
});
