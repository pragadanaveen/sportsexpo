import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get("window");

const UserDetailsPage = () => {
    const [fontsLoaded] = useFonts({
        'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
        'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
        'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
    });

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        groundAddress: "",
        city: "",
        state: "",
    });

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSaveDetails = () => {
        // Handle save action (e.g., form validation or API call)
        console.log("Details Saved:", formData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                {/* Username Field */}
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={formData.username}
                    onChangeText={(text) => handleInputChange("username", text)}
                    placeholder="Enter your username"
                />

                {/* Email Field */}
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={formData.email}
                    onChangeText={(text) => handleInputChange("email", text)}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />

                {/* Phone Number Field */}
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    value={formData.phoneNumber}
                    onChangeText={(text) => handleInputChange("phoneNumber", text)}
                    placeholder="Enter your phone number"
                    keyboardType="phone-pad"
                />

                {/* Ground Address Field */}
                <Text style={styles.label}>Ground Address</Text>
                <TextInput
                    style={styles.input}
                    value={formData.groundAddress}
                    onChangeText={(text) => handleInputChange("groundAddress", text)}
                    placeholder="Enter ground address"
                />

                {/* City Field */}
                <Text style={styles.label}>City</Text>
                <TextInput
                    style={styles.input}
                    value={formData.city}
                    onChangeText={(text) => handleInputChange("city", text)}
                    placeholder="Enter your city"
                />

                {/* State Field */}
                <Text style={styles.label}>State</Text>
                <TextInput
                    style={styles.input}
                    value={formData.state}
                    onChangeText={(text) => handleInputChange("state", text)}
                    placeholder="Enter your state"
                />
            </View>

            {/* Save Details Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveDetails}>
                <Text style={styles.saveButtonText}>Save Details</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02,
    },
    form: {
        flex: 1,
    },
    label: {
        fontSize: width * 0.04,
        marginBottom: height * 0.01, // Increased spacing between label and input field
        color: "#333",
        fontFamily: "HankenGroteskBold",
    },
    input: {
        borderWidth: 1,
        borderColor: "#8F8F8F",
        borderRadius: 5,
        padding: height * 0.015,
        marginBottom: height * 0.03, // Increased margin between fields
        fontSize: width * 0.04,
        backgroundColor: "#fff",
        fontFamily: "HankenGroteskRegular",
        height: height * 0.06, // Increased height of the input fields
    },
    saveButton: {
        backgroundColor: "#00B562",
        paddingVertical: height * 0.015,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: height * 0.03, // Increased space between the form and the button
    },
    saveButtonText: {
        color: "#fff",
        fontSize: width * 0.045,
        fontFamily: "HankenGroteskBold",
    },
});

export default UserDetailsPage;
