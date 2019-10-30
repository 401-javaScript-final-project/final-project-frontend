import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TextInput
} from "react-native";
import {styles} from '../../styles/styles.js';
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
      <View style={styles.center}>
        <Text style={styles.title}>Email:</Text>
        <TextInput style={styles.textInput}
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />
        <Text style={styles.title}>Password:</Text>
        <TextInput style={styles.textInput}
          onChangeText={text => this.setState({ pass: text })}
          secureTextEntry={true}
          value={this.state.pass}
        />
        <View style={styles.button}>
        <TouchableHighlight style={styles.title}>
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
      </View>
    );
  }
}

export default SignUp;
