import React, { Component } from "react";

import { Content, Icon } from "react-native-1app";
import { StyleSheet, View, Text } from "react-native";
import * as Parse from "../../../infra/Util";
import * as actions_variacoes from "../../../redux/actions_variacoes";

export default class CellOpcoes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isCheck() {
    let { tempPedido } = this.props.screenProps.store.getState();
    return actions_variacoes.isCheckedOpcao(
      this.props.opcao._id,
      tempPedido && tempPedido.opcoes ? tempPedido.opcoes : []
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.content}>
        <View style={styles.view2}>
          {this.isCheck() ? (
            <Icon
              style={styles.icon1}
              fromFontFamily={"Material Design Icons"}
              name={"checkbox-marked-circle"}
            />
          ) : (
            <Icon
              style={styles.icon1}
              fromFontFamily={"Material Design Icons"}
              name={"checkbox-blank-circle-outline"}
            />
          )}

          <Text style={styles.text1}>{this.props.opcao.nome}</Text>
          <Text style={styles.text31}>
            {Parse.parseMoney(this.props.opcao.doubValor)}
          </Text>
        </View>
        <View style={styles.view4} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "column"
  },
  view2: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    marginRight: 15
  },
  text1: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "bold",
    flex: 0.8,
    fontSize: 15
  },
  text31: {
    textAlign: "left",
    flex: 0.2,
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "normal"
  },
  view4: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    height: 2,
    marginTop: 10,
    backgroundColor: "rgba(238,238,238,1)"
  }
});
