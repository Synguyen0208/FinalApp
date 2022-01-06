import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import SiteEvent from '../Screens/SiteEvent';
import { Text } from 'react-native';
import JobDetailStack from './JobDetailStack';
const SiteEventStacks = createStackNavigator();

const SiteEventStack = ({ navigation }) => (
  <SiteEventStacks.Navigator
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
    <SiteEventStacks.Screen
      name="SiteEvents"
      component={SiteEvent}
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
        headerTitle: () => (
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Site Event
          </Text>
        ),
        headerTitleAlign: 'center',
      }}
    />
    <SiteEventStacks.Screen
      name="JobDetail"
      component={JobDetailStack}
      options={{
        headerShown: false,
      }}
    />
  </SiteEventStacks.Navigator>
);
export default SiteEventStack;
