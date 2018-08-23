import React from "react";
import { AppRegistry, AppState, StyleSheet, AsyncStorage } from "react-native";
import { View,ImageUpload,FlashMessage,InitApp } from "react-native-1app";
import { StackNavigator } from "react-navigation";
import { Cloud } from "./infra";
import { Provider, connect } from "react-redux";
import { registerScreens } from "./index.pages.js";
import Abertura from "./views/Abertura";
// import FlashMessage from "react-native-flash-message";



var pt = require("moment/locale/pt-br");
var moment = require("moment");
moment.locale("pt-br");

import { createStore, applyMiddleware, combineReducers } from "redux";
import reducers from "./redux/reducer";
import * as actions from "./redux/actions";
// import * as login from "./redux/actions/login";

var pgs = registerScreens();
var store = createStore(reducers);
console.disableYellowBox = true;

var Nav = StackNavigator(pgs);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { abertura: true };
    actions.setStore(store);
    // actions.loadRedux()
    ImageUpload.setHost(Cloud.getHost());
    // File.setHost(Cloud.getHost());
    ImageUpload.setToken(Cloud.getToken());
    // File.setToken(Cloud.setToken());


  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({ abertura: false });
      // console.log(store.getState());
      // if(store.getState().user_local&&store.getState().user_local.objectId) saveToken(store.getState().user_local.objectId);
    }, 1500);
    // setTimeout(() => {
    //   this.showScaleAnimationDialog();
    // }, 15000);
    // login.loadUser(user => {
    //   store.dispatch(actions.logar(user,store));
    // });
    AppState.addEventListener("change", state => {
      if (state == "inactive"||state == "background") actions.saveRedux();
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
    return (
      <View style={{  alignSelf: "stretch",
        flex: 1}}>
        <Provider store={store}>
          <Nav
            {...this.props}
            store={store}
            screenProps={screenProps}
            onNavigationStateChange={null}
            store={store}
            />
        </Provider>
        <InitApp {...this.props}/>
      </View>

    );
  }
}