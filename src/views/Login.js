import React, { Component } from "react";

import { Content, Image, TextInput } from "react-native-1app";
import { StyleSheet, View, Text, TouchableOpacity,ScrollView } from "react-native";
import {loginPadrao} from '../redux/actions';
import {Util} from "../infra";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.dispatch=this.props.screenProps.store.dispatch;
  }

  componentDidMount() {}

  componentWillUnmount() {}
  logarApp(){
    loginPadrao(this.state,this.dispatch,(user,erro)=>{
      console.log("fim");
      // this.setState({})
    })
  }
  abrirEmail(){
    Util.openEmail('email',"Solicitação de login","Olá, gostaria de um login e senha para utilizar o aplicativo")
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
      <Content style={styles.content}>
        <Image
          style={styles.image}
          source={require("../../img/logo.png")}
          resizeMode={"contain"}
        />
        <View style={styles.view}>
          <View style={styles.view2}>
            <TextInput
              style={styles.textinput1}
              value={this.state.email}
              onChange={value => {
                // this.state.email = value;
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
                // this.state.senha = value;
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
          <TouchableOpacity style={styles.button} onPress={()=>this.logarApp()}>
            <Text style={styles.text}>{"Logar"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={()=>this.abrirEmail()}>
            <Text style={styles.text}>{"Solicite seu login"}</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(218,218,218,1)",
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
  },
  scroll: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",

  },
});
