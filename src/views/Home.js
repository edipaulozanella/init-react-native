import React, { Component } from "react";

import { Content } from "react-native-1app";
import { StyleSheet, View } from "react-native";
import Dashboard from "./dashboard/Dashboard.js";
import Login from "./Login.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {user:this.props.screenProps.store.getState().user};
    this.state = {};
  }

  render() {
    return (
      <Content style={styles.content}>
          <Dashboard
            style={styles.fragment1}
            screenProps={this.props.screenProps}
            navigation={this.props.navigation}
            activity={this}
          />
       

        
      </Content>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(218,218,218,1)",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  fragment1: {
    alignSelf: "stretch",
    flex: 1
  },
  fragment2: {
    alignSelf: "stretch",
    flex: 1
  }
});
