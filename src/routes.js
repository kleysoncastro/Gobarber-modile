import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (signdIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },

          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              style: { backgroundColor: '#8d41a8' },
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255, 0.6)',
            },
          }
        ),
      },
      {
        initialRouteName: signdIn ? 'App' : 'Sign',
      }
    )
  );
