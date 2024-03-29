import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Filter, Search } from "../../../assets";

const FilterA = () => {
  const [filterText, setFilterText] = useState("");

  return (
    <ScrollView>
      <View style={styles.filterContainer}>
        <View style={styles.searchContainer}>
          <Search style={styles.searchIcon} />
          <TextInput
            style={styles.filterInput}
            placeholder="Search"
            value={filterText}
            onChangeText={(text) => setFilterText(text)}
          />
        </View>
        <View style={{marginRight:16}}>
        <Filter />
        </View>
      </View>
    </ScrollView>
  );
};

export default FilterA;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 400,
    height: 40,
    borderColor: "#ccc",

    justifyContent: "space-around",

    marginVertical: 12,
  },

  searchIcon: {
    marginRight: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#rgb(255,255,255)",
    width: 328,
    height: 40,
    borderColor: "#EFEDE8",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  filterInput: {},
});
