import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for options-outline
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Import DateTimePickerModal
import LiveMatches_nearby from './LiveMatches_nearby';
import ComingSoon from './ComingSoon';
import Cricket from './NearBy_Cricket';
import FootBall from './FootBall';
import { useFonts } from 'expo-font';
const SearchBar = ({ onCalendarPress }) => {
  const [searchText, setSearchText] = useState("");
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
  });
  const handleSearch = () => {
    console.log("Search text:", searchText);
  };

  return (
    <View style={styles.searchBarContainer}>
      {/* Search input with icon */}
      <View style={styles.searchInputContainer}>
        <TouchableOpacity onPress={handleSearch} style={styles.iconButton}>
          <FontAwesome5 name="search" size={16} color="#8A8A8A" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <View style={styles.iconWrapper}>
        <TouchableOpacity style={styles.calendarIcon} onPress={onCalendarPress}>
          <FontAwesome5 name="calendar-alt" size={15} color="#525252" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterIcon}>
          <Ionicons name="options-outline" size={15} color="#525252" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const tabs = ["Live Matches", "Coming Soon", "Cricket", "Football"];

  const showCalendar = () => setCalendarVisible(true);
  const hideCalendar = () => setCalendarVisible(false);

  const handleDateConfirm = (date) => {
    console.log("Selected Date:", date.toLocaleDateString());
    hideCalendar();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar onCalendarPress={showCalendar} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tab, selectedTab === index ? styles.activeTab : null]}
              onPress={() => setSelectedTab(index)}
            >
              <Text
                style={[styles.tabText, selectedTab === index ? styles.activeTabText : null]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.content}>
        {selectedTab === 0 && <LiveMatches_nearby />}
        {selectedTab === 1 && <ComingSoon />}
        {selectedTab === 2 && <Cricket />}
        {selectedTab === 3 && <FootBall />}
      </View>

      {/* Calendar Modal */}
      <DateTimePickerModal
        isVisible={isCalendarVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideCalendar}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "10%",
  },
  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#B8B8B8",
    marginHorizontal: 15, // Margin added for spacing around the header
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff", // Overall white background for search bar container
    marginHorizontal: 15, // Margin around the search bar container
    marginTop: 15, // Space from top to ensure spacing above search bar
    justifyContent: "space-between", // Ensures the elements are evenly spaced
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    flex: 1,
    paddingHorizontal: 10, // Adjusted horizontal padding to control spacing
    marginRight: 5, // Reduced margin between input and icons
    height: 40, // Fixed height for better alignment of icons
    backgroundColor: "#fff", // White background specifically for the search input container
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 5, // Reduced left padding to bring the text closer to the left side
    paddingRight: 10, // Retained the right padding for spacing from the icon
    borderRadius: 10,
    fontSize: 16,
    fontFamily:"HankenGroteskSemiBold",
    color:"#666666" // Adjust font size for a better look
  },
  iconButton: {
    padding: 4, // Reduced padding for more compact icon
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 1,
    color:"#8A8A8A" // Reduced margin to bring icon closer to input
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  calendarIcon: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // White background for the calendar icon
  },
  filterIcon: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5, // Decreased margin between calendar and filter icons
    backgroundColor: "#fff", // White background for the filter icon
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#1976D2", // Blue underline when tab is selected
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#525252",
    fontFamily:"HankenGroteskRegular"  // Default color of tab text (before selection)
  },
  activeTabText: {
    color: "black", // Color after tab is selected
    fontFamily:"HankenGroteskBlack" 
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 18,
    fontFamily:"HankenGroteskBlack" ,
    color: "black",
    textAlign: "center",
  },
});

export default App;
