import React, { Component } from "react";

import { Content, Icon, Image, TextInput, TitleBar } from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,FlatList,
  Text
} from "react-native";
import { historicoBusca } from "../redux/actions";
import { Util } from "../infra";

export default class Pesquisa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBuscaAnterios: this.props.screenProps.store.getState()
        .listBuscaAnterios
    };
  }

  componentDidMount() {
    this.textinputBusca.focus();
  }

  buscar() {
    let { texto } = this.state;
    if (!texto || texto.length < 2) {
      setTimeout(() => this.textinputBusca.focus(), 700);

    }
    historicoBusca(this.state.texto);
    // this.props.navigation.navigate("ListaInspecoes", {
    //   activity: this,
    //   oldState: this.state,
    //   local: {},
    //   pesquisa: texto
    // });
  }

  backPageButton() {
    this.props.navigation.goBack();
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.content}>
        <TitleBar style={styles.titlebar}>
          <TouchableOpacity
            style={styles.button}
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
          <TextInput
            style={styles.textinput}
            value={this.state.texto}
            onChange={value => {
              this.setState({ texto: value });
            }}
            keyboardType={"default"}
            inputNative={true}
            placeholder={"Buscar por TAG, Denominação, N° do Relatório"}
            onSubmitEditing={() => {
              this.buscar();
            }}
            returnKeyType='search'
            ref={v => (this.textinputBusca = v)}
          />
          <TouchableOpacity
            style={styles.button}
          >
            <Icon
              style={styles.icon}
              fromFontFamily={"Material Design Icons"}
            name={"magnify"}
            />
          </TouchableOpacity>
        </TitleBar>
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
          data={this.state.listBuscaAnterios}
          keyExtractor={(item, index) => index}
        />
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.buscar();
          }}
        >
          <Icon
            style={styles.icon3}
            fromFontFamily={"Material Design Icons"}
            name={"magnify"}
          />
          <Text style={styles.text3}>{"Buscar"}</Text>
        </TouchableOpacity>
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
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          this.props.activity.setState({texto:this.props.texto});
        }}
        screenProps={this.props.screenProps}
        navigation={this.props.navigation}
        activity={this}
      >
        <View style={styles.view2}>
          <Icon
            style={styles.icon2}
            fromFontFamily={"Material Design Icons"}
            name={"magnify"}
          />
        </View>
        <View style={styles.view3}>
          <Text style={styles.text2}>{this.props.texto}</Text>
        </View>
      </TouchableOpacity>
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
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "#8c0000",
  },
  button: {
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
  textinput: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    flex: 1,
    backgroundColor: "rgba(231,231,231,1)",
    borderRadius:5,
    paddingLeft:5,
    margin:5
  },
  image: {
    width: 50,
    height: 30,
    alignSelf: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
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
  view2: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 55,
    backgroundColor: "rgba(240,240,240,0)"
  },
  icon2: {
    color: "rgba(155,155,155,1)",
    fontSize: 25
  },
  view3: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10
  },
  text2: {
    textAlign: "left",
    color: "rgba(66,66,66,1)",
    alignSelf: "stretch",
    fontWeight: "normal"
  },
  button2: {
    alignSelf: "auto",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    backgroundColor: "#8c0000",
    width: 200,
    borderRadius: 4,
    marginBottom:30
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  text3: {
    textAlign: "left",
    color: "rgba(255,255,255,1)",
    fontWeight: "normal",
    marginLeft: 10
  }
});
