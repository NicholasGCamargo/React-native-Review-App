import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [review, setReview] = useState([
    {
      title: "Zelda, Breath of the Wild",
      rating: 5,
      body: "brabo de mais",
      key: "1",
    },
    { title: "Death Stranding", rating: 6, body: "O melhor", key: "2" },
    { title: "Pokemon Go", rating: 3, body: "Meio mais ou menos", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DetalheReview", item);
              }}
            >
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
