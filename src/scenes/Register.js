import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Link } from "./../component/Button";
import { TxtInput as TextInput } from "./../component/TextInput";
import { Actions } from "react-native-router-flux";

const { width } = Dimensions.get("window");

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtFirstName: "",
      txtLastName: "",
      txtUsername: "",
      txtPassword: ""
    };
  }

  didRegister = () => {
    Actions.popTo("login");
  };

  render() {
    const { txtFirstName, txtLastName, txtUsername, txtPassword } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.txtLabel}>First Name</Text>
        <TextInput
          placeholder="Enter First Name"
          value={txtFirstName}
          onChangeText={txtFirstName => this.setState({ txtFirstName })}
        />

        <Text style={styles.txtLabel}>Last Name</Text>
        <TextInput
          placeholder="Enter Last Name"
          value={txtLastName}
          onChangeText={txtLastName => this.setState({ txtLastName })}
        />

        <Text style={styles.txtLabel}>Select Username</Text>
        <TextInput
          placeholder="Enter Username"
          value={txtUsername}
          onChangeText={txtUsername => this.setState({ txtUsername })}
        />

        <Text style={styles.txtLabel}>Password</Text>
        <TextInput
          placeholder="Enter Passowrd"
          secureTextEntry={true}
          value={txtPassword}
          onChangeText={txtPassword => this.setState({ txtPassword })}
        />
        <Button style={{ marginTop: 50 }} title="Register" onPress={this.didRegister} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dddddd",
    flexDirection: "column"
  },
  txtLabel: {
    width: "90%",
    marginTop: 20,
    marginLeft: "5%",
    marginRight: "5%",
    fontSize: 18,
    fontWeight: "300"
  }
});
export default Register;
