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
<<<<<<< HEAD
        width: 40,
        height: 20,
        borderRadius: 25,
      }}
      circleStyle={{
        width: 25,
        height: 25,
        borderRadius: 12,
        backgroundColor: 'white', // rgb(102,134,205)
      }}
      circleColorOff={colors.grey2}
      circleColorOn="#DB147F"
      backgroundColorOn={colors.grey2}
=======
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
>>>>>>> feature/centres-screen_rating
    />
  );
}
