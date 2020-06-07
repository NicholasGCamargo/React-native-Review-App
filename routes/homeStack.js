import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import DetalheReview from "../screens/detalheReview";
import MyHeader from "../shared/header";
import { Image } from "react-native";
import { globalStyles } from "../styles/global";

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
          headerBackground: () => {
            return (
              <Image
                source={require("../assets/game_bg.png")}
                style={globalStyles.imgBg}
              ></Image>
              // <MyHeader
              //   navigation={navigation}
              //   title="Tela Principal"
              // ></MyHeader>
            );
          },
          headerTitle: () => {
            return (
              <MyHeader
                navigation={navigation}
                title="Tela Principal"
              ></MyHeader>
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
