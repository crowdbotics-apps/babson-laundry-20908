import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList118471Navigator from '../features/NotificationList118471/navigator';
import Settings118470Navigator from '../features/Settings118470/navigator';
import Settings118462Navigator from '../features/Settings118462/navigator';
import UserProfile118460Navigator from '../features/UserProfile118460/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList118471: { screen: NotificationList118471Navigator },
Settings118470: { screen: Settings118470Navigator },
Settings118462: { screen: Settings118462Navigator },
UserProfile118460: { screen: UserProfile118460Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
