import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import { Text } from 'react-native';
import { routesApp } from '../global/routes';

export default function DrawerContent(props) {
  const { state } = props;
  const { routes, index } = state;
  const focusedRoute = routes[index];
  const signOut = () => {
    props.navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} focusable={false}>
        <View style={{ backgroundColor: '#ffffff', marginBottom: 30 }}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 20,
            }}
          >
            <Image
              style={{ width: 170, height: 70 }}
              source={{
                uri: 'https://knowledge.acciona.com.au/wp-content/uploads/2020/10/logo-acciona@2x.png',
              }}
            />
          </View>
        </View>
        {routesApp.map((e, index) => {
          const { name, component, params, options, label, icon } = e;
          return (
            <DrawerItem
              key={index}
              label={(focused, color, size) => (
                <Text
                  style={{
                    color: focused ? 'black' : colors.grey2,
                    fontWeight: focused ? 'bold' : 'normals',
                    fontSize: focused ? 15 : size,
                  }}
                >
                  {label}
                </Text>
              )}
              focused={focusedRoute.name === name ? true : false}
              style={{
                borderLeftWidth: focusedRoute.name === name ? 5 : 0,
                borderLeftColor: 'red',
                borderRadius: 0,
              }}
              activeBackgroundColor="white"
              onPress={() => {
                if (name) props.navigation.navigate(name);
              }}
              icon={({ color, size, focused }) => (
                <FontAwesome
                  name={icon}
                  size={30}
                  color={focused ? '#FF0000' : colors.grey2}
                />
              )}
            />
          );
        })}
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign Out"
        style={{ backgroundColor: '#FF0000' }}
        onPress={() => {
          signOut();
        }}
        labelStyle={{ color: '#ffffff' }}
        icon={({ color, size }) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color="#ffffff"
            size={size}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    borderWidth: 4,
    borderColor: colors.pagebackground,
  },

  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },

  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
