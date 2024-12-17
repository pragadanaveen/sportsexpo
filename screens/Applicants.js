import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const JobListingScreen = () => {
  const navigation = useNavigation();
  const [expandedCard, setExpandedCard] = useState(null);
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });

  const jobs = [
    {
      id: 1,
      title: "Lorem Ipsum",
      company: "ABC Institute | Hyderabad, Telangana",
      type: "Full Time",
      postedOn: "01 November, 2024",
      applications: 12,
      status: "Open",
      playerName: "John Doe",
      playerProfilePic: require("../assets/profile1.png"),
      rating: 4.5,
      sport1: { name: "Football", role: "Striker", playersCount: 11 },
      sport2: { name: "Basketball", role: "Guard", playersCount: 5 },
      totalGames: 200,
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      company: "ABC Institute | Hyderabad, Telangana",
      type: "Full Time",
      postedOn: "01 November, 2024",
      applications: 12,
      status: "Closed",
      playerName: "Jane Smith",
      playerProfilePic: require("../assets/profile1.png"),
      rating: 4.2,
      sport1: { name: "Cricket", role: "Batsman", playersCount: 10 },
      sport2: { name: "Tennis", role: "Player", playersCount: 2 },
      totalGames: 150,
    },
  ];

  const handleJobClick = (jobId) => {
    setExpandedCard((prev) => (prev === jobId ? null : jobId));
  };

  const handleCloseJob = () => {
    console.log("Close Job Button Pressed");
  };

  return (
    <View style={styles.container}>
      {jobs.map((job) => (
        <TouchableOpacity
        key={job.id}
        onPress={() => handleJobClick(job.id)}
        style={[
          styles.jobCard,
          expandedCard === job.id && styles.expandedJobCard,
        ]}
      >
        <View style={styles.jobDetails}>
          <View style={styles.jobLeft}>
            <Text style={styles.playerNameText}>{job.playerName}</Text>
            <Text style={styles.jobDetailText}>
              {job.sport1.name} | {job.sport1.role} |{" "}
              <Text style={styles.playersCount}>{`#${job.sport1.playersCount}`}</Text>
            </Text>
            <Text style={styles.jobDetailText}>
              {job.sport2.name} | {job.sport2.role} |{" "}
              <Text style={styles.playersCount}>{`#${job.sport2.playersCount}`}</Text>
            </Text>
            <Text style={styles.jobDetailText}>
              Total Games: <Text style={styles.totalGames}>{job.totalGames}</Text>
            </Text>
          </View>
      
          <View style={styles.jobRight}>
            <Image source={job.playerProfilePic} style={styles.profilePic} />
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>★ {job.rating}</Text>
            </View>
          </View>
        </View>
      
        {/* Horizontal separator moved above the button row */}
        <View style={styles.separator} />
      
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.actionButton, styles.rejectButton]}>
            <View style={styles.buttonContent}>
              <Ionicons
                name="close-circle"
                size={20}
                color="#630000"
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Reject</Text>
            </View>
          </TouchableOpacity>
      
          <TouchableOpacity style={[styles.actionButton, styles.acceptButton]}>
            <View style={styles.buttonContent}>
              <Ionicons
                name="checkmark-circle"
                size={20}
                color="#006336"
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Accept</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      
      ))}

      <View style={styles.spacer} />
      <TouchableOpacity style={styles.closeButton} onPress={handleCloseJob}>
        <Text style={styles.closeButtonText}>Close Job</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  spacer: {
    flexGrow: 1,
  },
  jobCard: {
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#666666",
    width: "100%",
  },
  expandedJobCard: {
    width: "100%",
  },
  jobDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobLeft: {
    flex: 2,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  separator: {
    height: 0.3, // Thickness of the separator
    backgroundColor: "#666666", // Applying the desired color
    marginVertical: 10,
    width:"100%" // Optional: Adds spacing around the separator
  },
  
  ratingContainer: {
    backgroundColor: "#EDEAFF",
    paddingVertical: 2,
    paddingHorizontal: 9,
    borderRadius: 15,
  },
  ratingText: {
    fontSize: 16,
    color: "rgba(0, 25, 99, 1)",
    fontFamily: "HankenGroteskBold",
  },
  jobDetailText: {
    fontSize: 14,
    color: "#3D3D3D",
    marginBottom: 5,
    fontFamily: "HankenGroteskRegular",
  },
  playersCount: {
    color: "#008C4C",
    fontFamily: "HankenGroteskSemiBold", // Color for #11 and #5
  },
  totalGames: {
    color: "#000000",
    fontFamily: "HankenGroteskBold",
    fontSize:14 // Color for 200
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    paddingVertical: 5, // Reduced padding for height adjustment
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 35, // Defined a smaller height
},
rejectButton: {
    borderColor: "#630000",
},
acceptButton: {
    borderColor: "#006336",
},

  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    marginRight: 5,
  },
  buttonText: {
    color: "#000",
    fontFamily: "HankenGroteskBold",
    fontSize: 14,
  },
  closeButton: {
    backgroundColor: "#00B562",
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
  },
  playerNameText: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    color: "#000",
    marginBottom: 5,
  },
});

export default JobListingScreen;
