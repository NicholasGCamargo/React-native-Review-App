import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Sobre from "../screens/sobre";
import MyHeader from "../shared/header";
import { Image } from "react-native";
import { globalStyles } from "../styles/global";

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
          headerBackground: () => {
            return (
              <Image
                source={require("../assets/game_bg.png")}
                style={globalStyles.imgBg}
              ></Image>
            );
          },
          headerTitle: () => {
            return (
              <MyHeader navigation={navigation} title="Sobre o App"></MyHeader>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
