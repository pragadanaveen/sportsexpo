import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
const SuccessScreen = () => {
   // for fonts
const [fontsLoaded] = useFonts({
  'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
  'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
  'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  'HankenGroteskMedium': require('../assets/fonts/HankenGrotesk-Medium.ttf'),
});
    const navigation = useNavigation();
    const handleGetstarted = () => {
        navigation.replace("PersonalDetailsScreen"); // Make sure your EditDetails screen is registered in your navigation
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
  
    paddingVertical: 5,  // Adjust padding vertically
  },
  skipText: {
    fontSize: 17,
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 2,
    fontFamily: 'HankenGroteskSemiBold',
},
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 10,
    fontFamily:"HankenGroteskBold",
  },
  message: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 20,
    color: '#3D3D3D', // Light gray color for the message
    fontFamily:"HankenGroteskRegular",
  },
  getStartedButton: {
    backgroundColor: '#006336',
    padding: 15,
    borderRadius: 10,
    width: '70%',
    marginTop: "1%", // Space between the message and button
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily:"HankenGroteskBold",
    textAlign: 'center',
  },
});

export default SuccessScreen;
