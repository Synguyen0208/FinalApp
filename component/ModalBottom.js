import React from 'react';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import { View } from 'react-native';
import { Modal } from 'react-native';
import { Text } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Btn from './Button';
export default function ModalBottom(props) {
  const { setModalVisible, modalVisible, children } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <TouchableNativeFeedback onPress={() => setModalVisible(false)}>
          <View style={{ flex: 1, width: '100%' }} />
        </TouchableNativeFeedback>
        <View style={styles.modalView}>
          <View style={styles.modalContainer}>
            <View style={styles.row}>
              <Btn
                text="X"
                textStyle={{ fontSize: 30 }}
                onPress={() => setModalVisible(false)}
              />
              <Text style={styles.title}>Select centre</Text>
            </View>
            <Divider
              style={{
                width: '100%',
                marginTop: 10,
                marginBottom: 20,
                height: 10,
              }}
            />
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
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
    height: 629,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
  },
  modalContainer: {
    width: '94%',
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
    width: '90%',
    fontSize: 25,
    color: 'black',
  },
});
