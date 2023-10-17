import React from 'react';
import {View, ScrollView} from 'react-native';
import { useSelector} from 'react-redux';
import Card from './Card/Card';



const CommercialScreen = () => {
    const properties = useSelector((state) => state.properties.commercialData);
 
  

  return (
    <ScrollView >
      <View style={{backgroundColor:'#fbf8f0'}}>
      {properties.map((property) => (
      <Card key={property.id} property={property} />
      ))}
      
     
      </View>
    </ScrollView>
  );
};

export default CommercialScreen;
