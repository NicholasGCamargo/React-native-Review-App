import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function DetalheReview({ navigation, route }) {
  const title = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title.title}</Text>
        <Text style={globalStyles.titleText}>{title.body}</Text>
        <Text style={globalStyles.titleText}>{title.rating.toString()}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
