import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ResidentialData,CommercialData } from "../Shared/Details/PropertyDetails";
import { useDispatch } from "react-redux";
import {
  setCommercialData,
  setResidentialData,
} from "../../../Store/Reducers/PropertySlice/";

const HeaderTabs = ({ activeScreen, setActiveScreen }) => {
  const dispatch = useDispatch();


  useEffect(() =>{
    dispatch(setCommercialData(CommercialData));
  },[]);

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          setActiveScreen("commercial");
          dispatch(setCommercialData(CommercialData));
        }}
        style={[
          styles.tab,
          activeScreen === "commercial" && {
            borderBottomColor: "#850c70",
            borderBottomWidth: 2,
          },
        ]}
      >
        <Text
          style={activeScreen === "commercial" ? styles.activeText : styles.text}
        >
          Commercial
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActiveScreen("residential");
          dispatch(setResidentialData(ResidentialData));
        }}
        style={[
          styles.tab,
          activeScreen === "residential" && {
            borderBottomColor: "#850c70",
            borderBottomWidth: 2,
          },
        ]}
      >
        <Text
          style={
            activeScreen === "residential" ? styles.activeText : styles.text
          }
        >
          Residential
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "transparent",
    borderBottomWidth: 2,
  },
  text: {
    color: "#595959",
    textAlign: "center",
    // fontFamily: 'lucida grande',
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.025,
  },
  activeText: {
    color: "black",
    textAlign: "center",
    // fontFamily: 'lucida grande',
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.025,
  },
});

export default HeaderTabs;
