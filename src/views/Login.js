import React, { Component } from "react";

import { Content, Icon, Image, TextInput } from "react-native-1app";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Util } from "../infra";

import * as actions from "../redux/actions";
import { fb, loginFacebook } from "../worker/login";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.dispatch = this.props.screenProps.store.dispatch;
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      if (store.user != this.state.user) this.setState({ user: store.user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  logarApp() {
    actions.loginPadrao(this.state, this.dispatch, (user, erro) => {
      // this.setState({})
    });
  }

  abrirEmail() {
    Util.openEmail(
      "email",
      "Solicitação de login",
      "Olá, gostaria de um login e senha para utilizar o aplicativo"
    );
  }

  login_facebook() {
    this.setState({
      load: true
    });
    fb(token => {
      if (token) {
        this.entrarFacebook(token);
      } else {
        this.setState({
          load: false
        });
      }
    });
  }

  entrarFacebook(token) {
    this.setState({ load: true });
    loginFacebook(token, (user, error) => {
      if (error) {
        this.setState({ load: false });
      } else {
        try {
          var logar = actions.logar(user, this.props.screenProps.store);
          this.props.screenProps.store.dispatch(logar);
        } catch (e) {
          console.log(e);
        }
      }
    });
  }

  logarComUserGoogle(user) {
    var nome = user.name;
    var email = user.email;
    var foto = user.photo;
    var idGoogle = user.id;
    login.loginGoogle(nome, email, foto, idGoogle, (user, error) => {
      if (error) {
        this.setState({ load: false });
      } else {
        this.props.screenProps.store.dispatch(
          actions.logar(user, this.props.screenProps.store)
        );
      }
    });
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <Content style={styles.content}>
          <Image
            style={styles.image}
            source={require("../../img/vasado.png")}
            resizeMode={"contain"}
          />
          <View style={styles.view}>
            <View style={styles.view2}>
              <TextInput
                style={styles.textinput1}
                value={this.state.email}
                onChange={value => {
                  this.setState({ email: value });
                }}
                keyboardType={"default"}
                placeholder={"Usuário"}
                inputNative={true}
                onSubmitEditing={() => {
                  this.textinputSenha.focus();
                }}
              />
            </View>
            <View style={styles.view3}>
              <TextInput
                style={styles.textinput2}
                value={this.state.senha}
                onChange={value => {
                  this.setState({ senha: value });
                }}
                keyboardType={"email-address"}
                placeholder={"Senha"}
                secureTextEntry={true}
                inputNative={true}
                onSubmitEditing={() => {
                  this.logarApp();
                }}
                ref={v => (this.textinputSenha = v)}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.text1}>{"Logar"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {
                this.login_facebook();
              }}
            >
              <Icon
                style={styles.icon}
                fromFontFamily={"Material Design Icons"}
                name={"facebook-box"}
              />
              <Text style={styles.text11}>{"Facebook"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.text}>{"Solicite seu login"}</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#8c0000",
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column"
  },
  content: {
    backgroundColor: "#8c0000",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  image: {
    width: 250,
    height: 120,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: 100
  },
  view: {
    alignSelf: "auto",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: 250,
    paddingTop: 20
  },
  view2: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 45,
    backgroundColor: "rgba(255,255,255,1)",
    paddingLeft: 10,
    borderRadius: 5
  },
  textinput1: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal"
  },
  view3: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 45,
    backgroundColor: "rgba(255,255,255,1)",
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 20
  },
  textinput2: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal"
  },
  button: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    flexDirection: "column",
    marginTop: 25,
    borderRadius: 5,
    backgroundColor: "rgba(7,81,120,1)"
  },
  text1: {
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontWeight: "normal"
  },
  button1: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "rgba(59,89,152,1)"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text11: {
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontWeight: "normal",
    fontSize: 17,
    marginLeft: 10
  },
  button2: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    flexDirection: "column",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "rgba(160,160,160,1)"
  },
  text: {
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontWeight: "normal"
  }
});
