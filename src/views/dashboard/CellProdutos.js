import React, { Component } from "react";

import { Content, Image } from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import * as Parse from "../../infra/Util";

export default class CellProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: {}
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.content}>
        {this.props.produto.icone ? (
          <View style={styles.view2}>
            <Image
              style={styles.image}
              resizeMode={"cover"}
              source={{ uri: this.props.produto.icone }}
            />
          </View>
        ) : null}

        <View
          style={[styles.view3, !this.props.produto.icone ? { flex: 1.2 } : ""]}
        >
          <View style={styles.view31}>
            <Text style={styles.text1}>{this.props.produto.nome}</Text>
            <Text style={styles.text2}>{this.props.produto.textDescricao}</Text>
          </View>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text3}>
            {Parse.parseMoney(this.props.produto.doubValor)}
          </Text>
          <Text
            style={[
              styles.text3,
              {
                color: "#868686",
                textDecorationLine: "line-through",
                fontSize: 15
              }
            ]}
          >
            {Parse.parseMoney(this.props.produto.doubValorOld)}
          </Text>
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
    flexDirection: "row",
    flex: 1
  },
  view2: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 5
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(134,134,134,1)"
  },
  view3: {
    alignSelf: "stretch",
    // backgroundColor: '#123',
    justifyContent: "center",

    alignItems: "flex-start",
    flexDirection: "column",
    flex: 0.8
  },
  view31: {
    alignSelf: "stretch",
    justifyContent: "center",
    padding: 5,
    alignItems: "flex-start",
    flexDirection: "column"
  },
  text1: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  text2: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "auto",
    justifyContent: "center",

    fontWeight: "normal",
    flexWrap: "wrap",
    flex: 1,
    fontSize: 12
  },
  view4: {
    flexDirection: "column",
    alignSelf: "stretch",
    flex: 0.4,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  text3: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15
  }
});
