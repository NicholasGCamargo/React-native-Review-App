import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Sobre from "../screens/sobre";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function sobreNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Sobre"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#999",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerTitle: () => {
            return (
              <Header navigation={navigation} title="Sobre o App"></Header>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
