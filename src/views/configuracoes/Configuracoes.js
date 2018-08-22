import React, { Component } from "react";

import { Content, Icon, TitleBar } from "react-native-1app";
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView
} from "react-native";
import Banner from "../dashboard/Banner.js";
import * as empresa from "../../worker/empresa";
import * as actions from "../../redux/actions";

export default class Configuracoes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.carregarEmpresa();

  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      console.log(123123,store)
      if (store.horarios != this.state.horarios) this.setState({ horarios: store.horarios });
      if (store.empresa != this.state.empresa) this.setState({ empresa: store.empresa });

    });
  }

  openPesquisa(unidade){
    this.props.navigation.navigate('Pesquisa', {activity: this, oldState: this.state});
  }

  carregarEmpresa() {
    empresa.loadEmpresa(resposta => {
      var empresa = actions.setEmpresa(
        resposta[0],
        this.props.screenProps.store
      );
      this.props.screenProps.store.dispatch(empresa);
    });
        empresa.formasPagamento(retorno => {
          console.log(4444,retorno);
          var horarios = actions.setHorarios(
            retorno,
            this.props.screenProps.store
          );
          this.props.screenProps.store.dispatch(horarios);
        });
  }


  backPageButton() {
    this.props.navigation.goBack();
  }

  render() {
    console.log(this.state)
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
              style={styles.icon3}
              fromFontFamily={"Material Icons"}
              name={"keyboard_backspace"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{"HAMBURGUERIA IMPÉRIO GOURMET"}</Text>
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
        <ScrollView style={styles.scroll}>
          <View style={styles.view2}>
            <Banner
              style={styles.fragment}
              screenProps={this.props.screenProps}
              navigation={this.props.navigation}
              activity={this}
            />
          </View>
          <View style={styles.view3}>
            <Text style={styles.text81}>{"SOBRE"}</Text>
          </View>
          <View style={styles.view3_1}>
            <Text style={styles.text21}>
              {"Novidade!! Experimente o pão de carvão de Bambu"}
            </Text>
          </View>
          <View style={styles.view41}>
            <Text style={styles.text82}>{"FORMAS DE PAGAMENTO"}</Text>
          </View>
          <View style={styles.view6}>
            <View style={styles.view71}>
              <Icon
                style={styles.icon21}
                fromFontFamily={"Material Design Icons"}
                name={"credit-card"}
              />
              <Text style={styles.text22}>{"Dinheiro"}</Text>
            </View>
            <View style={styles.view72}>
            <Image
            style={{ width: 23, height: 23 }}
            resizeMode={"contain"}
            source={require('../../../img/Elo_logo.png')} />
              <Text style={styles.text23}>{"Elo - Crédito"}</Text>
            </View>
            <View style={styles.view7}>
            <Image
            style={{ width: 23, height: 23 }}
            resizeMode={"contain"}
            source={require('../../../img/Elo_logo.png')} />
              <Text style={styles.text2}>{"Elo - Débito"}</Text>
            </View>
            <View style={styles.view72}>
            <Image
            style={{ width: 23, height: 23 }}
            resizeMode={"contain"}
            source={require('../../../img/Hipercard-logo.png')} />
              <Text style={styles.text23}>{"Hipercard - Crédito"}</Text>
            </View>
            <View style={styles.view7}>
            <Image
            style={{ width: 23, height: 23 }}
            resizeMode={"contain"}
            source={require('../../../img/Hipercard-logo.png')} />
              <Text style={styles.text2}>{"Hipercard - Débito"}</Text>
            </View>
            <View style={styles.view72}>
            <Image
            style={{ width: 23, height: 23 }}
            resizeMode={"contain"}
            source={require('../../../img/mastercard.png')} />
              <Text style={styles.text23}>{"MasterCard - Crédito"}</Text>
            </View>
            <View style={styles.view7}>
            <Image
            style={{ width: 23, height: 23 }}
            resizeMode={"contain"}
            source={require('../../../img/mastercard.png')} />
              <Text style={styles.text2}>{"MasterCard - Débito"}</Text>
            </View>
            <View style={styles.view72}>
            <Image
            style={{ width: 23, height: 23 }}
            resizeMode={"contain"}
            source={require('../../../img/visa.png')} />
              <Text style={styles.text23}>{"Visa - Crédito"}</Text>
            </View>
            <View style={styles.view7}>
            <Image
            style={{ width: 23, height: 23 }}
            resizeMode={"contain"}
            source={require('../../../img/visa.png')} />
              <Text style={styles.text2}>{"Visa - Débito"}</Text>
            </View>

          </View>
          <View style={styles.view4}>
            <Text style={styles.text8}>{"LOCALIZAÇÃO"}</Text>
          </View>
          <View style={styles.view9}>
            <Icon
              style={styles.icon1}
              fromFontFamily={"Material Design Icons"}
              name={"map-marker"}
            />
            <Text style={styles.text7}>
              {
                "R. Cel. Teixeira de Oliveira, 427 - Centro, Biguaçu - SC, 88160-000, Brazil"
              }
            </Text>
          </View>
          <Image
            style={{ width: Dimensions.get('window').width, height: 200 }}
            resizeMode={"cover"}
            source={require('../../../img/map.png')} />

          <View style={styles.view12}>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
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
  icon3: {
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
  button2: {
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
  scroll: {
    alignSelf: "auto",
    flexDirection: "column"
  },
  view2: {
    alignSelf: "stretch",
    flex: 1
  },
  fragment: {
    alignSelf: "stretch",
    flex: 1
  },
  view3: {
    height: 50,
    backgroundColor: "#eeeeee",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  text81: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontSize: 16,
    margin: 5
  },
  view3_1: {
    alignSelf: "stretch",
    flex: 1,
    minHeight: 70,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#FFF"
  },
  text21: {
    fontSize: 15,
    marginLeft: 5,
    alignSelf: "center",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  view41: {
    height: 50,
    backgroundColor: "#eeeeee",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10
  },
  text82: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontSize: 16,
    margin: 5
  },
  view6: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  view71: {
    alignSelf: "stretch",
    paddingLeft: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  icon21: {
    color: "#00b22d",
    fontSize: 25
  },
  text22: {
    fontSize: 15,
    marginLeft: 5,
    alignSelf: "center",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  view72: {
    alignSelf: "stretch",
    paddingLeft: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  icon22: {
    color: "#00b22d",
    fontSize: 25
  },
  text23: {
    fontSize: 15,
    marginLeft: 5,
    alignSelf: "center",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  view7: {
    alignSelf: "stretch",
    paddingLeft: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  icon2: {
    color: "#00b22d",
    fontSize: 25
  },
  text2: {
    fontSize: 15,
    marginLeft: 5,
    alignSelf: "center",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  view4: {
    height: 50,
    backgroundColor: "#eeeeee",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10
  },
  text8: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontSize: 16,
    margin: 5
  },
  view9: {
    flexDirection: "row",
    borderRadius: 10,
    margin: 10,
    alignSelf: "stretch",
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    color: "#868686",
    fontSize: 25
  },
  text7: {
    color: "#000",
    padding: 10,
    flex: 1,
    alignSelf: "auto",
    fontSize: 17
  },
  view12: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  mapview: {
    alignSelf: "stretch",
    height: 200,
    flex: 1
  },
  map:{
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1

  },
});
