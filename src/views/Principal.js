import React, { Component } from "react";
import { Model } from "../infra";
import {
  StyleSheet,
  TouchableOpacity,
  Content,
  DrawerLayout,
  View,
  Icon,
  Image,
  MenuLeft,
  Navigator,
  ScrollView,
  Text,
  TitleBar
} from "react-native-1app";
import Rodape from "./Rodape.js";
import HomePricipal from "./PricipalCupons";

export default class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: new Model("empresa"),
      user_local: new Model("user_local")
    };
    Navigator.cloneState(this);
    //this.onConstructor(props,this.state)
  }

  //START CODE

  //END CODE

  openMenuLeftButton() {
    this.menuLeft.openDrawer();
  }
  open_fragment_bottom14() {}
  validarBusca() {}
  sair() {}
  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      this.setState(this.props.screenProps.store.getState());
    });

    //this.onDidMount()
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <DrawerLayout
        drawerWidth={250}
        keyboardDismissMode="on-drag"
        renderNavigationView={() => {
          return (
            <View style={styles.menuleft}>
              <View style={styles.view4}>
                {this.state.empresa && this.state.empresa.objectId ? (
                  <TouchableOpacity style={styles.button4}>
                    <View style={styles.view5}>
                      <Image
                        style={styles.image2}
                        source={{ uri: this.state.empresa.logo }}
                        resizeMode={"cover"}
                      />
                      <View style={styles.view6}>
                        <Text style={styles.text} text={"Alterar empresa"} />
                        <Text
                          style={styles.text1}
                          text={this.state.empresa.nome}
                        />
                        <Text
                          style={styles.text2}
                          text={this.state.empresa.cnpj}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ) : null}

                <TouchableOpacity style={styles.button5}>
                  <View style={styles.view7}>
                    {this.state.user_local.imagem ? (
                      <Image
                        style={styles.image3}
                        source={{ uri: this.state.user_local.imagem }}
                        resizeMode={"cover"}
                      />
                    ) : null}

                    {!this.state.user_local.imagem ? (
                      <Image
                        style={styles.image4}
                        resizeMode={"contain"}
                        source={{ uri: "user_local.image" }}
                      />
                    ) : null}

                    {this.state.user_local.nome ? (
                      <View style={styles.view8}>
                        <Text
                          style={styles.text3}
                          text={this.state.user_local.nome}
                        />
                        <Text
                          style={styles.text4}
                          text={this.state.user_local.email}
                        />
                      </View>
                    ) : null}

                    {!this.state.user_local.nome ? (
                      <Text style={styles.text5} text={"Meus Dados"} />
                    ) : null}
                  </View>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.scroll1}>
                {!this.state.testGerir ? (
                  <View style={styles.view9}>
                    <TouchableOpacity style={styles.button6}>
                      <Icon
                        style={styles.icon2}
                        fromFontFamily={"Material Design Icons"}
                        name={"heart-box-outline"}
                      />
                      <Text style={styles.text6} text={"Meus Favoritos"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button7}>
                      <Icon
                        style={styles.icon3}
                        fromFontFamily={"Material Design Icons"}
                        name={"credit-card-multiple"}
                      />
                      <Text style={styles.text7} text={"Meus Cupons"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button8}>
                      <Icon
                        style={styles.icon4}
                        fromFontFamily={"Material Design Icons"}
                        name={"wechat"}
                      />
                      <Text style={styles.text8} text={"Meus Chats"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button9}>
                      <Icon
                        style={styles.icon5}
                        fromFontFamily={"Material Design Icons"}
                        name={"certificate"}
                      />
                      <Text style={styles.text9} text={"Minhas Avaliações"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button10}>
                      <Icon
                        style={styles.icon6}
                        fromFontFamily={"Material Design Icons"}
                        name={"city"}
                      />
                      <View style={styles.view10}>
                        <Text style={styles.text10} text={"Alterar cidade"} />
                        <Text
                          style={styles.text11}
                          text={this.state.user_local.textMunicipio}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : null}

                {this.state.testGerir ? (
                  <View style={styles.view11}>
                    {this.state.empresa._id ? (
                      <TouchableOpacity style={styles.button11}>
                        <Icon
                          style={styles.icon7}
                          fromFontFamily={"Material Design Icons"}
                          name={"file"}
                        />
                        <Text style={styles.text12} text={"Dados Cadastrais"} />
                      </TouchableOpacity>
                    ) : null}
                  </View>
                ) : null}

                <View style={styles.view12}>
                  <View style={styles.view13} />
                  <TouchableOpacity
                    style={styles.button12}
                    onPress={() => {
                      this.sair();
                    }}
                  >
                    <Icon
                      style={styles.icon8}
                      fromFontFamily={"Material Design Icons"}
                      name={"logout"}
                    />
                    <Text style={styles.text13} text={"Logout"} />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          );
        }}
        drawerPosition={DrawerLayout.positions.Left}
        ref={v => (this.menuLeft = v)}
      >
        <Content style={styles.content}>
          <TitleBar style={styles.titlebar} activity={this}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.openMenuLeftButton();
              }}
            >
              <Icon
                style={styles.icon}
                fromFontFamily={"Material Icons"}
                name={"menu"}
              />
            </TouchableOpacity>
            <Image
              style={styles.image}
              source={require("../../img/_logovasado2.png")}
              resizeMode={"contain"}
            >
              <TouchableOpacity
                style={styles.button1}
                onPress={() => {
                  this.open_fragment_bottom14();
                }}
              />
            </Image>
            <View style={styles.view}>
              <TouchableOpacity style={styles.button2}>
                <Image style={styles.image1} resizeMode={"cover"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button3}
                onPress={() => {
                  this.validarBusca();
                }}
              >
                <Icon
                  style={styles.icon1}
                  fromFontFamily={"Material Icons"}
                  name={"search"}
                />
              </TouchableOpacity>
            </View>
          </TitleBar>
          <ScrollView style={styles.scroll}>
            <View style={styles.view1}>
              <HomePricipal
                style={styles.fragment}
                ref={v => (this.homePricipal = v)}
                screenProps={this.props.screenProps}
                navigation={this.props.navigation}
                activity={this}
                oldState={this.state}
              />
            </View>
            <View style={styles.view2}>
              <HomePricipal
                style={styles.fragment1}
                ref={v => (this.homePricipal = v)}
                screenProps={this.props.screenProps}
                navigation={this.props.navigation}
                activity={this}
                oldState={this.state}
              />
            </View>
            <Rodape style={styles.view3} />
          </ScrollView>
        </Content>
      </DrawerLayout>
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
    backgroundColor: "rgba(128,55,124,1)"
  },
  button: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    flexWrap: "nowrap",
    width: 50,
    marginRight: 50
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  image: {
    width: 70,
    height: 50,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  button1: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    flexWrap: "nowrap",
    flex: 1
  },
  view: {
    alignSelf: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap"
  },
  button2: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    flexWrap: "nowrap",
    width: 50
  },
  image1: {
    width: 25,
    height: 25,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  button3: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    flexWrap: "nowrap",
    width: 50
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  scroll: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  view1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  fragment: {
    alignSelf: "stretch",
    flex: 1
  },
  view2: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  fragment1: {
    alignSelf: "stretch",
    flex: 1
  },
  view3: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    height: 50
  },
  view4: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  button4: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  view5: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    padding: 10
  },
  image2: {
    width: 50,
    height: 50,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    borderRadius: 25
  },
  view6: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    padding: 10
  },
  text: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch"
  },
  text1: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 13
  },
  text2: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(150,150,145,1)",
    alignSelf: "stretch",
    fontSize: 9
  },
  button5: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  view7: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    padding: 10,
    marginTop: 20
  },
  image3: {
    width: 50,
    height: 50,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    borderRadius: 25
  },
  image4: {
    width: 50,
    height: 50,
    flexDirection: "column",
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    borderRadius: 25,
    minWidth: 50
  },
  view8: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    padding: 10
  },
  text3: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 14
  },
  text4: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(150,150,145,1)",
    alignSelf: "stretch",
    fontSize: 9
  },
  text5: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 16,
    marginLeft: 10
  },
  scroll1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  view9: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    padding: 10
  },
  button6: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text6: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 16,
    marginLeft: 10
  },
  button7: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text7: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 16,
    marginLeft: 10
  },
  button8: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text8: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 16,
    marginLeft: 10
  },
  button9: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text9: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 16,
    marginLeft: 10
  },
  button10: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  view10: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    paddingLeft: 10
  },
  text10: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 16
  },
  text11: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(231,231,231,1)",
    alignSelf: "stretch",
    fontSize: 13
  },
  view11: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    padding: 10
  },
  button11: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text12: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 16,
    marginLeft: 10
  },
  view12: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    padding: 10
  },
  view13: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    height: 1,
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  button12: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text13: {
    textAlign: "left",
    flexWrap: "wrap",
    color: "rgba(255,255,255,1)",
    alignSelf: "stretch",
    fontSize: 16,
    marginLeft: 10
  },
  menuleft: {
    backgroundColor: "rgba(128,55,124,1)",
    width: 250,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  }
});
