import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RegisterFullStation from "../views/RegisterFuelStationScreen";

const drawerNavigation = createDrawerNavigator({
  RegisterFullStation: RegisterFullStation
});

const stackNavigation = createStackNavigator({
  drawer: {
    screen: drawerNavigation,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(stackNavigation);
