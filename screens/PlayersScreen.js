import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import FilterModal from "./FilterModal";
import { useFonts } from "expo-font";
const PlayersScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null; // Ensure fonts are loaded before rendering
  }

  const initialRegion = {
    latitude: 16.9945667,
    longitude: 81.7896372,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const handleFilters = () => {
    setFilterModalVisible(true); // Open the filter modal
  };

  const closeFilterModal = () => {
    setFilterModalVisible(false); // Close the filter modal
  };
  const players = [
    {
      name: "Player 1",
      latitude: 16.9945667,
      longitude: 81.7896372,
      image: require('../assets/profile1.png'),
      rating: "5.0",
      totalGames: 50, // Added a default value
      playerSince: "2021", // Added a default value
      sports: [
        { name: "Soccer", role: "Forward", matches: 20 },
        { name: "Basketball", role: "Guard", matches: 15 },
      ], // Added sports array with default values
    },
    {
      name: "Player 2",
      latitude: 28.6139,
      longitude: 77.209,
      image: require('../assets/profile1.png'),
      rating: "5.0",
      totalGames: 30, // Added a default value
      playerSince: "2022", // Added a default value
      sports: [
        { name: "Tennis", role: "Player", matches: 10 },
        { name: "Cricket", role: "Bowler", matches: 20 },
      ], // Added sports array with default values
    },
  ];
  

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Players") navigation.navigate("PlayersScreen");
    else if (buttonName === "Coaches") navigation.navigate("CoachesScreen");
    else if (buttonName === "Teams") navigation.navigate("TeamsScreen");
    else if (buttonName === "Grounds") navigation.navigate("GroundsScreen");
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchText}`);
  };
  const handlechooselist = () => {
    navigation.navigate("ChooseListButton")
    // console.log(`Searching for: ${searchText}`);
  };

  const handleCancel = () => {
    setSearchText("");
    console.log("Search canceled");
    navigation.navigate("TabNavigator")
  };

  // const handleFilters = () => {
  //   navigation.navigate("FilterModal"); // Make sure your EditDetails screen is registered in your navigation
  // };

  const openPlayerProfile = (player) => {
    setSelectedPlayer(player);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPlayer(null);
  };
  const handleViewProfile = () => {
    // Navigate to ProfileScreen when the button is pressed
    navigation.navigate('ProfileScreen',);
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} onRegionChangeComplete={(data) => { console.log(data) }}>
        {/* <Marker  coordinate={{
        latitude:16.9945667,
        longitude:81.7896372,
        latitudeDelta:0.0922,
        latitudeDelta:0.0421
        }}  title={"Testing"} onPress={data=>console.log(data.nativeEvent.coordinate)}/> */}




        {players.map((person) => (
          <Marker
            key={person.name}
            coordinate={{
              latitude: person.latitude,
              longitude: person.longitude,
            }}
            onPress={() => openPlayerProfile(person)}
          >
            <View style={styles.marker}>
              <Image
                source={person.image}
                style={styles.markerImage}
                resizeMode="cover"
              />
              <Text style={styles.markerRating}>{person.rating}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
      {/* Search and Filter Bar */}
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
          <MaterialIcons name="cancel" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
            <MaterialIcons name="search" size={24} color="#8A8A8A" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.filterbutton} onPress={handleFilters}>
          <Ionicons
            name="options-outline" // Updated icon name
            size={20}
            color="#525252"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      {/* Filter modal */}
      <FilterModal
        visible={isFilterModalVisible} // Pass the visibility state
        closeModal={closeFilterModal} // Pass the close function
      />
      <View>
        {/* Choose list button */}
        <TouchableOpacity style={styles.chooseListButton} onPress={handlechooselist}>
          <MaterialIcons name="list" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* Bottom Navigation Buttons */}
      {/* teams tab removed  */}
      <View style={styles.bottomButtonsContainer}>
        {["Players", "Coaches", "Grounds"].map((button) => (
          <TouchableOpacity
            key={button}
            style={[
              styles.bottomButton,
              activeButton === button && styles.activeButton,
            ]}
            onPress={() => handleButtonPress(button)}
          >
            <Text
              style={[
                styles.bottomButtonText,
                activeButton === button && styles.activeButtonText,
              ]}   >
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Player Profile Modal */}
      {selectedPlayer && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalContainer}>
              {/* Profile Image placed above the modal content */}
              <View style={styles.profileImageContainer}>
                <Image
                  source={selectedPlayer.image}
                  style={styles.profileImage}
                />
              </View>

              {/* Modal Content with White Background */}
              <View style={styles.modalContent}>
                {/* First Row: Player Name and Rating */}
                <View style={styles.profileInfoRow}>
                  <Text style={styles.modalTitle}>{selectedPlayer.name}</Text>
                  <Text style={styles.rating}>{selectedPlayer.rating} ⭐</Text>
                </View>

                {/* Second Row: Total Games and Player Since */}
                <View style={styles.statsRow}>
                  <View style={styles.statsItem}>
                    <Text>Total Games</Text>
                    <Text style={styles.statsValue}>
                      {selectedPlayer.totalGames}
                    </Text>
                  </View>
                  <View style={styles.statsItem}>
                    <Text>Player Since</Text>
                    <Text style={styles.statsValue}>
                      {selectedPlayer.playerSince}
                    </Text>
                  </View>
                </View>

                {/* Third Row: Sports Information */}
                <View style={styles.sportsRow}>
                  {selectedPlayer.sports.map((sport, index) => (
                    <View key={index} style={styles.sportItem}>
                      <Text style={styles.sportName}>{sport.name}</Text>
                      <Text style={styles.sportRoleText}>{sport.role}</Text>
                      <Text style={styles.sportMatches}>
                        {sport.matches} matches
                      </Text>
                    </View>
                  ))}
                </View>

                {/* Fourth Row: Buttons for View Profile and Send Request */}
                <View style={styles.buttonsRow}>
                  <TouchableOpacity style={styles.button} onPress={handleViewProfile}>
                    <Text style={styles.buttonText}>View Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Send Request</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
  marker: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    width: 120
  },
  markerImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circular image
  },
  markerRating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  searchContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
  cancelButton: {
    marginRight: 10,
    padding: 0,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Translucent black
  },
  searchInputContainer: {
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Translucent white
    marginRight: 10,
  },
  searchInput: { flex: 1, height: 40, paddingHorizontal: 10 },
  searchIcon: { justifyContent: "center", alignItems: "center", padding: 10 }, // searchInput: {
  //   flex: 1,
  //   height: 40,
  //   paddingHorizontal: 10,
  //   paddingLeft: 5, // Adjusted padding to prevent overlap
  // },
  button: {
    padding: 9,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  buttonText: { fontSize: 14, fontWeight: "bold", marginLeft: 5 },
  filterIcon: {
    marginRight: 5, // Space between the icon and the text
  },
  // buttonText: {
  //   fontSize: 14,
  //   fontWeight: "bold",
  //   marginLeft: 5, // Space between icon and text
  //   flexDirection: "row", // Ensures text and icon are aligned in a row
  // },
  // buttonText: { fontSize: 16, fontWeight: "bold" },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
  },
  bottomButton: {
    flex: 1.2,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  bottomButtonText: { fontSize: 16, color: "black" },
  activeButton: { borderColor: "black", borderWidth: 2 },
  activeButtonText: { fontWeight: "bold" },
  // change 1
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginTop: 30, // Adjusted margin to align better with the image
  },
  // closeButton: {
  //   position: "absolute",
  //   top: 1,
  //   // left:1,
  //   right: 1,
  //   borderColor: "black",  // Set the border color to black
  //   borderWidth: 2,        // Set the border width to 2px
  //   borderRadius: 15,      // Optional: Add rounded corners for a better look (if needed)
  // },

  profileImageContainer: {
    marginBottom: -43, // Decreased the margin to bring the content closer to the profile image
    zIndex: 1,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "#00008B",
  },
  modalTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  profileInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00008B", // Dark blue color (you can use any other dark blue shade)
  },

  statsRow: {
    flexDirection: "row", // Keep the row direction for side-by-side alignment
    justifyContent: "space-between", // Ensure spacing between items
    width: "100%", // Full width of the container
    marginBottom: 15, // Add some spacing below the stats row
  },

  statsItem: {
    backgroundColor: "#f0f0f0", // Add a background color for contrast
    padding: 10, // Add padding inside the stats item
    borderRadius: 5, // Round the corners
    alignItems: "center", // Center items vertically
    flexDirection: "row", // Align text horizontally
    width: "48%", // Each item will take up 48% of the width, leaving space in between
  },
  // Style for the text to ensure it appears side-by-side
  statsValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 9, // Space between the label and the value
  },
  sportsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  sportItem: {
    width: "48%",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    position: "relative", // This allows you to position elements inside the container
  },
  sportTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
  },

  // Additional Style for sportName (text layout) inside sportItem
  sportName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  sportRoleText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  sportMatches: {
    fontSize: 16,
    color: "#4caf50",
  },

  // Text below sport section (Net Player and All Rounder)
  sportRoleText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5, // Space between role and matches
  },

  // Add styles for the numeric value in the same line as the sport name
  hashTagAndNumber: {
    position: "absolute", // Absolute positioning to place at the end of the line
    bottom: 10, // Align it towards the bottom of the container
    right: 10, // Align it to the right
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  sportInfo: { marginVertical: 5 },
  modalButtonsContainer: { marginTop: 20 },
  modalButton: {
    backgroundColor: "#4caf50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30, // Increased border-radius for a more rounded effect
  },
  closeButton: {
    position: "absolute",
    top: -300,
    right: -18,
    backgroundColor: "transparent", // Transparent background
    borderWidth: 2, // 2px border
    borderColor: "white", // Gray color for the border
    padding: 10,
    borderRadius: 50,
  },

  modalButtonText: { color: "white", fontSize: 16 },
  // for filter button
  filterbutton: {
    padding: 9,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Translucent white
    borderColor: "#B8B8B8",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { marginRight: 5 },
  buttonText: { color: "black", fontWeight: "bold" },
  // for list button
  chooseListButton: {
    position: "absolute",
    bottom: 70, // Positioned above the bottom buttons
    right: 20,
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PlayersScreen;