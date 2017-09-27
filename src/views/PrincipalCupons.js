"use strict";
import React from "react";
import { Cloud, Model, Query } from "../infra";
import { styleGlobal } from "../styleGlobal";
import { KeyboardAvoidingView, Platform, Linking, Share } from "react-native";
import {
  TouchableOpacity,
  Image,
  Text,
  Navigator,
  View,
  Component,
  StyleSheet,
  Fragment,
  PageView
} from "react-native-1app";
import Carrossel from "./Carrossel";
import PgCupom from "./PgCupom";
import { Dimensions } from "react-native";

//nao atualizar
export default class HomePricipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cupons: new Dados("cupons"),
      itens_cupons: [],
      load_cupons: true
    };
    Navigator.cloneState(this);
    //this.onConstructor(props,this.state)
  }

  //START CODE
  get_data_cupons() {
    var query = new Query("cupons");
    query.setLimit(5);
    query.cloud(lista => {
      lista.push({
        testCupom: true
      });
      this.setState({
        itens_cupons: lista,
        load_cupons: false
      });
    });
  }
  //END CODE

  componentDidMount() {
    this.get_data_cupons();

    //this.onDidMount()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps != this.props) {
      //this.onUpdate(nextProps,nextState)
    }
    return true;
  }

  render() {
    return (
      <View style={styles.tela}>
        <View
          style={styles.view}
          superStyle={{ height: 88 * (Dimensions.get("window").width / 100) }}
        >
          <Fragment
            style={styles.fragment}
            ref={v => (this.fragment = v)}
            activity={this}
          >
            <Carrossel
              activity={this}
              ref={v => (this.Carrossel = v)}
              heranca={this.state}
              navigator={this.state.navigator}
            />
          </Fragment>
        </View>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Image
              style={styles.image2}
              resizeMode={Image.resizeMode.contain}
              source={require("../img/desconto_b.png")}
            />
            <Text
              style={styles.label}
              text={"Confira! Mais de 50 CUPONS para você"}
            />
          </View>
          <PageView
            style={styles.cupons}
            ref={v => (this.cupons = v)}
            dataSource={this.state.itens_cupons}
            renderRow={(rowData, sectionID, rowID) => {
              return (
                <Page1
                  cupons={rowData}
                  heranca={this.state}
                  activity={this}
                  navigator={this.state.navigator}
                  rowID={rowID}
                  sectionID={sectionID}
                />
              );
            }}
          />
        </View>
      </View>
    );
  }
}

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cupons: new Dados("cupons")
    };
    Navigator.cloneState(this);
  }
  componentDidMount() {}
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps != this.props) {
      Navigator.updateState(nextProps, nextState);
    }
    return true;
  }

  open_pg_bottom0() {
    this.state.navigator.push({
      pageName: "PgCupom",
      component: PgCupom,
      props: {
        heranca: this.state,
        activity: this
      }
    });
  }
  render() {
    return (
      <View style={styles.page1}>
        {!this.state.cupons.testCupom ? (
          <TouchableOpacity
            style={styles.bottom0}
            onPress={() => {
              this.open_pg_bottom0();
            }}
          >
            <Image
              style={styles.image}
              resizeMode={Image.resizeMode.cover}
              source={{ uri: this.state.cupons.image }}
            >
              <View style={styles.view3}>
                <Image
                  style={styles.image1}
                  resizeMode={Image.resizeMode.cover}
                  source={require("../img/desconto2.png")}
                />
                <Text style={styles.nome} text={this.state.cupons.nome} />
              </View>
            </Image>
          </TouchableOpacity>
        ) : null}
        {this.state.cupons.testCupom ? (
          <TouchableOpacity
            style={styles.bottom1}
            onPress={() => {
              this.state.activity.state.activity.open_fragment_bottom14();
            }}
          >
            <Image
              style={styles.image3}
              resizeMode={Image.resizeMode.contain}
              source={require("../img/todos_cupons.png")}
              widthScreen={true}
            >
              <View style={styles.view4} />
            </Image>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  tela: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  view: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    position: "relative"
  },
  fragment: {
    alignSelf: "stretch",
    flex: 1
  },
  view1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    minHeight: 200,
    flex: 1,
    backgroundColor: "rgba(89,111,208,1)"
  },
  view2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    height: 50,
    backgroundColor: "rgba(128,55,124,1)",
    paddingLeft: 10,
    paddingRight: 10
  },
  image2: {
    width: 30,
    height: 30,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    marginRight: 10
  },
  label: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 13,
    fontWeight: "600"
  },
  cupons: {
    alignSelf: "stretch",
    flex: 1
  },
  page1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  bottom0: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "nowrap",
    position: "relative",
    flex: 1
  },
  image: {
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    flex: 1
  },
  view3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    padding: 10
  },
  image1: {
    width: 50,
    height: 50,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    position: "relative"
  },
  nome: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,206,6,1)",
    alignSelf: "stretch",
    marginLeft: 10,
    fontSize: 17
  },
  bottom1: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "nowrap",
    position: "relative",
    flex: 1,
    backgroundColor: "rgba(83,37,116,1)"
  },
  image3: {
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    flex: 1
  },
  view4: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    position: "relative",
    padding: 10
  }
});
