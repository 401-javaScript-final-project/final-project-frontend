import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./screens/auth/loginScreen.js";
import Home from "./screens/app/homeScreen.js";
import SignUp from "./screens/auth/signupScreen.js";
import Scanner from "./screens/app/scannerScreen.js";
import QRCode from "./screens/app/qrScreen.js";
import Payment from "./screens/app/paymentScreen.js";


const RootStack = createStackNavigator(
  {
    LoginScreen: Login,
    HomeScreen: Home,
    SignUpScreen: SignUp,
    QRCode: QRCode,
    ScannerScreen: Scanner,
    PaymentScreen: Payment
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
