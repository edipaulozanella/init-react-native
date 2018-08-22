import React, { Component } from "react";

import { Content,Image } from "react-native-1app";
import { View, StyleSheet } from "react-native";

export default class Abertura extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Navigator.cloneState(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
   return (
      <Content style={styles.content}>
        <Image
          style={styles.image}
          source={require("../../img/vasado.png")}
          resizeMode={"contain"}
        />
      </Content>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: "#8c0000",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  image: {
    width: 250,
    height: 120,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginBottom: 100
  }
});
