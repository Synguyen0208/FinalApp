import { View, StyleSheet, Text } from 'react-native';
function Plant() {
  return (
    <View style={styles.container}>
      <Text>Plant Screen</Text>
    </View>
  );
}

export default Plant;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc6cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
