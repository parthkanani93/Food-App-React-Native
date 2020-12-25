import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SerachBar from "../components/SerachBar";

const SearchScreen = () => {
  const [term, setterm] = useState("");
  return (
    <View>
      <SerachBar
        term={term}
        onChangeTerm={(newterm) => setterm(newterm)}
        onTermSubmit={() => console.log("term submitted")}
      />
      <Text>This is Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
