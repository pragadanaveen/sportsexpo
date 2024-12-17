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
import Ionicons from 'react-native-vector-icons/Ionicons'; 
const PlayersScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const initialRegion = {
    latitude: 28.6139,
    longitude: 77.209,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const players = [
    {
      name: "The Titans",
      rating: 3.8,
      sport: "Cricket",
      teamsince: 2014,
      teamcaptain: "Pavan",
      latitude: 28.6139,
      longitude: 77.209,
      image: require("../assets/Team1.png"),
    },
    {
      name: "The Tigers",
      rating: 4.2,
      sport: "Tennis",
      teamsince: 2015,
      teamcaptain: "Rahul",
      latitude: 28.3139,
      longitude: 77.909,
      image: require("../assets/Team1.png"),
    },
  ];
  const handlechooselist = () => {
    navigation.navigate("ChooseListButton")
    // console.log(`Searching for: ${searchText}`);
  };
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

  const handleCancel = () => {
    setSearchText("");
    console.log("Search canceled");
    navigation.navigate("TabNavigator")
  };

  const openPlayerProfile = (player) => {
    setSelectedPlayer(player);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPlayer(null);
  };
  const handleFilter = () => {
    console.log("Filter button pressed");
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Your Location"
            description="You are here"
          />
        )}
        {players.map((person) => (
          <Marker
            key={person.name}
            coordinate={{
              latitude: person.latitude,
              longitude: person.longitude,
            }}
            title={person.name}
            onPress={() => openPlayerProfile(person)}
          >
            <View style={styles.marker}>
              <Image source={person.image} style={styles.markerImage} />
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
            <MaterialIcons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.filterbutton} onPress={handleFilter}>
        <Ionicons
    name="options-outline" // Updated icon name
    size={20}
    color="black"
    style={styles.icon}
  />
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* Choose list button */}
        <TouchableOpacity style={styles.chooseListButton} onPress={handlechooselist}>
          <MaterialIcons name="list" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Buttons */}
      <View style={styles.bottomButtonsContainer}>
        {["Players", "Coaches", "Teams", "Grounds"].map((button) => (
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
              ]}
            >
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
        <View style={styles.profileImageContainer}>
          <Image source={selectedPlayer.image} style={styles.profileImage} />
        </View>

        <View style={styles.modalContent}>
          {/* Profile Info Row */}
          <View style={styles.profileInfoRow}>
            <Text style={styles.modalTitle}>{selectedPlayer.name}</Text>
            <Text style={styles.rating}>
            ★ {selectedPlayer.rating} 
            </Text>
          </View>

          {/* Sport Container */}
          <View style={styles.sportContainer}>
            <Text style={styles.sportText}>Sport: {selectedPlayer.sport}</Text>
          </View>

          {/* Team Mentored */}
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Teams Since:</Text>
            <Text style={styles.statsValue}>{selectedPlayer.teamsince}</Text>
          </View>

          {/* Experience */}
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Team Captain:</Text>
            <Text style={styles.statsValue}>{selectedPlayer.teamcaptain} </Text>
          </View>

          {/* Buttons Row */}
          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.button} onPress={closeModal}>
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send Challenge</Text>
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
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  markerImage: { width: 50, height: 50, borderRadius: 25 },
  markerRating: { fontSize: 12, marginTop: 5 },
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
    borderColor: "gray",
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
    marginBottom: 1,
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(0, 25, 99, 1)",
    backgroundColor: '#EDEAFF', // Dark blue color (you can use any other dark blue shade)
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
  sportname:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start"
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
  sportContainer: {
     // Centers content vertically
    // Centers content horizontally
    marginTop: -4, // Adds space between the player's name and the sport
  },
  
  sportText: {
    fontSize: 16,
    fontWeight: 'bold',
    display:"flex",
    justifyContent:"flex-start",
    
  },
  // i have added 12:47
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  profileImageContainer: {
    marginBottom: 1, // Decreased the margin to bring the content closer to the profile image
    zIndex: 1,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "#00008B",
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    marginTop: -20, // Adjusted to pull the modal content upwards for overlap
  },
  profileInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
    color: '#00008B', // Gold color for the star rating
  },
  sportContainer: {
    width: '100%',
    marginBottom: 10,
  },
  sportText: {
    fontSize: 16,
    color: '#333',
  },
  statsRow: {
    flexDirection: 'row',
    // justifyContent: 'space',
    width: '100%',
    marginBottom: 5,
  },
  statsLabel: {
    fontSize: 17,
    color: '#666',
  },
  statsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:2,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  button: {
    flex: 1,
    backgroundColor: '#00b562',
    padding: 10,
    borderRadius:20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // for filter button
  filterbutton: {
    padding: 9,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Translucent white
    borderColor: "black",
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
