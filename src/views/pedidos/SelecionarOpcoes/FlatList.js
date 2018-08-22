import React, { Component } from "react";

import { Content } from "react-native-1app";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Text
} from "react-native";
import PedidosCellOpcoes from "./CellOpcoes.js";
import * as actions_variacoes from "../../../redux/actions_variacoes";

export default class PedidosFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {}

  pushListIds(item) {
    this.props.screenProps.store.dispatch(
      actions_variacoes.adicionarOpcaoTemp(
        {
          ...item,
          qtd: 1,
          pai: item.id_pai
        },
        this.props.tempPedido,
        this.props.variacao.inteMaximo
      )
    );
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.content}>
        <View style={styles.view2}>
          <Text style={styles.text3}>
            {"Selecione os complementos desejados"}
          </Text>
          <Text style={styles.text4}>{this.props.variacao.nome}</Text>
          <Text style={styles.text5}>
            {"Mínimo de " + this.props.variacao.inteMinimo}
          </Text>
          <Text style={styles.text6}>
            {actions_variacoes.contadorItem(
              this.props.tempPedido.opcoes,
              this.props.variacao._id
            ) +
              " de " +
              this.props.variacao.inteMaximo}
          </Text>
          <View style={styles.view4} />
        </View>
        <View style={styles.view3}>
          <ScrollView style={styles.scroll}>
            {this.props.variacao && this.props.variacao.opcoes.map(item => (
              <TouchableOpacity
                style={styles.cell}
                onPress={() => {
                  this.pushListIds(item);
                }}
              >
                <PedidosCellOpcoes
                  style={styles.fragment}
                  opcao={item}
                  screenProps={this.props.screenProps}
                  navigation={this.props.navigation}
                  activity={this}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
    flexDirection: "column"
  },
  view3: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "column",
    alignSelf: "stretch",
    height: Dimensions.get("window").height - 250
  },
  scroll: {
    alignSelf: "stretch"
  },
  view2: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  text3: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    margin: 10
  },
  text4: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 18
  },
  text5: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    marginLeft: 10,
    marginBottom: 2
  },
  text6: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    marginLeft: 10
  },
  view4: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    height: 2,
    marginTop: 10,
    backgroundColor: "rgba(238,238,238,1)"
  },
  flatlist: {
    alignSelf: "stretch",
    flex: 1
  },
  cell: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  fragment: {
    alignSelf: "stretch",
    flex: 1
  }
});
