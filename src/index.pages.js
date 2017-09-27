import { StackNavigator } from "react-navigation"; 
 import {connect} from "react-redux"
import   Home from './views/Home'; 
import   Login from './views/Login'; 
import   Rodape from './views/Rodape'; 
import   Principal from './views/Principal'; 

 export function registerScreens() { 
 return {  
 Home: {  screen: connect()(Home),  navigationOptions: {   header: null  } }, 
  Login: {  screen: connect()(Login),  navigationOptions: {   header: null  } },
  Rodape: {  screen: connect()(Rodape),  navigationOptions: {   header: null  } },
  Principal: {  screen: connect()(Principal),  navigationOptions: {   header: null  } },
 
};
} 