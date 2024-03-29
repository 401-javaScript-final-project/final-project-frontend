import React, { Component } from "react";
import { View, Text, Button, TextInput, KeyboardAvoidingView, Platform, Image } from "react-native";
import { styles } from "../../styles/styles.js";
import { f, auth, database } from "./../../config/config.js";

const keyboardVerticalOffset = Platform.OS === 'ios' ? 140 : 120

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
        <KeyboardAvoidingView style={styles.center} behavior="padding" enabled keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={ styles.horizontal }>
          <Text style={styles.mainTitle} >TIPSY</Text>
        <Image source={require('../../styles/images/hat2.png')} style={styles.img}/>
          <Text style={styles.mainTitle} >HAT</Text>
        </View>
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
        <Button 
          title="Login"
          onPress={() => {
            this.loginUser(this.state.email, this.state.pass)
              // this.props.navigation.navigate("HomeScreen");
          }}
        />
        </View>
        <View style={styles.button}>
        <Button style={styles.button}
          title="Sign Up"
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
        />
        </View>
        </KeyboardAvoidingView>
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
