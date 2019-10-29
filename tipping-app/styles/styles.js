import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 200
  },
  button: {
    margin: 10,
    flexDirection: 'row',
  }
});
