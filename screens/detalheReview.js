import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function DetalheReview({ navigation, route }) {
  const title = route.params;
  const rating = title.rating;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title.title}</Text>
        <Text style={globalStyles.titleText}>{title.body}</Text>
        <View style={styles.rating}>
          <Text>Rating Do App: </Text>
          <Image source={images.ratings[rating]}></Image>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
