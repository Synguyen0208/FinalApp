import { View, StyleSheet, Text } from 'react-native';
function LinkScreen() {
  return (
    <View style={styles.container}>
      <Text>Link Screens</Text>
    </View>
  );
}

export default LinkScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc6cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
