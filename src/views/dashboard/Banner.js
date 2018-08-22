import React, { Component } from "react";

import { Content, Icon } from "react-native-1app";
import { StyleSheet, Image, Text, View } from "react-native";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: {}
    };
  }

  componentDidMount() {
    this.unsubscribe = this.props.screenProps.store.subscribe(() => {
      var store = this.props.screenProps.store.getState();
      if (store.empresa != this.state.empresa)
        this.setState({ empresa: store.empresa });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.content}>
        <View style={styles.view2}>
          <View style={styles.view2_1}>
            <Image
              style={styles.image3}
              resizeMode={"cover"}
              source={{uri: this.state.empresa.logo}}
            />
          </View>
        </View>
        <View style={styles.view3}>
          <View style={styles.view9}>
            <Text style={styles.text3}>{this.state.empresa.nome}</Text>
          </View>
          <View style={styles.view4}>
            {this.state.empresa.boolAberto ?
            <View style={styles.view51}>
              <Icon
                style={[styles.icon21, { color: "#00b22d" }]}
                fromFontFamily={"Material Design Icons"}
                name={"checkbox-blank-circle"}
              />
              <Text style={styles.text51}>{"Aberto"}</Text>
              </View>

              : 
              <View style={styles.view51}>

              <Icon
                style={[styles.icon21, { color: "#ff0000" }]}
                fromFontFamily={"Material Design Icons"}
                name={"checkbox-blank-circle"}
              />
              <Text style={styles.text51}>{"Fechado"}</Text>
            </View>
              }
            <View style={styles.view8}>
              <Text style={styles.text41}>{this.state.empresa.tipo}</Text>
            </View>
            <View style={styles.view5}>
              <Icon
                style={styles.icon2}
                fromFontFamily={"Material Design Icons"}
                name={"clock"}
              />
              <Text style={styles.text5}>{this.state.empresa.tempomedio}</Text>
            </View>
          </View>
        </View>
      </View>
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
  view2: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,1)",
    height: 180
  },
  view2_1: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  image3: {
    marginTop: 5,
    height: 170,
    width: 200,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
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
    backgroundColor: "rgba(255,255,255,1)"
  },
  view9: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "column"
  },
  text3: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontWeight: "600",
    fontSize: 17,
    alignSelf: "auto"
  },
  view4: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  view51: {
    flexDirection: "row",
    maxWidth: 100,
    height: 23,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,1)"
  },
  icon21: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    height: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  text51: {
    textAlign: "center",
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 14,
    flex: 1
  },
  view8: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  text41: {
    textAlign: "center",
    color: "#868686",
    alignSelf: "center",
    fontWeight: "600",
    marginLeft: 30,
    marginRight: 30,
    fontSize: 17
  },
  view5: {
    flexDirection: "row",
    maxWidth: 100,
    minHeight: 25,
    maxHeight: 35,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,1)"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    height: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  text5: {
    textAlign: "center",
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 14,
    flex: 1
  }
});
