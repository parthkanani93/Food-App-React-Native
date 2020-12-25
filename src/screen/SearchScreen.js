import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SerachBar from "../components/SerachBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setterm] = useState("");
  const [results, setresults] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san jose",
        },
      });
      setresults(response.data.businesses);
    } catch (err) {
      seterrorMessage("Something went wrong");
    }
  };

  return (
    <View>
      <SerachBar
        term={term}
        onChangeTerm={(newterm) => setterm(newterm)}
        onTermSubmit={() => searchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
