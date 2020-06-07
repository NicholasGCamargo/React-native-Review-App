import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function DetalheReview({ navigation, route }) {
  const title = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title.title}</Text>

      <Text style={globalStyles.titleText}>{title.body}</Text>

      <Text style={globalStyles.titleText}>{title.rating.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
