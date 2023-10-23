import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CommercialDetailFooter = () => {
  const [activeScreen, setActiveScreen] = useState("Add Lead");

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          setActiveScreen("Visit Website");
         
        }}
        style={[
          styles.tab,
          activeScreen === "Visit Website" ?styles.activeTab : styles.tab,
        ]}
      >
        <Text
          style={activeScreen === "Visit Website" ? styles.activeText  : styles.text}
        >
          Visit Websit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActiveScreen("Add Lead");
          
        }}
        style={[
          styles.tab,
          activeScreen === "Add Lead"? styles.activeTab : styles.tab ,
          ,
        ]}
      >
        <Text
          style={
            activeScreen === "Add Lead" ? styles.activeText : styles.text
          }
        >
          Add Lead
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    marginHorizontal:16,
    marginBottom:20,
    marginTop:16,

  },
  activeTab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor:"#850c70",
   borderRadius:100,
   backgroundColor:"#850c70",
   
  },
  tab: {
    flex: 1,
    marginRight:8,
    borderWidth:1,
    borderColor:"#ffffff",
    
    alignItems: "center",
    paddingVertical: 10,
   borderRadius:100,
   backgroundColor:"#ffffff",
   
  },
  text: {
    color: "#850C70",
    textAlign: "center",
    // fontFamily: 'lucida grande',
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.025,
  },
  activeText: {
    color: "#FFFFFF",
    textAlign: "center",
    // fontFamily: 'lucida grande',
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.025,
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
export default CommercialDetailFooter;
