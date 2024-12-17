import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const MyPage = () => {
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Date: </Text>
        <Text style={styles.value}>12th October, 2024</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Time: </Text>
        <Text style={styles.value}>04:30 PM</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Venue: </Text>
        <Text style={styles.value}>JS Grounds, Gachibowli</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Referee: </Text>
        <Text style={styles.value}>Harish Jayaraj</Text>
      </View>

      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque massa quis velit bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque massa quis velit bibendum.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#666666', // Color for the label
    fontFamily: 'HankenGroteskSemiBold',
  },
  value: {
    fontSize: 16,
    color: '#3D3D3D', // Color for the value
    fontFamily: 'HankenGroteskBold',
  },
  content: {
    fontSize: 18,
    marginTop: 20,
    color: '#666666', // Color for the paragraph text
    fontFamily: 'HankenGroteskRegular',
  },
});

export default MyPage;
