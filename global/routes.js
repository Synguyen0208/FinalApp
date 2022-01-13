import Features from '../Screens/CentreDetail/Features';
import Hours from '../Screens/CentreDetail/Hours';
import Marketing from '../Screens/CentreDetail/Marketing';
import RatingAndReview from '../Screens/CentreDetail/RatingAndReview';
import Service from '../Screens/CentreDetail/Service';
import Summary from '../Screens/CentreDetail/Summary';
import UserInformation from '../Screens/CentreDetail/UserInformation';

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
