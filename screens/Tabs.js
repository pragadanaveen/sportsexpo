import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import CoachProfile from "./CoachProfile"; // Assuming this is in a separate file
import JobPosts from "./JobPosts"; // Assuming this is in a separate file
import { useFonts } from 'expo-font';
const App = () => {
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
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
        values={["Public Profile", "Job Posts"]}
        selectedIndex={customStyleIndex}
        onTabPress={handleCustomIndexSelect}
        borderRadius={0}
        tabsContainerStyle={styles.segment}
        tabStyle={styles.tab}
        activeTabStyle={[styles.activeTab, { width: borderLength }]} // Apply custom width for active tab's border
        tabTextStyle={styles.tabText}
        activeTabTextStyle={styles.activeTabText}
      />
<View style={styles.horizontalLine}/>
      {customStyleIndex === 0 ? <CoachProfile /> : <JobPosts />}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  segment: {
    width: "90%",
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
    borderBottomWidth: 3, // Add only bottom border
    borderBottomColor: "#1976D2", // Blue color for the bottom border
  },
  tabText: {
    fontSize:17,
    color: "#525252",
    fontFamily: "HankenGroteskSemiBold", // Bold text for all tabs
  },
  activeTabText: {
    color: "000000",
    fontFamily: "HankenGroteskBold", // Text color remains black for active tab
  },
  horizontalLine: {
    height: 0.5,
    width: "100%",
    backgroundColor: "gray", // Line color
    marginTop: -20, // Adjust to align with the active tab underline
  },
});

export default App;
