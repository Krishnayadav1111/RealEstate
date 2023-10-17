import React from 'react';
import { View, ScrollView } from 'react-native';
import Card from './Card/Card';
import { useSelector} from 'react-redux';



const ResidentialScreen = () => {
  const properties = useSelector((state) => state.properties.residentialData);
  
  
  return (
    <ScrollView>
      <View style={{backgroundColor:'#fbf8f0'}}>
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ResidentialScreen;
