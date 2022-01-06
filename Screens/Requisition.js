import { View, StyleSheet, Text } from 'react-native';
function Requisition() {
  return (
    <View style={styles.container}>
      <Text>My Requisitions</Text>
    </View>
  );
}

export default Requisition;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc6cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
