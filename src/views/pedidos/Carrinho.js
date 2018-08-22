import React, { Component } from "react";

import { Content, Icon, Switch, TitleBar } from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import * as pedidos from "../../worker/pedidos";
import * as Parse from "../../infra/Util";

export default class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrinho: {},
      listaCarrinho: this.props.screenProps.store.getState().carrinho,
      select: false,
      empresa: this.props.screenProps.store.getState().empresa
    };
    //console.log(this.props.screenProps.store.getState());

    this.buscarServidor();
  }

  buscarServidor() {
    pedidos.itensNoCarrinho(res =>
      this.props.screenProps.store.dispatch({
        type: "SETCARRINHO",
        newCarrinho: res
      })
    );
  }

  backPageButton() {
    this.props.navigation.goBack();
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      if (
        store.pedidos != this.state.pedidos ||
        store.user != this.state.user ||
        store.carrinho != this.state.listaCarrinho
      ) {
        this.setState({
          pedidos: store.pedidos,
          user: store.user,
          listaCarrinho: store.carrinho
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  openPageButton4() {
    this.props.navigation.navigate("DetalhesPedidos", {
      activity: this,
      oldState: this.state
    });
  }

  openPageButton5() {
    this.props.navigation.navigate("PedidosEnderecos", {
      activity: this,
      oldState: this.state
    });
  }

  alterarQuantidade(identificador, item) {
    //console.log(item);
    if (identificador == 0) {
      pedidos.modificarQuantidade(item._id, item.qtd - 1, retorno =>
        // console.log('menos', retorno),
        this.buscarServidor()
      );
    } else {
      pedidos.modificarQuantidade(item._id, item.qtd + 1, retorno =>
        //console.log('m=ais',retorno),
        this.buscarServidor()
      );
    }
  }

  render() {
    console.log(this.state.listaCarrinho);
    return (
      <View style={styles.content}>
        <TitleBar style={styles.titlebar}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.backPageButton();
            }}
          >
            <Icon
              style={styles.icon}
              fromFontFamily={"Material Icons"}
              name={"keyboard_backspace"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{"Carrinho de compra"}</Text>
        </TitleBar>

        <View style={styles.view3}>
          <Text style={styles.text2}>{this.state.empresa.nome}</Text>
          <Text style={styles.text3}>{this.state.empresa.razaoSocial}</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.view5}>
            {this.state.listaCarrinho &&
              this.state.listaCarrinho.items &&
              this.state.listaCarrinho.items.map(item => (
                <View style={styles.view55}>
                  <View style={styles.view6}>
                    <Text style={styles.text4}>
                      {item.nome ? item.nome : ""}
                    </Text>

                    {item.obs ? (
                      <Text style={styles.text13}>{item.obs}</Text>
                    ) : null}
                  </View>
                  <View style={styles.view7}>
                    <View style={styles.view8}>
                      <TouchableOpacity
                        style={styles.button2}
                        onPress={() => {
                          this.alterarQuantidade(0, item);
                        }}
                      >
                        <Icon
                          style={styles.icon2}
                          fromFontFamily={"Material Design Icons"}
                          name={"minus-circle-outline"}
                        />
                      </TouchableOpacity>
                      <Text style={styles.text5}>{item.qtd}</Text>
                      <TouchableOpacity
                        style={styles.button3}
                        onPress={() => {
                          this.alterarQuantidade(1, item);
                        }}
                      >
                        <Icon
                          style={styles.icon3}
                          fromFontFamily={"Material Design Icons"}
                          name={"plus-circle-outline"}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.view9}>
                      <Text style={styles.text6}>
                        {Parse.parseMoney(item.valor_base)}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
        <View style={styles.view10}>
          <Text style={styles.text7}>{"Retirar no local"}</Text>
          <Switch
            style={styles.switch}
            value={this.state.select}
            onChange={value => {
              this.setState({ select: value });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button4}
          onPress={() => this.openPageButton5()}
        >
          <View style={styles.view12}>
            <Icon
              style={styles.icon4}
              fromFontFamily={"Material Design Icons"}
              name={"map-marker"}
            />
            <Text style={styles.text11}>{"Adicione endereço de entrega"}</Text>
          </View>
          <View style={styles.view11}>
            <Text style={styles.text10}>{"Preço Frete"}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.view102}>
          <Text style={styles.text72}>{"Sub total do pedido"}</Text>
          <Text style={styles.text11_}>
            {Parse.parseMoney(
              this.state.listaCarrinho && this.state.listaCarrinho.val_total
                ? this.state.listaCarrinho.val_total
                : 0
            )}
          </Text>
        </View>

        {!this.state.select ? (
          <View style={styles.button5}>
            <Text style={styles.text12}>
              {"Adicione um endereço ou marque para retirar no local."}
            </Text>
          </View>
        ) : (
          <View style={styles.button5}>
            <Text style={styles.text12}>
              {"Tat um endereço ou marque para retirar no local."}
            </Text>
          </View>
        )}
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
  scroll: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    borderStyle: "solid",
    borderBottomColor: "rgba(238,238,238,1)",
    borderBottomWidth: 2
  },
  view3: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10
  },
  text2: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 17
  },
  text3: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 15
  },
  view55: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    borderStyle: "solid",
    borderBottomColor: "rgba(238,238,238,1)",
    borderBottomWidth: 1
  },
  view5: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  view6: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column"
  },
  text4: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 15
  },
  text13: {
    textAlign: "left",
    color: "rgba(150,150,145,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 14
  },
  view7: {
    alignSelf: "stretch",
    flex: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  view8: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  button2: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    width: 40
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 25
  },
  text5: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    width: 20,
    fontSize: 15,
    fontWeight: "bold"
  },
  button3: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    width: 40
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 25
  },
  view9: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    height: 20
  },
  text6: {
    textAlign: "center",
    color: "rgba(0,178,45,1)",
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 15
  },
  view10: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10
  },
  text7: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal"
  },
  switch: {
    alignSelf: "auto"
  },
  button4: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    padding: 10
  },
  view12: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(140,0,0,1)",
    fontSize: 25,
    marginRight: 5,
    marginLeft: -2
  },
  text11: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "center"
  },
  view11: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  text10: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "center",
    fontWeight: "normal"
  },
  view102: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10
  },
  text72: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal"
  },
  text11_: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 18
  },
  button5: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flexDirection: "column",
    backgroundColor: "rgba(226,10,10,1)",
    padding: 5
  },
  text12: {
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 17
  }
});
