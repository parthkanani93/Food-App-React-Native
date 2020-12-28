import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const [result, setResult] = useState(null);

  const getresult = async (id) => {
    const responce = await yelp.get(`/${id}`);
    setResult(responce.data);
  };

  useEffect(() => {
    getresult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item }) => {
        return <Image style={styles.image} source={{ uri: item }} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    margin: 20,
  },
});

export default RestaurantDetail;
