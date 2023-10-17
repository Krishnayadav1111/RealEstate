import React, { useState } from "react";
import { View } from "react-native";
import FilterA from "./FilterA";
import CommercialScreen from "./CommercialScreen";
import ResidentialScreen from "./ResidentialScreen";

const ContentDisplay = ({ activeScreen }) => {
  return (
    <View>
      
      <FilterA />
     
      {activeScreen === "commercial" ? (
        <CommercialScreen />
      ) : (
        <ResidentialScreen />
      )}
    </View>
  );
};

export default ContentDisplay;
