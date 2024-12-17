import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const FeedbackScreen = () => {
  const [ratings, setRatings] = useState([0, 0, 0]);
  const [feedbackText, setFeedbackText] = useState("");
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });

  const handleRatingChange = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  const handleFeedbackChange = (text) => {
    setFeedbackText(text);
  };

  const handleSubmit = () => {
    console.log("Ratings:", ratings);
    console.log("Feedback Text:", feedbackText);
  };

  return (
    <View style={styles.container}>
      {/* Content Section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {ratings.map((_, questionIndex) => (
            <View key={questionIndex} style={styles.questionContainer}>
              <Text style={styles.questionText}>
                Lorem ipsum dolor sit amet, consectetur?
              </Text>
              <View style={styles.ratingContainer}>
                {Array.from({ length: 5 }, (_, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleRatingChange(questionIndex, index + 1)}
                    style={styles.starButton}
                  >
                    <FontAwesome5
                      name="star"
                      size={20}
                      color={ratings[questionIndex] > index ? "gold" : "#3D3D3D"}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              {/* Horizontal Ruler */}
              <View style={styles.horizontalRuler} />
            </View>
          ))}

          <Text style={styles.feedbackPrompt}>Tell us more</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type your feedback here"
            multiline={true}
            onChangeText={handleFeedbackChange}
            value={feedbackText}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 30, // Added padding at the top for spacing
  },
  questionContainer: {
    marginBottom: 30,
  },
  questionText: {
    fontSize: 18,
    fontFamily: "HankenGroteskRegular",
    color: "#000",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  starButton: {
    marginRight: 10,
  },
  horizontalRuler: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  feedbackPrompt: {
    fontSize: 18,
    fontFamily: "HankenGroteskRegular",
    color: "#000",
    marginBottom: 10,
  },
  textInput: {
    height: 120,
    borderWidth: 1,
    borderColor: "#8F8F8F",
    borderRadius: 8,
    padding: 15,
    backgroundColor: "#fff",
    textAlignVertical: "top",
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "HankenGroteskRegular",
    color: "#000",
  },
  submitButton: {
    backgroundColor: "#00B562",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  submitButtonText: {
    fontSize: 18,
    fontFamily: "HankenGroteskBold",
    color: "#fff",
  },
});


export default FeedbackScreen;
