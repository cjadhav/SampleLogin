import React from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";

const TxtInput = props => (
  <TextInput
    {...props}
    placeholderTextColor="#C7C7C7"
    style={[styles.txtInput, styles.txtFull, props.style && props.style]}
  />
);

export { TxtInput };

const styles = StyleSheet.create({
  txtInput: {
    //marginTop: 10,
    //marginBottom: 10,
    height: 45,
    color: "#000",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "300",
    backgroundColor: "#FFF"
  },
  txtFull: {
    width: "90%",
    marginTop: 2,
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "#C7C7C7"
  }
});
