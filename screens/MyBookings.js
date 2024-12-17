import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const JobDetailScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });

  // Hardcoded job data
  const job = {
    date: "15 Nov 2024",
    groundImage: require("../assets/ground.jpg"),
    groundName: "City Sports Complex",
    court: "Court AB",
    sport: "Tennis",
    timings: "8:00 AM - 10:10 AM",
    status: "Booked",
    price: 500,
  };

  const handleAddBooking = () => {
    navigation.navigate("ChooseListButton");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.imageContainer}>
              <Image source={job.groundImage} style={styles.groundImage} />
            </View>
            <View style={styles.textContent}>
              <Text style={styles.date}>{job.date}</Text>
              <Text style={styles.groundName}>{job.groundName}</Text>
              <Text style={styles.courtSport}>
                {job.court} | {job.sport}
              </Text>
              <View style={styles.timingsStatusContainer}>
                <Text style={styles.timings}>{job.timings}</Text>
                <Text
                  style={[
                    styles.status,
                    { color: job.status === "Booked" ? "rgba(25, 118, 210, 1)" : "red" },
                  ]}
                >
                  {job.status}
                </Text>
              </View>
            </View>
            <View style={styles.rightSection}>
              <TouchableOpacity
                style={styles.priceArrowContainer}
                onPress={() => navigation.navigate("MyBookingsCardDetails")}
              >
                <Text style={styles.price}>₹{job.price}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Close Button at Bottom Right */}
      <TouchableOpacity style={styles.closeButton} onPress={handleAddBooking}>
        <Text style={styles.closeButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  groundImage: {
    width: 60,
    height: 60,
    borderRadius: 40, // Circular shape
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textContent: {
    flex: 3,
    paddingHorizontal: 10,
  },
  date: {
    fontSize: 14,
    color: "#888",
    fontFamily: "HankenGroteskRegular",
  },
  groundName: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    marginVertical: 5,
  },
  courtSport: {
    fontSize: 15,
    color: "rgba(143, 143, 143, 1)",
    fontFamily: "HankenGroteskRegular",
  },
  timingsStatusContainer: {
    flexDirection: "row",
    justifyContent: "flex-start", // Align items close to each other
    alignItems: "center",
    marginVertical: 5,
  },
  status: {
    fontSize: 15,
    fontFamily: "HankenGroteskSemiBold",
    marginLeft: "2%", // Small space between timings and status
    color:"rgba(25, 118, 210, 1)"
  },
  timings: {
    fontSize: 15,
    color: "rgba(61, 61, 61, 1)",
    fontFamily: "HankenGroteskRegular",
  },
  // status: {
  //   fontSize: 15,
  //   fontFamily: "HankenGroteskSemiBold",
  // },
  rightSection: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  priceArrowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontFamily: "HankenGroteskSemiBold",
    color: "#008C4C",
  },
  closeButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    backgroundColor: "green",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "HankenGroteskRegular",
  },
});

export default JobDetailScreen;
