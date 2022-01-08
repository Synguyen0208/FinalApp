import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../global/styles';
import { SignInContext } from '../Context/authContext';
import { useContext } from 'react';
import { TouchableNativeFeedback } from 'react-native';
function MoreScreen({ navigation }) {
  const { signedIn } = useContext(SignInContext);
  const { email } = signedIn.userToken.user;
  console.log(signedIn.userToken.user);
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('UserProfile')}
      >
        <View style={[styles.row, styles.p1, styles.userCard]}>
          <FontAwesome
            name="user-circle"
            size={48}
            color={colors.grey2}
            style={{ padding: 10 }}
          />
          <View style={{ padding: 10 }}>
            <Text style={styles.userEmail}>{email}</Text>
            <Text>Provider User (Admin)</Text>
          </View>
          <FontAwesome
            name="angle-right"
            size={25}
            color={colors.grey2}
            style={styles.icon}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
export default MoreScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  p1: {
    padding: 10,
  },
  f2: {
    flex: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 'auto',
    padding: 10,
  },
  userEmail: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  userCard: {
    backgroundColor: 'white',
  },
});
