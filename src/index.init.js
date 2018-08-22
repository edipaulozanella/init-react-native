import React from "react";
import { AppRegistry, AppState, StyleSheet, AsyncStorage } from "react-native";
import { View, Icon, Image, Navigator, ImageUpload } from "react-native-1app";
import { StackNavigator } from "react-navigation";
import { Cloud } from "./infra";
import { Provider, connect } from "react-redux";
import { registerScreens } from "./index.pages.js";
import { registerLoginScreens } from "./index.login.js";
import Abertura from "./views/Abertura";
import * as Action from "./redux/actions";
var pt = require("moment/locale/pt-br");
var moment = require("moment");
moment.locale("pt-br");

import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "./redux/reducer";
import * as actions from "./redux/actions";
// import * as login from "./redux/actions/login";

var pgs = registerScreens();
var pgsLogin = registerLoginScreens();
var store = createStore(reducers);
console.disableYellowBox = true;

var NavLogin = StackNavigator(pgsLogin);
var Nav = StackNavigator(pgs);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { abertura: true,      
    };
    Action.setStore(store);
    Action.loadRedux(store.dispatch);
    ImageUpload.setHost(Cloud.getHost());
    // File.setHost(Cloud.getHost());
    ImageUpload.setToken(Cloud.getToken());
    // File.setToken(Cloud.setToken());
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      var state = store.getState();
      if (state.user != this.state.user) {
        this.setState({ user: state.user });
      }
    });

    setTimeout(() => {
      this.setState({ abertura: false });
    }, 1500);

    // login.loadUser(user => {
    //   store.dispatch(actions.logar(user,store));
    // });
    AppState.addEventListener("change", state => {
      if (state == "inactive" || state == "background") actions.saveRedux();
    });
  }

  render() {
    let screenProps = {
      store: store,
      actions: actions,
      dispatch: store.dispatch
    };

    if (this.state.abertura) {
      return <Abertura />;
    }

    if (!this.state.user) {
      return (
        <Provider store={store}>
          <NavLogin
            {...this.props}
            store={store}
            screenProps={screenProps}
            onNavigationStateChange={null}
            store={store}
          />
        </Provider>
      );
    }
    return (
      <Provider store={store}>
        <Nav
          {...this.props}
          store={store}
          screenProps={screenProps}
          onNavigationStateChange={null}
          store={store}
        />
      </Provider>
    );
  }
}
