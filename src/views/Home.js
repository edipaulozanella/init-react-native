import React, { Component } from "react";
import { StyleSheet, Content, View, Navigator } from "react-native-1app";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Navigator.cloneState(this);
    //this.onConstructor(props,this.state)
  }

  //START CODE

  //END CODE

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
    flexDirection: "column"
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
