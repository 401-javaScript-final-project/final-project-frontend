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
  img: {
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height:100,
    marginBottom:30,
  },
  tipButton:{
    flexDirection:'row-reverse',
    justifyContent:'center',
    alignItems: "center",
    backgroundColor:'#F4F6F7',
    borderRadius:10,
    height:60,
    width:60,
    fontSize:20,
  },
  centerPay: {
    flex: 1,
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row',
    flexWrap:'wrap',
    margin: 10,
    backgroundColor:'#D5F5E3',
  },
  tipTitle: {
    fontSize:30,
    padding:10,
    marginBottom: 10,
    overflow:'hidden',
    backgroundColor:'#58D68D',
    borderRadius:10,
  },
  inputTip:{
    fontSize:30,
    height:60,
    width:150,
    backgroundColor: '#F7F9F9',
    textAlign:'center',
  },
})