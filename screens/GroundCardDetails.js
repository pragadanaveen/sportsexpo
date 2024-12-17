import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions,Modal,TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
const GroundDetailsPage = () => {
  const navigation=useNavigation();
  const [modalVisible, setModalVisible] = useState(false); // State to handle modal visibility
  const [selectedCourt, setSelectedCourt] = useState('Greenfield Court');
  const [startTime, setStartTime] = useState('10:00 AM');
  const [endTime, setEndTime] = useState('11:00 AM');
  const [description, setDescription] = useState('');
  
  const [currentPage, setCurrentPage] = useState(0); // For pagination dots
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
  });

  const userReviews = [
    {
      name: 'John Doe',
      role: 'Player',
      review: 'Great experience, well-maintained courts!',
      profilePic: require('../assets/profile1.png'),
    },
    {
      name: 'Jane Smith',
      role: 'Player',
      review: 'A fantastic place for sports!',
      profilePic: require('../assets/profile1.png'),
    },
    {
      name: 'Sam Wilson',
      role: 'Coach',
      review: 'Highly recommended, excellent facilities.',
      profilePic: require('../assets/profile1.png'),
    },
  ];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(contentOffsetX / Dimensions.get('window').width);
    setCurrentPage(page);
  };
const handleedit=()=>{
  // navigation.navigate("Gm_Editcourtdetails")
  navigation.navigate("Gm_Editgrounddetails")
}
  return (
    <ScrollView style={styles.container}>
      {/* Ground Details Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Ground Details</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleedit}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Ground Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ground Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Phoenix Sports Arena"
          placeholderTextColor="#888"
        />
      </View>

      {/* Ground Address Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ground Address</Text>
        <TextInput
          style={styles.input}
          placeholder="ABC Nagar, Nehru Colony, Hyderabad."
          placeholderTextColor="#888"
        />
      </View>

      {/* Amenities Section */}
      <Text style={styles.sectionTitle}>Amenities</Text>
      <View style={styles.amenitiesContainer}>
        <View style={styles.amenityRow}>
          <Text style={styles.amenity}>Drinking Water</Text>
          <Text style={styles.amenity}>Changing Room</Text>
          <Text style={styles.amenity}>Parking</Text>
        </View>
        <View style={styles.amenityRow}>
          <Text style={styles.amenity}>Free WiFi</Text>
          <Text style={styles.amenity}>Restrooms</Text>
          <Text style={styles.amenity}>Security</Text>
        </View>
      </View>

      {/* Available Sports Section */}
      <Text style={styles.sectionTitle}>Available Sports</Text>
      <View style={styles.sportsContainer}>
        <View style={styles.sport}>
          <Icon name="basketball" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.sportText}>Basketball</Text>
        </View>
        <View style={styles.sport}>
          <Icon name="football" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.sportText}>Football</Text>
        </View>
        <View style={styles.sport}>
          <Icon name="tennisball" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.sportText}>Tennis</Text>
        </View>
      </View>

      {/* Photos Section */}
      <Text style={styles.sectionTitle}>Photos</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photosContainer}>
        <Image source={require('../assets/ground.jpg')} style={styles.photo} />
        <Image source={require('../assets/ground.jpg')} style={styles.photo} />
        <Image source={require('../assets/ground.jpg')} style={styles.photo} />
      </ScrollView>

      {/* Court Details Section */}
      
      <View style={styles.courtHeaderRow}>
        <Text style={styles.courtHeaderText}>CourtDetails</Text>
        <TouchableOpacity style={styles.blockButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.blockButtonText}>Block Ground</Text>
        </TouchableOpacity>
      </View>
      {[
        { name: 'Sunrise Court', status: 'Available', color: 'green' },
        { name: 'Greenfield Court', status: 'Under Maintenance', color: 'yellow' },
        { name: 'City Sports Court', status: 'Available', color: 'green' },
        { name: 'Riverside Court', status: 'Available', color: 'green' },
      ].map((court, index) => (
        <View key={index}>
          <View style={styles.courtDetailsContainer}>
            <Text style={styles.courtName}>{court.name}</Text>
            <View style={styles.courtStatusContainer}>
              <Icon name="ellipse" size={10} color={court.color} />
              <Text style={styles.courtStatusText}>{court.status}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      ))}
 {/* Modal for Blocking Ground */}
 <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Close modal when back button pressed
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeader}>Temporarily block the ground to make it unavailable for bookings.</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Select Court</Text>
                <View style={styles.dropdown}>
                  <Text style={styles.dropdownText}>{selectedCourt}</Text>
                  <Icon name="chevron-down" size={20} color="gray" />
                </View>
              </View>

              <Text style={styles.label}>Select Slot</Text>
              <View style={styles.calendarContainer}>
                <Icon name="calendar" size={20} color="black" />
                <Text style={styles.todayText}>Today</Text>
              </View>

              {/* Horizontal Time Scale */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.timeScale}>
                  <View style={styles.availableSlot}></View>
                  <View style={styles.unavailableSlot}></View>
                </View>
              </ScrollView>

              <View style={styles.timeSelectionContainer}>
                <View style={styles.timeColumn}>
                  <Text>Start Time</Text>
                  <TextInput style={styles.timeInput} value={startTime} editable={false} />
                </View>
                <View style={styles.timeColumn}>
                  <Text>End Time</Text>
                  <TextInput style={styles.timeInput} value={endTime} editable={false} />
                </View>
              </View>

              {/* Description Field */}
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={styles.descriptionInput}
                placeholder="Enter description here"
                value={description}
                onChangeText={setDescription}
                multiline={true}
              />

              <TouchableOpacity style={styles.blockGroundButton}>
                <Text style={styles.blockGroundButtonText}>Block Ground</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>


      {/* Rules and Regulations Section */}
      <View style={styles.rulesContainer}>
        <Text style={styles.rulesText}>Rules and Regulations</Text>
        <Icon name="chevron-forward" size={20} color="#000" />
      </View>

      {/* User Reviews Section */}
      <Text style={styles.sectionTitle}>User Reviews</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {userReviews.map((review, index) => (
          <View key={index} style={styles.userReviewContainer}>
            <View style={styles.userProfileContainer}>
              <Image source={review.profilePic} style={styles.profilePic} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{review.name}</Text>
                <Text style={styles.userRole}>{review.role}</Text>
              </View>
            </View>
            <Text style={styles.userReviewText}>{`"${review.review}"`}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.paginationContainer}>
        {userReviews.map((_, index) => (
          <View
            key={index}
            style={[styles.paginationDot, index === currentPage && styles.activeDot]}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'HankenGroteskBlack',
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'HankenGroteskRegular',
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: 'HankenGroteskBlack',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: 'HankenGroteskRegular',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBlack',
    marginVertical: 10,
  },
  amenitiesContainer: {
    marginBottom: 16,
  },
  amenityRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  amenity: {
    backgroundColor: '#f0f0f0',
    padding: 6,
    borderRadius: 5,
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 4,
    marginBottom: 8,
    fontFamily: 'HankenGroteskRegular',
  },
  sportsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sport: {
    backgroundColor: '#4CAF50',
    padding: 6,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    flex: 1,
    justifyContent: 'center',
  },
  sportText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 6,
    fontFamily: 'HankenGroteskRegular',
  },
  photosContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  photo: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
  courtHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  courtHeaderText: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBlack',
  },
  blockButton: {
    backgroundColor: '#006336',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 25,
  },
  blockButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'HankenGroteskRegular',
  },
  courtDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  courtName: {
    fontSize: 16,
    fontFamily: 'HankenGroteskRegular',
  },
  courtStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courtStatusText: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'HankenGroteskRegular',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 6,
  },
  rulesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
    borderWidth: 0.5,
    borderColor: '#000', // Black border
    padding: 18,          // Increased padding for more height
    borderRadius: 4,     // Optional for rounded edges
  },
  rulesText: {
    fontSize: 16,
    fontFamily: 'HankenGroteskBlack',
  },
  userReviewContainer: {
    width: Dimensions.get('window').width * 0.8,
    marginHorizontal: 16,
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'HankenGroteskBlack',
  },
  userRole: {
    fontSize: 14,
    color: '#777',
    fontFamily: 'HankenGroteskRegular',
  },
  userReviewText: {
    fontSize: 14,
    fontFamily: 'HankenGroteskRegular',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 20, // Added bottom margin to make sure pagination dots are not cut off
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    width: '80%',
    elevation: 10,
  },
  modalHeader: {
    fontSize: 14,
    fontFamily: 'HankenGroteskRegular',
    marginBottom: 16,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  dropdownText: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'HankenGroteskRegular',
  },
  calendarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  todayText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
    fontFamily: 'HankenGroteskRegular',
  },
  timeScale: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  availableSlot: {
    backgroundColor: 'green',
    height: 20,
    width: 50,
    marginRight: 5,
  },
  unavailableSlot: {
    backgroundColor: 'red',
    height: 20,
    width: 50,
    marginRight: 5,
    fontFamily: 'HankenGroteskRegular',
  },
  timeSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeColumn: {
    width: '48%',
  },
  timeInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
  },
  descriptionInput: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    textAlignVertical: 'top',
    fontFamily: 'HankenGroteskRegular',
  },
  blockGroundButton: {
    backgroundColor: '#00B562',
    padding: 12,
    borderRadius: 25,
    marginTop: 16,
    width:"50%",
    alignSelf:"center"
  },
  blockGroundButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'HankenGroteskSemiBold',
  },
  
});

export default GroundDetailsPage;
