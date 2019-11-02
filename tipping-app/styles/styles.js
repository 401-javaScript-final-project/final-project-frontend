import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor:'#D5F5E3',
  },
  title: {
    fontSize:20,
    padding:10,
    marginBottom: 10,
    overflow:'hidden',
    backgroundColor:'#58D68D',
    borderRadius:10,
  },
  textInput: {
    backgroundColor: '#F7F9F9',
    borderWidth: 1,
    width: '70%',
    padding: 10,
    textAlign: 'center',
    marginBottom:20,
    borderRadius:10,
  },
  button: {
    margin: 5,
    flexDirection: 'row',
    backgroundColor:'#F4F6F7',
    borderRadius:10
  }
});
