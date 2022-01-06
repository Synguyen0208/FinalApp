import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../global/styles';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native';
import JobDetail from '../Screens/JobDetail';
const JobDetailStacks = createStackNavigator();

const JobDetailStack = ({ navigation, route }) => (
  <JobDetailStacks.Navigator
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
    <JobDetailStacks.Screen
      name="JobDetailStack"
      component={JobDetail}
      initialParams={route}
      options={{
        headerLeft: () => (
          <FontAwesome
            onPress={() => navigation.goBack()}
            name="angle-left"
            size={40}
            style={{ padding: 10 }}
            color={colors.grey2}
          />
        ),
        headerTitle: () => (
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Job Detail
          </Text>
        ),
        headerTitleAlign: 'center',
      }}
    />
  </JobDetailStacks.Navigator>
);
export default JobDetailStack;
