import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "../../styles/styles.js";
import { f, auth, database } from "./../../config/config.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    // this.registerUser("testemailaddress@gmail.com", "fakepassword");

    let that = this;

    f.auth().onAuthStateChanged(function(user) {
      if (user) {
        //  Logged In 
        that.setState({
          loggedIn: true
        });
      console.log('logged in', user);
      } else {
        // Logged Out
        that.setState({
          loggedIn:  false
        });
        console.log('Logged out');
      }
    });
  }

  loginUser = async (email, pass) => {
    if(email !== '' && pass !== '') {
      try{
        let user = await auth.signInWithEmailAndPassword(email, pass);
        this.props.navigation.navigate("HomeScreen");
        console.log(user);
      } catch(error) {
        console.log(error);
      }
    } else {
      alert('Missing email or password');
    }
  }

  signUserOut = () => {
    auth.signOut()
    .then(() => {
      console.log('Logged out...');
    }).catch((error) => {
      console.log('Error:', error);
    })
  }

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
        <Button
          title="Login"
          onPress={() => {
            this.loginUser(this.state.email, this.state.pass)
              // this.props.navigation.navigate("HomeScreen");
          }}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
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
