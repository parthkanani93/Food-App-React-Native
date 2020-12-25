import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SerachBar = ({ term, onChangeTerm, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconstyle} name="search" />
      <TextInput
        style={styles.inputstyle}
        placeholder="Search"
        value={term}
        onChangeText={(newterm) => onChangeTerm(newterm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#dee1ec",
    height: 50,
    margin: 15,
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  inputstyle: {
    flex: 1,
    fontSize: 20,
    marginLeft: 5,
  },
  iconstyle: {
    fontSize: 34,
    color: "black",
    alignSelf: "center",
  },
});

export default SerachBar;
