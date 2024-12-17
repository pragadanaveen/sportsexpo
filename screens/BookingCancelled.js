import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { PaperProvider, Title, Paragraph } from "react-native-paper";
import { useFonts } from "expo-font";
const BookingDetailsScreen = () => {
  const [isBookingCancelled, setIsBookingCancelled] = useState(false);
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });
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
            source={require("../assets/ground.jpg")} // Replace with your local image
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

            {/* Booking ID and Amount in the same row */}
            <View style={styles.rowContainer}>
              <Paragraph style={styles.paragraph}>
                Booking ID: 025711155123352522
              </Paragraph>
              <Paragraph style={styles.amountText}>₹2500</Paragraph>
            </View>

            {/* Payment Method Section */}
            <Text style={styles.paymentMethodTitle}>Payment Method</Text>
            <View style={styles.upiRowContainer}>
              <Image
                source={require("../assets/Logo.png")} // Replace with the UPI logo
                style={styles.upiLogo}
              />
              <Text style={styles.upiText}>UPI</Text>
            </View>

            <Paragraph style={styles.paragraph}>Transaction ID: 322315151522</Paragraph>

            {/* Refund Message if booking is cancelled */}
            {isBookingCancelled && (
              <>
                <Text style={styles.refundMessage}>
                  Your booking is cancelled and refund is initiated. It will
                  take 2 to 3 working days to complete the refund process.
                </Text>
              </>
            )}
          </View>
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
  title: {
    fontFamily: "HankenGroteskBlack",
    color: "#000",
  },
  title2: {
    fontFamily: "HankenGroteskBold",
    color: "#3d3d3d",
    fontSize: 18,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  dateText: {
    fontSize: 14,
    color: "#3D3D3D",
    fontFamily: "HankenGroteskRegular",
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
  detailsText: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    color: "#000000", // Updated color
  },
  dottedRuler: {
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    borderStyle: "dotted",
    marginVertical: 5,
    width: "100%",
  },
  paymentContainer: {
    marginBottom: 20,
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  paragraph: {
    flex: 1, // Ensures Booking ID takes up available space
    marginRight: 10, // Adds spacing between Booking ID and amount
    fontSize: 14,
    color: "#3d3d3d",
    fontFamily: "HankenGroteskSemiBold",
  },
  amountText: {
    fontSize: 17,
    fontFamily: "HankenGroteskBold",
    color: "#3D3D3D",
    flexShrink: 1, // Shrinks if there's overflow
    textAlign: "right", // Aligns the amount to the right
  },
  paymentMethodTitle: {
    fontSize: 18,
    fontFamily: "HankenGroteskBold",
    marginVertical: 10,
    color:"#3D3D3D"
  },
  upiRowContainer: {
    flexDirection: "row", // Aligns the logo and text horizontally
    alignItems: "center", // Centers the items vertically
  },
  upiLogo: {
    width: 30,
    height: 30,
    marginRight: 10, // Adds space between logo and text
  },
  upiText: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    color:"#525252"
  },
  refundMessage: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
    textAlign: "center",
  },
});

export default BookingDetailsScreen;
