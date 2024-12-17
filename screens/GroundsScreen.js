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
import { useFonts } from "expo-font";
import Ionicons from 'react-native-vector-icons/Ionicons'; 
const GroundsScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const initialRegion = {
    latitude: 28.6139,
    longitude: 77.209,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const grounds = [
    {
      name: "RS grounds",
      rating: 3.8,
      totalGames: 50,
      playerSince: "2019",
      latitude: 28.6139,
      longitude: 77.209,
      image: require("../assets/ground.jpg"),
      groundImage: require("../assets/ground.jpg"),
      groundName: "Green Park",
      location: "Delhi, India",
      distance: "5 km away",
      sports: [
        { name: "Tennis", icon: require("../assets/Tennis.png") },
        { name: "Badminton", icon: require("../assets/Badminton.png") },
      ],
      nextAvailableSlot: "12:30 PM, Today",
      price: "400",
    },
    {
      name: "Sindhu",
      rating: 3.8,
      totalGames: 50,
      playerSince: "2019",
      latitude: 28.5139,
      longitude: 77.09,
      image: require("../assets/ground.jpg"),
      groundImage: require("../assets/ground.jpg"),
      groundName: "Blue Sky Arena",
      location: "Noida, India",
      distance: "8 km away",
      sports: [
        { name: "Tennis", icon: require("../assets/Tennis.png") },
        { name: "Badminton", icon: require("../assets/Badminton.png") },
      ],
      nextAvailableSlot: "3:00 PM, Today",
      price: "500",
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

  const handlechooselist = () => {
    navigation.navigate("ChooseListButton")
    // console.log(`Searching for: ${searchText}`);
  };
  const handleSearch = () => {
    console.log(`Searching for: ${searchText}`);
  };

  const handleCancel = () => {
    setSearchText("");
    console.log("Search canceled");
    navigation.navigate("TabNavigator")
  };

  const handleFilter = () => {
    console.log("Filter button pressed");
  };

  const openPlayerProfile = (player) => {
    setSelectedPlayer(player);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPlayer(null);
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
        {grounds.map((person) => (
          <Marker
            key={person.name}
            coordinate={{
              latitude: person.latitude,
              longitude: person.longitude,
            }}
            title={person.name}
            onPress={() => openPlayerProfile(person)} // Directly open the profile on marker press
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
        <TouchableOpacity style={styles.button} onPress={handleFilter}>
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
           {/* Ground Image and Information */}
           <View style={styles.modalContent}>
             <Image
               source={selectedPlayer.groundImage}
               style={styles.groundImage}
             />
             <View style={styles.groundInfoRow}>
               <Text style={styles.groundName}>
                 {selectedPlayer.groundName}
               </Text>
     
               {/* Rating with Background and Color for Star Symbol */}
               <View style={styles.ratingContainer}>
                 <Text style={[styles.ratingText, styles.starSymbol]}>
                 ★ {selectedPlayer.rating} 
                 </Text>
               </View>
             </View>
     
             <Text style={styles.location}>
               {selectedPlayer.location} • {selectedPlayer.distance}
             </Text>
     
             {/* Sports Information */}
             <View style={styles.sportsRow}>
               {selectedPlayer.sports.map((sport, index) => (
                 <View key={index} style={styles.sportItem}>
                   <Image source={sport.icon} style={styles.sportIcon} />
                   <Text style={styles.sportName}>{sport.name}</Text>
                 </View>
               ))}
             </View>
     
             {/* Next Available Slot */}
             <View style={styles.slotRow}>
               <Text style={styles.slotText}>Next Available Slot</Text>
               <Text style={styles.timeText}>
                 {selectedPlayer.nextAvailableSlot}
               </Text>
             </View>
     
             {/* Price Information */}
             <View style={styles.priceRow}>
               <Text style={styles.priceLabel}>Starting From</Text>
               <Text style={styles.priceValue}>
                 INR {selectedPlayer.price} onwards
               </Text>
             </View>
     
             {/* Book Ground Button */}
             <TouchableOpacity
               style={styles.modalbutton}
               onPress={() => navigation.navigate("GroundsDetails")}
             >
               <Text style={styles.buttonText}>Book Ground</Text>
             </TouchableOpacity>
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
    borderRadius: 35, // Ensure circular container
    alignItems: "center",
    justifyContent: "center",
    width: 70, // Matches image size + padding
    height: 90,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  markerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover", // Ensures full image display
  },
  markerRating: {
    fontSize: 14,
    marginTop: 8,
    color: "#333",
    fontWeight: "600",
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
  // button: {
  //   padding: 9,
  //   borderRadius: 5,
  //   backgroundColor: 'rgba(255, 255, 255, 0.8)', // Translucent white
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // filterIcon: { marginRight: 5 },
  // buttonText: { color: 'black', fontWeight: 'bold' },
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
  modalTitle: { fontSize: 22, fontFamily: "HankenGroteskBold", marginBottom: 10 },
  profileInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  ratingContainer: {
    backgroundColor: '#EDEAFF', // Background color for the rating
    borderRadius: 20, // Border radius to make it rounded
    paddingHorizontal: 10, // Add some padding to the sides
    paddingVertical: 5, // Add some padding to the top and bottom
    marginTop: 5, // Add some margin for spacing
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Black text color for the rating number
  },

  // Style for the star symbol specifically
  starSymbol: {
    color: '#001963', // Star color
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
    fontFamily: "HankenGroteskBold",
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
    justifyContent: "center",
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
  // i have added now
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    maxHeight: "70%", // Set a maximum height to limit modal size
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10, // Reduce padding for a smaller appearance
    paddingHorizontal: 15,
    alignItems: "center",
  },
  groundImage: {
    width: "100%",
    height: 120, // Reduced image height
    borderRadius: 10,
    marginVertical: 10,
  },
  groundInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  groundName: {
    fontSize: 18,
    fontFamily: "HankenGroteskBold",
  },
  rating: {
    fontSize: 16,
  },
  location: {
    fontSize: 14,
    color: "gray",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: "HankenGroteskRegular",
  },
  sportsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  sportItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 8,
    width: "45%",
  },
  sportIcon: {
    width: 40,
    height: 24,
    marginRight: 5,
    marginLeft: 5,
  },
  sportName: {
    fontSize: 15,
    fontFamily: "HankenGroteskRegular",
  },
  slotRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5, // Reduced margin for closer spacing
  },
  slotText: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    lineHeight: 18, // Adjusted line height for spacing
  },
  timeText: {
    fontSize: 16,
    color: "gray",
    lineHeight: 18,
    fontFamily: "HankenGroteskRegular", // Adjusted line height for spacing
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 5, // Reduced margin for closer spacing
  },
  priceLabel: {
    fontSize: 16,
    fontFamily: "HankenGroteskRegular", 
  },
  priceValue: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold", 
  },
  modalbutton: {
    backgroundColor: "#00B562", // Set background color to green
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 15,
    width: "90%", // Set width to 80%
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "HankenGroteskBold",
  },
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
  // i have
  button: {
    padding: 9,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Translucent white
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { marginRight: 5 },
  buttonText: { color: "black" , fontFamily: "HankenGroteskBold",},
  fontFamily: "HankenGroteskBold",
});

export default GroundsScreen;
