import React, { Component } from "react";

import {
  Content,
  Icon,
  Image,
  DrawerLayout,
  Fragment,
  RefreshControl,
  Photos,Progress,
  TitleBar
} from "react-native-1app";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";




import {Util} from "../infra";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:this.props.screenProps.store.getState().user,
    };
  }



componentWillUnmount() {}



openListaLocais(unidade){
  this.props.navigation.navigate('ListaLocais', {activity: this, oldState: this.state,unidade});
}
openPesquisa(unidade){

  this.props.navigation.navigate('Pesquisa', {activity: this, oldState: this.state});
}
render() {
  return (
    <View style={styles.content}>
      <TitleBar style={styles.titlebar} removeShadow>
        <TouchableOpacity
          style={styles.button1}

          >

        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require("../../img/logo.png")}
          resizeMode={"contain"}
          />

        {false&&<Text style={styles.text}>{"Home"}</Text>}
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
  tabview: {
    alignSelf: "stretch",
    flex: 1
  },
  load:{
    position:"absolute",
    top:0,
    right:-16,
    bottom:-5,
    alignItems: "center",
    justifyContent: "center",
    left:-16,
    zIndex:300,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  image:{
    width:150,
    height:40,
  },
  titlebar: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "rgba(218,218,218,1)"
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
    color: "rgba(150,150,145,1)",
    fontSize: 25
  },
  text: {
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    alignSelf: "auto",
    fontWeight: "normal",
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
    backgroundColor: "rgba(255,255,255,1)",
  },
});
