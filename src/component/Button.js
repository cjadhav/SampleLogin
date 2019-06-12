import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const Button = props => (
  <TouchableOpacity style={[styles.btnBlue, props.style && props.style]} onPress={props.onPress}>
    <Text style={styles.btnTitle}>{props.title}</Text>
  </TouchableOpacity>
);

const Link = props => (
  <TouchableOpacity style={[styles.link, props.style && props.style]} onPress={props.onPress}>
    <Text style={styles.linkTitle}>{props.title}</Text>
  </TouchableOpacity>
);

export { Button, Link };

const styles = StyleSheet.create({
  btnBlue: {
    height: 55,
    width: "90%",
    color: "#fff",
    marginTop: 10,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 10,
    borderRadius: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#1DAFEC",
    justifyContent: "center"
  },
  btnTitle: {
    fontSize: 25,
    color: "#fff"
  },
  link: {
    width: "90%",
    marginTop: 10,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  linkTitle: {
    fontSize: 18,
    color: "#1DAFEC"
  }
});
