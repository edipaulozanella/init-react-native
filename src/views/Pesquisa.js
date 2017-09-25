import React, { Component } from "react";
import {
  StyleSheet,
  Navigator,
  Content,
  Text,
  TitleBar
} from "react-native-1app";

export default class Pesquisa extends Component {
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
        <TitleBar style={styles.titlebar} activity={this}>
          <Text style={styles.text} text={"çklçk"} />
        </TitleBar>
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
  titlebar: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "rgba(139,87,42,1)"
  },
  text: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch"
  }
});
