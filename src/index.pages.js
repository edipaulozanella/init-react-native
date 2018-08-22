import {
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { connect } from "react-redux";
import Home from "./views/Home";
import Pedidos from "./views/pedidos/Pedidos";
import Carrinho from "./views/pedidos/Carrinho";
import DetalhesPedidos from "./views/pedidos/DetalhesPedido";
import SelecionarProduto from "./views/pedidos/SelecionarProduto";
import ModalOutros from "./views/pedidos/ModalOutros";
import AddCartao from "./views/pedidos/AddCartao";
import PedidosOpcoes from "./views/pedidos/SelecionarOpcoes/Opcoes";
import LoadPedido from "./views/pedidos/LoadPedido";
import Notificacoes from "./views/Notificacoes";
import Pesquisa from "./views/Pesquisa";
import Conta from "./views/usuario/Conta";
import AddEndereco from "./views/usuario/AddEndereco";

import Configuracoes from "./views/configuracoes/Configuracoes";
import HorarioAtendimento from "./views/horario/Atendimento";
import PedidosEnderecos from "./views/pedidos/Enderecos";

import React from "react";

import { Image } from "react-native";

export const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: connect()(Home),
      navigationOptions: {
        tabBarLabel: "INÍCIO",
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={{ width: 23, height: 23, tintColor: tintColor }}
            resizeMode={"contain"}
            source={require("../img/ICON-INICIO.png")}
          />
        )
      }
    },
    Pedidos: {
      screen: connect()(Pedidos),
      navigationOptions: {
        tabBarLabel: "PEDIDOS",
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={{ width: 23, height: 23, tintColor: tintColor }}
            resizeMode={"contain"}
            source={require("../img/ICON-PEDIDOS.png")}
          />
        )
      }
    },
    Notificacoes: {
      screen: connect()(Notificacoes),
      navigationOptions: {
        tabBarLabel: "NOTIFICAÇÕES",
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={{ width: 23, height: 23, tintColor: tintColor }}
            resizeMode={"contain"}
            source={require("../img/ICON-NOTIFICACOES.png")}
          />
        )
      }
    },
    Conta: {
      screen: connect()(Conta),
      navigationOptions: {
        tabBarLabel: "CONTA",
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={{ width: 23, height: 23, tintColor: tintColor }}
            resizeMode={"contain"}
            source={require("../img/ICON-CONTA.png")}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#fff",
      labelStyle: {
        fontSize: 12,
        fontWeight: "bold"
      },
      style: {
        backgroundColor: "#8c0000",
        height: 55
      }
    }
  }
);

Tab.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let header;
  header = null;
  return {
    header
  };
};

export function registerScreens() {
  return {
    tab: {
      screen: Tab
    },
    Pesquisa: {
      screen: Pesquisa,
      navigationOptions: {
        header: null
      }
    },
    HorarioAtendimento: {
      screen: connect()(HorarioAtendimento),
      navigationOptions: {
        header: null
      }
    },
    Configuracoes: {
      screen: connect()(Configuracoes),
      navigationOptions: {
        header: null
      }
    },
    SelecionarProduto: {
      screen: connect()(SelecionarProduto),
      navigationOptions: {
        header: null
      }
    },
    Carrinho: {
      screen: connect()(Carrinho),
      navigationOptions: {
        header: null
      }
    },
    ModalOutros: {
      screen: connect()(ModalOutros),
      navigationOptions: {
        header: null
      }
    },
    DetalhesPedidos: {
      screen: connect()(DetalhesPedidos),
      navigationOptions: {
        header: null
      }
    },
    AddCartao: {
      screen: connect()(AddCartao),
      navigationOptions: {
        header: null
      }
    },
    PedidosOpcoes: {
      screen: connect()(PedidosOpcoes),
      navigationOptions: {
        header: null
      }
    },
    LoadPedido: {
      screen: connect()(LoadPedido),
      navigationOptions: {
        header: null
      }
    },
    PedidosEnderecos: {
      screen: connect()(PedidosEnderecos),
      navigationOptions: {
        header: null
      }
    },
    AddEndereco: {
      screen: connect()(AddEndereco),
      navigationOptions: {
        header: null
      }
    },
  };
}
