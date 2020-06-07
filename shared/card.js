import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

export default function Card(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card}>
        <View style={styles.carcContent}>{props.children}</View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.7,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  carcContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
