import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SerachBar from "../components/SerachBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setterm] = useState("");
  const [errorMessage, results, searchApi] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <View>
      <SerachBar
        term={term}
        onChangeTerm={setterm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we found {results.length} results</Text>
      <ResultsList title="Cost Effective" results={filterResultByPrice("$")} />
      <ResultsList title="Big Pricier" results={filterResultByPrice("$$")} />
      <ResultsList title="Big Spender" results={filterResultByPrice("$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
