import React from "react";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => {
          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review de titulo"
                onChangeText={formikProps.handleChange("title")}
                value={formikProps.values.title}
              ></TextInput>

              <TextInput
                style={globalStyles.input}
                placeholder="Review de corpo"
                onChangeText={formikProps.handleChange("body")}
                value={formikProps.values.body}
              ></TextInput>

              <TextInput
                style={globalStyles.input}
                placeholder="Review de rating(1-5)"
                onChangeText={formikProps.handleChange("rating")}
                value={formikProps.values.rating}
                keyboardType="numeric"
              ></TextInput>

              <Button
                title="Confirmar"
                color="maroon"
                onPress={formikProps.handleSubmit}
              ></Button>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
