import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { Button, Link } from "./../component/Button";
import { TxtInput as TextInput } from "./../component/TextInput";
import { setUser } from "./../utils/actions";

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

  validateData = () => {
    const { txtFirstName, txtLastName, txtUsername, txtPassword } = this.state;
    let errMsg = null;
    if (txtFirstName.trim() === "") errMsg = "Please enter valid first name";
    else if (txtLastName.trim() === "") errMsg = "Please enter valid last name";
    else if (txtUsername.trim() === "") errMsg = "Username should not be empty";
    else if (txtUsername.trim().length < 4) errMsg = "Username should be minimum 4 character long";
    else if (txtPassword.trim() === "") errMsg = "Password cannot be empty";
    else if (txtPassword.trim().length < 4) errMsg = "Password should be minimum 4 character long";
    return errMsg;
  };

  didRegister = () => {
    const errMsg = this.validateData();
    if (errMsg !== null) {
      Alert.alert("Invalid Entry", errMsg);
      return;
    }
    const { txtFirstName, txtLastName, txtUsername, txtPassword } = this.state;
    let { userList } = this.props.user;
    userList.push({
      firstname: txtFirstName,
      lastname: txtLastName,
      username: txtUsername,
      password: txtPassword
    });
    this.props.setUser({ ...this.props.user, userList });
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

        <Text style={styles.txtLabel}>Username</Text>
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

export default connect(
  state => ({ user: state.user }),
  { setUser }
)(Register);
