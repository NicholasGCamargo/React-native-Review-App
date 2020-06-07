import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import drawerNavigator from "./routes/drawer";

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return drawerNavigator();
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
      ></AppLoading>
    );
  }
}
