import React, { Component } from "react";
import { Query } from "../infra";
import {
  StyleSheet,
  TouchableOpacity,
  Content,
  View,
  Icon,
  Image,
  Modal,
  ScrollView,
  Text
} from "react-native-1app";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    //this.onConstructor(props,this.state)
  }

  //START CODE
  login_facebook_bottom5() {
    this.setState({
      load: true
    });
    ApiUteis.loginFacebook(token => {
      console.log(token);
      if (token) {
        ApiApp.logarFacebook(token, user => {
          if (user) {
            this.buscarEmpresas(user);
            this.setState({
              load: true
            });
          } else {
            console.log("Não fez login");
            this.setState({
              load: false
            });
          }
        });
      } else {
        this.setState({
          load: false
        });
      }
    });
  }
  logar(user) {
    this.setState({
      load: false
    });
    Dados.criarCurrentUser(user);
    this.state.base.setState({
      alterado: true
    });
  }
  buscarEmpresas(user) {
    var query = new Query("empresas");
    query.whereEqualTo("objectId", user.objectId);
    query.setMetodoApi("get_empresas_user", "POST");
    query.setLimit(1000);
    query.cloud(lista => {
      if (lista[0]) {
        if (lista.length > 1) {
          this.open_modal_mpresas(user, lista);
        } else {
          user.empresa = lista[0];
          this.logar(user);
        }
      } else {
        this.logar(user);
      }
      // this.setState({
      //   itens_empresas: lista,
      //   load_empresas: false
      // });
    });
  }
  open_modal_mpresas(user, lista) {
    this.state.navigator.openModalFade({
      component: LoginEmpresas,
      pageName: "LoginEmpresas",
      props: {
        usuario: user,
        itens_empresas: lista,
        heranca: this.state,
        activity: this
      }
    });
  }
  get_data_tela() {
    if (this.state.email && this.state.senha) {
      this.setState({
        load: true
      });
      // console.log(this.state.email, this.state.senha);
      var query = new Query("user_local");

      query.whereEqualTo("senha", this.state.senha);
      query.whereEqualTo("email", this.state.email);
      query.setLimit(1000);
      query.first(data => {
        // console.log(data);
        if (data && data._id) {
          this.buscarEmpresas(data);
        } else {
          this.setState({
            load: false
          });
          alert("Vetifique email e senha");
        }
      });
    } else {
      this.setState({
        load: false
      });
      alert("Vetifique email e senha");
    }
  }
  //END CODE

  render() {
    return (
      <Content style={styles.content}>
        <Image style={styles.image}>
          <ScrollView style={styles.scroll}>
            <View style={styles.view}>
              <Image style={styles.image1} />
              <View style={styles.view1}>
                <View style={styles.view2}>
                  <TextField
                    style={styles.textinput}
                    value={this.state.email}
                    onChange={value => {
                      this.state.email = value;
                      this.setState({ item: this.state.item });
                    }}
                    ref={v => (this.textinput = v)}
                    label={"LOGIN"}
                    containerStyle={{ alignSelf: "stretch", flex: 1 }}
                    textColor={"rgba(255,255,255,1)"}
                    tintColor={"rgba(255,255,255,1)"}
                    baseColor={"rgba(255,255,255,1)"}
                    onChangeText={value => {
                      this.state.email = value;
                      this.setState({
                        item: this.state.item
                      });
                    }}
                  />
                </View>
                <View style={styles.view3}>
                  <TextField
                    style={styles.textinput1}
                    value={this.state.senha}
                    onChange={value => {
                      this.state.senha = value;
                      this.setState({ item: this.state.item });
                    }}
                    ref={v => (this.textinput1 = v)}
                    label={"SENHA"}
                    containerStyle={{ alignSelf: "stretch", flex: 1 }}
                    textColor={"rgba(255,255,255,1)"}
                    tintColor={"rgba(255,255,255,1)"}
                    baseColor={"rgba(255,255,255,1)"}
                    onChangeText={value => {
                      this.state.senha = value;
                      this.setState({
                        item: this.state.item
                      });
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.get_data_tela();
                  }}
                >
                  <Text style={styles.text} text={"ENTRAR"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                  <Text style={styles.text1} text={"Esqueceu sua senha?"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                  <Icon
                    style={styles.icon}
                    fromFontFamily={"Material Design Icons"}
                    name={"facebook"}
                  />
                  <Text style={styles.text2} text={"ENTRAR COM FACEBOOK"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button3}>
                  <Icon
                    style={styles.icon1}
                    fromFontFamily={"Material Design Icons"}
                    name={"google-plus"}
                  />
                  <Text style={styles.text3} text={"ENTRAR COM GOOGLE+"} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4}>
                  <Text style={styles.text4} text={"Ou crie uma nova conta"} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {this.state.load ? <View style={styles.view4} /> : null}
        </Image>
      </Content>
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
  image: {
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    flex: 1
  },
  scroll: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  view: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    padding: 10
  },
  image1: {
    width: 250,
    height: 130,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  view1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    padding: 10,
    marginTop: 10
  },
  view2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    borderColor: "rgba(240,240,240,1)"
  },
  textinput: {
    minHeight: 35,
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    textAlign: "left",
    flexWrap: "nowrap"
  },
  view3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    borderColor: "rgba(240,240,240,1)"
  },
  textinput1: {
    minHeight: 35,
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    textAlign: "left",
    flexWrap: "nowrap"
  },
  button: {
    alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
    height: 46,
    flexDirection: "column",
    flexWrap: "nowrap",
    backgroundColor: "rgba(255,206,6,1)",
    marginTop: 15,
    width: 300
  },
  text: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch"
  },
  button1: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  text1: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch"
  },
  button2: {
    alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
    height: 46,
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: "rgba(72,98,186,1)",
    marginTop: 15,
    width: 300
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginLeft: 23
  },
  text2: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 14,
    flex: 1
  },
  button3: {
    alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
    height: 46,
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: "rgba(219,68,55,1)",
    marginTop: 15,
    width: 300
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginLeft: 23
  },
  text3: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    flex: 1
  },
  button4: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  text4: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 14
  },
  view4: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.54)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
