import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Header from '../component/Header';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(255, 140, 82,1)"
      />
      <Header navigation={navigation} />
      <Text>Login</Text>
    </View>
  );
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
