import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';

const ChatWithUsScreen = () => {
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with us</Text>
      <Text style={styles.subtitle}>Speak to our team via live chat</Text>

      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../assets/Livechat.png')} // Replace with your local chat icon
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Start Live Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../assets/Email (2).png')} // Replace with your local email icon
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Shoot us an Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../assets/Message.png')} // Replace with your local WhatsApp icon
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Message on WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontFamily: 'HankenGroteskBold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 20,
    fontFamily: 'HankenGroteskRegular',
    color: '#3D3D3D',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    // elevation: 2, // Adds subtle shadow for Android
    // shadowColor: '#000', // Adds shadow for iOS
    // shadowOpacity: 0.1, // Shadow effect
    // shadowRadius: 5, // Shadow radius
  },
  icon: {
    width: 18, // Adjust size as needed
    height: 18,
    marginRight: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'HankenGroteskSemiBold',
  },
});

export default ChatWithUsScreen;
