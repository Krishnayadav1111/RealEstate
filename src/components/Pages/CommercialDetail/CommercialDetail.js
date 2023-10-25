import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Map } from "../../../../assets";
import CommercialDetailFooter from "./CommercialDetailFooter";
import ImageScroll from "./ImageScroll";

import PropertyType from "./PropertyType";
import Downloads from "./Downloads";




const CommercialDetail = ({ route }) => {

  const { property } = route.params;

  const onViewMapPress = () => {
    // Construct the Google Maps URL with latitude and longitude (you can replace these with your desired coordinates)
    const latitude = 37.7749; // Example latitude
    const longitude = -122.4194; // Example longitude
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // Open the URL using Linking
    Linking.openURL(googleMapsUrl)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + googleMapsUrl);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };



  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image
            source={{ uri: property.imageUrl }}
            style={styles.propertyImage}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}  onPress={onViewMapPress}>
              <Text style={styles.buttonText}>View on map</Text>
              <Map />
            </TouchableOpacity>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.name}>{property.name}</Text>
            <Text style={styles.detailsAddress}>{property.address}</Text>
            <Text style={styles.propertyDetail}>
              Designed for Rare experiences at the heart of Worli, every
              luxurious square inch at Birla Niyaara has been envisioned keeping
              our tenets of responsible design, intuitive thinking, efficient
              use of space and sustainability, at the forefront.
            </Text>
          </View>
          <ImageScroll />
          <PropertyType/>
         
          
         {/* <TypeDetails/> */}

         <Downloads/>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <CommercialDetailFooter style={styles.footer} />
      </View>
    </>
  );
};

export default CommercialDetail;

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
  },

 
  propertyImage: {
    width: " 100%",
    height: 182,
  },

  textBox: {
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 20,
    color: "black",
    marginTop: 5,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 25,
    letterSpacing: -0.4,
  },
  detailsAddress: {
    fontSize: 13,
    color: "#667085",
    marginTop: 5,

    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.4,
  },
  propertyDetail: {
    fontSize: 13,

    color: "#667085",
    marginTop: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.4,
  },

 

  buttonsContainer: {
    position: "absolute",
    top: 115,

    right: 20,
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#c6c7cb",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    margin: 5,
  },
  buttonText: {
    color: "#344054",
    fontFamily: "DIN Next LT Pro",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.4,
    textAlign: "left",
    paddingRight: 6,
    paddingHorizontal: 5,
  },
 
 
  
 
 
});
