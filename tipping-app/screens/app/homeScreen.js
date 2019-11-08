import React, {Component} from 'react';
import {View, Text, Button, Image, ScrollView, Linking} from 'react-native';
import {styles} from '../../styles/styles.js';
import { f, auth, database } from "./../../config/config.js";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Scanner from './scannerScreen.js';
import QRCode from './qrScreen';
import Payment from './paymentScreen';


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

  _linkToWebsite =()=>{
    Linking.openURL('https://thefemmefatalestrio.com');
    this.props.onPress && this.props.onPress();
  }

  render() {
    return (
      <View style={styles.centerHome}>
        <ScrollView>
        <Image source={require('../../styles/images/hat2.png')} style={styles.img}/>  
        <Text style={styles.title}>Welcome to your Profile</Text>
        <Text style={styles.profileTitle}>The Femme Fatales</Text>
        <Image source={require('../../styles/images/femmeFatales.png')} style={styles.profileImg}/>
        
         <Text style={styles.profileTitle}>Events</Text>
         <Text onPress={this._linkToWebsite}>
        Vist our website
      </Text>
        <View style={styles.button}>
        <Button
        style={styles.button}
          title="Logout"
          onPress={() => {
            this.signUserOut();
          }}
        />
        </View>
        </ScrollView>
      </View>

    );
  }
}



export default createMaterialBottomTabNavigator({
  Home: {screen: Home},
  Scanner: {screen: Scanner},
  QRCode: {screen: QRCode},
});
