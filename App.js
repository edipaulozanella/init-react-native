// import React from 'react';
// import { View, Text } from 'react-native';
// import MapView from 'react-native-maps';

// export default class MyMap extends React.Component {
//     state = {
//         latitude: 20.9948891,
//         longitude: 105.799677,
//         latitudeDelta: 0.002,
//         longitudeDelta: 0.002
//     }
    
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.text}>Welcome to react-native-maps</Text>
//                 <MapView style={styles.map} initialRegion={this.state}>
//                     <MapView.Marker coordinate={this.state} />
//                 </MapView>
//             </View>
//         );
//     }
// }

// const styles = {
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff'
//     },
//     text: {
//         fontSize: 30,
//         fontWeight: '700',
//         color: '#59656C',
//         marginBottom: 10,
//     },
//     map: {
//         width: 300,
//         height: 300,
//         flex: 1
//     }
// };



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
