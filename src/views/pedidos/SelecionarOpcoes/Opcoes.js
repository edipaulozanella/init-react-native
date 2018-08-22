import React, { Component } from "react";

import { Content, Icon, TitleBar } from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import PedidosFlatList from "./FlatList.js";
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator
} from "rn-viewpager";

export default class Opcoes extends Component {
  constructor(props) {
    super(props);
    this.state = { posicaoPage: 1 };
  }

  proximaPagina() {
    if (this.state.posicaoPage == this.props.produtoFoco.variacoes.length) {
      this.props.navigation.navigate("SelecionarProduto", {
        activity: this,
        oldState: this.state
      });
    } else {
      
      this.viewPager.setPage(
        this.state.posicaoPage < this.props.produtoFoco.variacoes.length
          ? this.state.posicaoPage + 1
          : this.props.produtoFoco.variacoes.length
      );
      this.setState({posicaoPage : this.state.posicaoPage + 1})
    }
  }

  getProps() {
    var nav = this.props.navigation;
    if (nav && nav.state && nav.state.params) {
      return this.props.navigation.state.params;
    } else {
      return {};
    }
  }

  backPageButton1() {   
    if (this.state.posicaoPage > 1) {
      var voltar = this.state.posicaoPage - 2;
      this.viewPager.setPage(voltar);
      this.setState({posicaoPage : voltar})
     } else {
       this.props.navigation.goBack();
     }
  }


  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }
  render() {
    return (
      <View style={styles.content}>
        <TitleBar style={styles.titlebar}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.backPageButton1();
            }}
          >
            <Icon
              style={styles.icon}
              fromFontFamily={"Material Icons"}
              name={"keyboard_backspace"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.produtoFoco.nome}</Text>
        </TitleBar>
        <View style={styles.view2}>
          <IndicatorViewPager
            style={{ alignSelf: "stretch", flex: 1 }}
            ref={viewPager => {
              this.viewPager = viewPager;
            }}
            onPageSelected={eve =>
              this.setState({
                posicaoPage: eve.position
              })}
            horizontalScroll={false}
          >
            {this.props.produtoFoco &&
              this.props.produtoFoco.variacoes.map(item => (
                <PedidosFlatList
                  variacao={item}
                  posicaoPage={this.state.posicaoPage}
                  screenProps={this.props.screenProps}
                  navigation={this.props.navigation}
                  tempPedido={this.props.tempPedido}
                  activity={this}
                />
              ))}
          </IndicatorViewPager>
        </View>

        <View style={styles.view10}>
          <TouchableOpacity
            style={styles.button4}
            onPress={() => {
              this.proximaPagina();
            }}
          >
            <Text style={styles.text7}>{"PRÓXIMO"}</Text>
          </TouchableOpacity>
        </View>
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
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text: {
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    alignSelf: "auto",
    fontWeight: "bold",
    fontSize: 15,
    flex: 1
  },
  view2: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  fragment: {
    alignSelf: "stretch"
  },
  view10: {
    alignSelf: "stretch",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  button4: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    backgroundColor: "rgba(140,0,0,1)"
  },
  text7: {
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 18
  }
});
