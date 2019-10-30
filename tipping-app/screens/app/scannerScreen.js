import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import QR from "../app/qr.js"

class Scanner extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <QR/>
      </View>
    );
  }
}

export default Scanner;