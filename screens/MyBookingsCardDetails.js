import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import { PaperProvider, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const BookingDetailsScreen = () => {
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigation = useNavigation();

  const handleCancelPopup = () => {
    console.log("Booking Cancelled");
    setIsPopupVisible(false);
  };

  const handleConfirmCancel = () => {
    navigation.navigate("BookingCancelled");
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Row for Title and Paragraph */}
          <View style={styles.headerRow}>
            <Title style={styles.title}>The Elite Grounds</Title>
            <Paragraph style={styles.dateText}>15 Nov 2024</Paragraph>
          </View>

          {/* Ground Image */}
          <Image
            source={require("../assets/ground.jpg")}
            style={styles.image}
          />

          {/* Court and Timing Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.courtText}>Court AB | Cricket</Text>
            <Text style={styles.detailsText}>8:30 AM to 10:10 AM</Text>
          </View>

          {/* Horizontal Dotted Ruler */}
          <View style={styles.dottedRuler} />

          {/* Payment Summary */}
          <View style={styles.paymentContainer}>
            <Title style={styles.title2}>Payment Summary</Title>

            {/* Row with Booking ID and Price */}
            <View style={styles.row}>
              <Text  style={styles.paragraph}>
                Booking ID: 025711155123352522
              </Text>
              <Text style={styles.priceText}>₹2500</Text>
            </View>

            <Paragraph style={styles.title2}>Payment Method</Paragraph>
            <View style={styles.upiContainer}>
              <Image
                source={require("../assets/Logo.png")} // Replace with your UPI icon path
                style={styles.upiIcon}
              />
              <Text style={styles.paymentText}>UPI</Text>
            </View>
            <Paragraph style={styles.paragraph}>Transaction ID: 322315151522</Paragraph>
          </View>

          {/* Cancel Booking Button */}
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsPopupVisible(true)}
            >
              <Text style={styles.cancelButtonText}>Cancel Booking</Text>
            </TouchableOpacity>
          </View>

          {/* Popup Overlay */}
          {isPopupVisible && (
            <View style={styles.popupOverlay}>
              <View style={styles.popupContainer}>
                <View style={styles.popupHeader}>
                  <Text style={styles.popupTitle}>Cancel Booking</Text>
                  <TouchableOpacity
                    onPress={() => setIsPopupVisible(false)}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeButtonText}>×</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.confirmationText}>
                  Are you sure to cancel your booking?
                </Text>

                <TouchableOpacity
                  style={styles.popupCancelButton}
                  onPress={handleConfirmCancel}
                >
                  <Text style={styles.popupCancelButtonText}>
                     Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: "5%",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: "HankenGroteskBold",
    color: "#3d3d3d",
  },
  title2: {
    fontFamily: "HankenGroteskBold",
    color: "#3d3d3d",
    fontSize: 18,
  },
  paragraph: {
    flex: 1, // Ensures Booking ID takes up available space
    marginRight: 10, // Adds spacing between Booking ID and amount
    fontSize: 14,
    color: "#3d3d3d",
    fontFamily: "HankenGroteskSemiBold",
  },
  dateText: {
    fontSize: 14,
    color: "#3D3D3D",
    fontFamily: "HankenGroteskRegular",
  },
  courtText: {
    marginTop:"-2%",
    fontSize: 16,
    // fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#008C4C",
    borderRadius: 5,
    // padding: 10,
    paddingVertical:"2%",
    paddingHorizontal:"6%",
    fontFamily: "HankenGroteskBold",
    color: "#525252", // Updated color
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
    borderRadius: 15,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    color: "#000000", // Updated color
  },
  dottedRuler: {
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    borderStyle: "dotted",
    marginVertical: 10,
    width: "100%",
  },
  paymentContainer: {
    marginBottom: 20,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  bookingIdText: {
    fontSize: 16,
    fontFamily: "HankenGroteskRegular",
    color: "#525252",
    flexShrink: 1,
  },
  priceText: {
    fontSize: 17,
    fontFamily: "HankenGroteskBold",
    color: "#525252",
    marginLeft: 10,
  },
  upiContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  paymentText: {
    fontSize: 16,
    fontFamily: "HankenGroteskRegular",
    color: "#000",
    marginLeft: 5,
  },
  upiIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  bottomContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  cancelButton: {
    backgroundColor: "#00B562",
    padding: 15,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#000",
    fontFamily: "HankenGroteskBold",
    fontSize: 16,
  },
  popupOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContainer: {
    width: "80%",
    height: "22%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  popupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  popupTitle: {
    fontSize: 18,
    fontFamily: "HankenGroteskBold",
  },
  closeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "absolute",
    top: -15,
    left: 250,
  },
  closeButtonText: {
    fontSize: 30,
    fontFamily: "HankenGroteskBlack",
    color: "#333",
  },
  confirmationText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "HankenGroteskRegular",
  },
  popupCancelButton: {
    backgroundColor: "#00B562",
    padding: 15,
    borderRadius: 25,
    width: "50%",
    alignItems: "center",
  },
  popupCancelButtonText: {
    color: "#000",
    fontFamily: "HankenGroteskBold",
    fontSize: 16,
  },
});

export default BookingDetailsScreen;
