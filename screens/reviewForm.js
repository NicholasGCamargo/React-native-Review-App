import React from "react";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import { Text, View, TextInput } from "react-native";
import * as yup from "yup";
import FlatButton from "../shared/mybytton";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating tem que ser um numero de 1 a 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={reviewSchema}
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
                onBlur={formikProps.handleBlur("title")}
              ></TextInput>

              <Text style={globalStyles.errorText}>
                {formikProps.touched.title && formikProps.errors.title}
              </Text>

              <TextInput
                style={globalStyles.input}
                placeholder="Review de corpo"
                onChangeText={formikProps.handleChange("body")}
                value={formikProps.values.body}
                onBlur={formikProps.handleBlur("body")}
              ></TextInput>
              <Text style={globalStyles.errorText}>
                {formikProps.touched.body && formikProps.errors.body}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Review de rating(1-5)"
                onChangeText={formikProps.handleChange("rating")}
                value={formikProps.values.rating}
                keyboardType="numeric"
                onBlur={formikProps.handleBlur("rating")}
              ></TextInput>
              <Text style={globalStyles.errorText}>
                {formikProps.touched.rating && formikProps.errors.rating}
              </Text>
              <FlatButton
                onClick={formikProps.handleSubmit}
                text="Inserir a Review"
              ></FlatButton>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
