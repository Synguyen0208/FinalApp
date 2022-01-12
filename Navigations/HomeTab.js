import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';
import Plant from '../Screens/Plant';
import { Text } from 'react-native';
import HomeStackScreen from './HomeStacks';
import SiteEventStack from './SiteEventStack';
import LinkScreen from '../Screens/LinkScreen';
import ContactScreen from '../Screens/Contact';

const HomeTabs = createBottomTabNavigator();

const HomeTab = ({ route }) => {
  return (
    <HomeTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttons,
      }}
    >
      <HomeTabs.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ color, size, focused }) => (
            <Text
              style={{
                color: focused ? '#000000' : colors.grey2,
                fontSize: 15,
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >
              Dashboard
            </Text>
          ),
          tabBarColor: '#fff',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name="home"
              type="material"
              color={focused ? '#FF0000' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <HomeTabs.Screen
        name="PlantScreen"
        component={Plant}
        options={{
          headerShown: false,
          tabBarLabel: ({ color, size, focused }) => (
            <Text
              style={{
                color: focused ? '#000000' : colors.grey2,
                fontSize: 15,
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >
              Plant
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="wrench"
              size={size}
              color={focused ? '#FF0000' : colors.grey2}
            />
          ),
        }}
      />
      <HomeTabs.Screen
        name="SiteEventScreen"
        component={SiteEventStack}
        options={{
          headerShown: false,
          tabBarLabel: ({ color, size, focused }) => (
            <Text
              style={{
                color: focused ? '#000000' : colors.grey2,
                fontSize: 15,
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >
              Site Event
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="calendar-plus-o"
              size={size}
              color={focused ? '#FF0000' : colors.grey2}
            />
          ),
        }}
      />
      <HomeTabs.Screen
        name="LinkScreen"
        component={LinkScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ color, size, focused }) => (
            <Text
              style={{
                color: focused ? '#000000' : colors.grey2,
                fontSize: 15,
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >
              Link
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="link"
              size={size}
              color={focused ? '#FF0000' : colors.grey2}
            />
          ),
        }}
      />
      <HomeTabs.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ color, size, focused }) => (
            <Text
              style={{
                color: focused ? '#000000' : colors.grey2,
                fontSize: 15,
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >
              Contact
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="phone"
              size={size}
              color={focused ? '#FF0000' : colors.grey2}
            />
          ),
        }}
      />
    </HomeTabs.Navigator>
  );
};
export default HomeTab;
