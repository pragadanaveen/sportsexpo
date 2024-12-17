import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SuccessScreen = () => {
    const navigation = useNavigation();
    const handleGetstarted = () => {
        navigation.navigate("PersonalDetailsScreen"); // Make sure your EditDetails screen is registered in your navigation
      };
  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleGetstarted}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Success Image */}
      <Image source={require('../assets/success_Image.png')} style={styles.image} />

      {/* Heading */}
      <Text style={styles.title}>Setup Profile</Text>

      {/* Message Paragraph */}
      <Text style={styles.message}>
        Congrats! You are registered successfully. To have a better experience, set up your profile. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesq
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetstarted}>
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20, // To prevent content from touching screen edges
  },
  skipButton: {
    position: 'absolute',
    top: '10%',  // Set the button to be 10% from the top of the screen
    right: 20,
    borderBottomWidth: 1,  // Border width
    borderBottomColor: 'black',
    paddingVertical: 5,  // Adjust padding vertically
  },
  skipText: {
    fontSize: 20,  // Font size for "Skip" text
    color: '#000',
    fontWeight: 'bold',  // Make the text bold for prominence
    lineHeight: 22,  // Adjust line height to make text more vertically aligned with the border
    paddingHorizontal: 15,  // Horizontal padding to give the text some space
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555', // Light gray color for the message
  },
  getStartedButton: {
    backgroundColor: '#006336',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginTop: 20, // Space between the message and button
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SuccessScreen;
