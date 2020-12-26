import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.subtitle}>
        {result.rating} Stars {result.review_count} review
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "grey",
  },
});

export default ResultsDetail;
