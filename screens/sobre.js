import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>sobre Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
