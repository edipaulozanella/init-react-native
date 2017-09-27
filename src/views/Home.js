import React, { Component } from "react";
import { StyleSheet, Content } from "react-native-1app";
import Login from "./Login.js";
import Principal from "./Principal.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    //this.onConstructor(props,this.state)
  }

  //START CODE
  onRender() {
    if (!this.state.user_local) {
      return (
        <Login
          ref={v => (this.login = v)}
          screenProps={this.props.screenProps}
          navigation={this.props.navigation}
          activity={this}
          oldState={this.state}
        />
      );
    } else {
      return (
        <Principal
          ref={v => (this.principal = v)}
          screenProps={this.props.screenProps}
          navigation={this.props.navigation}
          activity={this}
          oldState={this.state}
        />
      );
    }
  }
  //END CODE

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      this.setState(this.props.screenProps.store.getState());
    });

    //this.onDidMount()
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    let back = this.onRender();
    if (back) {
      return back;
    }

    return <Content style={styles.content} />;
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
  }
});
