import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TextInput
} from "react-native";
// import {styles} from '../../styles/styles.js';
import { f, auth, database } from "./../../config/config.js";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    };
    // this.registerUser("testemailaddress@gmail.com", "fakepassword");

    // let that = this;

    f.auth().onAuth;
    auth.signOut()
    .then(() => {
      console.log('Logged out...')
    }).catch(() => {
      console.log('Error:', error);
    });

    f.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("Logged in", user);
      } else {
        console.log("logged out");
      }
    });
  }

  registerUser = (email, password) => {
    console.log(email, password);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userObj => console.log(email, password, userObj))
      .catch(error => console.log("error logging in", error));
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Email:</Text>
        <TextInput
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />
        <Text>Password:</Text>
        <TextInput
          onChangeText={text => this.setState({ pass: text })}
          secureTextEntry={true}
          value={this.state.pass}
        />

        <TouchableHighlight style={{ backgroundColor: "red" }}>
          <Button
            title="Sign Up"
            onPress={() => {
              this.registerUser(this.state.email, this.state.pass),
                this.props.navigation.navigate("ScannerScreen");
            }}
            // onPress={() => {this.props.navigation.navigate("LoginScreen")}
            // onPress={() => this.registerUser(this.state.email, this.state.pass)}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default SignUp;
