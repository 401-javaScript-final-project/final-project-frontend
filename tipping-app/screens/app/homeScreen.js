import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../../styles/styles.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }
}

export default HomeScreen;