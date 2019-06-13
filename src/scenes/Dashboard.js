import React, { Component } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";

import { Button, Link } from "./../component/Button";
import Storage from "./../utils/AsyncStorage";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: { firstname: "", lastname: "" }
    };
  }

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = async () => {
    const userDetails = await Storage.getString(global.AscyncKeys.userDetails);
    this.setState({ userDetails: JSON.parse(userDetails) });
  };
  render() {
    const { firstname, lastname } = this.state.userDetails;
    return (
      <View style={styles.container}>
        <Text>{"Welcome " + firstname + " " + lastname}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dddddd"
  }
});

export default Dashboard;
