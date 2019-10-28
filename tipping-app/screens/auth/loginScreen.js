import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../../styles/styles.js';
import { f, auth, database } from "./../../config/config.js";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    };
    // this.registerUser("testemailaddress@gmail.com", "fakepassword");

    let that = this;

    f.auth().onAuthStateChanged(function(user) {
      if(user) {
        console.log('Logged in', user);  
      } else {
        console.log('logged out');
      }
    })
  }

  

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUpScreen')}
        />
      </View>
    );
  }
}

export default Login;










// import { StyleSheet, View, Text, Button } from 'react-native';





// export default class LoginScreen extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return <Text style={{paddingTop:20}}>LoginScreen</Text>
//   }
// }

// const styles = StyleSheet.create({

// });


// export default class LoginScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     // const {navigate} = this.props.navigation;
//     return (
//       <Button
//         title="Login"
//         onPress={() => this.props.navigation.navigate('Signup')}
//       />
//     );
//   }
// }