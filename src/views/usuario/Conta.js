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
import * as usuario from "../../worker/usuario";
import CellEndereco from "./CellEndereco";

export default class Conta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.screenProps.store.getState().user,
      user_enderecos: this.props.screenProps.store.getState().user_enderecos,
      empresa: this.props.screenProps.store.getState().empresa
    };
    this.buscarServidor();
    // usuario.getEnderecosUsuario(ret => this.setState({ user_enderecos: ret }));
  }

  buscarServidor() {
    usuario.getEnderecosUsuario(res =>
      this.props.screenProps.store.dispatch({
        type: "SET_ENDERECOS_USER",
        user_enderecos: res
      })
    );
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

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      //console.log(store)
      if (
        store.user != this.state.user ||
        store.user_enderecos != this.state.user_enderecos
      )
        this.setState({
          user: store.user,
          user_enderecos: store.user_enderecos
        });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  elevation() {
    return {
      elevation: 5,
      shadowColor: "#000000",
      shadowOpacity: 0.5,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      }
    };
  }

  openPageButton4() {
    this.props.navigation.navigate("AddEndereco");
  }

  salvarCadastro() {
    usuario.updateUsuario(this.state.user._id, this.state.user);
  }

  render() {
    return (
      <View style={styles.content}>
        <TitleBar style={styles.titlebar} removeShadow>
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
          {<Text style={styles.text}>{this.state.empresa.nome}</Text>}
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
          <View style={[styles.view2, this.elevation()]}>
            <View style={styles.view1}>
              <Image
                style={styles.image4}
                resizeMode={"cover"}
                source={{ uri: this.state.user.imagem }}
              />
              <Image
                style={styles.image5}
                resizeMode={"cover"}
                source={require("../../../img/qrcode.png")}
              />
            </View>
            <Text style={styles.text8}>{"CÓDIGO: " + this.state.user._id}</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text8}>{"MINHA CONTA"}</Text>
          </View>
          <View style={[styles.view4, this.elevation()]}>
            <Text style={styles.textLabel}>{"Nome Completo"}</Text>
            <TextInput
              style={styles.textinput2}
              value={this.state.user.nome}
              onChange={value => {
                this.state.user.nome = value;
                this.setState({ user: this.state.user });
              }}
              placeholder={this.state.user.nome}
              inputNative={true}
              ref={v => (this.textinputnome = v)}
            />

            <Text style={styles.textLabel}>{"Telefone"}</Text>
            <TextInput
              style={styles.textinput2}
              value={this.state.user.telefone}
              onChange={value => {
                this.state.user.telefone = value;
                this.setState({ user: this.state.user });
              }}
              placeholder={"(00) 0000.0000"}
              mask={"(99) 9999.9999"}
              inputNative={true}
              ref={v => (this.textinputnome = v)}
            />

            <Text style={styles.textLabel}>{"E-mail"}</Text>
            <TextInput
              style={styles.textinput2}
              value={this.state.email}
              onChange={value => {
                this.state.user.email = value;
                this.setState({ user: this.state.user });
              }}
              keyboardType={"email-address"}
              placeholder={this.state.user.email}
              inputNative={true}
              ref={v => (this.textinputnome = v)}
            />

            <Text style={styles.textLabel}>
              {"CPF/CNPJ (para facilitar o pedido)"}
            </Text>
            <TextInput
              style={styles.textinput2}
              value={this.state.user.cpf}
              onChange={value => {
                this.state.user.cpf = value;
                this.setState({ user: this.state.user });
              }}
              placeholder={"000.000.000-00"}
              mask={"99999-999"}
              inputNative={true}
              ref={v => (this.textinputnome = v)}
            />
          </View>
          <View style={styles.view3}>
            <Text style={styles.text8}>{"ENDEREÇOS"}</Text>
          </View>
          {this.state.user_enderecos &&
            this.state.user_enderecos.map(enderecos => (
              <CellEndereco endereco={enderecos} />
            ))}

          <View style={styles.view3}>
            <Text style={styles.text8}>{"FORMAS DE PAGAMENTO"}</Text>
          </View>
          <View style={styles.view5}>
            <Text style={styles.text4}>{"Cartão de crédito"}</Text>
            <Text style={styles.text4}>{"xxxx.xxxx.xxxx.x658"}</Text>
            <TouchableOpacity style={styles.button3}>
              <Text style={styles.text2}>{"excluir"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.view6}>
            <TouchableOpacity
              style={styles.button5}
              onPress={() => {
                this.salvarCadastro();
              }}
            >
              <Icon
                style={styles.icon2}
                fromFontFamily={"Material Design Icons"}
                name={"content-save"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button5}>
              <Icon
                style={styles.icon2}
                fromFontFamily={"Material Design Icons"}
                name={"credit-card"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button5}
              onPress={() => {
                this.openPageButton4();
              }}
            >
              <Icon
                style={styles.icon2}
                fromFontFamily={"Material Design Icons"}
                name={"map-marker"}
              />
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
    alignItems: "center",
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
  button3: {
    backgroundColor: "#8c0000",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 3,
    width: 60,
    borderColor: "#8c0000"
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
  button5: {
    backgroundColor: "#8c0000",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    margin: 3,
    marginLeft: 5,
    marginRight: 5,
    width: 50,
    height: 50,
    borderColor: "#8c0000"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 27
  },
  text: {
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    alignSelf: "auto",
    fontWeight: "bold",
    fontSize: 15,
    flex: 1
  },
  text2: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  },
  text3: {
    fontSize: 13,
    alignSelf: "auto",
    color: "#333333",
    flex: 1
  },
  text4: {
    fontSize: 14,
    alignSelf: "auto",
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    flex: 1
  },
  text8: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontSize: 16,
    margin: 5
  },
  textLabel: {
    fontSize: 12,
    color: "#333333",
    marginLeft: 10,
    marginTop: 5
  },
  button2: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    width: 50
  },
  view3: {
    height: 50,
    backgroundColor: "#eeeeee",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  view4: {
    backgroundColor: "#fff",
    padding: 15,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  view5: {
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  view6: {
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  view2: {
    flex: 1,
    width: Dimensions.get("window").width,
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  view1: {
    flex: 1,
    marginBottom: 20,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  image4: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  view7: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  image5: {
    height: 150,
    width: 150,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  textinput2: {
    height: 50,
    color: "#333333",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    flex: 1,
    backgroundColor: "rgba(231,231,231,1)",
    borderRadius: 5,
    paddingLeft: 10,
    margin: 5
  }
});
