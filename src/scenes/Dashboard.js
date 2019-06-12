import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Link } from "./../component/Button";
import { Actions, ActionConst } from "react-native-router-flux";

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Logout" onPress={() => Actions.login({ type: ActionConst.RESET })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  }
});

export default Dashboard;
