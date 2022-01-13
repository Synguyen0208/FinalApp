import HomeTab from '../Navigations/HomeTab';
import Benefit from '../Screens/Benefit';
import Features from '../Screens/CentreDetail/Features';
import Hours from '../Screens/CentreDetail/Hours';
import Marketing from '../Screens/CentreDetail/Marketing';
import RatingAndReview from '../Screens/CentreDetail/RatingAndReview';
import Service from '../Screens/CentreDetail/Service';
import Summary from '../Screens/CentreDetail/Summary';
import Profile from '../Screens/Profile';
import Requisition from '../Screens/Requisition';
import UserInformation from '../Screens/CentreDetail/UserInformation';

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

export const CentreDetailTab = [
  {
    name: 'Summary',
    component: Summary,
  },
  {
    name: 'UserInformation',
    component: UserInformation,
    options: {
      tabBarLabel: 'User Information',
    },
  },
  {
    name: 'Hours',
    component: Hours,
  },
  {
    name: 'Service',
    component: Service,
  },
  {
    name: 'Feature',
    component: Features,
  },
  {
    name: 'RatingAndView',
    component: RatingAndReview,
    options: {
      tabBarLabel: 'Ratings and Reviews',
    },
  },
  {
    name: 'Marketing',
    component: Marketing,
  },
];
