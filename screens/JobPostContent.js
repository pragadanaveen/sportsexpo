import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
const JobDetailScreen = () => {
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  // Hardcoded job data
  const job = {
    title: "Software Developer",
    company: "ABC Tech",
    type: "Full Time",
    postedOn: "01 November, 2024",
    applications: 12,
    description:
      "Develop and maintain software applications.",
    responsibilities: ["Write code", "Fix bugs", "Collaborate with teams"],
    qualifications: [
      "Bachelor's degree in Computer Science",
      "Experience with React",
    ],
    skills: ["JavaScript", "React Native", "Node.js"],
    poster: {
      avatar: "https://example.com/avatar.jpg",
      name: "John Doe",
      title: "HR Manager",
    },
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.jobHeader}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <View style={styles.jobDetail}>
            <Text style={styles.jobDetailText}>
              <Text style={styles.icon}>🏢 </Text> {job.company}
            </Text>
          </View>
          <View style={styles.jobDetail}>
            <Text style={styles.jobDetailText}>
              <Text style={styles.icon}>💼 </Text> {job.type}
            </Text>
          </View>
        </View>

        <View style={styles.posterSection}>
          <Text style={styles.subTitle}>Posted by</Text>
          <View style={styles.posterInfo}>
            <Image source={require("../assets/Logo.png")} style={styles.avatar} />
            <View>
              <Text style={styles.posterName}>{job.poster.name}</Text>
              <Text style={styles.posterTitle}>{job.poster.title}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.subTitle}>Job Description</Text>
        <Text style={styles.descriptionText}>{job.description}</Text>

        <Text style={styles.subTitle}>Responsibilities</Text>
        <View style={styles.list}>
          {job.responsibilities.map((responsibility, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{responsibility}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.subTitle}>Qualifications</Text>
        <View style={styles.list}>
          {job.qualifications.map((qualification, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{qualification}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.subTitle}>Required Skills</Text>
        <View style={styles.list}>
          {job.skills.map((skill, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{skill}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Button positioned at the bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.closeButton} activeOpacity={0.8}>
          <Text style={styles.closeButtonText}>Close Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // Prevent background change on touch
  },
  scrollContainer: {
    padding: 20,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  jobHeader: {
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 18,
    fontFamily: "HankenGroteskBold",
    marginBottom: 10,
    color: "#000",
  },
  jobDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  jobDetailText: {
    fontFamily: "HankenGroteskRegular",
    fontSize: 14,
    color: "#525252",
  },
  posterSection: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 17,
    fontFamily: "HankenGroteskBold",
    marginBottom: 10,
    color: "#333",
  },
  posterInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  posterName: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    color: "#3D3D3D",
  },
  posterTitle: {
    fontSize: 12,
    color: "#666666",
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: "HankenGroteskRegular",
    color: "#3D3D3D",
    marginBottom: 15,
  },
  list: {
    marginLeft: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  bullet: {
    fontFamily: "HankenGroteskRegular",
    color: "#3D3D3D",
    marginRight: 10,
    lineHeight: 20,
  },
  listText: {
    fontSize: 14,
    fontFamily: "HankenGroteskRegular",
    color: "#3D3D3D",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    padding: 10,
  },
  closeButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 20,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default JobDetailScreen;
