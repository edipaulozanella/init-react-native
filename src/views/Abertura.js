import React, { Component } from "react";

import { Content, Navigator } from "react-native-1app";
import { View, StyleSheet } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Navigator.cloneState(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Content style={styles.content}>
        <View style={styles.view} />
      </Content>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 30
  },
  view: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "rgba(129,105,105,0.58)"
  }
});
