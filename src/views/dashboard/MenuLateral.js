import React, { Component } from "react";

import { Content, Image } from "react-native-1app";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import * as Action from "../../redux/actions";
export default class MenuLateral extends Component {
  constructor(props) {
    super(props);
    this.state = { user: this.props.screenProps.store.getState().user };
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

  openPageButton1() {
    this.props.navigation.navigate("Conta", {
      activity: this,
      oldState: this.state
    });
  }

  openPageButton11() {
    this.props.navigation.navigate("Pedidos", {
      activity: this,
      oldState: this.state
    });
  }

  openPageButton113() {
    this.props.navigation.navigate("Notificacoes", {
      activity: this,
      oldState: this.state
    });
  }

  openPageButton114() {
    this.props.navigation.navigate("HorarioAtendimento", {
      activity: this,
      oldState: this.state
    });
  }

  openPageButton115() {
    this.props.navigation.navigate("Configuracoes", {
      activity: this,
      oldState: this.state
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <ScrollView style={styles.scroll}>
          <View style={styles.view2}>
            <Image
              style={styles.image}
              source={{uri: this.state.user.imagem}}
              resizeMode={"cover"}
            />
            <Text style={styles.text}>{this.state.user.nome}</Text>
          </View>
          <View style={styles.view3}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => {
                this.openPageButton1();
              }}
            >
              <View style={styles.view4}>
                <Image
                  style={styles.image2111}
                  source={require("../../../img/ICON-MINHACONTA.png")}
                  resizeMode={"contain"}
                />
                <Text style={styles.text2111}>{"Minha Conta"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button11}
              onPress={() => {
                this.openPageButton11();
              }}
            >
              <View style={styles.view41}>
                <Image
                  style={styles.image21111}
                  source={require("../../../img/ICON-CARRINHO.png")}
                  resizeMode={"contain"}
                />
                <Text style={styles.text21111}>{"Pedidos"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button111}
              onPress={() => {
                this.setState({});
              }}
            >
              <View style={styles.view411}>
                <Image
                  style={styles.image211111}
                  source={require("../../../img/ICON-CARTAOFIDELIDADE.png")}
                  resizeMode={"contain"}
                />
                <Text style={styles.text211111}>{"Cartão Fidelidade"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button112}
              onPress={() => {
                this.openPageButton114();
              }}
            >
              <View style={styles.view412}>
                <Image
                  style={styles.image211112}
                  source={require("../../../img/ICON-HORARIOS.png")}
                  resizeMode={"contain"}
                />
                <Text style={styles.text211112}>{"Horários"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button113}
              onPress={() => {
                this.openPageButton113();
              }}
            >
              <View style={styles.view413}>
                <Image
                  style={styles.image211113}
                  source={require("../../../img/ICON-AVISOS.png")}
                  resizeMode={"contain"}
                />
                <Text style={styles.text211113}>{"Avisos"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button114}
              onPress={() => {
                this.openPageButton115();
              }}
            >
              <View style={styles.view414}>
                <Image
                  style={styles.image211114}
                  source={require("../../../img/ICON-CONFIGURACOES.png")}
                  resizeMode={"contain"}
                />
                <Text style={styles.text211114}>{"Configurações"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button7}>
              <Text style={styles.text8}>{"INDICAR"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button71}
              onPress={() => Action.logout()}
            >
              <Text style={styles.text81}>{"SAIR"}</Text>
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
    paddingTop: 20,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  scroll: {
    alignSelf: "stretch",
    flexDirection: "column",
    flex: 1
  },
  view2: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(150,150,145,1)"
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: 60
  },
  text: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal",
    margin: 10,
    fontSize: 17
  },
  view3: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: 10
  },
  button1: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15
  },
  view4: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "rgba(150,150,145,1)"
  },
  image2111: {
    width: 25,
    height: 25,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 10
  },
  text2111: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "normal",
    fontSize: 17
  },
  button11: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15
  },
  view41: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "rgba(150,150,145,1)"
  },
  image21111: {
    width: 25,
    height: 25,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 10
  },
  text21111: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "normal",
    fontSize: 17
  },
  button111: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15
  },
  view411: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "rgba(150,150,145,1)"
  },
  image211111: {
    width: 25,
    height: 25,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 10
  },
  text211111: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "normal",
    fontSize: 17
  },
  button112: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15
  },
  view412: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "rgba(150,150,145,1)"
  },
  image211112: {
    width: 25,
    height: 25,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 10
  },
  text211112: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "normal",
    fontSize: 17
  },
  button113: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15
  },
  view413: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "rgba(150,150,145,1)"
  },
  image211113: {
    width: 25,
    height: 25,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 10
  },
  text211113: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "normal",
    fontSize: 17
  },
  button114: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15
  },
  view414: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "rgba(150,150,145,1)"
  },
  image211114: {
    width: 25,
    height: 25,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 10
  },
  text211114: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "normal",
    fontSize: 17
  },
  button7: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    flexDirection: "column",
    backgroundColor: "#3a0000",
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
    borderRadius: 20,
    padding: 10
  },
  text8: {
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    marginTop: -4,
    fontWeight: "normal"
  },
  button71: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    flexDirection: "column",
    backgroundColor: "#8c0000",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    borderRadius: 20,
    padding: 10
  },
  text81: {
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    marginTop: -4,
    fontWeight: "normal"
  }
});
