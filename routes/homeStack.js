import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import DetalheReview from "../screens/detalheReview";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#eee",
            height: 60,
          },
          headerTintColor: "#444",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tela Principal",
          }}
        />
        <Stack.Screen
          name="DetalheReview"
          component={DetalheReview}
          options={{
            title: "Detalhes da Review",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
