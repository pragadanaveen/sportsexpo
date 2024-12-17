import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
const BookingConfirmationScreen = () => {
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Booking_confirm.png')} style={styles.bookingIcon} />

      <Text style={styles.bookingStatus}>Ground is booked</Text>

      <View style={styles.groundDetails}>
        <View style={styles.groundRow}>
          <Text style={styles.groundName}>RS Grounds</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.5</Text>
            <Text style={styles.ratingSymbol}> ★</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <Feather name="clock" size={16} color="black" />
            <Text style={styles.detailText}>Time:</Text>
            <Text style={styles.detailText}>10:00 AM to 11:00 AM</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <Feather name="map-pin" size={16} color="black" />
            <Text style={styles.detailText}>Address:</Text>
            <Text style={styles.addressText}>
              ABC Nagar, Nehru Colony, Hyderabad, Telangana, 534502
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <Feather name="clock" size={16} color="black" />
            <Text style={styles.detailText}>Court:</Text>
            <Text style={styles.detailText}>Court AB</Text>
          </View>
        </View>
      </View>

      <View style={styles.shareInvite}>
        <View style={styles.shareRow}>
          <Text style={styles.shareInviteText}>Share Invite On</Text>
          <TouchableOpacity style={styles.copyLinkButton}>
  <Text style={styles.copyLinkText}>Copy Link</Text>
</TouchableOpacity>
        </View>

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.shareButton}>
            <Feather name="message-square" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Feather name="facebook" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Feather name="instagram" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  bookingIcon: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
  },
  bookingStatus: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
    fontFamily: 'HankenGroteskBold',
  },
  groundDetails: {
    marginBottom: 20,
  },
  groundRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  groundName: {
    fontSize: 20,
    fontFamily: 'HankenGroteskBold',
    color: '#333',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#FFD700',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#3D3D3D',
  },
  addressText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#000',
    flexWrap: 'wrap', // Ensure the text wraps within the container
    width: '100%', // Allow the text to take up the full width
  },
  shareInvite: {
    marginTop: 20,
    alignItems: 'center',
  },
  shareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  shareInviteText: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
    color: '#000',
  },
  copyLinkButton: {
    // backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  copyLinkText: {
    fontSize: 16,             // Adjust the font size as needed
    color: '#000',            // Set the text color to black or any color you prefer
    textDecorationLine: 'underline',
    fontFamily: 'HankenGroteskRegular', // This will add the underline to the text
  },
  iconRow: {
    flexDirection: 'row',        // This makes the icons appear in a row
    justifyContent: 'flex-start', // Align the items to the left (start of the row)
    // alignItems: 'center',         // Align the items vertically in the center (for better alignment)
    marginTop: 0,                // No extra margin at the top
    paddingLeft: 0,              // No extra padding on the left
  },

  // Style for the individual share button (icons/buttons)
  shareButton: {
    margin: 10,                  // Add margin to space out the buttons
    backgroundColor: '#f2f2f2',  // Light background color for the button
    borderRadius: 30,            // Round the button corners
    padding: 10,                 // Padding for the button
    alignItems: 'center',        // Ensure content inside the button is centered
  },
//   i have
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
  },
  ratingSymbol: {
    fontSize: 18,
    color: '#006336',
  },
});

export default BookingConfirmationScreen;
