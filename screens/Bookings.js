import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Calendar } from "react-native-calendars";
import { useFonts } from 'expo-font';

const JobDetailScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0); // 0 = Booked, 1 = Pending, 2 = Cancelled
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [selectedDate, setSelectedDate] = useState(""); // State to store selected date
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
  });

  // Mock data with different statuses
  const jobs = [
    {
      id: 1,
      date: "15 Nov 2024",
      playerImage: require("../assets/profile1.png"),
      playerName: "Sindhu",
      court: "Court AB",
      sport: "Tennis",
      timings: "8:00 AM - 10:10 AM",
      status: "Booked",
      price: 500,
    },
    {
      id: 2,
      date: "16 Nov 2024",
      playerImage: require("../assets/profile1.png"),
      playerName: "John Doe",
      court: "Court CD",
      sport: "Badminton",
      timings: "9:00 AM - 11:00 AM",
      status: "Pending",
      price: 300,
    },
    {
      id: 3,
      date: "17 Nov 2024",
      playerImage: require("../assets/profile1.png"),
      playerName: "Emily",
      court: "Court EF",
      sport: "Basketball",
      timings: "10:00 AM - 12:00 PM",
      status: "Cancelled",
      price: 0,
    },
    // Add more mock jobs for testing
    {
      id: 4,
      date: "18 Nov 2024",
      playerImage: require("../assets/profile1.png"),
      playerName: "Sara",
      court: "Court GH",
      sport: "Football",
      timings: "12:00 PM - 2:00 PM",
      status: "Booked",
      price: 400,
    },
    {
      id: 5,
      date: "19 Nov 2024",
      playerImage: require("../assets/profile1.png"),
      playerName: "Mike",
      court: "Court IJ",
      sport: "Basketball",
      timings: "2:00 PM - 4:00 PM",
      status: "Pending",
      price: 350,
    },
    {
      id: 6,
      date: "19 Nov 2024",
      playerImage: require("../assets/profile1.png"),
      playerName: "Mike",
      court: "Court IJ",
      sport: "Basketball",
      timings: "2:00 PM - 4:00 PM",
      status: "Pending",
      price: 350,
    },
    {
      id: 7,
      date: "19 Nov 2024",
      playerImage: require("../assets/profile1.png"),
      playerName: "Mike",
      court: "Court IJ",
      sport: "Basketball",
      timings: "2:00 PM - 4:00 PM",
      status: "Pending",
      price: 350,
    },
    {
      id: 8,
      date: "19 Nov 2024",
      playerImage: require("../assets/profile1.png"),
      playerName: "Mike",
      court: "Court IJ",
      sport: "Basketball",
      timings: "2:00 PM - 4:00 PM",
      status: "Pending",
      price: 350,
    },
  ];

  // Tabs
  const tabs = ["Booked", "Pending", "Cancelled"];

  // Filter jobs based on the active tab
  const filteredJobs = jobs.filter((job) => job.status === tabs[activeTab]);

  const handleAddBooking = () => {
    navigation.navigate("BookingPage");
  };

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Player Image */}
        <View style={styles.imageContainer}>
          <Image source={item.playerImage} style={styles.playerImage} />
        </View>

        {/* Details beside Player Image */}
        <View style={styles.detailsContainer}>
          <Text style={styles.playerName}>{item.playerName}</Text>
          <Text style={styles.courtSport}>
            {item.court} | {item.sport}
          </Text>
          <Text style={styles.timings}>{item.timings}</Text>
        </View>

        {/* Date at Top-Right */}
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>

      {/* Status at Bottom-Right */}
      <View style={styles.statusContainer}>
        <Text
          style={[styles.status, {
            color:
              item.status === "Booked"
                ? "green"
                : item.status === "Pending"
                ? "orange"
                : "red",
          }]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString); // Update the selected date state
    setShowCalendar(false); // Close the calendar modal
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tabButton, activeTab === index && styles.activeTabButton]}
            onPress={() => setActiveTab(index)}
          >
            <Text style={[styles.tabText, activeTab === index && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Calendar Icon Button */}
        <TouchableOpacity style={styles.calendarButton} onPress={() => setShowCalendar(true)}>
          <Icon name="calendar-outline" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Cards List */}
      <FlatList
        data={filteredJobs}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.scrollContainer}
      />

      

      {/* Calendar Modal */}
      <Modal
        visible={showCalendar}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCalendar(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={handleDateSelect}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: "green" },
              }}
            />
            <TouchableOpacity
              style={styles.closeCalendarButton}
              onPress={() => setShowCalendar(false)}
            >
              <Text style={styles.closeCalendarButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: "#f8f8f8",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f8f8f8",
    paddingVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
    alignItems: "center",
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "green",
  },
  tabText: {
    fontSize: 17,
    color: "#8F8F8F",
    fontFamily:"HankenGroteskBold",
  },
  activeTabText: {
    color: "green",
    fontFamily:"HankenGroteskBlack",
  },
  calendarButton: {
    backgroundColor: "green",
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    padding: 10,
    position: "relative",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  playerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  detailsContainer: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontFamily:"HankenGroteskBold",
    marginBottom: 2,
  },
  courtSport: {
    fontSize: 14,
    color: "#8f8f8f",
    fontFamily:"HankenGroteskRegular",
  },
  timings: {
    fontSize: 14,
    color: "#3D3D3D",
    marginTop: 5,
    fontFamily:"HankenGroteskSemiBold",
  },
  dateContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  date: {
    fontSize: 14,
    color: "#8f8f8f",
    fontFamily:"HankenGroteskRegular",
  },
  statusContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  status: {
    fontSize: 14,
    fontFamily:"HankenGroteskBold",
  },
  closeButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    backgroundColor: "green",
    borderRadius: 30,
    justifyContent: "center", // Center text vertically within the button
    alignItems: "center", // Center text horizontally within the button
    elevation: 5,
  },
  
  closeButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center", // Ensure text is horizontally centered (this is mainly useful for multi-line text)
    flex: 1, // This makes the text take up available space to help with centering
  }
  ,
  
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  calendarContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  closeCalendarButton: {
    marginTop: 20,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  closeCalendarButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default JobDetailScreen;
