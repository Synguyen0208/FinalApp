import { View, StatusBar, StyleSheet, Text, ScrollView } from 'react-native';
import { Foundation, Entypo, Fontisto } from '@expo/vector-icons';
import ItemDashboard from '../components/ItemDashboard';

function Home({ navigation, route }) {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#DB147F"
      />
      <ScrollView style={styles.itemView}>
        <ItemDashboard
          title={'Applications'}
          numberTitle={17}
          itemContentDetailTitle1={'Open Application Value'}
          itemContentDetailNumber1={'116,688,8'}
          itemContentDetailTitle2={'Total Waitlisted'}
          itemContentDetailNumber2={'3'}
          itemContentDetailTitle3={'Waitlist Value'}
          itemContentDetailNumber3={'$29,749 p.a'}
          numberTitleColor={'#FB8429'}
          icon={<Foundation name="page" size={16} color="#FB8429" />}
        />
        <ItemDashboard
          title={'Total Activities'}
          numberTitle={17}
          itemContentDetailTitle1={'Mailbox Received'}
          itemContentDetailNumber1={'342'}
          itemContentDetailTitle2={'Mailbox Awaiting Reply'}
          itemContentDetailNumber2={'6'}
          itemContentDetailTitle3={'Task Overdue'}
          itemContentDetailNumber3={'2'}
          numberTitleColor={'#32A4FC'}
          icon={<Fontisto name="heartbeat-alt" size={16} color="#32A4FC" />}
        />
        <ItemDashboard
          title={'Total Centres'}
          numberTitle={32}
          itemContentDetailTitle1={'Total Places'}
          itemContentDetailNumber1={'160'}
          itemContentDetailTitle2={'Enrolment Coverage'}
          itemContentDetailNumber2={'72%'}
          itemContentDetailTitle3={'Average Enquiry Response Time'}
          itemContentDetailNumber3={'24 hrs 36 mins'}
          numberTitleColor={'#DB147F'}
          icon={<Entypo name="shop" size={16} color="#DB147F" />}
        />
      </ScrollView>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  itemView: {
    padding: 20,
    borderRadius: 20,
    top: -50,
    zIndex: 1,
    width: '100%',
  },
  item: {
    // height:'60%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
