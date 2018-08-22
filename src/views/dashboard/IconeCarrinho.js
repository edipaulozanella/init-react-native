import React, { Component } from "react";

import { Content, Icon } from "react-native-1app";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class IconeCarrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      if (store.item != this.state.item) this.setState({ item: store.item });
    });
  }

  openPageButton4() {
    this.props.navigation.navigate("Carrinho");
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.content}>
        <TouchableOpacity style={styles.new} elevation={5} onPress={() => this.openPageButton4()}>
          <Icon
            style={styles.icon2new}
            fromFontFamily={"Material Design Icons"}
            name={"cart-outline"}
          />
          <View style={styles.viewNew}>
            <Text style={styles.itensNew}>
              {this.props.numeroItensCarrinho}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexWrap: "nowrap",
    position: "absolute",
    padding: 10,
    right: 0,
    bottom: 0,
    left: 0
  },
  new: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flexDirection: "column",
    flexWrap: "nowrap",
    width: 60,
    borderRadius: 30,
    backgroundColor: "rgba(139,0,0,1)"
  },
  icon2new: {
    fontSize: 30,
    color: "rgba(255,255,255,1)"
  },
  viewNew: {
    alignSelf: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    padding: 3,
    borderRadius: 10,
    minWidth: 20,
    minHeight: 20,
    top: 8,
    right: 8
  },
  itensNew: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "900",
    fontSize: 12,
    maxWidth: 30
  }
});
