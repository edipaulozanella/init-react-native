import {
    createDrawerNavigator,createBottomTabNavigator
} from "react-navigation";
import {
    connect
} from "react-redux"
import Login from './views/Login';
import React from "react";
  

export function registerLoginScreens() {
    return {
        Login:{
          screen: connect()(Login),
          navigationOptions: {
            header: null
          }
        },  
    };
}