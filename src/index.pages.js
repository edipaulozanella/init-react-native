import { StackNavigator } from "react-navigation";
import { connect } from "react-redux";
import Home from "./views/Home";

export function registerScreens() {
  return {
    Home: { screen: connect()(Home), navigationOptions: { header: null } }
  };
}
