import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Home({ navigation }) {
  const [review, setReview] = useState([
    {
      title: "Zelda, Breath of the Wild",
      rating: 4,
      body: "brabo de mais",
      key: "1",
    },
    { title: "Death Stranding", rating: 5, body: "O melhor", key: "2" },
    { title: "Pokemon Go", rating: 2, body: "Meio mais ou menos", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={review}
        renderItem={({ item }) => {
          return (
            <Card
              onPress={() => {
                navigation.navigate("DetalheReview", item);
              }}
            >
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
