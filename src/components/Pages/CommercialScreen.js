import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import { useSelector} from 'react-redux';
import Card from '../Shared/Card/Card';



const CommercialScreen = () => {
    const properties = useSelector((state) => state.properties.commercialData);
 
    console.log(properties);

  return (
    <ScrollView >
      <TouchableOpacity>
      <View style={{backgroundColor:'#fbf8f0'}}>
      {properties.map((property) => (
      <Card key={property.id} property={property} />
      ))}
      
     
      </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CommercialScreen;
