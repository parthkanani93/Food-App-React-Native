import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SerachBar from "../components/SerachBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setterm] = useState("");
  const [errorMessage, results, searchApi] = useResults();

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
