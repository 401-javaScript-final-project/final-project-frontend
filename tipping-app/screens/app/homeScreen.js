import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../../styles/styles.js';
import { f, auth, database } from "./../../config/config.js";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Scanner from './scannerScreen.js';
import QRCode from './qrScreen';

class Home extends React.Component {

  signUserOut = () => {
    auth.signOut()
    .then(() => {
      console.log('Logged out...');
    })
    .then(() => {
      this.props.navigation.navigate("LoginScreen");
    }).catch((error) => {
      console.log('Error:', error);
    })
  }

  render() {
    return (
      <View style={styles.center}>
        <Text>Home</Text>
        <Button
          title="Logout"
          onPress={() => {
            this.signUserOut();
          }}
        />
      </View>
    );
  }
}

export default createMaterialBottomTabNavigator({
  Home: {screen: Home},
  Scanner: {screen: Scanner},
  QRCode: {screen: QRCode}
});
