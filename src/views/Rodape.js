import React, { Component } from "react";
import { StyleSheet, Content, View, Image, Navigator } from "react-native-1app";

export default class Rodape extends Component {
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
        <View style={styles.view}>
          <Image
            style={styles.image}
            source={require("../../img/logovasado4.png")}
            resizeMode={"contain"}
          />
          <Image
            style={styles.image1}
            source={require("../../img/_logovasado2.png")}
            resizeMode={"contain"}
          />
        </View>
      </Content>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  view: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    backgroundColor: "rgba(128,55,124,1)",
    height: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    width: 30,
    height: 30,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  image1: {
    width: 50,
    height: 50,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  }
});
