import { View, StyleSheet, Text } from 'react-native';
function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text>Contact Screens</Text>
    </View>
  );
}
export default ContactScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc6cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
