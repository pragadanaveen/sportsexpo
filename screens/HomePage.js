import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import FeedContent from "./FeedContent";
import YourDashboard from "./YourDashboard";
import MyBookings from "./MyBookings";
import { useFonts } from "expo-font";
const MyScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Your Dashboard");
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const tabs = [
    // "Feed",
    "Your Dashboard",
    // "Job Search",
    "MyBookings", // Add MyBookings to the tabs array
  ];

  const renderContent = () => {
    switch (selectedTab) {
      // case "Feed":
      //   return <FeedContent />;
      case "Your Dashboard":
        return <YourDashboard />;
      case "MyBookings":
        return <MyBookings />;
      // case "Job Search":
      //   return (
      //     <View style={styles.contentContainer}>
      //       <Text style={styles.contentTitle}>Job Search</Text>
      //       <Text style={styles.contentText}>
      //         Find relevant job opportunities here.
      //       </Text>
      //     </View>
      //   );
      // default:
      //   return (
      //     <View style={styles.contentContainer}>
      //       <Text style={styles.contentTitle}>Tab Content</Text>
      //       <Text style={styles.contentText}>
      //         Content related to the {selectedTab} tab will appear here.
      //       </Text>
      //     </View>
      //   );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require("../assets/Logo.png")} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.areaInfo}>
            <Text style={styles.areaName}>Area Name</Text>
            <Text style={styles.city}>City</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
          <Image
    source={require('../assets/Notification.png')} // Update path to match your project structure
    style={{ width: 25, height: 25 }} // Add tintColor if you want to apply color
/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require("../assets/Logo.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.dashboardHeader}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tabs}>
            {tabs.map((tab) => (
              <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
                <View style={styles.tabContainer}>
                  <Text
                    style={[
                      styles.tabText,
                      selectedTab === tab && styles.selectedTab,
                    ]}
                  >
                    {tab}
                  </Text>
                  {selectedTab === tab && <View style={styles.underline} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        {/* Horizontal ruler */}
        <View style={styles.horizontalRuler} />
      </View>

      {/* Content Area */}
      <View style={styles.contentArea}>{renderContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#ffffff",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  areaInfo: {
    marginLeft: 10,
  },
  areaName: {
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily:"HankenGroteskBold",
    color:"#3D3D3D"
  },
  city: {
    fontSize: 16,
    color: "#888",
    fontFamily:"HankenGroteskSemiBold"
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  dashboardHeader: {
    padding: 20,
    backgroundColor: "#ffffff",
    // elevation: 2,
  },
  tabs: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  tabContainer: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 17,
    color: "#525252",
    marginHorizontal: 20,
    fontFamily:"HankenGroteskSemiBold",
  },
  selectedTab: {
    fontFamily:"HankenGroteskBold",
    color:"#000000"
  },
  underline: {
    width: "80%",
    height: 3,
    backgroundColor: "#1976D2",
    marginTop: 7,
    borderRadius:20
  },
  horizontalRuler: {
    height: 1, // Thickness of the ruler
    backgroundColor: "#ddd", // Color of the ruler
    marginTop: -10, // Space between the tabs and the ruler
    width: "100%", // Full-width ruler
  },
  contentArea: {
    flex: 1, // Fill the remaining space below tabs
    width: "100%",
  },
  contentContainer: {
    flex: 1, // Ensure content occupies full available space
    padding: 20,
    backgroundColor: "#fff",
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contentText: {
    fontSize: 16,
    color: "#555",
  },
  horizontalLine: {
    height: 0.5,
    width: "100%",
    backgroundColor: "gray", // Line color
    marginTop: -20, // Adjust to align with the active tab underline
  },
});

export default MyScreen;
