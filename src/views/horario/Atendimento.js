import React, { Component } from "react";

import { Content, Icon, TitleBar, ScrollView } from "react-native-1app";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import Banner from "../dashboard/Banner.js";
import * as empresa from "../../worker/empresa";

export default class HorarioAtendimento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horariosAtendimento: this.props.screenProps.store.getState()
        .horariosAtendimento,
      empresa: this.props.screenProps.store.getState().empresa
    };
    this.horarioFuncionamento();
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      console.log(store, this.state.horarioAtendimento);

      if (
        store.horariosAtendimento != this.state.horariosAtendimento ||
        store.empresa != this.state.empresa
      )
        this.setState({
          horariosAtendimento: store.horariosAtendimento,
          empresa: store.empresa
        });
    });
  }

  horarioFuncionamento() {
    empresa.horarioFuncionamento(resposta =>
      this.props.screenProps.store.dispatch({
        type: "SET_HORARIO_ATENDIMENTO",
        horariosAtendimento: resposta
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

  backPageButton() {
    this.props.navigation.goBack();
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
          <Text style={styles.text}>{this.state.empresa.nome}</Text>
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
          <View style={styles.view2}>
            <Banner
              style={styles.fragment}
              screenProps={this.props.screenProps}
              navigation={this.props.navigation}
              activity={this}
            />
          </View>
          <View style={styles.view3}>
            <Text style={styles.text8}>{"HORÁRIO DE ATENDIMENTO"}</Text>
          </View>
          <View style={styles.view8}>
            <Text style={styles.textdesc}>{"DOMINGO"}</Text>
          </View>
          <View style={styles.view3_1}>
            <Text style={styles.text2}>{"19:00 até 13:30"}</Text>
          </View>
          <View style={styles.view8}>
            <Text style={styles.textdesc}>{"SEGUNDA-FEIRA"}</Text>
          </View>
          <View style={styles.view3_1}>
            <Text style={styles.text2}>{"19:00 até 13:30"}</Text>
            <Text style={styles.text2}>{"19:00 até 13:30"}</Text>
          </View>
          <View style={styles.view8}>
            <Text style={styles.textdesc}>{"TERÇA-FEIRA"}</Text>
          </View>
          <View style={styles.view3_1}>
            <Text style={styles.text2}>{"19:00 até 13:30"}</Text>
            <Text style={styles.text2}>{"19:00 até 13:30"}</Text>
          </View>
          <View style={styles.view8}>
            <Text style={styles.textdesc}>{"QUARTA-FEIRA"}</Text>
          </View>
          <View style={styles.view3_1}>
            <Text style={styles.text2}>{"19:00 até 13:30"}</Text>
            <Text style={styles.text2}>{"19:00 até 13:30"}</Text>
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
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  button2: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    width: 50
  },
  view2: {
    alignSelf: "stretch",
    flex: 1
  },
  fragment: {
    alignSelf: "stretch",
    flex: 1
  },
  text: {
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    alignSelf: "auto",
    fontWeight: "bold",
    fontSize: 15,
    flex: 1
  },
  ScrollView: {
    alignSelf: "stretch",
    flex: 1,
    width: Dimensions.get("window").width
  },
  view3: {
    height: 50,
    backgroundColor: "#eeeeee",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 20
  },
  text8: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "center",
    fontSize: 16,
    margin: 5
  },
  textdesc: {
    fontSize: 15,
    textAlign: "center",
    color: "#868686"
  },
  view8: {
    height: 40,
    backgroundColor: "#eeeeee",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  view3_1: {
    alignSelf: "stretch",
    flex: 1,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#FFF"
  },
  text2: {
    fontSize: 18,
    margin: 5,
    textAlign: "left",
    color: "#868686"
  }
});
