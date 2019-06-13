import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions, Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { Button, Link } from "./../component/Button";
import { TxtInput as TextInput } from "./../component/TextInput";
import Storage from "./../utils/AsyncStorage";

const { width } = Dimensions.get("window");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: ""
    };
  }
  componentWillMount() {
    this.lastLogin();
  }

  lastLogin = async () => {
    const userDetails = JSON.parse(await Storage.getString(global.AscyncKeys.userDetails));
    if (userDetails !== null) {
      Actions.dashboard();
    }
  };

  didLogin = async () => {
    const { txtUsername, txtPassword } = this.state;
    const { userList } = this.props.user;

    const result = userList.filter(user => {
      return user.username === txtUsername && user.password === txtPassword;
    });

    if (result.length === 0) {
      Alert.alert("Oops", "Username and Password does not match");
    } else {
      await Storage.saveString(global.AscyncKeys.userDetails, JSON.stringify(result[0]));
      Actions.dashboard();
    }
  };

  render() {
    const { txtUsername, txtPassword } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: width * 0.5, height: width * 0.5 }}
          resizeMode="contain"
          source={require("./../../assets/images/logo.png")}
        />
        <Text style={styles.txtLabel}>UserName</Text>
        <TextInput
          placeholder="Enter username"
          value={txtUsername}
          onChangeText={txtUsername => this.setState({ txtUsername })}
        />

        <Text style={styles.txtLabel}>Password</Text>
        <TextInput
          placeholder="Enter password"
          secureTextEntry={true}
          value={txtPassword}
          onChangeText={txtPassword => this.setState({ txtPassword })}
        />
        <Button style={{ marginTop: 50 }} title="Login" onPress={this.didLogin} />

        <Link style={{ marginTop: 10 }} title="Register" onPress={() => Actions.register()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

export default connect(state => ({ user: state.user }))(Login);
