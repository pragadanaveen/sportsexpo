import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* User Info Section */}
      <View style={styles.userInfo}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }} // Replace with user image URL
          style={styles.userImage}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>johndoe@example.com</Text>
          <Text style={styles.userPhone}>+1 123-456-7890</Text>
          <View style={styles.verifiedContainer}>
            <Text style={styles.verifiedText}>Verified Account</Text>
            <Icon name="check-circle" size={16} color="green" />
          </View>
        </View>
      </View>

      {/* Section: Account & Security */}
      <Text style={styles.sectionHeading}>Account & Security</Text>
      <TouchableOpacity style={styles.row}>
        <Icon name="settings" size={24} color="black" />
        <Text style={styles.rowText}>Account Settings</Text>
        <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} />
      </TouchableOpacity>
      <View style={styles.divider} />

      {/* Section: My Banners */}
      <TouchableOpacity style={styles.row}>
        <Icon name="flag" size={24} color="black" />
        <Text style={styles.rowText}>My Banners</Text>
        <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} />
      </TouchableOpacity>
      <View style={styles.divider} />

      {/* Section: Bank Account */}
      <TouchableOpacity style={styles.row}>
        <Icon name="account-balance" size={24} color="black" />
        <Text style={styles.rowText}>Bank Account</Text>
        <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} />
      </TouchableOpacity>
      <View style={styles.divider} />

      {/* Section: General */}
      <Text style={styles.sectionHeading}>General</Text>
      <TouchableOpacity style={styles.row}>
        <Icon name="description" size={24} color="black" />
        <Text style={styles.rowText}>Terms & Conditions</Text>
        <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} />
      </TouchableOpacity>
      <View style={styles.divider} />

      <TouchableOpacity style={styles.row}>
        <Icon name="lock" size={24} color="black" />
        <Text style={styles.rowText}>Privacy Policy</Text>
        <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} />
      </TouchableOpacity>
      <View style={styles.divider} />

      <TouchableOpacity style={styles.row}>
        <Icon name="support-agent" size={24} color="black" />
        <Text style={styles.rowText}>Customer Services</Text>
        <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} />
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  userInfo: {
    flexDirection: "row",
    marginBottom: 20,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userDetails: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  userPhone: {
    fontSize: 14,
    color: "#666",
  },
  verifiedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  verifiedText: {
    fontSize: 14,
    color: "green",
    marginRight: 4,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  rowText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 12,
  },
  chevronIcon: {
    marginLeft: "auto",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
});

export default ProfileScreen;
