import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import homeNavigator from "./homeStack";
import sobreNavigator from "./sobreStack";

const Drawer = createDrawerNavigator();

export default function drawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={homeNavigator} />
        <Drawer.Screen name="Sobre" component={sobreNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
