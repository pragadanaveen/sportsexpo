import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BookingConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Booking_confirm.png')} style={styles.bookingIcon} />

      {/* Updated Text with New Message */}
      <Text style={styles.jobStatus}>Job is posted in your feed. You can manage the job applications in </Text>
      <Text  style={styles.jobStatus2}>Job Posts</Text>

      {/* <View style={styles.groundDetails}>
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
      </View> */}

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
  // Updated style for new status text
  jobStatus: {
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  jobStatus2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'green', // Set text color to green
    borderBottomWidth: 1, // Apply 1px solid bottom border
    borderBottomColor: 'green', // Set border color to green
    paddingBottom: 5, // Optional: Add some space between text and border
    alignSelf: 'center', // Center align the text
    width: 'auto',
    marginTop:-15 // Allow the width to adjust based on the text length
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
    fontWeight: 'bold',
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
    color: '#666',
  },
  addressText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#666',
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
    fontWeight: 'bold',
    color: '#333',
  },
  copyLinkButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  copyLinkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 0,
    paddingLeft: 0,
  },
  shareButton: {
    margin: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    padding: 10,
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
  },
  ratingSymbol: {
    fontSize: 18,
    color: '#006336',
  },
});

export default BookingConfirmationScreen;
