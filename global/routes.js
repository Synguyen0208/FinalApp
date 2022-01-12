import HomeTab from '../Navigations/HomeTab';
import Benefit from '../Screens/Benefit';
import Profile from '../Screens/Profile';
import Requisition from '../Screens/Requisition';

export const routesApp = [
  {
    name: 'Dashboard',
    component: HomeTab,
    params: true,
    options: {
      headerShown: false,
      drawerActiveBackgroundColor: 'white',
    },
    label: 'Dashboard',
    icon: 'home',
  },
  {
    name: 'Profile',
    component: Profile,
    params: true,
    options: {},
    label: 'Profile',
    icon: 'user-o',
  },
  {
    name: 'Benefit',
    component: Benefit,
    params: true,
    options: {},
    label: 'Employee Benefits',
    icon: 'heart',
  },
  {
    name: 'Requisition',
    component: Requisition,
    params: true,
    options: {},
    label: 'My Requisition',
    icon: 'cart-plus',
  },
  {
    name: null,
    component: null,
    params: false,
    options: {},
    label: 'Link',
    icon: 'link',
  },
  {
    name: null,
    component: null,
    params: false,
    options: {},
    label: 'Contact us',
    icon: 'phone',
  },
];
