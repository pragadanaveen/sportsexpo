import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from 'expo-font';
const GroundCard = ({ navigation, groundName, rating, location }) => {
    const [fontsLoaded] = useFonts({
        'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
        'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
      });
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('GroundCardDetails', { groundName, rating, location })}
    >
      {/* Image (80% height of the card) */}
      <Image
        source={require("../assets/ground.jpg")} // Replace with your image URL or local image path
        style={styles.groundImage}
      />

      {/* Ground Name, Rating, and Location (20% height of the card) */}
      <View style={styles.bottomContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.groundName}>{groundName}</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{rating}</Text>
            <Icon name="star" size={16} color="gold" />
          </View>
        </View>
        <View style={styles.locationRow}>
          <Icon name="location-outline" size={16} color="#888" />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const GroundList = ({ navigation }) => {
  const grounds = [
    { groundName: "Court AB", rating: 5, location: "New York City, USA" },
    { groundName: "Court XY", rating: 4, location: "Los Angeles, USA" },
    { groundName: "Court CD", rating: 5, location: "San Francisco, USA" },
    { groundName: "Court EF", rating: 3, location: "Chicago, USA" },
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      {/* Display multiple GroundCards */}
      {grounds.map((ground, index) => (
        <GroundCard
          key={index}
          navigation={navigation}
          groundName={ground.groundName}
          rating={ground.rating}
          location={ground.location}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    padding: 10,
  },
  card: {
    width: "100%", // Full width
    height: 250, // Adjust this as needed
    marginBottom: 10, // Space between cards
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  groundImage: {
    width: "100%",
    height: "80%", // Takes 80% of the card height
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomContainer: {
    height: "20%", // Takes 20% of the card height
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  groundName: {
    fontSize: 18,
    fontFamily:"HankenGroteskBlack",
    color: "#333",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 16,
    color: "gold",
    marginRight: 5,
    fontFamily:"HankenGroteskRegular", // Add space between the number and the star
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    fontSize: 14,
    color: "#888",
    marginLeft: 5,
    fontFamily:"HankenGroteskRegular",
  },
});

export default GroundList;
