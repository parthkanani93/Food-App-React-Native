import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SerachBar from "../components/SerachBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setterm] = useState("");
  const [results, setresults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: term,
        location: "san jose",
      },
    });
    setresults(response.data.businesses);
  };

  return (
    <View>
      <SerachBar
        term={term}
        onChangeTerm={(newterm) => setterm(newterm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>This is Search Screen</Text>
      <Text>{term}</Text>
      <Text>we found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
