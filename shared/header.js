import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { Header } from "@react-navigation/stack";

export default function MyHeader({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        onPress={openMenu}
        style={styles.icon}
      ></MaterialIcons>
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        ></Image>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    fontSize: 45,
    left: 15,
    bottom: 5,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    flexDirection: "row",
    bottom: 8,
  },
});
