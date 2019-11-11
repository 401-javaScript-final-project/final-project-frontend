import * as React from "react";

import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Keyboard
} from "react-native";

import Constants from "expo-constants";
import { styles } from "../../styles/stylesSheets/tipStyle.js";

export default class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      qrCodeData: "",
      tipAmount: 0.0
    };
    console.log("this is state from props", this.state);
  }

  componentDidMount() {
    const qrCodeData = this.props.navigation.getParam("data", "No data read");
    this.setState({ qrCodeData: qrCodeData });
    console.log(qrCodeData);
  }

  handlePaypal() {
    this.props.navigation.navigate("PaypalScreen", { data: this.state });
  }

  showAlert = () => {
    Alert.alert(
      "Tipping",
      `Are you sure you want to tip $${this.state.tipAmount} to ${this.state.qrCodeData}?`,
      [
        {
          text: "Yes",
          onPress: () => this.handlePaypal()
        },
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
    Keyboard.dismiss();
  };

  validAmount = () => {
    if (!this.state.tipAmount || isNaN(this.state.tipAmount))
      Alert.alert("Enter an amount");
    else {
      this.showAlert();
    }
    Keyboard.dismiss();
  };
  render() {
    console.log("this is state from render", this.state);
    return (
      <View style={styles.centerPay}>
        <TouchableOpacity disabled={true}>
          <Text style={styles.tipTitle}> $ </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.inputTip}
          keyboardType="numeric"
          placeholder="0.00"
          onChangeText={text =>
            this.setState({
              tipAmount: parseFloat(text).toFixed(2)
            })
          }
        />

        <View style={styles.tipButton}>
          <Button title="Tip" onPress={this.validAmount} />
        </View>
        <Image
          source={require("../../styles/images/hat2.png")}
          style={styles.img}
        />
      </View>
    );
  }
}

//   render() {
//     return (

//       <View style={styles.center}>
//         <Text style={styles.title}>
//           How much would you like to tip?
//         </Text>
//         <View style={styles.tipButton}>
//       <Button
//       title="TIP"
//       onPress={() => Alert.alert('Tip button pressed')}
//       />

//   <SearchableDropdown
//     onTextChange={text => console.log(text)}
//     //On text change listner on the searchable input
//     onItemSelect={item => alert(JSON.stringify(item))}
//     //onItemSelect called after the selection from the dropdown
//     containerStyle={{ padding: 5 }}
//     //suggestion container style
//     textInputStyle={{
//       //inserted text style
//       padding: 12,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       backgroundColor: '#FAF7F6',
//     }}
//     itemStyle={{
//       //single dropdown item style
//       padding: 10,
//       marginTop: 2,
//       backgroundColor: '#FAF9F8',
//       borderColor: '#bbb',
//       borderWidth: 1,
//     }}
//     itemTextStyle={{
//       //text style of a single dropdown item
//       color: '#222',
//     }}
//     itemsContainerStyle={{
//       //items container style you can pass maxHeight
//       //to restrict the items dropdown hieght
//       maxHeight: '60%',
//     }}
//     items={amounts}
//     //mapping of item array
//     defaultIndex={2}
//     //default selected item index
//     placeholder="Amount"
//     //place holder for the search input
//     resetValue={false}
//     //reset textInput Value with true and false state
//     underlineColorAndroid="transparent"
//     //To remove the underline from the android input
//   />

//         </View>
//     <Image source={require('../../styles/images/hat2.png')} style={styles.img}/>
//         {/* <View style={styles.button}>
//         <Text style={{ marginLeft: 10 }}>
//         </Text>

//         <Button

//           title="Login"
//           onPress={() => {
//             this.signUserOut();
//           }}
//         /> */}
//         {/* </View> */}
//       </View>
//     );
//   }
// }
