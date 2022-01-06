import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../component/DrawerContent';
import { routesApp } from '../global/routes';
const Drawer = createDrawerNavigator();
export default function MainNavigation({ route, navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: 'red',
      }}
    >
      {routesApp.map((e, index) => {
        const { name, component, params, options, label, icon } = e;
        if (name != null)
          return (
            <Drawer.Screen
              name={name}
              key={index}
              component={component}
              initialParams={params ? route.params : null}
              options={options}
            />
          );
      })}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
