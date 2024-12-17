import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // import FontAwesome icons
import { useNavigation } from '@react-navigation/native'; // For navigation
import { useFonts } from 'expo-font';
const GroundDetails = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const handlePress = () => {
    navigation.navigate('RulesPage'); // Replace 'RulesPage' with your actual screen name
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={require("../assets/ground.jpg")} style={styles.groundImage} />

      <View style={styles.detailsContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.groundName}>RS Grounds</Text>
          <View style={styles.ratingContainer}>
          <Text style={styles.ratingSymbol}>★</Text>
            <Text style={styles.ratingText}>4.5</Text>
           
          </View>
        </View>
        
        {/* Timing row with icon */}
        <View style={styles.infoRow}>
          <FontAwesome name="clock-o" size={20} color="#666" style={styles.icon} />
          <Text style={styles.timing}>6 AM - 9 PM</Text>
        </View>
        
        {/* Address row with icon and View Directions button */}
        <View style={styles.infoRow}>
          <FontAwesome name="map-marker" size={20} color="#666" style={styles.icon} />
          <Text style={styles.address}>ABC Nagar, Nehru Colony, Hyderabad, Telangana, 534502</Text>
          <TouchableOpacity style={styles.directionsButton}>
            <Text style={styles.directionsButtonText}>View Directions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Provide Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Matches</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Amenities</Text>
        <View style={styles.amenitiesContainer}>
          <TouchableOpacity style={styles.amenityButton}>
            <Text style={styles.amenityButtonText}>Drinking Water</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amenityButton}>
            <Text style={styles.amenityButtonText}>Changing Room</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amenityButton}>
            <Text style={styles.amenityButtonText}>Parking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amenityButton}>
            <Text style={styles.amenityButtonText}>Wash Rooms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amenityButton}>
            <Text style={styles.amenityButtonText}>Waiting Room</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amenityButton}>
            <Text style={styles.amenityButtonText}>Waiting Room</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Available Sports</Text>
        <View style={styles.sportsContainer}>
  <TouchableOpacity style={styles.sportButton}>
    <FontAwesome name="rocket" size={20} color="#fff" style={styles.icon} />
    <Text style={styles.sportButtonText}>Tennis</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.sportButton}>
    <FontAwesome name="rocket" size={20} color="#fff" style={styles.icon} />
    <Text style={styles.sportButtonText}>Badminton</Text>
  </TouchableOpacity>
</View>

        <Text style={styles.sectionTitle}>User Reviews</Text>
        <View style={styles.reviewContainer}>
          <Image source={require("../assets/ground.jpg")} style={styles.userAvatar} />
          <View style={styles.reviewDetails}>
            <Text style={styles.reviewName}>Rahul Devid</Text>
            <Text style={styles.reviewText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque massa quis velit bibendum.</Text>
            <Text style={styles.reviewTitle}>Software Engineer</Text>
          </View>
        </View>
        <View style={styles.rulesContainer}>
        <Text style={styles.rulesLabel}>Rules and Regulations</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CouponPage')}>
          <Text style={styles.rulesArrow}> &gt;</Text>
        </TouchableOpacity>
      </View>
        
        <TouchableOpacity style={styles.bookButton}   onPress={() => navigation.navigate('BookingPage')}>
          <Text style={styles.bookButtonText}>Book Ground</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  groundImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groundName: {
    fontSize: 24,
    fontFamily: 'HankenGroteskBold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c5ffe4', 
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  ratingText: {
    fontSize: 18,
    color: 'black',
    marginRight: 4,
    fontFamily: 'HankenGroteskBold',
  },
  ratingSymbol: {
    fontSize: 20,
    color: '#006336',
    marginRight:3
  },
  timing: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
    fontFamily: 'HankenGroteskRegular',
  },
  address: {
    fontSize: 16,
    color: '#3D3D3D',
    flex: 1,
    fontFamily: 'HankenGroteskRegular',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  icon: {
    marginRight: 8,
  },
  directionsButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7A7A7A',
    marginLeft: 'auto',
  },
  directionsButtonText: {
    color: '#3D3D3D',
    textAlign: 'center',
    fontFamily: 'HankenGroteskRegular',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    backgroundColor: 'transparent', // Set background to transparent
    borderWidth: 1, // Add a 1px border
    borderColor: 'black', // Set border color to black
    borderRadius: 10,
  },
  buttonText: {
    color: '#000000', // Change text color to blue or keep white if preferred
    textAlign: 'center',
    fontFamily: 'HankenGroteskBold',
    fontSize:16,
  },
  
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
    color: '#333',
    marginVertical: 12,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  amenityButton: {
    flexBasis: '32%', // Adjusted to ensure 3 buttons fit per row
    paddingVertical: 12, // Increased padding for more height
    paddingHorizontal: 16, // Adjust horizontal padding if needed
    backgroundColor: '#bbddff', // Set background color to #bbddff
    borderRadius: 6,
    marginVertical: 4,
  },
  amenityButtonText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'HankenGroteskRegular', // Align text to the center for better readability
  },
  
  
  
  sportsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    flexWrap: 'wrap', // Ensure the buttons wrap to the next line if needed
  },
  sportButton: {
    flexDirection: 'row', // Make sure icon and text are aligned horizontally
    alignItems: 'center', // Vertically center the icon and text
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#008C4C', // Set background color to #008c4c
    borderRadius: 6,
    marginHorizontal: 8, // Space between buttons
    marginVertical: 4, // Space above and below the button
  },
  sportButtonText: {
    color: '#fff', // Set text color to white for better visibility
    marginLeft: 8, // Add space between icon and text
    fontSize: 16, 
    fontFamily: 'HankenGroteskRegular',// Font size for the sport name
  },
  icon: {
    marginRight: 8, // Space between icon and text
  },
  reviewContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  reviewDetails: {
    flex: 1,
  },
  reviewName: {
    fontSize: 16,
    fontFamily: 'HankenGroteskBold',
    color: '#333',
  },
  reviewText: {
    fontSize: 14,
    color: '#3D3D3D',
    marginVertical: 4,
    fontFamily: 'HankenGroteskRegular',
  },
  reviewTitle: {
    fontSize: 12,
    color: '#7A7A7A',
    fontFamily: 'HankenGroteskRegular',
  },
  rulesButton: {
    flexDirection: 'row', // Align text and symbol horizontally in the same row
    alignItems: 'center', // Vertically align text and symbol
    justifyContent: 'space-between', // Create space between text and symbol
    backgroundColor: 'transparent', // Set the background to transparent
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 16,
    borderWidth: 1, // 1px solid border
    borderColor: '#8F8F8F',
    marginLeft: 8,
    marginRight: 8,
  },
  rulesButtonText: {
    color: '#000000', // Text color for the label
    fontSize: 16,
    flex: 1, 
    fontFamily: 'HankenGroteskRegular',// Ensures the text takes available space and pushes the symbol to the right
  },
  greaterThanSymbol: {
    color: '#000000', // Set the color of the symbol to black
    fontSize: 20,
  },
  bookButton: {
    marginTop: 16,
    paddingVertical: 12,
    backgroundColor: '#008C4C',
    borderRadius: 20,
    marginLeft:8,
    marginRight:8,
  },
  bookButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rulesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    padding: 20,
    borderWidth: 1,           // 1px border width
    borderColor: '#8F8F8F',    // Border color set to black
    borderRadius: 7,         // Optional: Rounded corners
  },
  rulesLabel: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'HankenGroteskBold',
  },
  rulesArrow: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'HankenGroteskBold',
  },
});

export default GroundDetails;
