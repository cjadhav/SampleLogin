import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, BackHandler } from "react-native";
import { Scene, Router, Tabs, Stack, Actions, ActionConst } from "react-native-router-flux";

import Login from "./src/scenes/Login";
import Register from "./src/scenes/Register";
import Dashboard from "./src/scenes/Dashboard";
import Tab2 from "./src/scenes/Tab2";
import Tab3 from "./src/scenes/Tab3";
import Tab4 from "./src/scenes/Tab4";

const lstTabbar = [
  {
    index: 1,
    title: "Tab1"
  },
  {
    index: 2,
    title: "Tab2"
  },
  {
    index: 3,
    title: "Tab3"
  },
  {
    index: 4,
    title: "Tab4"
  }
];

export default class App extends Component {
  handleHardwareBackPress() {
    if (Actions.currentScene === "login" || Actions.currentScene === "dashboard") {
      BackHandler.exitApp();
    } else {
      Actions.pop();
    }
    return true;
  }
  render() {
    return (
      <Router backAndroidHandler={this.handleHardwareBackPress}>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial={true} hideNavBar />
          <Scene key="register" backTitle=" " component={Register} title="Register" />
          <Tabs
            key="tabbar"
            hideNavBar
            tabBarPosition="bottom"
            allowFontScaling={false}
            activeBackgroundColor="lightgray"
            inactiveBackgroundColor="white"
            activeTintColor="#083EA7"
            inactiveTintColor="#999999"
          >
            <Scene key="dashboard" component={Dashboard} title="TAB-1" />
            <Scene key="tab2" component={Tab2} title="TAB-2" />
            <Scene key="tab3" component={Tab3} title="TAB-3" />
            <Scene key="tab4" component={Tab4} title="TAB-3" />
          </Tabs>
        </Scene>
      </Router>
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
