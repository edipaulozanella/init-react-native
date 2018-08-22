import React, { Component } from "react";

import { Content, Icon, TextInput, TitleBar } from "react-native-1app";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";

import actions from "../../redux/actions";

export default class DetalhesPedido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinheiro: false,
      cartao1: false,
      cartao2: false
    };
    this.state.pedido = this.props.screenProps.store.getState().pedido;
  }

  addItemAoCarrinho() {
    this.props.screenProps.store.dispatch(actions.setPedido(null));
  }
  componentDidMount() {}

  componentWillUnmount() {}

  backPageButton() {
    this.props.navigation.goBack();
  }

  backPageButton10() {
    this.props.navigation.goBack();
  }

  openPageButton5() {
    this.props.navigation.navigate("Home", {
      pedido: null,
      activity: this,
      oldState: this.state
    });
  }

  open_modal_fade_bottom1() {
    this.state.navigator.openModalFade({
      component: ModalOutros,
      pageName: "ModalOutros",
      props: {
        heranca: this.state,
        activity: this
      }
    });
  }

  openPageButton421() {
    this.props.navigation.navigate("ModalOutros", {
      activity: this,
      oldState: this.state
    });
  }

  openPageButton4211() {
    this.props.navigation.navigate("ModalOutros", {
      activity: this,
      oldState: this.state
    });
  }

  openPageButton3() {
    this.props.navigation.navigate("AddCartao", {
      activity: this,
      oldState: this.state
    });
  }

  render() {
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
              style={styles.icon1}
              fromFontFamily={"Material Icons"}
              name={"keyboard_backspace"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{"Detalhes do pedido"}</Text>
        </TitleBar>
        <ScrollView style={styles.scroll}>
          <View style={styles.view2}>
            <Icon
              style={styles.icon2}
              fromFontFamily={"Material Design Icons"}
              name={"credit-card"}
            />
            <Text style={styles.text3}>{"Pague pelo APP"}</Text>
          </View>
          <View style={styles.view3}>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => {
                this.openPageButton3();
              }}
            >
              <Text style={styles.text4}>{"ADICIONAR CARTÃO"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view21}>
            <Icon
              style={styles.icon21}
              fromFontFamily={"Material Design Icons"}
              name={"cash"}
            />
            <Text style={styles.text31}>{"Pague na Entrega"}</Text>
          </View>
          <TouchableOpacity
            style={styles.button4}
            onPress={() => {
              this.setState({
                cartao2: false,
                cartao1: false,
                dinheiro: !this.state.dinheiro
              });
            }}
          >
            <Text style={styles.text6}>{"Dinheiro"}</Text>
            {this.state.dinheiro ? (
              <Icon
                style={styles.icon4}
                fromFontFamily={"Material Design Icons"}
                name={"check-circle"}
              />
            ) : (
              <Icon
                style={styles.icon4}
                fromFontFamily={"Material Design Icons"}
                name={"checkbox-blank-circle-outline"}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button41}
            onPress={() => {
              this.setState({
                dinheiro: false,
                cartao2: false,
                cartao1: !this.state.cartao1
              });
            }}
          >
            <Text style={styles.text61}>{"American Express"}</Text>
            {this.state.cartao1 ? (
              <Icon
                style={styles.icon4}
                fromFontFamily={"Material Design Icons"}
                name={"check-circle"}
              />
            ) : (
              <Icon
                style={styles.icon4}
                fromFontFamily={"Material Design Icons"}
                name={"checkbox-blank-circle-outline"}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button42}
            onPress={() => {
              this.setState({
                dinheiro: false,
                cartao1: false,
                cartao2: !this.state.cartao2
              });
            }}
          >
            <Text style={styles.text62}>{"Elo - Crédito"}</Text>
            {this.state.cartao2 ? (
              <Icon
                style={styles.icon4}
                fromFontFamily={"Material Design Icons"}
                name={"check-circle"}
              />
            ) : (
              <Icon
                style={styles.icon4}
                fromFontFamily={"Material Design Icons"}
                name={"checkbox-blank-circle-outline"}
              />
            )}
          </TouchableOpacity>
          {this.state.dinheiro ? (
            <View style={styles.view5}>
              <TextInput
                style={styles.textinput}
                onChange={value => {}}
                keyboardType={"default"}
                label={"Troco na entrega (opcional)"}
              />
            </View>
          ) : null}
          <View style={styles.view22}>
            <Icon
              style={styles.icon22}
              fromFontFamily={"Material Design Icons"}
              name={"account-location"}
            />
            <Text style={styles.text32}>{"Entrega"}</Text>
          </View>
          <View style={styles.view7}>
            <Text style={styles.text10}>{"Retirada no local"}</Text>
          </View>
          <View style={styles.view221}>
            <Text style={styles.text321}>{"Outros"}</Text>
          </View>
          <TouchableOpacity
            style={styles.button421}
            onPress={() => {
              this.openPageButton421();
            }}
          >
            <Text style={styles.text621}>{"Telefone contato"}</Text>
            <Icon
              style={styles.icon421}
              fromFontFamily={"Material Design Icons"}
              name={"checkbox-blank-circle-outline"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button4211}
            onPress={() => {
              this.openPageButton4211();
            }}
          >
            <Text style={styles.text6211}>{"CPF/CNPJ na Nota"}</Text>
            <Icon
              style={styles.icon4211}
              fromFontFamily={"Material Design Icons"}
              name={"checkbox-blank-circle-outline"}
            />
          </TouchableOpacity>
          <View style={styles.view222}>
            <Icon
              style={styles.icon222}
              fromFontFamily={"Material Design Icons"}
              name={"account-location"}
            />
            <Text style={styles.text322}>{"Resumo pedido"}</Text>
          </View>
          <View style={styles.view10}>
            <View style={styles.view31}>
              <Text style={styles.text2}>{"HAMBURGUERIA IMPÉRIO GOURMET"}</Text>
              <Text style={styles.text33}>{"Lorem ipsum platea fusce"}</Text>
            </View>
            <View style={styles.view51}>
              <View style={styles.view6}>
                <View style={styles.view14}>
                  <Text style={styles.text19}>{"1 X "}</Text>
                  <Text style={styles.text411}>
                    {this.props.navigation.state.params.pedido.nome}
                  </Text>
                </View>

                {this.props.navigation.state.params.descricao ? (
                  <Text style={styles.text13}>
                    {this.props.navigation.state.params.descricao}
                  </Text>
                ) : null}
              </View>
              <View style={styles.view71}>
                <View style={styles.view9}>
                  <Text style={styles.text63}>
                    {this.props.navigation.state.params.pedido.preco}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.view17}>
              <Text style={styles.text21}>{"Total do pedido"}</Text>
              <Text style={styles.text22}>
                {this.props.navigation.state.params.pedido.preco}
              </Text>
            </View>
          </View>
          <View style={styles.view18}>
            <TouchableOpacity
              style={styles.button10}
              onPress={() => {
                this.backPageButton10();
              }}
            >
              <Text style={styles.text24}>{"ALTERAR PEDIDO"}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button5}
          onPress={() => {
            this.openPageButton5();
          }}
        >
          <Text style={styles.text12}>{"FINALIZAR PEDIDO"}</Text>
        </TouchableOpacity>
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
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text: {
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    alignSelf: "auto",
    fontWeight: "bold",
    fontSize: 14,
    flex: 1
  },
  scroll: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column"
  },
  view2: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 40,
    backgroundColor: "rgba(238,238,238,1)",
    padding: 10
  },
  icon2: {
    color: "rgba(150,150,145,1)",
    fontSize: 25
  },
  text3: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "center",
    fontWeight: "normal",
    marginLeft: 5
  },
  view3: {
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
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: "rgba(150,150,145,1)",
    borderRadius: 5
  },
  text4: {
    textAlign: "center",
    color: "rgba(150,150,145,1)",
    alignSelf: "stretch",
    fontWeight: "normal"
  },
  view21: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 40,
    backgroundColor: "rgba(238,238,238,1)",
    padding: 10
  },
  icon21: {
    color: "rgba(150,150,145,1)",
    fontSize: 25
  },
  text31: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "center",
    fontWeight: "normal",
    marginLeft: 5
  },
  button4: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(238,238,238,1)"
  },
  text6: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "bold",
    marginLeft: 10
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    marginRight: 10
  },
  button41: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(238,238,238,1)"
  },
  text61: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "bold",
    marginLeft: 10
  },
  icon41: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    marginRight: 10
  },
  button42: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(238,238,238,1)"
  },
  text62: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "bold",
    marginLeft: 10
  },
  icon42: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    marginRight: 10
  },
  view5: {
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: -20,
    padding: 10
  },
  textinput: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal"
  },
  view22: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 40,
    backgroundColor: "rgba(238,238,238,1)",
    padding: 10
  },
  icon22: {
    color: "rgba(150,150,145,1)",
    fontSize: 25
  },
  text32: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "center",
    fontWeight: "normal",
    marginLeft: 5
  },
  view7: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10
  },
  text10: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "bold"
  },
  view221: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 40,
    backgroundColor: "rgba(238,238,238,1)",
    padding: 10
  },
  text321: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "center",
    fontWeight: "normal",
    marginLeft: 5
  },
  button421: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(238,238,238,1)"
  },
  text621: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "normal",
    marginLeft: 10
  },
  icon421: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    marginRight: 10
  },
  button4211: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(238,238,238,1)"
  },
  text6211: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "normal",
    marginLeft: 10
  },
  icon4211: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    marginRight: 10
  },
  view222: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 40,
    backgroundColor: "rgba(238,238,238,1)",
    padding: 10
  },
  icon222: {
    color: "rgba(150,150,145,1)",
    fontSize: 25
  },
  text322: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "center",
    fontWeight: "normal",
    marginLeft: 5
  },
  view10: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  view31: {
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
  text33: {
    textAlign: "left",
    color: "rgba(134,134,134,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    fontSize: 15
  },
  view51: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    borderStyle: "solid",
    borderBottomColor: "rgba(238,238,238,1)",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  view6: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column"
  },
  view14: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  text19: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 15
  },
  text411: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
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
  view71: {
    alignSelf: "stretch",
    flex: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  view9: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    height: 20
  },
  text63: {
    textAlign: "center",
    color: "rgba(0,178,45,1)",
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 15
  },
  view17: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    borderStyle: "solid",
    borderTopWidth: 2,
    borderTopColor: "rgba(238,238,238,1)"
  },
  text21: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal"
  },
  text22: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 20
  },
  view18: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10
  },
  button10: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(238,238,238,1)"
  },
  text24: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "bold",
    fontSize: 15
  },
  button5: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flexDirection: "column",
    backgroundColor: "rgba(140,0,0,1)",
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
