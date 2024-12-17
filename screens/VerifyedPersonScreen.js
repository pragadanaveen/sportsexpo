import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

const VerifiedPersonScreen = () => {
  const [profession, setProfession] = useState(''); // State for the profession input

  return (
    <View style={styles.container}>
      <Image source={require('../assets/verified.png')} style={styles.image} />
      <Text style={styles.titleText}>Congrats! You are now a verified person.</Text>
      <Text style={styles.subtitleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      {/* Profession Input Field */}
      <Text style={styles.labelText}>Profession:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your profession"
        value={profession}
        onChangeText={setProfession}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1, // 1px solid border
    borderColor: 'gray', // Gray border
    borderRadius: 8, // Rounded corners
    paddingHorizontal: 10, // Inner padding
    fontSize: 16,
    backgroundColor: 'white', // Optional: for better visibility
    color: '#333', // Text color
  },
});

export default VerifiedPersonScreen;
