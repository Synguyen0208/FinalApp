import { View, StyleSheet, Text } from 'react-native';
function Profile({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <View style={styles.row}>
          <Text style={styles.title}>Name: </Text>
          <Text style={styles.value}>Nguyen Van Sy</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Email: </Text>
          <Text style={styles.value}>{route?.params?.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Password: </Text>
          <Text style={styles.value}>{route?.params?.password}</Text>
        </View>
      </View>
    </View>
  );
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#bdc6cf',
  },
  contain: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
  },
  title: {
    fontSize: 17,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 40,
  },
});
