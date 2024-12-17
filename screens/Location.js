import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
const NearbyScreen = () => {
  const navigation = useNavigation(); // Use navigation hook

  const initialRegion = {
    latitude: 28.6139,
    longitude: 77.2090,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [searchText, setSearchText] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const playersAndCoaches = [
    // {
    //   name: 'Rohit',
    //   rating: 3.8,
    //   latitude: 28.6139,
    //   longitude: 77.2090,
    //   image: require('../assets/Logo.png'),
    // },
    // Add more players and coaches here
  ];

  const handleSearch = () => {
    console.log(`Searching for: ${searchText}`);
  };

  const handleCancel = () => {
    setSearchText('');
    console.log('Search canceled');
    navigation.navigate("TabNavigator")
  };

  const handleFilter = () => {
    console.log('Filter button pressed');
  };

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    // Navigate to respective screens
    if (buttonName === 'Players') navigation.navigate('PlayersScreen');
    else if (buttonName === 'Coaches') navigation.navigate('CoachesScreen');
    else if (buttonName === 'Teams') navigation.navigate('TeamsScreen');
    else if (buttonName === 'Grounds') navigation.navigate('GroundsScreen');
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {playersAndCoaches.map((person) => (
          <Marker
            key={person.name}
            coordinate={{ latitude: person.latitude, longitude: person.longitude }}
            title={person.name}
            description={`Rating: ${person.rating}`}
          >
            <View style={styles.marker}>
              <Image source={person.image} style={styles.markerImage} />
              <Text style={styles.markerRating}>{person.rating}</Text>
            </View>
          </Marker>
        ))}
      </MapView>

      {/* Search, Cancel, and Filter Buttons */}
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
        <TouchableOpacity style={styles.chooseListButton}>
          <MaterialIcons name="list" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* Bottom Navigation Buttons */}
      {/* // if you want you can add Teams tab here  */}
      <View style={styles.bottomButtonsContainer}>
        {['Players', 'Coaches', 'Grounds'].map((button) => (
          <TouchableOpacity
            key={button}
            style={[
              styles.bottomButton,
              activeButton === button && styles.activeButton,
            ]}
            onPress={() => handleButtonPress(button)}
          >
            <Text style={[styles.bottomButtonText, activeButton === button && styles.activeButtonText]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%' },
  marker: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  markerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
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
  searchIcon: { justifyContent: "center", alignItems: "center", padding: 10 },
  button: {
    padding: 9,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Translucent white
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: { marginRight: 5 },
  buttonText: { color: 'black', fontWeight: 'bold' },
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  bottomButton: {
    flex: 1.2,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  activeButton: { borderColor: 'black', borderWidth: 2 },
  bottomButtonText: { color: 'black' },
  activeButtonText: { fontWeight: 'bold' },
});


export default NearbyScreen;
