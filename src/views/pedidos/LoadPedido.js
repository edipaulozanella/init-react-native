import React, { Component } from "react";

import { Content, Icon, TitleBar } from "react-native-1app";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Opcoes from "../pedidos/SelecionarOpcoes/Opcoes.js";
import PedidosSelecionarProduto from "../pedidos/SelecionarProduto.js";
import * as actions from "../../redux/actions";
import * as produtos from "../../worker/produtos";
import LoadScreen from "../load/Tela";
import * as actions_variacoes from "../../redux/actions_variacoes";

export default class LoadPedido extends Component {
  constructor(props) {
    super(props);
    this.state = { produtoFoco: {}, load: true,tempPedido:{opcoes:[]}};
  }

  getProps() {
    var nav = this.props.navigation;
    if (nav && nav.state && nav.state.params) {
      return this.props.navigation.state.params;
    } else {
      return {};
    }
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      //console.log(store)
      if (store.produtoFoco != this.state.produtoFoco||store.tempPedido != this.state.tempPedido)
      this.setState({ produtoFoco: store.produtoFoco[0],     
      tempPedido: store.tempPedido,
      });

    });

    var produtoID = this.getProps().produto._id;
    produtos.getProdutos(produtoID, resposta => {
      var produtoFoco = actions.setProdutoEmFoco(
        resposta,
        this.props.screenProps.store
      );
      this.props.screenProps.store.dispatch(produtoFoco);
      this.props.screenProps.store.dispatch(actions_variacoes.tempItem(this.getProps().produto));
    });

    setTimeout(() => {
      this.setState({load: false})
    }, 1000);
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  backPageButton1() {
    this.props.navigation.goBack();
  }

  temVariacao() {
    return (
      this.state.produtoFoco &&
      this.state.produtoFoco.variacoes &&
      this.state.produtoFoco.variacoes.length > 0
    );
  }

  naoTemVariacao() {
    return (
      this.state.produtoFoco &&
      (!this.state.produtoFoco.variacoes ||
        this.state.produtoFoco.variacoes.length == 0)
      );
    }

    render() {

      if (this.state.load) {
        return <LoadScreen />;
      }
     
      return (
        <View style={styles.content}>
          {this.temVariacao() ? (
            <Opcoes
              style={styles.fragment1}
              produtoFoco={this.state.produtoFoco}
              screenProps={this.props.screenProps}
              navigation={this.props.navigation}
              activity={this}
              tempPedido={this.state.tempPedido}
              />
          ) : null}
          {this.naoTemVariacao() ? (
            <PedidosSelecionarProduto
              style={styles.fragment2}
              produtoFoco={this.state.produtoFoco}
              screenProps={this.props.screenProps}
              navigation={this.props.navigation}
              activity={this}
              tempPedido={this.state.tempPedido}

              />
          ) : null}
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
    icon11: {
      color: "rgba(255,255,255,1)",
      fontSize: 25
    },
    fragment1: {
      alignSelf: "stretch",
      flex: 1
    },
    fragment2: {
      alignSelf: "stretch",
      flex: 1
    }
  });
