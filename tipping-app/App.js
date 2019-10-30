import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./screens/auth/loginScreen.js";
import Home from "./screens/app/homeScreen.js";
import SignUp from "./screens/auth/signupScreen.js";
import Scanner from "./screens/app/scannerScreen.js";
import QR from "./screens/app/qr.js";

const RootStack = createStackNavigator(
  {
    LoginScreen: Login,
    HomeScreen: Home,
    SignUpScreen: SignUp,
    QRCode: QR,
    ScannerScreen: Scanner
  },
  {
    initialRouteName: "LoginScreen"
  }
);
//testing
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
