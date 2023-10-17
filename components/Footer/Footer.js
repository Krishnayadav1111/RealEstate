import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Leads, Payments, Profile, Project } from '../../assets';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem}>
        <Project size={24} color="#333" />
        <Text style={styles.label}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Leads name="address-card" size={24} color="#333" />
        <Text style={styles.label}>Leads</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Payments name="money-bill-wave" size={24} color="#333" />
        <Text style={styles.label}>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Profile name="user" size={24} color="#333" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  footerItem: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  },
});

export default Footer;
