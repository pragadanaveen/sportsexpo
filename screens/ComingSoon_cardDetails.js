import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import CoachProfile from "./CoachProfile"; // Assuming this is in a separate file
import TeamDetails_Comingsoon from "./TeamDetails_Comingsoon"; // Assuming this is in a separate file
import MatchDetails_comingsoon from './MatchDetails_comingsoon'

const App = () => {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [activeTabWidth, setActiveTabWidth] = useState(0); // To store the active tab width
  const [borderLength, setBorderLength] = useState(0); // To store custom border length

  const handleCustomIndexSelect = (index) => {
    setCustomStyleIndex(index);
  };

  // Function to measure the width of the active tab text and apply custom border length
  const onTabLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setActiveTabWidth(width); // Update the width of the active tab
    setBorderLength(width * 0.7); // Set the custom border length (70% of the text width for example)
  };

  return (
    <View style={styles.container}>
      <SegmentedControlTab
        values={["Match Details", "Teams"]}
        selectedIndex={customStyleIndex}
        onTabPress={handleCustomIndexSelect}
        borderRadius={0}
        tabsContainerStyle={styles.segment}
        tabStyle={styles.tab}
        activeTabStyle={[styles.activeTab, { width: borderLength }]} // Apply custom width for active tab's border
        tabTextStyle={styles.tabText}
        activeTabTextStyle={styles.activeTabText}
      />
      {customStyleIndex === 0 ? <MatchDetails_comingsoon /> : <TeamDetails_Comingsoon />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  segment: {
    width: "60%",
    marginVertical: 20,
    alignSelf: "start",
    borderWidth: 0, // Ensure no border around the entire container
  },
  tab: {
    backgroundColor: "#fff", // White background for normal tabs
    borderWidth: 0, // No borders for inactive tabs
    marginHorizontal: -1,
    padding:15 // Eliminate any spacing causing the line
  },
  activeTab: {
    backgroundColor: "#fff", // White background for active tab
    borderWidth: 0, // Remove all borders
    borderBottomWidth: 1, // Add only bottom border
    borderBottomColor: "blue", // Blue color for the bottom border
  },
  tabText: {
    color: "black",
    fontWeight: "bold", // Bold text for all tabs
  },
  activeTabText: {
    color: "black", // Text color remains black for active tab
  },
});

export default App;
