import React, { Component } from "react";
import {
  View,
  Vibration,
  Platform,
  AppState,
  Dimensions,
  Alert
} from "react-native";
import { Cloud } from "../infra";

import FCM, {
  FCMEvent,
  RemoteNotificationResult,
  WillPresentNotificationResult,
  NotificationType
} from "react-native-fcm";
var navigation = null;
var globalStore = null;
var subscrible = null;
export function init(callback, store, nav) {
  navigation = nav;
  globalStore = store;
  FCM.requestPermissions(); // for iOS
  getToken(callback);
  configReceberNotificacoes((alert, data) => {
    tratarNotificacao(alert, data);
  });
  FCM.setBadgeNumber(0);
  //   FCM.cancelAllLocalNotifications();
}
export function tratarNotificacao(alert, data) {
  //   console.log("Dentro");
  //   console.log(alert, data);
  //   Alert.alert("Notificação", JSON.stringify(data));
  if (data.opened_from_tray == 1 && navigation && data.type == "chat") {
    navigation.navigate("PessoasChat", {});
  }
  // else {
  //     console.log("naõ abre  pg");
  //   }
  if (globalStore && data.type == "chat") {
    globalStore.dispatch({
      type: "SOMAR_TOTAL_CHAT"
    });
  }
  if (globalStore && data.type != "chat") {
    globalStore.dispatch({
      type: "SOMAR_NOTIFICACOES"
    });
  }
}
export function configReceberNotificacoes(callback) {
  AppState.addEventListener("change", state => {
    if (state == "active") FCM.setBadgeNumber(0);
  });
  if (subscrible) return;
  subscrible = FCM.on(FCMEvent.Notification, notif => {
    console.log("Callbaci", notif);
    // Alert.alert("Notificação", JSON.stringify(notif))
    var alert = { title: "", body: "" };
    if (notif.fcm) {
      alert = notif.fcm;
    } else if (notif.aps && notif.aps.alert && notif.aps.alert.title) {
      alert = notif.aps.alert;
    }
    if ((alert && alert.title) || notif.alert) {
      Vibration.vibrate();
      if (callback) callback(alert, notif);
    }
  });
}

export function getToken(callback) {
  FCM.getFCMToken().then(token => {
    //console.log(token);
    if (callback) callback(token);
  });
}
