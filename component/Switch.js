import React, { useState } from 'react';
import { Switch } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import { colors } from '../global/styles';

export default function SW() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SwitchToggle
      switchOn={isEnabled}
      onPress={toggleSwitch}
      containerStyle={{
        width: 35,
        height: 20,
        borderRadius: 25,
        padding: 2,
      }}
      circleStyle={{
        width: 17,
        height: 17,
        borderRadius: 12,
        backgroundColor: 'white',
      }}
      rightContainerStyle={{ margin: 10 }}
      circleColorOff="white"
      circleColorOn="white"
      backgroundColorOn="#DB147F"
    />
  );
}
