import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SerachBar from "../components/SerachBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setterm] = useState("");
  const [results, setresults] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");

  console.log("badhiaa");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setresults(response.data.businesses);
    } catch (err) {
      seterrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View>
      <SerachBar
        term={term}
        onChangeTerm={setterm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
