import React, { Component } from "react";

import { Content, Icon, TitleBar } from "react-native-1app";
import { StyleSheet, View, TouchableOpacity } from "react-native";

export default class Tela extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.content}>
        <TitleBar style={styles.titlebar}>
         
        </TitleBar>
      </View>
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
  titlebar: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "#8C0000"
  },
  button1: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    width: 50
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  }
});
