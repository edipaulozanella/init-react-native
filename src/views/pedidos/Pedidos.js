import React, { Component } from "react";

import {
  Content,
  Icon,
  Image,
  TextInput,
  TitleBar,
  ScrollView
} from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Text
} from "react-native";

export default class Pedidos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      unidade: {}
    };
  }

  backPageButton() {
    this.props.navigation.goBack();
  }

  openPesquisa(unidade) {
    this.props.navigation.navigate("Pesquisa", {
      activity: this,
      oldState: this.state
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      if (store.item != this.state.item) this.setState({ item: store.item });
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <TitleBar style={styles.titlebar} removeShadow>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.backPageButton()}
          >
            <Icon
              style={styles.icon}
              fromFontFamily={"Material Icons"}
              name={"keyboard_backspace"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{"PEDIDO"}</Text>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              this.openPesquisa();
            }}
          >
            <Icon
              style={styles.icon}
              fromFontFamily={"Material Design Icons"}
              name={"magnify"}
            />
          </TouchableOpacity>
        </TitleBar>
        <ScrollView>
          <View style={styles.content_1}>
            <View style={styles.view3}>
              <View style={styles.view4}>
                <TouchableOpacity
                  style={[
                    styles.view5,
                    {
                      backgroundColor: this.state.status ? "#8c0000" : "#fff",
                      borderColor: this.state.status ? "#8c0000" : "#fff"
                    }
                  ]}
                  disabled={this.state.status}
                  onPress={() => this.setState({ status: !this.state.status })}
                >
                  <Text
                    style={[
                      styles.text5,
                      { color: this.state.status ? "#fff" : "#8c0000" }
                    ]}
                  >
                    {"STATUS"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.view5,
                    {
                      backgroundColor: !this.state.status ? "#8c0000" : "#fff",
                      borderColor: !this.state.status ? "#8c0000" : "#fff"
                    }
                  ]}
                  disabled={!this.state.status}
                  onPress={() => this.setState({ status: !this.state.status })}
                >
                  <Text
                    style={[
                      styles.text5,
                      { color: !this.state.status ? "#fff" : "#8c0000" }
                    ]}
                  >
                    {"DETALHES"}
                  </Text>
                </TouchableOpacity>
              </View>
              {this.state.status ? (
                <View style={styles.viewToda}>
                  <View style={styles.view2}>
                    <Text style={styles.text1}>{"STATUS DO PEDIDO"}</Text>
                  </View>
                  <View style={styles.view6}>
                    <View style={styles.borda}>
                      <Text style={styles.text3}>{"1"}</Text>
                    </View>
                    <Text style={styles.text2}>
                      {"Efetuado o Pedido - 01/08/2018 às 07h 25min."}
                    </Text>
                  </View>
                  <View style={styles.view6}>
                    <View
                      style={[
                        styles.borda,
                        { backgroundColor: "#eeeeee", borderColor: "#eeeeee" }
                      ]}
                    >
                      <Text style={[styles.text3, { color: "#333333" }]}>
                        {"2"}
                      </Text>
                    </View>
                    <Text style={styles.text2}>
                      {"Confirmado pelo Restaurante."}
                    </Text>
                  </View>
                  <View style={styles.view6}>
                    <View
                      style={[
                        styles.borda,
                        { backgroundColor: "#eeeeee", borderColor: "#eeeeee" }
                      ]}
                    >
                      <Text style={[styles.text3, { color: "#333333" }]}>
                        {"3"}
                      </Text>
                    </View>
                    <Text style={styles.text2}>{"Em Produção."}</Text>
                  </View>
                  <View style={styles.view6}>
                    <View
                      style={[
                        styles.borda,
                        { backgroundColor: "#eeeeee", borderColor: "#eeeeee" }
                      ]}
                    >
                      <Text style={[styles.text3, { color: "#333333" }]}>
                        {"4"}
                      </Text>
                    </View>
                    <Text style={styles.text2}>{"Saiu para Entrega."}</Text>
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.view2}>
                    <Text style={styles.text1}>{"DETALHES DO PEDIDO"}</Text>
                  </View>
                  <View style={styles.view8}>
                    <Text style={styles.textdesc}>
                      {"Data: 01/08/2018 às 07h 25min."}
                    </Text>
                  </View>
                  <View style={styles.view7}>
                    <View style={styles.view7_desc}>
                      <Text style={[styles.text2_1, { fontSize: 17 }]}>
                        {"Pastel de Carne."}
                      </Text>
                      <Text style={[styles.text2_1, { fontSize: 15 }]}>
                        {"(descrição xxx xxxx xxx xxx xxx)"}
                      </Text>
                    </View>
                    <Text style={styles.text6}>{"R$ 40,00"}</Text>
                  </View>
                  <View style={styles.view7}>
                    <View style={styles.view7_desc}>
                      <Text style={[styles.text2_1, { fontSize: 17 }]}>
                        {"Pastel de Frango."}
                      </Text>
                    </View>
                    <Text style={styles.text6}>{"R$ 40,00"}</Text>
                  </View>
                  <View style={styles.view7}>
                    <View style={styles.view7_desc}>
                      <Text style={[styles.text2_1, { fontSize: 17 }]}>
                        {"Pastel de Frango."}
                      </Text>
                    </View>
                    <Text style={styles.text6}>{"R$ 40,00"}</Text>
                  </View>
                  <View style={styles.view8}>
                    <Text style={styles.textdesc}>{"Dados da Entrega."}</Text>
                  </View>
                  <View style={styles.view10}>
                    <View style={styles.view9}>
                      <Icon
                        style={styles.icon1}
                        fromFontFamily={"Material Design Icons"}
                        name={"map-marker"}
                      />
                      <Text style={styles.text7}>
                        {
                          "R. Cel. Teixeira de Oliveira, 427 - Centro, Biguaçu - SC, 88160-000, Brazil"
                        }
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  content_1: {
    flex: 1,
    alignSelf: "stretch",

    flexDirection: "column"
  },
  viewToda: {
    alignSelf: "stretch",
    flex: 1
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
  icon1: {
    color: "#868686",
    fontSize: 25,
    marginLeft: 10
  },
  icon2: {
    color: "rgba(155,155,155,1)",
    fontSize: 25
  },
  view3: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  button2: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    width: 50
  },
  text: {
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    alignSelf: "auto",
    fontWeight: "bold",
    fontSize: 15,
    flex: 1
  },
  text1: {
    fontSize: 17,
    textAlign: "center",
    color: "#333333"
  },
  text2: {
    fontSize: 14,
    color: "#868686",
    flexWrap: "wrap",
    flex: 1,
    paddingRight: 10
  },
  text2_1: {
    fontSize: 15,
    color: "#868686",
    paddingRight: 10
  },
  text6: {
    fontSize: 17,
    flex: 0.3,
    textAlign: "center",
    color: "#00b22d"
  },
  textdesc: {
    fontSize: 15,
    textAlign: "center",
    color: "#868686"
  },
  text5: {
    fontSize: 14,
    textAlign: "center",
    color: "#8c0000"
  },
  borda: {
    height: 45,
    width: 45,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    padding: 7,
    borderColor: "#00b22d",
    backgroundColor: "#00b22d",
    borderRadius: 50
  },
  text3: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  view2: {
    height: 60,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10
  },
  view6: {
    height: 90,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    borderColor: "#eeeeee",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 2,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  view7: {
    minHeight: 80,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    borderColor: "#eeeeee",
    padding: 20,
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  view7_desc: {
    alignSelf: "stretch",
    padding: 5,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column"
  },
  view5: {
    flexDirection: "row",
    height: 30,
    width: 100,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#8c0000",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8c0000"
  },
  view4: {
    flexDirection: "row",
    padding: 15,
    paddingLeft: 40,
    paddingRight: 40,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-around"
  },
  view8: {
    height: 40,
    backgroundColor: "#eeeeee",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  view10: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  view9: {
    flexDirection: "row",
    borderRadius: 10,
    margin: 10,
    alignSelf: "stretch",
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center"
  },
  text7: {
    color: "#000",
    padding: 10,
    flex: 1,
    alignSelf: "auto",
    fontSize: 17
  }
});
