import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import DetalheReview from "../screens/detalheReview";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function HomeNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
        options={{
          headerTitle: () => {
            return (
              <Header navigation={navigation} title="Tela Principal"></Header>
            );
          },
        }}
      />
      <Stack.Screen
        name="DetalheReview"
        component={DetalheReview}
        options={{
          title: "Detalhe da Review",
        }}
      />
    </Stack.Navigator>
  );
}
