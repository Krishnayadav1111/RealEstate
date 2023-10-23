import React from "react";
import { View } from "react-native";
import RealEstateDisplay from "./RealEstateDisplay";
import Footer from "../../Footer/Footer";
import { MainIcon, Notification } from "../../../../assets";
import { StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <MainIcon
            style={{
              width: 150,
              height: 59,

              marginRight: 120,
            }}
          />

          <Notification
            style={{
              width: 24,
              height: 24,

              marginLeft: 90,
            }}
          />
        </View>

        <RealEstateDisplay />

        <View style={styles.footerContainer}>
          <Footer style={styles.footer} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: 100,
    height: 90,
    paddingVertical: 7,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  headerText: {
    color: "#850b6f",
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
  },
});
export default HomePage;
