import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // padding: 10,
  },
    MainContainer: {
      flex: 1,
      margin: 10,
      alignItems: 'center',
      paddingTop: 40,
    },
    TextInputStyle: {
      width: '100%',
      height: 40,
      marginTop: 20,
      borderWidth: 1,
      textAlign: 'center',
    },
    button: {
      width: '100%',
      paddingTop: 8,
      marginTop: 10,
      paddingBottom: 8,
      backgroundColor: '#F44336',
      marginBottom: 20,
    },
    TextStyle: {
      color: '#fff',
      textAlign: 'center',
      // fontSize: 18,
    },
  })