import { StackNavigator } from "react-navigation";
 import {connect} from "react-redux"
import   Home from './views/Home';
import   Pesquisa from './views/Pesquisa'; 

 export function registerScreens() {
 return {
 Home: {  screen: connect()(Home),  navigationOptions: {   header: null  } },
 Pesquisa:{  screen: connect()(Pesquisa),  navigationOptions: {   header: null  } },

};
}
