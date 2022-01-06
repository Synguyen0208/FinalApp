import { Text, Card, Icon, withBadge, colors } from 'react-native-elements';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function CardPro(props) {
  const { jobName, date, time, id, salary } = props.data;
  const onPress = props.onPress;
  const onDelete = props.onDelete;
  return (
    <Card style={styles.card} key={id}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardTitile}>
          <View
            style={{
              flex: 2,
              padding: 3,
            }}
          >
            <Text style={styles.title}>{date}</Text>
            <Text>{time}</Text>
          </View>
          <FontAwesome
            style={{ padding: 10 }}
            name="trash"
            onPress={onDelete}
            size={25}
            color={colors.grey2}
          />
        </View>
        <Card.Divider />
        <View style={styles.line}>
          <Text>Job name:</Text>
          <Text style={styles.title}>{jobName}</Text>
        </View>
        <View style={styles.line}>
          <Text>Salary:</Text>
          <Text style={styles.title}>{salary}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  cardTitile: {
    flexDirection: 'row',
    width: '100%',
    textAlign: 'left',
    justifyContent: 'center',
  },
  btn: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnEdit: {
    padding: 16,
    width: '48%',
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnDele: {
    padding: 16,
    width: '48%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  txtEdit: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  txtDele: {
    textAlign: 'center',
    color: '#CCCCCC',
    fontWeight: 'bold',
  },
  line: {
    marginTop: 5,
  },
});
