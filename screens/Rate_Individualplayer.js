import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
const RatePlayer = () => {
  const [overallPerformance, setOverallPerformance] = useState("");
  const [behaviour, setBehaviour] = useState("");
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
  });

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log("Overall Performance:", overallPerformance);
    console.log("Behaviour:", behaviour);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Player Info Header */}
      <View style={styles.playerHeader}>
        <Image
          source={require("../assets/profile1.png")} // Use the actual image path here
          style={styles.profilePic}
        />
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>John Doe</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#FFB800" />
            <Text style={styles.rating}>4.5</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.viewProfileButton}>
          <Text style={styles.viewProfileText}>View Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Overall Performance</Text>
        <TextInput
          style={styles.inputField}
          value={overallPerformance}
          onChangeText={setOverallPerformance}
          placeholder="Enter overall performance"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Behaviour</Text>
        <TextInput
          style={styles.inputField}
          value={behaviour}
          onChangeText={setBehaviour}
          placeholder="Enter behaviour feedback"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Behaviour</Text>
        <TextInput
          style={styles.inputField}
          value={behaviour}
          onChangeText={setBehaviour}
          placeholder="Enter behaviour feedback"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Behaviour</Text>
        <TextInput
          style={styles.inputField}
          value={behaviour}
          onChangeText={setBehaviour}
          placeholder="Enter behaviour feedback"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Behaviour</Text>
        <TextInput
          style={styles.inputField}
          value={behaviour}
          onChangeText={setBehaviour}
          placeholder="Enter behaviour feedback"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Behaviour</Text>
        <TextInput
          style={styles.inputField}
          value={behaviour}
          onChangeText={setBehaviour}
          placeholder="Enter behaviour feedback"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Behaviour</Text>
        <TextInput
          style={styles.inputField}
          value={behaviour}
          onChangeText={setBehaviour}
          placeholder="Enter behaviour feedback"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "20%",
    backgroundColor: "#fff",
    justifyContent: "space-between", // Ensures space between the content and submit button
  },
  playerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 18,
    fontFamily: "HankenGroteskBold",
    // backgroundColor:"pink"
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    marginLeft: 5,
  },
  viewProfileButton: {
    borderWidth: 1,
    borderColor: "green",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  viewProfileText: {
    fontSize: 14,
    fontFamily: "HankenGroteskRegular",
    color: "#000",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    marginBottom: 8,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#8f8f8f",
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    fontFamily: "HankenGroteskRegular",
  },
  submitButton: {
    backgroundColor: "green",
    paddingVertical: 12,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto", // Pushes the button to the bottom of the container
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    color: "#000",
  },
});

export default RatePlayer;
