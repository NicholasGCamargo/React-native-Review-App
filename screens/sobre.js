import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.titleText}>sobre Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
