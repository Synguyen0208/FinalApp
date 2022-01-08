import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import CentreScreen from '../Screens/CentreScreen';
import { Text } from 'react-native';
import JobDetailStack from './JobDetailStack';
import AddCentreScreen from '../Screens/AddCentreScreen';
const CentreStacks = createStackNavigator();

const CentreStack = ({ navigation }) => (
  <CentreStacks.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
    }}
  >
    <CentreStacks.Screen
      name="SiteEvents"
      component={CentreScreen}
      options={{
        headerShown: false,
      }}
    />
    <CentreStacks.Screen
      name="AddCentre"
      component={AddCentreScreen}
      options={{
        headerShown: false,
      }}
    />
  </CentreStacks.Navigator>
);
export default CentreStack;