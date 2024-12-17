import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

// Get the window dimensions
const { width, height } = Dimensions.get('window');

// Custom Divider component
const Divider = () => <View style={{ height: 1, backgroundColor: '#eee', marginVertical: 10 }} />;

const Others = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });

  const handleverifyyourself = () => {
    navigation.navigate("VerifyYourSelfStudent");
  };

  const handleverifyfeedback = () => {
    navigation.navigate("FeedBackScreen");
  };

  const handleverifyContactus = () => {
    navigation.navigate("ContactUs");
  };

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar with Logo, Area, City, and Icons */}
      <View style={styles.topBar}>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require("../assets/profile1.png")} style={styles.icon} />
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
          <TouchableOpacity style={styles.iconButton2}>
            <Image source={require("../assets/profile1.png")} style={styles.icon2} />
          </TouchableOpacity>
        </View>
      </View>

      {/* General Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <View style={styles.sectionItemIcon}>
            <Icon name="shield-checkmark-outline" size={20} color="black" />
          </View>
          <Text style={styles.sectionItemText}>Verify Yourself</Text>
          <Feather name="chevron-right" size={20} color="black" style={styles.chevronIcon} onPress={handleverifyyourself} />
        </TouchableOpacity>
        <Divider />
      </View>

      {/* Lorem Ipsum Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle2}>Lorem Ipsum</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <View style={styles.sectionItemIcon}>
            <Feather name="phone" size={20} color="black" />
          </View>
          <Text style={styles.sectionItemText}>Contact Us</Text>
          <Feather name="chevron-right" size={20} color="black" style={styles.chevronIcon} onPress={handleverifyContactus} />
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity style={styles.sectionItem}>
          <View style={styles.sectionItemIcon}>
            <Feather name="message-square" size={20} color="black" />
          </View>
          <Text style={styles.sectionItemText}>Provide Feedback</Text>
          <Feather name="chevron-right" size={20} color="black" style={styles.chevronIcon} onPress={handleverifyfeedback} />
        </TouchableOpacity>
        <Divider />
      </View>
    </SafeAreaView>
  );
};

// Calculate styles dynamically based on screen width and height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: width > 400 ? 20 : 15, // Adjust padding for smaller screens
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "white",
    width: '100%',
    marginLeft: width > 400 ? "-3%" : "-5%", // Slightly adjust based on screen size
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  areaInfo: {
    marginLeft: 10,
  },
  areaName: {
    fontSize: width > 400 ? 18 : 16,  // Adjust font size for smaller screens
    fontFamily: "HankenGroteskBold",
    color: "#3d3d3d",
  },
  city: {
    fontSize: width > 400 ? 16 : 14,  // Adjust font size for smaller screens
    color: "#3d3d3d",
    fontFamily: "HankenGroteskSemiBold",
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 15,
  },
  iconButton2: {
    marginLeft: 8,
    marginRight: -13,
  },
  icon: {
    width: 50,
    height: 50,
  },
  icon2: {
    width: 30,
    height: 30,
  },
  section: {
    marginBottom: 20,
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: width > 400 ? 17 : 15,  // Adjust font size for smaller screens
    fontFamily: "HankenGroteskBlack",
    color: '#333',
    marginBottom: 10,
  },
  sectionTitle2: {
    fontSize: width > 400 ? 17 : 15,  // Adjust font size for smaller screens
    fontFamily: "HankenGroteskBlack",
    color: '#333',
    marginBottom: 10,
    marginTop: -15,
  },
  section: {
    marginBottom: 10, // Reduced from 20
    marginTop: 10,    // Reduced from 15
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5, // Reduced from 10
  },
  sectionItemIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionItemText: {
    fontSize: 16,
    color: '#3d3d3d',
    flex: 1,
    fontFamily: "HankenGroteskRegular",
  },
  chevronIcon: {
    marginLeft: 10,
    color: "#3d3d3d",
  },
});

export default Others;
