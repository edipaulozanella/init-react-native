import React, { Component } from "react";

import { Content, Icon, Image, TextInput, TitleBar } from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import * as pedidos from "../../worker/pedidos";
import * as Parse from "../../infra/Util";

export default class SelecionarProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: this.props.screenProps.store.getState().produtoFoco[0],
      pedido: this.props.screenProps.store.getState().tempPedido,
      valor: this.props.screenProps.store.getState().produtoFoco[0].doubValor,
      load: false
    };
  }

  backPageButton() {
    this.props.navigation.goBack();
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      if (store.tempPedido != this.state.pedido)
        this.setState({ pedido: store.tempPedido });
    });

    // var receiveProps = this.getProps().produto;
    // this.setState({
    //   produto: receiveProps,
    //   pedido: { valor: tempPedido }
    // });
  }

  adicionarItemCarrinho() {
    this.setState({ load: true });
    pedidos.adicionarItemCarrinho(this.state.pedido, retorno => {
      console.log('addd',this.state.pedido, retorno);
      if (retorno && retorno.key_carrinho) {
        this.setState({ load: false });
        // this.props.screenProps.store.dispatch(retorno)

        pedidos.itensNoCarrinho(carrinho =>
          this.props.screenProps.store.dispatch({
            type : 'SETCARRINHO',
            newCarrinho:  carrinho
          })
        );
        
        this.openPageButton4();
      } else {
        alert("Erro, tente novamente");
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  getProps() {
    var nav = this.props.navigation;
    if (nav && nav.state && nav.state.params) {
      return this.props.navigation.state.params;
    } else {
      return {};
    }
  }

  openPageButton4() {
    this.props.navigation.navigate("Home", {
      activity: this,
      oldState: this.state
    });
  }

  adicionar() {
    var quant = this.state.pedido.qtd + 1;
    this.state.valor = quant * this.state.produto.doubValor;
    this.setState({ pedido: { ...this.state.pedido, qtd: quant } });
  }

  diminuir() {
    if (this.state.pedido.qtd > 1) {
      var quant = this.state.pedido.qtd - 1;
      this.state.valor = quant * this.state.produto.doubValor;
      this.setState({ pedido: { ...this.state.pedido, qtd: quant } });
    }
  }

  render() {
    console.log(this.state);
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
          <Text style={styles.text}>{this.state.produto.nome}</Text>
        </TitleBar>
        <ScrollView style={styles.scroll}>
        {this.state.produto.icone ? 
          <View style={styles.view41}>
            <Image
              style={styles.image}
              resizeMode={"cover"}
              source={{ uri: this.state.produto.icone }}
            />
          </View>
          : null }
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>{this.state.produto.nome}</Text>
              <Text style={styles.text3}>
                {this.state.produto.textDescricao}
              </Text>
            </View>
            <View style={styles.view4}>
              <TextInput
                style={styles.textinput}
                value={this.state.pedido.obs}
                onChange={value => {
                  this.setState({
                    pedido: { ...this.state.pedido, obs: value }
                  });
                }}
                keyboardType={"default"}
                label={"Observações"}
              />
            </View>
            <View style={styles.view5}>
              <View style={styles.view6}>
                <Text style={styles.text4}>{"Preço unitário: "}</Text>

                <Text style={styles.text8}>
                  {Parse.parseMoney(this.state.produto.doubValor)}
                </Text>
              </View>
              <View style={styles.view7}>
                <View style={styles.view8}>
                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                      this.diminuir();
                    }}
                  >
                    <Icon
                      style={styles.icon2}
                      fromFontFamily={"Material Design Icons"}
                      name={"minus-circle-outline"}
                    />
                  </TouchableOpacity>
                  <Text style={styles.text5}>{this.state.pedido.qtd}</Text>
                  <TouchableOpacity
                    style={styles.button3}
                    onPress={() => {
                      this.adicionar();
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
                    {"Total: " + this.state.valor}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.view10}>
          <TouchableOpacity
            style={styles.button4}
            onPress={() => {
              this.adicionarItemCarrinho();
            }}
            disabled={this.state.load}
          >
            {this.state.load ? (
              <Text style={styles.text7}>{"CARREGANDO"}</Text>
            ) : (
              <Text style={styles.text7}>{"ADICIONAR"}</Text>
            )}
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
  scroll: {
    alignSelf: "stretch",
    flexDirection: "column"
  },
  view41: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginBottom: 10,
    backgroundColor: "rgba(238,238,238,1)",
    height: 100
  },
  image: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
  view3: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
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
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 15
  },
  view4: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "rgba(238,238,238,1)"
  },
  textinput: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal"
  },
  view5: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  view6: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 18
  },
  text4: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 15
  },
  text8: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 15
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
    fontWeight: "normal"
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
    height: 30
  },
  text6: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 15
  },
  button5: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "rgba(140,0,0,1)",
    borderWidth: 2,
    width: 150,
    borderRadius: 10
  },
  text9: {
    textAlign: "center",
    color: "rgba(140,0,0,1)",
    alignSelf: "center",
    fontWeight: "bold",
    marginLeft: 10
  },
  icon4: {
    color: "rgba(140,0,0,1)",
    fontSize: 25
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
