import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Modal } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import CardPro from '../component/CardJob';
import { Formik } from 'formik';
import React from 'react';
import { colors } from '../global/styles';
import { TouchableNativeFeedback } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import * as yup from 'yup';
import { ScrollView } from 'react-native';
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  get,
  remove,
} from 'firebase/database';
import AnimatedLoader from 'react-native-animated-loader';
import { Alert } from 'react-native';

function SiteEvent({ navigation, route }) {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(async () => {
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome
          style={{ padding: 10 }}
          onPress={() => {
            setModalVisible(true);
          }}
          name="plus"
          size={30}
          color={colors.grey2}
        />
      ),
    });
    setVisible(true);
    setTimeout(() => {
      getData();
    }, 1000);
  }, [navigation]);

  const getData = async () => {
    try {
      const db = getDatabase();
      const reference = await ref(db, `jobData`);
      onValue(reference, (snapshot) => {
        setData(snapshot.val());
        setVisible(false);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const addJob = async (dataAdd) => {
    setModalVisible(false);
    setVisible(true);
    try {
      const db = getDatabase();
      const reference = await ref(db, `jobData/${data.length}`);
      set(reference, dataAdd);
      setVisible(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteJob = (jobId) => {
    Alert.alert('Warning!', 'Do you want to delete Job Post?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          setVisible(true);
          const db = getDatabase();
          await setTimeout(() => {
            const refDelete = ref(db, `jobData/${jobId}`);
            remove(refDelete);
            setVisible(false);
          }, 1);
        },
      },
    ]);
  };

  const loginValidationSchema = yup.object().shape({
    date: yup.string().required('Date is Required'),
    time: yup.string().required('Time is Required'),
    jobName: yup.string().required('Job Name is Required'),
    salary: yup.string().required('Salary is Required'),
    quantity: yup.string().required('Quantity is Required'),
    description: yup.string().required('Field is Required'),
    payrollNotes: yup.string().required('Field is Required'),
  });

  const renderItem = (item) => {
    const data1 = item.item;
    return (
      <CardPro
        data={data1}
        display={null}
        onDelete={() => deleteJob(item.index)}
        onPress={() =>
          navigation.navigate('JobDetail', {
            navigation: navigation,
            data: data1,
          })
        }
      />
    );
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        // source={require('../global/loader.json')}
        speed={1}
      ></AnimatedLoader>
      {data && (
        <FlatList
          style={{ marginBottom: 10 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <TouchableNativeFeedback onPress={() => setModalVisible(false)}>
            <View style={{ flex: 0.7, width: '100%' }} />
          </TouchableNativeFeedback>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={{ width: '100%', flex: 5 }}
          >
            <View style={styles.modalView}>
              <Formik
                validationSchema={loginValidationSchema}
                initialValues={{
                  date: '',
                  time: '',
                  jobName: '',
                  leaveType: 'N/A',
                  timeAllowance: 'N/A',
                  salary: '',
                  quantity: '',
                  LAHA: 'N/A',
                  description: '',
                  payrollNotes: '',
                }}
                onSubmit={(values) => addJob(values)}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                }) => (
                  <View
                    style={{
                      width: '60%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 30,
                        color: '#ff8c52',
                        fontWeight: 'bold',
                        marginBottom: 20,
                      }}
                    >
                      Add Job
                    </Text>
                    <View style={styles.form_group}>
                      <Text style={styles.title}>Job Name (*)</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('jobName')}
                        onBlur={handleBlur('jobName')}
                        value={values.jobName}
                      />
                      {errors.jobName && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                          {errors.jobName}
                        </Text>
                      )}
                    </View>
                    <View style={styles.form_row}>
                      <View style={{ width: '49%' }}>
                        <Text style={styles.title}>Date (*)</Text>
                        <TextInput
                          style={styles.textInput}
                          onChangeText={handleChange('date')}
                          onBlur={handleBlur('date')}
                          value={values.date}
                        />
                        {errors.date && (
                          <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.date}
                          </Text>
                        )}
                      </View>
                      <View style={{ width: '49%', marginLeft: '2%' }}>
                        <Text style={styles.title}>Time (*)</Text>
                        <TextInput
                          style={styles.textInput}
                          onChangeText={handleChange('time')}
                          onBlur={handleBlur('time')}
                          value={values.time}
                        />
                        {errors.time && (
                          <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.time}
                          </Text>
                        )}
                      </View>
                    </View>
                    <View style={styles.form_row}>
                      <View style={{ width: '49%' }}>
                        <Text style={styles.title}>Leave Type</Text>
                        <TextInput
                          style={styles.textInput}
                          onChangeText={handleChange('leaveType')}
                          onBlur={handleBlur('leaveType')}
                          value={values.leaveType}
                        />
                      </View>
                      <View style={{ width: '49%', marginLeft: '2%' }}>
                        <Text style={styles.title}>Time Allowance</Text>
                        <TextInput
                          style={styles.textInput}
                          onChangeText={handleChange('timeAllowance')}
                          onBlur={handleBlur('timeAllowance')}
                          value={values.timeAllowance}
                        />
                      </View>
                    </View>
                    <View style={styles.form_row}>
                      <View style={{ width: '49%' }}>
                        <Text style={styles.title}>Salary (*)</Text>
                        <TextInput
                          style={styles.textInput}
                          onChangeText={handleChange('salary')}
                          onBlur={handleBlur('salary')}
                          value={values.salary}
                        />
                        {errors.salary && (
                          <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.salary}
                          </Text>
                        )}
                      </View>
                      <View style={{ width: '49%', marginLeft: '2%' }}>
                        <Text style={styles.title}>Quantity (*)</Text>
                        <TextInput
                          style={styles.textInput}
                          onChangeText={handleChange('quantity')}
                          onBlur={handleBlur('quantity')}
                          value={values.quantity}
                        />
                        {errors.quantity && (
                          <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.quantity}
                          </Text>
                        )}
                      </View>
                    </View>

                    <View style={styles.form_group}>
                      <Text style={styles.title}>LAHA</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('LAHA')}
                        onBlur={handleBlur('LAHA')}
                        value={values.LAHA}
                      />
                    </View>
                    <View style={styles.form_group}>
                      <Text style={styles.title}>Description (*)</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                      />
                      {errors.description && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                          {errors.description}
                        </Text>
                      )}
                    </View>
                    <View style={styles.form_group}>
                      <Text style={styles.title}>Payroll Notes (*)</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('payrollNotes')}
                        onBlur={handleBlur('payrollNotes')}
                        value={values.payrollNotes}
                      />
                      {errors.payrollNotes && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                          {errors.payrollNotes}
                        </Text>
                      )}
                    </View>

                    <Button onPress={handleSubmit} title="Submit" />
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

export default SiteEvent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc6cf',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 800,
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
});
