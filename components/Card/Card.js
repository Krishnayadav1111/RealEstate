import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../Style';
import { Map } from '../../assets';

const Card = ({ property }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: property.imageUrl }} style={styles.propertyImage} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lead Count 10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View on map</Text><Map/>
        </TouchableOpacity>
      </View>
      <Text style={styles.priceText}>{property.price}</Text>
      <Text style={styles.detailsText}>{property.name}</Text>
      <Text style={styles.detailsAddress}>{property.address}</Text>
      <Text style={styles.detailsCarpet}>
        Carpet Area: {property.carpetArea} {property.pricePerSquareFeet}
      </Text>
      <View style={styles.amenities}>
        {property.amenities.map((Amenity, index) => (
          <View key={index} style={{ marginRight: 10 }}>
            {Amenity}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Card;