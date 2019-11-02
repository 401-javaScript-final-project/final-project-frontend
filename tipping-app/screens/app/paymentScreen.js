import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import {styles} from '../../styles/styles.js';

export default class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qrCodeData: " ", scanner: undefined };
  }

  componentDidMount() {
    const qrCodeData = this.props.navigation.getParam( "data", "No data read" );
    this.setState({ qrCodeData: qrCodeData})
    console.log(qrCodeData);
  }

  render() {
    return (
      <View style={styles.center}>
        <Text>Payment</Text>
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
