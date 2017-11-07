import React from "react";
import { AppRegistry, AppState, StyleSheet, AsyncStorage } from "react-native";
import { View, Icon, Image, Navigator, ImageUpload } from "react-native-1app";
import { StackNavigator } from "react-navigation";
import { Model, Query, Cloud } from "./infra";
import { Provider, connect } from "react-redux";
import { registerScreens } from "./index.pages.js";

var pt =require('moment/locale/pt-br');
var moment = require("moment");
moment.locale('pt-br');


import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "./redux/reducer";
import * as actions from "./redux/actions";

var pgs = registerScreens();
var store = createStore(reducers);
actions.setStore(store);

var Nav = StackNavigator(pgs);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    Model.setHost(Cloud.getHost());
    Query.setHost(Cloud.getHost());
    ImageUpload.setHost(Cloud.getHost());
    // File.setHost(Cloud.getHost());

    Model.setToken(Cloud.getToken());
    Query.setToken(Cloud.getToken());
    ImageUpload.setToken(Cloud.getToken());
    // File.setToken(Cloud.setToken());
    this.storage();
  }
  storage() {
    actions.loadRedux();
    AppState.addEventListener("change", nextAppState => {
      if (nextAppState != "active") actions.saveRedux();
    });
  }
  componentDidMount() {}

  render() {
    let screenProps = {
      store: store,
      actions: actions,
      dispatch: store.dispatch
    };
    return (
      <Provider store={store}>
        <Nav
          {...this.props}
          screenProps={screenProps}
          onNavigationStateChange={null}
          store={store}
        />
      </Provider>
    );
  }
}
