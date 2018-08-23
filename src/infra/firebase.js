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
import { showMessage } from "react-native-1app/lib/FlashMessage";

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
    // tratarNotificacao(alert, data);
  });
  FCM.setBadgeNumber(0);
  //   FCM.cancelAllLocalNotifications();
}

export function configReceberNotificacoes(callback) {
  AppState.addEventListener("change", state => {
    if (state == "active") FCM.setBadgeNumber(0);
  });
  if (subscrible) return;
  subscrible = FCM.on(FCMEvent.Notification, notif => {
    if(__DEV__)console.log("Callbaci", notif);
    // Alert.alert("Notificação", JSON.stringify(notif))
    var alert = { title: "", body: "" };
    if (notif.fcm) {
      alert = notif.fcm;
    } else if (notif.aps && notif.aps.alert && notif.aps.alert.title) {
      alert = notif.aps.alert;
    }
    if ((alert && (alert.title||alert.body)) || notif.alert) {
      let act=notif.link?[{label:"ABRIR",onPress:()=>navigation.navigate("PgPdf", {activity: {}, oldState: {},url:notif.link}) }]:[];
      showMessage({
        message: alert.title,
        description: alert.body,
        type: "info",
        backgroundColor:'#001E60',
        icon:{ icon: "notifications_active", position: "left" },duration:8000,
        actions:[...act,{label:"OK"}]
      });
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