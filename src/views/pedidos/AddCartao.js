import React, { Component } from "react";

import { Content, Icon, Image, TextInput, TitleBar } from "react-native-1app";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";

export default class AddCartao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

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
          <Text style={styles.text}>{"Add. Cartão de Pagamento"}</Text>
        </TitleBar>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.view5}>
            <Image
              style={styles.image}
              source={require("../../../img/cartao.png")}
              resizeMode={"stretch"}
            />
          </View>
          <View style={styles.view2}>
            <View style={styles.view3}>
              <TextInput
                style={styles.textinput1}
                onChange={value => {}}
                keyboardType={"default"}
                label={"Número do Cartão"}
              />
              <TextInput
                style={styles.textinput2}
                onChange={value => {}}
                keyboardType={"default"}
                label={"Validade"}
              />
              <TextInput
                style={styles.textinput3}
                onChange={value => {}}
                keyboardType={"default"}
                label={"CVC"}
              />
            </View>
            <View style={styles.view4}>
              <TextInput
                style={styles.textinput11}
                onChange={value => {}}
                keyboardType={"default"}
                label={"Nome do Titular"}
              />
            </View>
          </View>
          <View style={styles.view31}>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => {
                this.backPageButton1();
              }}
            >
              <Text style={styles.text4}>{"ADICIONAR CARTÃO"}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  ScrollView: {
    flex: 1,
    alignSelf: "stretch"
  },
  view5: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 20
  },
  image: {
    width: "100%",
    height: 200,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: 5
  },
  view3: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 10
  },
  textinput1: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    flex: 0.5,
    marginRight: 5
  },
  textinput2: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    flex: 0.3,
    marginRight: 5
  },
  textinput3: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    flex: 0.2
  },
  view4: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10,
    marginTop: -30
  },
  textinput11: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    flex: 1,
    marginRight: 5
  },
  view31: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10
  },
  button3: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "rgba(150,150,145,1)",
    borderRadius: 5
  },
  text4: {
    textAlign: "center",
    color: "rgba(150,150,145,1)",
    alignSelf: "stretch",
    fontWeight: "normal"
  }
});
