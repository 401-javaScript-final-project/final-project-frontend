import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../../styles/styles.js';
import { f, auth, database } from "./../../config/config.js";

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
          title="Login"
          onPress={() => {
            this.signUserOut();
          }}
        />
      </View>
    );
  }
}

export default Home;