import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './../screens/auth/loginScreen';
import SignupScreen from '../screens/auth/signupScreen';


const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen},
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;