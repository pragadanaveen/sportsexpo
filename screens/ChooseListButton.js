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
import { Ionicons } from "@expo/vector-icons";
import PlayersListView from "./PlayersListView";
import CoachesListView from "./CoachesListView";
import TeamsListView from "./TeamsListView";
import GroundsListView from "./GroundsListView";
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    console.log("Search text:", searchText);
  };
  const handleFilter = () => {
    console.log("Filter icon pressed");
  };
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.iconButton}>
          <FontAwesome5 name="search" size={15} color="gray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.filterIcon} onPress={handleFilter}>
        <View style={styles.filterContent}>
          <Ionicons name="options-outline" size={20} color="#000" />
          <Text style={styles.filterText}>Filter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["Players", "Coaches", "Teams", "Grounds"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tab,
                selectedTab === index ? styles.activeTab : null,
              ]}
              onPress={() => setSelectedTab(index)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === index ? styles.activeTabText : null,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.content}>
        {selectedTab === 0 && <PlayersListView />}
        {selectedTab === 1 && <CoachesListView />}
        {selectedTab === 2 && <TeamsListView />}
        {selectedTab === 3 && <GroundsListView />}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 50,
  },
  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 15,
    width: "90%",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    flex: 1,
    height: 45,
    marginRight: 5,
    overflow: "hidden", // Ensures no content spills out
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 10,
    borderRadius: 25,
  },
  iconButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  filterIcon: {
    height: 45, // Adjust height of the filter container
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginLeft: 5,
    justifyContent: "center", // Center contents vertically
    alignItems: "center",
    paddingHorizontal: 10, // Add horizontal padding to space out the content
    overflow: "hidden", // Ensures no content spills out
  },
  filterContent: {
    flexDirection: "row",
    alignItems: "center", // Align text and icon horizontally
  },
  filterText: {
    fontSize: 16,
    marginLeft: 5, // Space between icon and text
    color: "#000",
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    marginTop: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "white", // Normal tab has a white background
  },
  activeTab: {
    backgroundColor: "#f2f2f2", 
    // Selected tab has a gray background
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  activeTabText: {
    color: "#000", // Adjust text color for better contrast on gray background
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    width: "100%",
  },
});
export default App;
