import React, { Component } from "react";

import {
  Content,
  Icon,
  Navigator,
  TextInput,
  TitleBar
} from "react-native-1app";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";

export default class ModalOutros extends Component {
  constructor(props) {
    super(props);
    this.state = { valid: false };
  }

  close_modal_bottom2() {
    if (this.state.navigator) {
      this.state.navigator.closeModal();
    }
    if (this.state.superNavigator) {
      this.state.superNavigator.closeModal();
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  backPageButton1() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.tela}>
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
          <Text style={styles.text}>{"Detalhes do pedido"}</Text>
        </TitleBar>
        <View style={styles.view2}>
          <TextInput
            style={styles.textinput}
            onChange={value => {}}
            keyboardType={"numeric"}
            label={"Telefone"}
          />
          <TextInput
            style={styles.textinput2}
            onChange={value => {}}
            keyboardType={"numeric"}
            label={"CPF/CNPJ"}
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  tela: {
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
    flexDirection: "column",
    padding: 10
  },
  textinput: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal"
  },
  textinput2: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    marginTop: 10
  }
});
