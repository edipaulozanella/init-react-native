import React, { Component } from "react";

import { Content } from "react-native-1app";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import * as usuario from "../../worker/usuario";

export default class CellEndereco extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  deletarEndereco(item) {
    usuario.deletarEndereco(item._id);
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.content}>
        <View style={styles.view5}>
          <Text style={styles.text3}>{this.props.endereco.endereco}</Text>
          <TouchableOpacity style={styles.button4}>
            <Text style={styles.text2}>{"alterar"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button31}
            onPress={() => this.deletarEndereco(this.props.endereco)}
          >
            <Text style={styles.text2}>{"excluir"}</Text>
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
  text3: {
    alignSelf: "auto",
    textAlign: "left",
    flex: 1,
    flexWrap: "wrap",
    fontWeight: "normal"
  },
  view5: {
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  button4: {
    backgroundColor: "#3a0000",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 3,
    width: 60,
    borderColor: "#3a0000"
  },
  button31: {
    backgroundColor: "#8c0000",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 3,
    width: 60,
    borderColor: "#8c0000"
  },
  text2: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  }
});
