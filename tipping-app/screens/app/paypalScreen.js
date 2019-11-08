import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
// ...
class PaypalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.getParam("data", "No data read"),
      payment: "10.00"
    };

    // submitData = () => {
    //   // console.log("this is in the submit state  🤬🤬🤬🤯🤯", this.state);
    //   alert("this is in the submit state  🤬🤬🤬🤯🤯", this.state);
    //   window.ReactNativeWebView.postMessage('navigationStateChange');
    //   // this.refs.webview.postMessage(window.alert(JSON.stringify(this.state)));
    //   console.log("this is in the submit state  🤬🤬🤬🤯🤯", this.state);
    // };
    // console.log("😛😋😛🤨🙁", this.state);
    // handleMessage = event => {
    //   // window.ReactNativeWebView.postMessage("Hello React Native!");
    //   let data = event.nativeEvent.data;
    //   console.log("Hello IM in handleMessage", data);
    // };
    // this.window.ReactNativeWebView.postMessage("Hello React Native!");
  }

  // componentDidMount() {
  //   const qrCodeData = this.props.navigation.getParam("data", "No data read");
  //   this.setState({ qrCodeData: qrCodeData });
  //   console.log(qrCodeData);
  // }

  componentDidMount() {
    // window.postMessage("hello world");
  }
  render() {
    const stringState = JSON.stringify(this.state);

    console.log("this is the stringified state", stringState);

    const runFirst = `
      let injectedData = JSON.parse('${stringState}');
      alert('${stringState}');
      console.log(${stringState});
      true; // note: this is required, or you'll sometimes get silent failures
    `;

    // console.log("this is state in render", this.state);

    // window.ReactNativeWebView.postMessage("Hello React Native!");
    // this.refs.window.postMessage("Hello React Navtive");
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={webView => (this.webView = webView)}
          source={{
            uri: "https://magicmanj27.github.io/newpaypal/"
          }}
          // onMessage={event => {
          //   const { data } = event.nativeEvent;
          //   console.log(data);
          // }}
          // onMessage={event => this.handleMessage(event)}
          onLoadStart={() => {
            let injectedData = this.stringState;
            return injectedData;
          }}
          injectedJavaScript={runFirst}
          javaScriptEnabled={true}
          startInLoadingState={true}
        />
      </View>
    );
  }
}
export default PaypalView;

// export default class PaymentScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { qrCodeData: " ", scanner: undefined };
//   }

//   componentDidMount() {
//     const qrCodeData = this.props.navigation.getParam("data", "No data read");
//     this.setState({ qrCodeData: qrCodeData });
//     console.log(qrCodeData);
//   }

//   // componentDidMount() {
//   //   const paypal = document.createElement("script");

//   //   console.log(paypal);

//   //   paypal.src =
//   //     "https://www.paypal.com/sdk/js?client-id=AT5KkBmP0fPPST3QSp3qM3oGm3_z7FooRJDw9bnisDat21I3S-KT4HGrNu5zVvw-qjJGFxjlSKzjrX0J";
//   //   script.async = true;

//   //   console.log(payal);

//   //   document.body.appendChild(paypal);
//   // }

//   render() {
//     // const html =
//     //   '<html><head></head><body><div id="paypal-button-container"></div><script type="text/javascript" src="https://www.paypal.com/sdk/jsclient-id=AT5KkBmP0fPPST3QSp3qM3oGm3_z7FooRJDw9bnisDat21I3S-KT4HGrNu5zVvw-qjJGFxjlSKzjrX0J"></script>    </body></html>';
//     return (
//       <View style={styles.container}>
//           <WebView
//           source={{uri: 'https://www.youtube.com/embed/MhkGQAoc7bc'}}
//           style={styles.video}
//         />
//         <WebView
//           source={{uri: 'https://www.youtube.com/embed/PGUMRVowdv8'}}
//           style={styles.video}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "space-between"
//   },
//   video: {

// marginTop: 20,
//     maxHeight: 200,
//     width: 320,
//     flex: 1
//   }
// });
