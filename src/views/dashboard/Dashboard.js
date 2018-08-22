import React, { Component } from "react";

import {
  Content,
  Icon,
  Image,
  ListView,
  DrawerLayout,
  Photos,
  Progress,
  TitleBar,
  ScrollView
} from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text
} from "react-native";
import MenuLateral from "./MenuLateral.js";
import Banner from "./Banner.js";
import ListagemProdutos from "./listagemProdutos.js";
import { loadEmpresa, getProdutosCategoria } from "../../worker/empresa";
import * as actions from "../../redux/actions";
import * as pedidos from "../../worker/pedidos";
import IconeCarrinho from "./IconeCarrinho";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pedidoSelect: { descricao: "" },
      user: this.props.screenProps.store.getState().user,
      empresa: {},
      numeroItensCarrinho: 0,
      produtos: {},
      carrinho: {}
    };
  }

  componentDidMount() {
    this.carregarEmpresa();
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      if (
        store.produtos != this.state.produtos ||
        store.carrinho != this.state.carrinho ||
        store.empresa != this.state.empresa ||
        store.user != this.state.user
      ) {
        this.setState({
          produtos: store.produtos,
          carrinho: store.carrinho,
          user: store.user,
          empresa: store.empresa,
          numeroItensCarrinho: store.carrinho.items.length
        });
      }
    });
    pedidos.itensNoCarrinho(carrinho =>
      this.props.screenProps.store.dispatch({
        type: "SETCARRINHO",
        newCarrinho: carrinho
      })
    );
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  openPesquisa(unidade) {
    this.props.navigation.navigate("Pesquisa", {
      activity: this,
      oldState: this.state
    });
  }

  openListaLocais(unidade) {
    this.props.navigation.navigate("ListaLocais", {
      activity: this,
      oldState: this.state,
      unidade
    });
  }

  openProduto(unidade) {
    this.props.navigation.navigate("SelecionarProduto");
  }

  openPageButton4() {
    this.props.navigation.navigate("Carrinho");
  }

  carregarEmpresa() {
    loadEmpresa(resposta => {
      var empresa = actions.setEmpresa(
        resposta[0],
        this.props.screenProps.store
      );
      this.props.screenProps.store.dispatch(empresa);
    });
    getProdutosCategoria(retorno => {
      var produtos = actions.setProdutos(retorno, this.props.screenProps.store);
      this.props.screenProps.store.dispatch(produtos);
    });
  }

  renderProduto() {
    var views = [];
    if (this.state.produtos) {
      for (let i = 0; i < this.state.produtos.length; i++) {
        let categoria = this.state.produtos[i];
        if (!categoria.listaprodutos || !categoria.listaprodutos.length)
          continue;
        views.push(
          <ListagemProdutos
            style={styles.fragment}
            nome={categoria.nome}
            produtos={categoria.listaprodutos}
            screenProps={this.props.screenProps}
            navigation={this.props.navigation}
            activity={this}
          />
        );
      }
      return views;
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
              <MenuLateral
                style={styles.fragment}
                screenProps={this.props.screenProps}
                navigation={this.props.navigation}
                activity={this}
              />
            </View>
          );
        }}
        drawerPosition={DrawerLayout.positions.Left}
        ref={v => (this.menuLeft = v)}
      >
        <View style={styles.content}>
          <TitleBar style={styles.titlebar} removeShadow>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => this.menuLeft.openDrawer()}
            >
              <Icon
                style={styles.icon}
                fromFontFamily={"Material Design Icons"}
                name={"menu"}
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
          <ScrollView style={styles.ScrollView}>
            <View style={styles.view1}>
              <View style={styles.view2}>
                <Banner
                  style={styles.fragment}
                  screenProps={this.props.screenProps}
                  navigation={this.props.navigation}
                  activity={this}
                />
              </View>
              <View style={styles.view2}>{this.renderProduto()}</View>
            </View>
          </ScrollView>
          {this.state.numeroItensCarrinho &&
          this.state.numeroItensCarrinho > 0 ? (
            // <View style={styles.view9}>
            //   <TouchableOpacity
            //     style={styles.new}
            //     onPress={() => this.openPageButton4()}
            //     elevation={5}
            //   >
            //     <Icon
            //       style={styles.icon2new}
            //       fromFontFamily={"Material Design Icons"}
            //       icon={"cart-outline"}
            //     />
            //     <View style={styles.viewNew}>
            //       <Text style={styles.itensNew}>{this.state.numeroItensCarrinho}</Text>
            //     </View>
            //   </TouchableOpacity>
            // </View>
            <IconeCarrinho
              style={styles.fragment}
              screenProps={this.props.screenProps}
              navigation={this.props.navigation}
              activity={this}
              numeroItensCarrinho={this.state.numeroItensCarrinho}
            />
          ) : null}
        </View>
      </DrawerLayout>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: "#EEEEEE",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  icon2new: {
    fontSize: 30,
    color: "rgba(255,255,255,1)"
  },
  viewNew: {
    alignSelf: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    padding: 3,
    borderRadius: 10,
    minWidth: 20,
    minHeight: 20,
    top: 8,
    right: 8
  },
  itensNew: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "900",
    fontSize: 12,
    maxWidth: 30
  },
  view9: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexWrap: "nowrap",
    position: "absolute",
    padding: 10,
    right: 0,
    bottom: 0,
    left: 0
  },
  new: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flexDirection: "column",
    flexWrap: "nowrap",
    width: 60,
    borderRadius: 30,
    backgroundColor: "rgba(139,0,0,1)"
  },
  ScrollView: {
    alignSelf: "stretch",
    flex: 1,
    width: Dimensions.get("window").width
  },
  menuleft: {
    alignSelf: "stretch",
    flex: 1
  },
  tabview: {
    alignSelf: "stretch",
    flex: 1
  },
  load: {
    position: "absolute",
    top: 0,
    right: -16,
    bottom: -5,
    alignItems: "center",
    justifyContent: "center",
    left: -16,
    zIndex: 300,
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  image: {
    width: 150,
    height: 40
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
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    height: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    alignSelf: "auto",
    fontWeight: "bold",
    fontSize: 14,
    flex: 1
  },
  text2: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
    flex: 1
  },
  text7: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 15,
    flex: 1
  },
  text8: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  text5: {
    textAlign: "center",
    color: "#ffffff",
    alignSelf: "center",
    fontWeight: "600",
    marginTop: -3,
    fontSize: 12,
    flex: 1
  },
  text6: {
    textAlign: "left",
    fontSize: 17,
    margin: 10,
    flex: 1
  },
  button2: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    width: 50
  },

  button3: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 66,
    flexDirection: "row",
    margin: 5,
    backgroundColor: "rgba(255,255,255,1)"
  },
  view1: {
    flex: 1,
    flexDirection: "column"
  },
  view2: {
    flex: 1,
    alignSelf: "stretch"
  },
  view3: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "rgba(255,255,255,1)",
    height: 110
  },
  image3: {
    marginTop: 5,
    height: 170,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  fragment: {
    alignSelf: "stretch",
    flex: 1
  },
  image4: {
    height: 70,
    width: 70,
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  view4: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: -60,
    alignItems: "center"
  },
  view5: {
    flexDirection: "row",
    maxWidth: 100,
    height: 25,
    borderRadius: 15,
    borderWidth: 7,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,1)"
  },
  view7: {
    flexDirection: "row",
    height: 100,
    flex: 1,
    padding: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  view8: {
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});
