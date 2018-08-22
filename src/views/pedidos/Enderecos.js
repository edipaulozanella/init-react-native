import React, { Component } from "react";

import { Content, Icon, TitleBar } from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import * as usuario from "../../worker/usuario";

export default class Enderecos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_enderecos: this.props.screenProps.store.getState().user_enderecos
    };
    this.buscarServidor();
  }

  buscarServidor() {
    usuario.getEnderecosUsuario(res =>
      this.props.screenProps.store.dispatch({
        type: "SET_ENDERECOS_USER",
        user_enderecos: res
      })
    );
  }

  openPageButton4() {
    this.props.navigation.navigate("AddEndereco");
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      console.log(store);
      if (store.user_enderecos != this.state.user_enderecos)
        this.setState({ user_enderecos: store.user_enderecos });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  backPageButton1() {
    this.props.navigation.goBack();
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
              style={styles.icon11}
              fromFontFamily={"Material Icons"}
              name={"keyboard_backspace"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{"Meus Endereços"}</Text>
        </TitleBar>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text style={styles.text2}>{"Selecione um endereço"}</Text>
          </View>
          <View style={styles.view4}>
            <FlatList
              style={styles.flatlist}
              renderItem={({ item, index }) => {
                return (
                  <Cell
                    item={item}
                    screenProps={this.props.screenProps}
                    activity={this}
                    navigation={this.props.navigation}
                    rowID={index}
                  />
                );
              }}
              data={this.state.user_enderecos}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
        <View style={styles.content1}>
          <TouchableOpacity
            style={styles.new1}
            onPress={() => {
              this.openPageButton4();
            }}
            elevation={5}
          >
            <Icon
              style={styles.icon2new1}
              fromFontFamily={"Material Design Icons"}
              name={"map-marker"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <TouchableOpacity
        style={styles.cell}
        screenProps={this.props.screenProps}
        navigation={this.props.navigation}
        activity={this}
      >
        <View style={styles.view5}>
          <Text style={styles.text3}>{this.props.item.endereco}</Text>
        </View>
        <View style={styles.view6}>
          <Icon
            style={styles.icon2}
            fromFontFamily={"Material Design Icons"}
            name={"map-marker-circle"}
          />
        </View>
      </TouchableOpacity>
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
  view3: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "rgba(238,238,238,1)",
    padding: 10
  },
  text2: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 14
  },
  view4: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
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
    alignItems: "center",
    justifyContent: "flex-start",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(238,238,238,1)"
  },
  view5: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  text3: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "bold"
  },
  view6: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 35
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 25
  },
  content1: {
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
  new1: {
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
  icon2new1: {
    fontSize: 30,
    color: "rgba(255,255,255,1)"
  }
});
