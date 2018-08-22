import React, { Component } from "react";

import { Content, Icon, Image, TextInput, TitleBar } from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,FlatList,
  Text
} from "react-native";

export default class Notificacoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : ["Algo", "Teste", "Lista"]
    };
  }

  backPageButton() {
    this.props.navigation.goBack();
  }

  openPesquisa(unidade){
    this.props.navigation.navigate('Pesquisa', {activity: this, oldState: this.state});
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      if (store.item != this.state.item) this.setState({ item: store.item });
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <TitleBar style={styles.titlebar} removeShadow>
        <TouchableOpacity
          style={styles.button1} onPress={() => {
            this.backPageButton();
          }}
          >
            <Icon
            style={styles.icon}
            fromFontFamily={"Material Icons"}
            name={"keyboard_backspace"}
            />
        </TouchableOpacity>
        {<Text style={styles.text}>{"HAMBURGUERIA IMPÉRIO GOURMET"}</Text>}
        <TouchableOpacity style={styles.button2} onPress={() => {
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
      <View style={styles.view2}>
         <Text style={styles.text1}>{"NOTIFICAÇÕES"}</Text>
        </View>
        <FlatList
          style={styles.flatlist}
          renderItem={({ item, index }) => {
            return (
              <Cell
                texto={item}
                screenProps={this.props.screenProps}
                activity={this}
                navigation={this.props.navigation}
                rowID={index}
              />
            );
          }}
          data={this.state.list}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}



  render() {
    return (
      <View>
         
          <View style={styles.view3_1}>
           <Icon
            style={[styles.icon2, {color: "#eeeeee"}]}
            fromFontFamily={"Material Design Icons"}
            name={"checkbox-blank-circle"}
            />
            <Text style={styles.text2}>{"Seu Pedido Foi Efetuado Com Sucesso"}</Text>
          </View>
            <View style={styles.view3}>
              <Icon
              style={[styles.icon2, {color: "#fff"}]}
              fromFontFamily={"Material Design Icons"}
              name={"checkbox-blank-circle"}
              />
              <Text style={styles.text2}>{"Seu Pedido Foi Efetuado Com Sucesso"}</Text>
            </View>
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
  flatlist: {
    alignSelf: "stretch",
    minHeight: 300
  },
  cell: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(155,155,155,1)",
    fontSize: 25
  },
  view3_1: {
    alignSelf: "stretch",
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#FFF"
  },
  view3: {
    alignSelf: "stretch",
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#eeeeee"
  },
  button2: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column",
    width: 50
  },
  text: {
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    alignSelf: "auto",
    
    fontWeight: "bold",
    fontSize: 15,
    flex: 1
  },
  text1:{
    fontSize: 17,
    textAlign: "center",
    color: "#868686",
  },
  text2:{
    fontSize: 14,
    textAlign: "left",
    marginLeft: 10,
    color: "#868686",
  },
  view2:{
    height: 60,
    backgroundColor: "#EEEEEE",
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10
  }
});
