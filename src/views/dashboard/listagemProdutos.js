import React, { Component } from "react";

import { Content } from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  RefreshControl
} from "react-native";
import DashboardCellProdutos from "../dashboard/CellProdutos.js";

export default class ListagemProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      produtos: []
    };
    var produto = this.getProps().produtos;
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
      if (!store.produtos) return;
      if (store.produtos != this.state.produtos)
        this.setState({ produtos: store.produtos, load: false });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.content}>
        <View style={styles.view2}>
          <Text style={styles.text}>{this.props.nome}</Text>
        </View>
        <FlatList
          style={styles.flatlist}
          renderItem={({ item, index }) => {
            return (
              <Cellflatlist
                produto={item}
                screenProps={this.props.screenProps}
                activity={this}
                navigation={this.props.navigation}
                rowID={index}
              />
            );
          }}
          data={this.props.produtos}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

class Cellflatlist extends Component {
  constructor(props) {
    super(props);
  }

  openPageButton() {
    this.props.navigation.navigate("LoadPedido", {
      activity: this,
      produto: this.props.produto,
      oldState: this.state
    });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.openPageButton();
        }}
        style={styles.cell}
      >
        <DashboardCellProdutos
          style={styles.fragment}
          produto={this.props.produto}
          screenProps={this.props.screenProps}
          navigation={this.props.navigation}
          activity={this}
        />
      </TouchableOpacity>
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
  view2: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10
  },
  text: {
    textAlign: "left",
    fontSize: 17,
    margin: 10,
    flex: 1
  },
  flatlist: {
    alignSelf: "stretch"
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
