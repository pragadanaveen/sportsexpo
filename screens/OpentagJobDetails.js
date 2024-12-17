import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import JobPostContent from "./JobPostContent"; // Assuming this is in a separate file
// import JobPosts from "./JobPosts"; // Assuming this is in a separate file
import Applicants from "./Applicants"; // Assuming this is in a separate file
import { useFonts } from "expo-font";
const App = () => {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });
  const handleCustomIndexSelect = (index) => {
    setCustomStyleIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Job Details above the tabs */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Posted On: </Text>
          <Text style={styles.value}>01 November, 2024</Text>
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Received Applications: </Text>
          <Text style={styles.value}>12</Text>
        </Text>
      </View>

      {/* Segmented Tabs */}
      <SegmentedControlTab
        values={["Job Post", "Applicant"]}
        selectedIndex={customStyleIndex}
        onTabPress={handleCustomIndexSelect}
        borderRadius={0}
        tabsContainerStyle={styles.segment}
        tabStyle={styles.tab}
        activeTabStyle={styles.activeTab}
        tabTextStyle={styles.tabText}
        activeTabTextStyle={styles.activeTabText}
      />

      {/* Horizontal Ruler */}
      <View style={styles.ruler} />

      {/* Render content based on the selected tab */}
      <View style={styles.contentContainer}>
        {customStyleIndex === 0 ? <JobPostContent /> : <Applicants />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
  },
  detailsContainer: {
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    lineHeight: 24,
    fontFamily: "HankenGroteskBold", 
    color:"#3D3D3D"// Adjust spacing for better readability
  },
  label: {
    color: "#525252", // Light color for the label
    fontFamily: "HankenGroteskRegular", // Lighter weight for the label
  },
  value: {
    color: "#3D3D3D", // Slightly darker color for the value
    fontFamily: "HankenGroteskBold", // Medium weight for the value
  },
  segment: {
    width: "60%",
    alignSelf: "flex-start",
    borderWidth: 0, // No border for the segment container
  },
  tab: {
    backgroundColor: "#fff",
    borderWidth: 0, // Remove borders around individual tabs
    marginHorizontal: -1, // Remove spacing between tabs
    paddingVertical: 5, // Adjust vertical padding for better alignment
    paddingHorizontal: 0, // Ensure no extra padding between tabs
  },
  activeTab: {
    backgroundColor: "#fff",
    borderBottomWidth: 2, // Only a bottom border for the active tab
    borderBottomColor: "blue",
  },
  tabText: {
    color: "#525252",
    fontFamily: "HankenGroteskBold",
  },
  activeTabText: {
    color: "#000000",
    fontFamily: "HankenGroteskBold",
    fontSize:16
  },
  ruler: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 0,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default App;
