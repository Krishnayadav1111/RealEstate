import React, { useState } from 'react';
import { View, Image, ScrollView, Text, StyleSheet } from 'react-native';
// import { Office,Retail,Warehouse } from '../../Shared/Details/CatogeryWiseP';

const ImageScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // let selectedProjectData;

  // // Determine the selected project type and assign the corresponding data
  // if (projectType === "Office") {
  //   selectedProjectData = Office;
  // } else if (projectType === "Retail") {
  //   selectedProjectData = Retail;
  // } else if (projectType === "Warehouse") {
  //   selectedProjectData = Warehouse;
  // }
  // console.log("selectedProjectData: " + selectedProjectData.imageUrls)

  const imageUrls=[
    'https://shorturl.at/ELMU3',
    'https://shorturl.at/jlNUX',
    'https://shorturl.at/ELMU3',
    'https://shorturl.at/ELMU3',
    'https://shorturl.at/jlNUX',
    'https://shorturl.at/ELMU3',
    'https://shorturl.at/ELMU3',
    'https://shorturl.at/jlNUX',
    'https://shorturl.at/ELMU3',
    'https://shorturl.at/ELMU3',
    'https://shorturl.at/jlNUX',
    'https://shorturl.at/ELMU3',
    'https://shorturl.at/ELMU3',
    'https://shorturl.at/jlNUX',
    'https://shorturl.at/ELMU3',
    
 
  ];


  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / 240); 
    setCurrentIndex(index);
  };

  return (
    <View style={styles.common}>
      <ScrollView
        horizontal
        onScroll={handleScroll}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {imageUrls.map((url, index) => (
          <View key={index} style={{ position: 'relative' }}>
            <Image
              source={{ uri: url }}
              style={styles.propertyImageDetail}
            />
            
            <Text style={styles.imageCountText}>{` ${currentIndex + 1} / ${imageUrls.length}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  common: {
    flexDirection: 'column',
  },
  propertyImageDetail: {
    width: 232,
    height: 169,
    marginLeft:16,
    marginRight:4,
    marginVertical:16,
    borderRadius: 8,
  },
  imageCountText: {
    position: 'absolute',
    bottom: 15,
    right: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: 4,
    margin:10,
    
    
    borderRadius: 100,
  },
});

export default ImageScroll;
