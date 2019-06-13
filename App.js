import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, BackHandler, Alert } from "react-native";
import { Scene, Router, Tabs, Stack, Actions, ActionConst } from "react-native-router-flux";
import { Provider } from "react-redux";
import configureStore from "./src/utils/store";
import Storage from "./src/utils/AsyncStorage";

import Login from "./src/scenes/Login";
import Register from "./src/scenes/Register";
import Dashboard from "./src/scenes/Dashboard";
import Tab2 from "./src/scenes/Tab2";
import Tab3 from "./src/scenes/Tab3";
import Tab4 from "./src/scenes/Tab4";

global.AscyncKeys = { userDetails: "UserObject" };

export default class App extends Component {
  handleHardwareBackPress() {
    console.log(Actions.currentScene);
    if (Actions.currentScene === "login" || Actions.currentScene === "_dashboard") {
      BackHandler.exitApp();
    } else {
      Actions.pop();
    }
    return true;
  }

  didLogout = () => {
    Alert.alert(
      "Confirm",
      "Do you really want to logout?",
      [
        {
          text: "Yes",
          onPress: async () => {
            await Storage.saveString(global.AscyncKeys.userDetails, "");
            Actions.popTo("login", { type: ActionConst.RESET });
          }
        },
        { text: "No" }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <Provider store={configureStore()}>
        <Router backAndroidHandler={this.handleHardwareBackPress}>
          <Scene key="root" backTitle=" " rightTitle="Logout" onRight={this.didLogout}>
            <Scene key="login" component={Login} title="Login" initial={true} hideNavBar />
            <Scene key="register" component={Register} title="Register" rightTitle={null} />
            <Tabs
              key="tabbar"
              hideNavBar
              tabBarPosition="bottom"
              activeBackgroundColor="lightgray"
              inactiveBackgroundColor="white"
            >
              <Scene key="dashboard" component={Dashboard} title="TAB-1" />
              <Scene key="tab2" component={Tab2} title="TAB-2" />
              <Scene key="tab3" component={Tab3} title="TAB-3" />
              <Scene key="tab4" component={Tab4} title="TAB-3" />
            </Tabs>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  }
});
