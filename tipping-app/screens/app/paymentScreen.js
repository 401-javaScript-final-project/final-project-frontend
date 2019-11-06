import * as React from "react";
import { Text, View, StyleSheet, Button,Image } from "react-native";
import Constants from "expo-constants";
import {styles} from '../../styles/styles.js';
import SearchableDropdown from 'react-native-searchable-dropdown';



//Item array for the dropdown
const amounts = [
  //name key is must.It is to show the text in front
  { id: 1, name: 1 },
  { id: 2, name: 5 },
  { id: 3, name: 10 },
  { id: 4, name: 15 },
  { id: 5, name: 20 },
  { id: 6, name: 25 },
  { id: 7, name: 30 },
  { id: 8, name: 35 },
  { id: 9, name: 40 },
  { id: 10, name: 45 },
  { id: 10, name: 50 },
];

export default class PaymentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      qrCodeData: " ", 
      scanner: undefined,
      amountText: "Amount"
    };
  }

  componentDidMount() {
    const qrCodeData = this.props.navigation.getParam( "data", "No data read" );
    this.setState({ qrCodeData: qrCodeData})
    console.log(qrCodeData);
  }

  render() {
    return (
      
      <View style={styles.center}>
        <Text style={styles.title}>
          How much would you like to tip?
        </Text>
        <View style={styles.tipButton}>
      <Button
      title="TIP"
      onPress={() => Alert.alert('Tip button pressed')}
      />

  <SearchableDropdown
    onTextChange={text => console.log(text)}
    //On text change listner on the searchable input
    onItemSelect={item => alert(JSON.stringify(item))}
    //onItemSelect called after the selection from the dropdown
    containerStyle={{ padding: 5 }}
    //suggestion container style
    textInputStyle={{
      //inserted text style
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#FAF7F6',
    }}
    itemStyle={{
      //single dropdown item style
      padding: 10,
      marginTop: 2,
      backgroundColor: '#FAF9F8',
      borderColor: '#bbb',
      borderWidth: 1,
    }}
    itemTextStyle={{
      //text style of a single dropdown item
      color: '#222',
    }}
    itemsContainerStyle={{
      //items container style you can pass maxHeight
      //to restrict the items dropdown hieght
      maxHeight: '60%',
    }}
    items={amounts}
    //mapping of item array
    defaultIndex={2}
    //default selected item index
    placeholder="Amount"
    //place holder for the search input
    resetValue={false}
    //reset textInput Value with true and false state
    underlineColorAndroid="transparent"
    //To remove the underline from the android input
  />

        </View>
    <Image source={require('../../styles/images/hat2.png')} style={styles.img}/>
        {/* <View style={styles.button}>
        <Text style={{ marginLeft: 10 }}>
        </Text>
        <Button 
          title="Login"
          onPress={() => {
            this.signUserOut();
          }}
        /> 
        </View> */}
      </View>
    );
  }
}
