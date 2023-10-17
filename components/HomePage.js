import React, { useState } from "react";
import { View } from "react-native";
import HeaderTabs from "./HeaderTabs";
import ContentDisplay from "./ContentDisplay";

const HomePage = () => {
  const [activeScreen, setActiveScreen] = useState("commercial");

  return (
    <View>
      <HeaderTabs activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      <ContentDisplay activeScreen={activeScreen} />
    </View>
  );
};

export default HomePage;
