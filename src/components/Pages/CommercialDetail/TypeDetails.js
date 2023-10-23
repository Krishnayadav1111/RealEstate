import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Amenities from "./Amenities";
import { Office,Warehouse,Retail } from "../../Shared/Details/CatogeryWiseP";

// import { useSelector} from 'react-redux';

const TypeDetails = ({ projectType }) => {
  // const   Office = useSelector((state) => state.TypeOfProperty.Office);
  // const   Retail = useSelector((state) => state.TypeOfProperty.Retail);
  // const   Warehouse = useSelector((state) => state.TypeOfProperty.Warehouse);
 
  let selectedProjectData;

  // Determine the selected project type and assign the corresponding data
  if (projectType === "Office") {
    selectedProjectData = Office;
  } else if (projectType === "Retail") {
    selectedProjectData = Retail;
  } else if (projectType === "Warehouse") {
    selectedProjectData = Warehouse;
  }



  return (
    <View style={styles.container}>
      <View style={styles.projectDetailBox}>
        <Text style={styles.sectionTitle}>{selectedProjectData.projectDetails.sectionTitle}</Text>
        <View style={styles.propertyDetailRowValue}>
          <Text style={styles.label}>{selectedProjectData.projectDetails.valueLabel}</Text>
          <Text style={styles.propertyValueValue}>{selectedProjectData.projectDetails.value}</Text>
        </View>
        <View style={styles.propertyDetailRowSquare}>
          <Text style={styles.label}>{selectedProjectData.projectDetails.squareFootageLabel}</Text>
          <Text style={styles.propertyValueSquare}>
          {selectedProjectData.projectDetails.squareFootage}
          </Text>
        </View>
        <View style={styles.propertyDetailRowSecurity}>
          <Text style={styles.label}>{selectedProjectData.projectDetails.securityLabel}</Text>
          <Text style={styles.propertyValueSecurity}>
          {selectedProjectData.projectDetails.security}
          </Text>
        </View>
      </View>
      
      <Amenities/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  // project details
  
  projectDetailBox: {
    width: 360,
    height: 214,
    borderRadius: 8,
    gap: 16,
    // marginHorizontal: 16,
    marginBottom: 8,
    marginTop: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#ffffff",
  }, sectionTitle: {
    width: 96,
    height: 21,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.4,
    color: "#101828",
  }, propertyDetailRowValue: {
    gap: 12,

    height: 21,
    flexDirection: "row",
  },  label: {
    width: 124,
    height: 21,
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: -0.4,
    lineHeight: 21,
    color: "#667085",
  }, propertyDetailRowSecurity: {
    gap: 12,
    height: 40,
    flexDirection: "row",
  },  propertyValueValue: {
    justifyContent: "flex-end",
    flexWrap: "wrap",
    paddingLeft: 130,
    fontWeight: "400",
    fontSize: 15,
    letterSpacing: -0.4,

    lineHeight: 21,
    color: "#344054",
    flex: 1,
  },
 propertyValueSquare: {
    width: 128,
    paddingLeft: 40,
    flexWrap: "wrap",
    fontWeight: "400",
    fontSize: 15,
    letterSpacing: -0.4,

    lineHeight: 21,
    color: "#344054",
    flex: 1,
  },propertyValueSecurity: {
    paddingLeft: 70,
    flexWrap: "wrap",
    fontWeight: "400",
    fontSize: 15,
    letterSpacing: -0.4,
    width: 180,
    lineHeight: 21,
    color: "#344054",
    flex: 1,
  },
  propertyDetailRowSquare: {
    gap: 12,
    height: 40,
    flexDirection: "row",
  },


});

export default TypeDetails;
