import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bookings from "./Bookings";
import { useFonts } from "expo-font";

const MyScreen = ({ navigation }) => {
  const [selectedSport, setSelectedSport] = useState(null); // Track selected sport
  const [selectedGround, setSelectedGround] = useState(null); // Track selected ground

  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });

  const grounds = [
    { id: 1, image: require("../assets/ground.jpg") },
    { id: 2, image: require("../assets/ground.jpg") },
    { id: 3, image: require("../assets/ground.jpg") },
  ];

  const sports = [
    { name: "All", image: require("../assets/Badminton.png") },
    { name: "Basketball", image: require("../assets/Badminton.png") },
    { name: "Tennis", image: require("../assets/Badminton.png") },
    { name: "Cricket", image: require("../assets/Badminton.png") },
    { name: "Badminton", image: require("../assets/Badminton.png") },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.profileContainer}>
          {/* Profile Picture */}
          <Image
            source={require("../assets/profile1.png")}
            style={styles.profileImage}
          />
          {/* Area Name and City Name */}
          <View style={styles.areaInfo}>
            <Text style={styles.areaName}>Area Name</Text>
            <Text style={styles.city}>City</Text>
          </View>
        </View>

        {/* Notification Icon */}
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require("../assets/Notification.png")}
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Grounds Section */}
        <View style={styles.headerAndGroundsContainer}>
          <View style={styles.groundsContainer}>
            <Text style={styles.groundsTitle}>Grounds</Text>
            <TouchableOpacity
              style={styles.arrowButton}
              onPress={() => navigation.navigate("GroundsInCardView")} // Navigation to GroundsInCardView screen
            >
              <Text style={{ fontSize: 40, color: "#008C4C" }}>→</Text>
            </TouchableOpacity>
          </View>

          {/* Ground Photos */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.groundPhotosContainer}
          >
            {grounds.map((ground) => (
              <TouchableOpacity
                key={ground.id}
                onPress={() => setSelectedGround(ground.id)}
                style={[
                  styles.groundPhoto,
                  selectedGround === ground.id && styles.selectedGroundPhoto, // Add underline if selected
                ]}
              >
                <Image source={ground.image} style={styles.groundImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Sports Section */}
          <View style={styles.sportsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 10 }}>
  {sports.map((sport, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => setSelectedSport(sport.name)} // Set selected sport on press
      style={[
        styles.sportItem,
        selectedSport === sport.name && styles.selectedSportItem, // Apply selected style
      ]}
    >
      <Image source={sport.image} style={styles.sportImage} />
      <Text
        style={[
          styles.sportName,
          selectedSport === sport.name && styles.selectedSportName, // Change text color for selected sport
        ]}
      >
        {sport.name}
      </Text>
    </TouchableOpacity>
  ))}
</ScrollView>
          </View>
        </View>

        {/* Content Area */}
        <View style={styles.contentArea}>
          <Bookings />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
    backgroundColor: "#f8f8f8",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  areaInfo: {
    marginLeft: 10,
  },
  areaName: {
    fontSize: 17,
    fontFamily: "HankenGroteskBold",
    color:"#3D3D3D"
  },
  city: {
    fontSize: 14,
    color: "#666666",
    fontFamily: "HankenGroteskRegular",
  },
  iconButton: {
    marginLeft: 15,
  },
  mainContent: {
    flex: 1,
    marginTop:"-4%"
  },
  headerAndGroundsContainer: {
    backgroundColor: "#f8f8f8",
    padding: 15,
  },
  groundsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "-2%",
    backgroundColor: "#f8f8f8", // Reduce padding below the heading
  },
  groundPhotosContainer: {
    paddingHorizontal: 8,
    marginVertical: 5, // Reduce vertical margin to decrease distance
  },
  groundsTitle: {
    fontSize: 18,
    fontFamily: "HankenGroteskBold",
  },
  // groundPhotosContainer: {
  //   paddingHorizontal: 8,
  //   marginVertical: 10,
  // },
  groundPhoto: {
    marginRight: 15,
  },
  groundImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    resizeMode: "cover",
  },
  selectedGroundPhoto: {
    borderBottomWidth: 2,
    borderBottomColor: "#008C4C",
  },
  sportsContainer: {
    marginTop: 20,
    // paddingRight: 15, // Add padding to ensure the last item isn't cut off
  },
  sportItem: {
    flexDirection: "row", // Arrange image and text side by side
    alignItems: "center", // Vertically align items
    justifyContent: "flex-start", // Align items to the start
    marginRight: 15,
    paddingVertical: "-2%",
    paddingHorizontal: "2%", // Adjust padding for a cleaner look
    borderWidth: 0.1,
    borderColor: "#000000",
    borderRadius: 5,
    backgroundColor: "#f8f8f8",
  },
  sportImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: "5%",
    marginLeft:"2%" // Add space between image and text
  },
  sportName: {
    fontSize: 15,
    color: "#696969",
    fontFamily: "HankenGroteskRegular",
    textAlign: "start", // Align text to the left
    marginLeft: "-4%",
    marginRight:"1%" // No extra margin needed
  },
  
  selectedSportItem: {
    backgroundColor: "#008C4C",
    borderColor: "#008C4C",

  },
  selectedSportName: {
    color: "#FFFFFF",
    fontFamily: "HankenGroteskBold",
  },
  contentArea: {
    flex: 1,
    width: "100%",
  },
});

export default MyScreen;
