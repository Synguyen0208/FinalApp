import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Icon, withBadge, SearchBar } from 'react-native-elements';
import { colors, parameters } from '../global/styles';
export default function Header({ navigation }) {
  const BadgeIcon = withBadge(0)(Icon);
  const [search, setSearch] = useState('');
  return (
    <View style={styles.header}>
      <View style={styles.iconLeft}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      >
        <TextInput
          style={styles.TextInput1}
          placeholder="Bạn muốn ăn gì?"
        ></TextInput>
      </View>
      <View style={styles.iconRight}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.cardbackground}
        />
      </View>
      <View style={styles.iconRight}>
        <BadgeIcon
          type="material-community"
          name="chat"
          size={35}
          color={colors.cardbackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
  iconLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  iconRight: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: 'white',
    // marginHorizontal: 20,
    width: 200,
    backgroundColor: 'white',
    // padding: 3,
  },
});
