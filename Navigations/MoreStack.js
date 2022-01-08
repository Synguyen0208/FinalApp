import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';
import MoreScreen from '../Screens/MoreScreen';
import Profile from '../Screens/Profile';

const MoreStacks = createStackNavigator();

const MoreStack = ({ navigation }) => (
  <MoreStacks.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MoreStacks.Screen name="More" component={MoreScreen} />
    <MoreStacks.Screen
      name="UserProfile"
      initialParams={navigation}
      component={Profile}
    />
  </MoreStacks.Navigator>
);
export default MoreStack;
