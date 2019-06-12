import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Link } from "./../component/Button";
import { TxtInput as TextInput } from "./../component/TextInput";
import { Actions } from "react-native-router-flux";

const { width } = Dimensions.get("window");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: ""
    };
  }
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
        <TextInput value={txtUsername} onChangeText={txtUsername => this.setState({ txtUsername })} />

        <Text style={styles.txtLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          value={txtPassword}
          onChangeText={txtPassword => this.setState({ txtPassword })}
        />
        <Button style={{ marginTop: 50 }} title="Login" onPress={() => Actions.dashboard()} />

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
export default Login;
