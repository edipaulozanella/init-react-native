import React, { Component } from "react";

import { Content, Icon, TextInput, TitleBar } from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";

export default class AddEndereco extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      if (store.item != this.state.item) this.setState({ item: store.item });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  backPageButton1() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.content}>
        <TitleBar style={styles.titlebar}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.backPageButton1();
            }}
          >
            <Icon
              style={styles.icon}
              fromFontFamily={"Material Icons"}
              name={"keyboard_backspace"}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{"Endereço"}</Text>
          <TouchableOpacity style={styles.button2}>
            <Icon
              style={styles.icon2}
              fromFontFamily={"Material Design Icons"}
              name={"content-save"}
            />
          </TouchableOpacity>
        </TitleBar>
        <View style={styles.view2}>
          <ScrollView style={styles.scroll}>
            <View style={styles.view3}>
              <TextInput
                style={styles.textinput}
                onChange={value => {}}
                keyboardType={"default"}
                label={"CEP"}
              />
              <TouchableOpacity style={styles.button3}>
                <Icon
                  style={styles.icon3}
                  fromFontFamily={"Material Design Icons"}
                  name={"magnify"}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button4}>
                <Icon
                  style={styles.icon4}
                  fromFontFamily={"Material Design Icons"}
                  name={"file-document-box"}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button5}>
                <Icon
                  style={styles.icon5}
                  fromFontFamily={"Material Design Icons"}
                  name={"crosshairs-gps"}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.view4}>
              <Text style={styles.text2}>{"Teste"}</Text>
            </View>
            <View style={styles.view5}>
              <TextInput
                style={styles.textinput2}
                onChange={value => {}}
                keyboardType={"default"}
                label={"Rua"}
              />
              <TextInput
                style={styles.textinput3}
                onChange={value => {}}
                keyboardType={"default"}
                label={"Número"}
              />
              <TouchableOpacity style={styles.button6}>
                <Icon
                  style={styles.icon6}
                  fromFontFamily={"Material Design Icons"}
                  name={"magnify"}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.view6}>
              <TextInput
                style={styles.textinput4}
                onChange={value => {}}
                keyboardType={"default"}
                label={"Complemento"}
              />
            </View>
            <TouchableOpacity style={styles.button7}>
              <Icon
                style={styles.icon7}
                fromFontFamily={"Material Design Icons"}
                name={"google-maps"}
              />
              <Text style={styles.text3}>{"AJUSTAR NO MAPA"}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
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
    marginRight: 10
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  view2: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  scroll: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    padding: 20
  },
  view3: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 5
  },
  textinput: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    flex: 0.7
  },
  button3: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    flex: 0.11,
    height: 50,
    flexDirection: "column"
  },
  icon3: {
    color: "rgba(81,82,83,1)",
    fontSize: 25
  },
  button4: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    flex: 0.11,
    height: 50,
    flexDirection: "column"
  },
  icon4: {
    color: "rgba(81,82,83,1)",
    fontSize: 25
  },
  button5: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    flex: 0.11,
    height: 50,
    flexDirection: "column"
  },
  icon5: {
    color: "rgba(81,82,83,1)",
    fontSize: 25
  },
  view4: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "rgba(238,238,238,1)",
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  },
  text2: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    fontWeight: "normal"
  },
  view5: {
    alignSelf: "stretch",
    marginTop: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  textinput2: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    flex: 1
  },
  textinput3: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal",
    flex: 1
  },
  button6: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "column"
  },
  icon6: {
    color: "rgba(81,82,83,1)",
    fontSize: 25
  },
  view6: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  textinput4: {
    color: "rgba(0,0,0,1)",
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "normal"
  },
  button7: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "rgba(134,134,134,1)",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5
  },
  icon7: {
    color: "rgba(150,150,145,1)",
    fontSize: 25,
    marginRight: 10
  },
  text3: {
    textAlign: "center",
    color: "rgba(134,134,134,1)",
    alignSelf: "center",
    fontWeight: "normal"
  }
});
