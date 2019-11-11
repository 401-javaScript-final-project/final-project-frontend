import * as React from "react";
import { Text, View, StyleSheet, Button, ActivityIndicator } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { styles } from "../../styles/stylesSheets/styles.js";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class ScannerScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <View style={styles.center}>
      <Text>Requesting for camera permission</Text>
        {/* <ActivityIndicator size="large" color="#0000ff" /> */}
      </View> 
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    // this.setState({ scanned: true });
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    // if(type.startsWith('org.iso.QRCode')) {
    //   this.props.navigation.navigate("HomeScreen");
    // }
    console.log('type', typeof type)
    console.log('data', data)
    if (
      (type === this.state.scanned.type && data === this.state.scanned.data) ||
      data === null
    ) {
      return;
    }

    // Vibration.vibrate();
    this.setState({ scanned: true });

    if (type.startsWith("org.iso.QRCode")) {
      // Do something for EAN
      console.log(`QR scanned: ${data}`);
      // this.resetScanner();
      this.props.navigation.navigate("PaymentScreen", { data: data });
    }
  };
}
