import { Platform, Linking } from "react-native";

export function parseCnae(value) {
  var str = value; //"63.11-9-00";
  if (value) {
    str = str.replace("-", "");
    str = str.replace("-", "");
    str = str.replace(".", "");
    var res = str.substring(0, str.length - 2);
    return parseInt(res);
  } else {
    return value;
  }
}
export function isEmail(email) {
  var er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;
  if (!er.exec(email)) {
    return false;
  } else {
    return true;
  }
}
export function isPhone(t) {
  var RegExp = /\(\d{2}\)\s\d{4,5}-?\d{4,5}/g;
  if (RegExp.test(t)) {
    return true;
  } else {
    return false;
  }
}

export function openMap(data) {
  openRoute(data);
}

export function openRoute(data) {
  var latitude = data.latitude;
  var longitude = data.longitude;
  if (Platform.OS === "android") {
    var uri = "geo:" + latitude + "," + longitude;
    Linking.canOpenURL(uri)
      .then(supported => {
        if (supported) {
          Linking.openURL(uri);
        } else {
          console.log("Don't know how to go");
        }
      })
      .catch(err => console.error("An error occurred", err));
  } else {
    Linking.canOpenURL("comgooglemaps://").then(supported => {
      if (supported) {
        Linking.openURL(
          "comgooglemaps://?q=" + data.latitude + "," + data.longitude + ""
        );
      } else {
        if (Platform.OS === "android") {
          Linking.openURL(
            "maps://maps.apple.com/?q=" +
              data.latitude +
              "," +
              data.longitude +
              ""
          );
        } else {
          Linking.openURL(
            "maps://maps.apple.com/?q=" +
              data.latitude +
              "," +
              data.longitude +
              ""
          );
        }
      }
    });
  }
  //
  //    const rla = this.region.latitude;
  //   const rlo = this.region.longitude;
  //   const url = `http://maps.apple.com/?saddr=${rla},${rlo}&daddr=${la},${lo}&dirflg=d`;
  // "http://maps.apple.com/maps?daddr=\(destinationLocation.latitude),\(destinationLocation.longitude)&dirflg=d"
  //http://maps.google.com/?saddr=%1.6f,%1.6f&daddr=%1.6f,%1.6f
}

export function web(address) {
  if (!startsWith(address, "http")) {
    address = "http://" + address;
  }
  Linking.canOpenURL(address).then(supported => {
    if (supported) {
      Linking.openURL(address);
    } else {
      console.log("Don't know how to open URI: " + address);
    }
  });
}

export function call(phoneNumber) {
  var link;
  if (Platform.OS !== "android") {
    link = phoneNumber ? "telprompt:" : "tel:";
  } else {
    link = "tel:";
  }
  link += phoneNumber;
  Linking.canOpenURL(link).then(supported => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open URI: " + link);
    }
  });
}
export function openEmail(email, subject, body) {
  var link = encodeURI(
    "mailto:" +
      email +
      (subject ? "&subject=" + subject : "") +
      (body ? "&body=" + body : "")
  );
  Linking.canOpenURL(link).then(supported => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open URI: " + link);
    }
  });
}

export function parseMoney(value) {
  if (!value) {
    return "R$ 0,00";
  }
  value = this.parseNumeroDuasCasas(value);
  if (!value) {
    return "R$ 0,00";
  }
  value = value + "";
  return "R$ " + value.replace(".", ",");
}

export function replaceAll(string, str, key) {
  try {
    if (!string) {
      return "";
    }
    if (!str) {
      return string;
    }
    if (!key) {
      key = "";
    }
    return string.replace(
      new RegExp(str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
      key
    );
  } catch (e) {
    return string;
  }
}

export function parseNumeroDuasCasas(string) {
  if (!string) {
    return 0.0;
  }
  try {
    string = string + "";
    var val = string.replace(",", ".");
    var nnn = parseFloat(val);
    if (!nnn) {
      nnn = 0.0;
    }
    var num = nnn.toFixed(2);
    if (!num || num < 0) {
      num = 0.0;
    }
    return num;
  } catch (e) {
    console.log(e);
    return 0.0;
  }
}

export function  contemString(string, key) {
    if (!string || !key) {
      return false;
    }
    try {
      string = string+"";
      if (string && string.indexOf(key) >= 0) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
 export function startsWith (string, key) {
    if(string){
      string = string+"";
    }else{
      return false;
    }
    if (string && string.indexOf(key) === 0) {
      return true;
    } else {
      return false;
    }
  }
 export function endWith (string, key) {
    if(string){
      string = string+"";
    }else{
      return false;
    }
    if (string && string.indexOf(key, string.length - key.length) === 0) {
      return true;
    } else {
      return false;
    }
  }

export function cleanString(s) {
  if (!s) {
    return "";
  }
  var r = s; //.toLowerCase();
  r = r.replace(new RegExp(/\s/g), "");
  r = r.replace(new RegExp(/[àáâãäå]/g), "a");
  r = r.replace(new RegExp(/æ/g), "ae");
  r = r.replace(new RegExp(/ç/g), "c");
  r = r.replace(new RegExp(/[èéêë]/g), "e");
  r = r.replace(new RegExp(/[ìíîï]/g), "i");
  r = r.replace(new RegExp(/ñ/g), "n");
  r = r.replace(new RegExp(/[òóôõö]/g), "o");
  r = r.replace(new RegExp(/œ/g), "oe");
  r = r.replace(new RegExp(/[ùúûü]/g), "u");
  r = r.replace(new RegExp(/[ýÿ]/g), "y");
  r = r.replace(new RegExp(/\W/g), "");
  return r;
}
export function distance(data, state) {
  return this.getDistance(data, state.user_local);
}
export function getDistance(origin, destino) {
  if (!origin || !destino) {
    return "";
  }
  var foco = origin;
  var user_local = destino;
  if (user_local && user_local.latitude && foco.longitude && foco.longitude) {
    var latitude = user_local.latitude;
    var longitude = user_local.longitude;
    var mts = distLatLongEmMt(
      latitude,
      longitude,
      foco.latitude,
      foco.longitude
    );
    return humanizarDistancia(mts);
  } else {
    return "";
  }
}
export function distLatLongEmMt(lat1, lon1, lat2, lon2) {
  lat1 = Number(lat1);
  lon1 = Number(lon1);
  lat2 = Number(lat2);
  lon2 = Number(lon2);
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  var R = 6371; // Radius of the earth in kilometers
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in KM
  return d * 1000;
}
export function humanizarDistancia(metros) {
  if (metros < 50) {
    return "Poucos metros";
  } else if (metros < 1000) {
    return parseInt(metros + "") + " m";
  } else {
    return parseInt(metros / 1000 + "") + " km";
  }
}
