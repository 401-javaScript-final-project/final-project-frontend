import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScannerScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}


// // /This is an example code to generate QR code//
// import React, { Component } from 'react';
// //import react in our code.
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// // import all basic components
// import QRCode from 'react-native-qrcode-svg';
 
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inputValue: '',
//       // Default Value of the TextInput
//       valueForQRCode: '',
//       // Default value for the QR Code
//     };
//   }
//   getTextInputValue = () => {
//     // Function to get the value from input
//     // and Setting the value to the QRCode
//     this.setState({ valueForQRCode: this.state.inputValue });
//   };
//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <QRCode
//           //QR code value
//           value={this.state.valueForQRCode ? this.state.valueForQRCode : 'NA'}
//           //size of QR Code
//           size={250}
//           //Color of the QR Code (Optional)
//           color="black"
//           //Background Color of the QR Code (Optional)
//           backgroundColor="white"
//           //Center Logo size  (Optional)
//           logoSize={30}
//           //Center Logo margin (Optional)
//           logoMargin={2}
//           //Center Logo radius (Optional)
//           logoBorderRadius={15}
//           //Center Logo background (Optional)
//           logoBackgroundColor="yellow"
//         />
//         <TextInput
//           // Input to get the value to set on QRCode
//           style={styles.TextInputStyle}
//           onChangeText={text => this.setState({ inputValue: text })}
//           underlineColorAndroid="transparent"
//           placeholder="Enter text to Generate QR Code"
//         />
//         <TouchableOpacity
//           onPress={this.getTextInputValue}
//           activeOpacity={0.7}
//           style={styles.button}>
//           <Text style={styles.TextStyle}> Generate QR Code </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// export default App;

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     margin: 10,
//     alignItems: 'center',
//     paddingTop: 40,
//   },
//   TextInputStyle: {
//     width: '100%',
//     height: 40,
//     marginTop: 20,
//     borderWidth: 1,
//     textAlign: 'center',
//   },
//   button: {
//     width: '100%',
//     paddingTop: 8,
//     marginTop: 10,
//     paddingBottom: 8,
//     backgroundColor: '#F44336',
//     marginBottom: 20,
//   },
//   TextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//   },
// });




