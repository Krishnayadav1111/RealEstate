import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState ,useEffect} from 'react';
;
import TypeDetails from './TypeDetails';
import ImageScroll from './ImageScroll';
import { useDispatch } from "react-redux";
import { Office,Retail,Warehouse } from '../../Shared/Details/CatogeryWiseP';

import {
  setWarehouse,setOffice,setRetail
}
from "../../../../Store/Reducers/TypeOfPropertySlice";


const PropertyType = () => {
  const [selectedType, setSelectedType] = useState("Office");
  const dispatch = useDispatch();
  
  useEffect(() =>{
    dispatch(setOffice(Office));
  },[]);

 
  const handlePress = (type) => {
    setSelectedType(type);
  };

  return (
    <>
    <View>
     
    <View style={styles.property}>
      <TouchableOpacity
        style={[
          styles.buttonOfficeOuter,
          {
            backgroundColor: selectedType === 'Office' ? '#F4E8D0' : '#FBF8F0',
            borderColor: selectedType === 'Office' ? '#E2C385' : '#F4E8D0',
          },
        ]}
        onPress={() => {handlePress('Office');
      dispatch(setOffice(Office));}}
      >
        <Text
          style={{
            color: selectedType === 'Office' ? '#850C70' : '#676E76',
          }}
        >
          Office
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonOfficeOuter,
          {
           
            backgroundColor: selectedType === 'Retail' ? '#F4E8D0' : '#FBF8F0',
            borderColor: selectedType === 'Retail' ? '#E2C385' : '#F4E8D0',
          },
        ]}
        onPress={() =>{ handlePress('Retail');dispatch(setRetail(Retail));}}
      >
        <Text
          style={{
            color: selectedType === 'Retail' ? '#850C70' : '#676E76',
          }}
        >
          Retail
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonOfficeOuterWareHouse,
          {
           
            backgroundColor: selectedType === 'Warehouse' ? '#F4E8D0' : '#FBF8F0',
            borderColor: selectedType === 'Warehouse' ? '#E2C385' : '#F4E8D0',
          },
        ]}
        onPress={() => {handlePress('Warehouse'); dispatch(setWarehouse(Warehouse));}}
      >
        <Text
          style={{
            color: selectedType === 'Warehouse' ? '#850C70' : '#676E76',
          }}
        >
          Warehouse
        </Text>
      </TouchableOpacity>
      
    </View>
    <TypeDetails projectType={selectedType}/>
    </View>
    </>
  );
};

export default PropertyType;

const styles = {
    property: {
        flexDirection: "row",
       marginHorizontal: 16,
      },
  buttonOfficeOuter: {
    width: 59,
    height: 32,
    borderWidth: 1,
    
    borderRadius: 8,
    
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOffice: {
    textAlign: 'center',
    fontSize: 16,
  },
  buttonOfficeOuterWareHouse:{
    width: 80,
    height: 32,
    borderWidth: 1,
    
    borderRadius: 8,
    
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  }
};
