import { useEffect, useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ModalBottom from '../component/ModalBottom';
import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { colors } from '../global/styles';
import * as yup from 'yup';
import { ScrollView } from 'react-native';
import { getDatabase, ref, onValue, set, remove } from 'firebase/database';
import { RadioButton } from 'react-native-paper';
import AnimatedLoader from 'react-native-animated-loader';
import CentresHeader from '../component/CentresHeader';
import Searchbar from '../component/SearchBar';
import CardCentre from '../component/CardCentre';
import CardTotal from '../component/CardTotal';
import { TouchableNativeFeedback } from 'react-native';
import Line from '../component/Line';
function CentreScreen({ navigation, route }) {
  const [value, setValue] = useState();
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('first');
  function updateSearch(value) {
    setValue(value);
  }
  useEffect(async () => {
    setVisible(false);
  }, [navigation]);
  return (
    // <ScrollView>
    <View style={styles.container}>
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
      ></AnimatedLoader>
      <CentresHeader
        onFilterPress={() => setModalVisible(true)}
        navigation={navigation}
      />
      <View style={styles.totalSlide}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            height: 110,
          }}
          showsHorizontalScrollIndicator={false}
        >
          <CardTotal title="Total centres" icon="store" number={200} />
          <CardTotal title="Total centres" icon="store" number={200} />
          <CardTotal title="Total centres" icon="store" number={200} />
          <CardTotal title="Total centres" icon="store" number={200} />
        </ScrollView>
      </View>
      <View style={[styles.row, styles.contain]}>
        <Searchbar
          value={value}
          updateSearch={updateSearch}
          textSearch="Search Centre name"
          style={{
            flex: 2,
            marginRight: 10,
            // justifyContent: 'center',
          }}
        />

        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}
        >
          <Image
            style={{
              width: 30,
            }}
            source={require('../assets/ic-filter.png')}
          />
        </View>
      </View>
      <Line height={5} />
      <ScrollView contentContainerStyle={styles.contain}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('CentreDetail');
          }}
        >
          <View style={{ width: '100%' }}>
            <CardCentre
              data={{
                image:
                  'https://www.goodstart.org.au/getattachment/ae42faab-2813-4587-80af-763fa8e743bc/;.aspx;.jpg',
                name: 'Castle Hill Montessori Academyq',
                location: '1 Kerrs Road, Castle Hill, NSW 2154',
                waitlist: '48 waitlisted',
                type: 'KindiCare Basic',
                service: '4 services',
                children: '90 childrens',
              }}
            />
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('CentreDetail');
          }}
        >
          <View style={{ width: '100%' }}>
            <CardCentre
              data={{
                image:
                  'https://www.goodstart.org.au/getattachment/ae42faab-2813-4587-80af-763fa8e743bc/;.aspx;.jpg',
                name: 'Castle Hill Montessori Academyq',
                location: '1 Kerrs Road, Castle Hill, NSW 2154',
                waitlist: '48 waitlisted',
                type: 'KindiCare Basic',
                service: '4 services',
                children: '90 childrens',
              }}
            />
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('CentreDetail');
          }}
        >
          <View style={{ width: '100%' }}>
            <CardCentre
              data={{
                image:
                  'https://www.goodstart.org.au/getattachment/ae42faab-2813-4587-80af-763fa8e743bc/;.aspx;.jpg',
                name: 'Castle Hill Montessori Academyq',
                location: '1 Kerrs Road, Castle Hill, NSW 2154',
                waitlist: '48 waitlisted',
                type: 'KindiCare Basic',
                service: '4 services',
                children: '90 childrens',
              }}
            />
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('CentreDetail');
          }}
        >
          <View style={{ width: '100%' }}>
            <CardCentre
              data={{
                image:
                  'https://www.goodstart.org.au/getattachment/ae42faab-2813-4587-80af-763fa8e743bc/;.aspx;.jpg',
                name: 'Castle Hill Montessori Academy',
                location: '1 Kerrs Road, Castle Hill, NSW 2154',
                waitlist: '48 waitlisted',
                type: 'KindiCare Basic',
                service: '4 services',
                children: '90 childrens',
              }}
            />
          </View>
        </TouchableNativeFeedback>
      </ScrollView>
      <ModalBottom
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        title="Select Centres"
        closeIcon={true}
        height={629}
      >
        <Searchbar
          style={{
            borderWidth: 2,
            borderColor: '#D3CCCC',
            borderRadius: 8,
          }}
          textSearch="Search centre name"
        />
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
          <View style={[styles.row, styles.line]}>
            <View
              style={{
                flex: 1,
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                }}
                source={{
                  uri: 'https://www.goodstart.org.au/getattachment/88459773-12e8-4f2b-918f-a71f11c3e4b2/;.aspx;.jpg',
                }}
              />
            </View>
            <Text style={{ flex: 4, fontSize: 20 }}>All Centre</Text>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              color="#DB147F"
            />
          </View>
        </ScrollView>
      </ModalBottom>
    </View>
    // </ScrollView>
  );
}

export default CentreScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc6cf',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  form_group: {
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000AA',
    // height: 629,
    // backgroundColor: 'white',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 629,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  form_row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  lottie: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  totalSlide: {
    height: 110,
    marginTop: -40,
    marginBottom: 20,
  },
  contain: {
    width: '94%',
    paddingBottom: 10,
  },
  line: {
    marginTop: 30,
  },
});
