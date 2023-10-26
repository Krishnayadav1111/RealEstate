import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  
  const mapRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421,
  };

  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} region={mapRegion}/>
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    paddingVertical:12,
    flex: 1,
    paddingHorizontal:16,
    
  },
  map: {

    width: "100%",
    height: "100%",
  },
});

export default Map;
