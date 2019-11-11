import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  CameraRoll,
  Image,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import * as Permissions from 'expo-permissions';
import { captureScreen } from "react-native-view-shot";

import {styles} from '../../styles/stylesSheets/qrStyle.js';
class QR extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      valueForQRCode: '',
      permission: null,
      status: true, 
    };
  }
  async componentDidMount() {
    this.getPermissionsAsync();
  }
  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ permission: status === "granted" });
  };
  getTextInputValue = () => { 
    this.setState({ valueForQRCode: this.state.inputValue });
  };
  saveImage = () =>  {
    return captureScreen({
      format: "jpg",
      quality: 0.8
    })
  }
  saveImageToCameraRoll = () => {
    this.setState({status: false}, function() {
      this.saveImage()
      .then((uri) => {
        CameraRoll.saveToCameraRoll(uri, 'photo')
        .then(response => {
          alert('QR Code saved to Camera Roll.')
          console.log('image saved to camera roll')
          this.setState({status: true});
        })
      })
      .catch(console.error)
    });
  }
  getQRCodeFromCameraRoll = () => {
    CameraRoll.getPhotos({first: 1})
    .then(response => {
      console.log('Receieved Image')
    })
    .catch((error) => {
      console.log(error)
    })
  }
  render() {
    const { permission } = this.state;
     if (permission === null) {
      return <View style={styles.center}>
      <Text>Requesting for camera permission</Text>
      </View> 
    }
    if (permission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.MainContainer}>
        {
          this.state.status ?         
            <TouchableOpacity
              onPress={this.saveImageToCameraRoll}
              activeOpacity={0.7}
              style={styles.button}>
              <Text style={styles.TextStyle}> Save QR Code to Camera Roll </Text>
            </TouchableOpacity> 
          : null
        }
        <QRCode style={{alignItems: 'center',justifyContent: 'center'}}
          value={this.state.valueForQRCode ? this.state.valueForQRCode : 'NA'}
          size={250}
          color="black"
          backgroundColor="white"
        />
        {
          this.state.status ?         
            <TextInput
              style={styles.TextInputStyle}
              onChangeText={text => this.setState({ inputValue: text })}
              underlineColorAndroid="transparent"
              placeholder="Enter text to Generate QR Code"
            />
          : null
        }
        {
          this.state.status ?         
            <TouchableOpacity
              onPress={this.getTextInputValue}
              activeOpacity={0.7}
              style={styles.button}>
              <Text style={styles.TextStyle}> Generate QR Code </Text>
            </TouchableOpacity>
          : null
        }
      </View>
    );
  }
}
export default QR;
