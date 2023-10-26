import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Style';
import { MapSvg } from '../../../../assets/svgImages';
import { useNavigation } from '@react-navigation/native'




const Card = ({ property }) => {
  const [leadCount, setLeadCount] = useState(10); 
  const navigation = useNavigation();
  const goToCardDetails = () => {
    navigation.navigate('CommercialDetail', { property });
  }
  const goToMap = () => {
    navigation.navigate('Map');
  }
  
  
  
  const increaseLeadCount = () => {
    setLeadCount(leadCount + 1);
  };

  return (<View>
    <TouchableOpacity onPress={goToCardDetails}> 
    <View style={styles.card}>
      <Image source={{ uri: property.imageUrl }} style={styles.propertyImage} />
      <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button} onPress={increaseLeadCount}>
      <View style={{flexDirection:"row"}}>
        <Text style={styles.buttonText}>Lead Count</Text>
        <View style={styles.leadCountText}>
          <Text style={styles.leadCountText}>{leadCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToMap}>
          <Text style={styles.buttonText}>View on map</Text><MapSvg/>
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
    </TouchableOpacity>

   
    </View>
  );
};

export default Card;