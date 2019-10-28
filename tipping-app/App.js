import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/auth/loginScreen.js';
import Home from './screens/app/homeScreen.js';
import SignUp from './screens/auth/signupScreen.js';

const RootStack = createStackNavigator(
  {
    LoginScreen: Login,
    HomeScreen: Home,
    SignUpScreen: SignUp,
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}