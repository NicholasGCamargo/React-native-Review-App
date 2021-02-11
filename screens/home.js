import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [review, setReview] = useState([
    {
      title: "Zelda, Breath of the Wild",
      rating: 4,
      body: "brabo de mais",
      key: "0",
    },
    { title: "Death Stranding", rating: 5, body: "O melhor", key: "1" },
    { title: "Pokemon Go", rating: 2, body: "Meio mais ou menos", key: "2" },
  ]);

  const addReview = (newReview) => {
    newReview.key = review.length.toString();
    setReview((currentRev) => {
      return [newReview, ...currentRev];
    });
    setModalOpen(!modalOpen);
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
        }}
      >
        <Modal visible={modalOpen} animationType="slide">
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={30}
              onPress={() => {
                setModalOpen(!modalOpen);
              }}
            ></MaterialIcons>
            <ReviewForm addReview={addReview}></ReviewForm>
          </View>
        </Modal>
      </TouchableWithoutFeedback>

      <MaterialIcons
        style={styles.modalToggle}
        name="add"
        size={30}
        onPress={() => {
          setModalOpen(!modalOpen);
        }}
      ></MaterialIcons>

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

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalContent: {
    flex: 1,
  },
  modalClose: {
    marginTop: 20,
  },
});
