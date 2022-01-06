import { View, StatusBar, StyleSheet, Text, ScrollView } from 'react-native';
function Home({ navigation, route }) {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#FF0000"
      />
      <ScrollView>
        <Text>Home Screen</Text>
        <Text style={{ color: 'red' }}>{route?.params?.email}</Text>
        <Text>{route?.params?.password}</Text>
      </ScrollView>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
