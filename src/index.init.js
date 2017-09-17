import React from "react";
import { AppRegistry, AppState, StyleSheet } from "react-native";
import { View, Icon, Image, Navigator } from "react-native-1app";
import { StackNavigator } from "react-navigation";

import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducer";
import * as actions from "./redux/actions";
import { registerScreens } from "./index.pages.js";

var pgs = registerScreens();
var store = createStore(reducers);
var Nav = StackNavigator(pgs);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let screenProps = {
      store: store,
      actions: actions,
      dispatch: store.dispatch
    };
    return (
      <Provider store={store}>
        <Nav {...this.props} screenProps={screenProps} store={store} />
      </Provider>
    );
  }
}
