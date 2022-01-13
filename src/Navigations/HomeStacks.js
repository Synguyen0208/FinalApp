import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const HomeStack = createStackNavigator();
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <HomeStack.Screen
      name="Dashboard"
      component={Home}
      options={{
        title: null,
        headerRight: () => (
          <View
            style={{
              width: '110%',
              height: 60,
              backgroundColor: '#DB147F',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <View style={styles.viewIn}>
              <View style={styles.viewLeft}>
                <Entypo name="shop" size={24} color="white" />
                <TouchableOpacity style={styles.dropView}>
                  <Text style={{ fontSize: 16, color: 'white' }}>
                    Goodstart Early Learning ABC
                  </Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
              <Ionicons name="notifications-outline" size={24} color="white" />
              <View style={styles.numberView}>
                <Text style={styles.numberText}>5</Text>
              </View>
            </View>
          </View>
        ),
      }}
    />
  </HomeStack.Navigator>
);
export default HomeStackScreen;
const styles = StyleSheet.create({
  viewIn: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
  },
  viewLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dropView: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  numberView: {
    backgroundColor: 'red',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    width: 15,
    height: 15,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
  },
  numberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 9,
  },
});
