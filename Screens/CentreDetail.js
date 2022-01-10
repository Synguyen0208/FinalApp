import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

export default function CentreDetail({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>fkfkfkfkfk</Text>
      </View>
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
