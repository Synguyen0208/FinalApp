import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
const HomeStack = createStackNavigator();

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
      name="Home"
      component={Home}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={40}
            color="#000000"
            backgroundColor="#fff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);
export default HomeStackScreen;
