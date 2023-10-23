import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Amenities = () => {
  return (
    <View style={styles.amenitiesDetailBox}>
      <Text style={styles.sectionTitle}>Amenities</Text>
      <View style={styles.amenitiesOuter}>
        <View style={styles.amenityList}>
          <View style={styles.amenityBox}>
            <Text style={styles.amenityItem}>Covered parking</Text>
          </View>
          <View style={styles.amenityBox}>
            <Text style={styles.amenityItem}>Fitness center</Text>
          </View>
        </View>
        <View style={styles.amenityListB}>
          <View style={styles.amenityBox}>
            <Text style={styles.amenityItem}>On-site café and catering</Text>
          </View>
          <View style={styles.amenityBox}>
            <Text style={styles.amenityItem}>Rooftop terrace</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Amenities;

export const styles = StyleSheet.create({
  amenityBox: {
    borderWidth: 1,
    borderColor: "#F4E8D0",
    backgroundColor: "#FBF8F0",

    borderRadius: 4,
  },
  sectionTitle: {
    width: 96,
    height: 21,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 21,
    paddingLeft: 4,
    letterSpacing: -0.4,
    color: "#101828",
  },

  amenitiesOuter: {},
  amenityList: {
    gap: 12,

    flexDirection: "row",
  },
  amenityListB: {
    gap: 12,

    marginTop: 12,

    flexDirection: "row",
  },
  amenityItem: {
    fontSize: 16,
    marginBottom: 5,

    paddingHorizontal: 16,
    paddingVertical: 6,
    fontWeight: "400",
  },
  amenitiesDetailBox: {
    width: 360,
    height: 160,
    borderRadius: 8,

    gap: 16,

    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
  },
});
