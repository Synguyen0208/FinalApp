import { View, StyleSheet, Text } from 'react-native';
function Benefit() {
  return (
    <View style={styles.container}>
      <Text>Employee Benefits</Text>
    </View>
  );
}

export default Benefit;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc6cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
