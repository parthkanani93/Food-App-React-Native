import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SerachBar from "../components/SerachBar";
// import useResults from "../hooks/useResults";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
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
    searchApi("jamun");
  }, []);

  const filterResultByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SerachBar
        term={term}
        onChangeTerm={setterm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          title="Cost Effective"
          results={filterResultByPrice("$")}
          navigation={navigation}
        />
        <ResultsList
          title="Big Pricier"
          results={filterResultByPrice("$$")}
          navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
