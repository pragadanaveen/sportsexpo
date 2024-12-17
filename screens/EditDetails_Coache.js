import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useFonts } from "expo-font";
const ProfileEditScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState(null);
  const [college, setCollege] = useState("");
  const [yearOfJoining, setYearOfJoining] = useState("2021");
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const professionOptions = [
    { label: "Student", value: "Student" },
    { label: "Professional", value: "Professional" },
    { label: "Other", value: "Other" },
  ];

  const handleSaveDetails = () => {
    console.log("Saved details:", {
      firstName,
      middleName,
      lastName,
      description,
      city,
      profession,
      college,
      yearOfJoining,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>First Name *</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter your first name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Middle Name</Text>
          <TextInput
            style={styles.input}
            value={middleName}
            onChangeText={setMiddleName}
            placeholder="Enter your middle name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Last Name *</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Describe Yourself</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Describe yourself"
            multiline
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={setCity}
            placeholder="Enter your city"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Profession</Text>
          <Dropdown
            data={professionOptions}
            labelField="label"
            valueField="value"
            value={profession}
            onChange={(item) => setProfession(item.value)}
            style={styles.dropdown}
            placeholder="Select Profession"
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            renderItem={(item) => (
              <Text style={styles.dropdownItem}>{item.label}</Text>
            )}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Institution/Organisation</Text>
          <TextInput
            style={styles.input}
            value={college}
            onChangeText={setCollege}
            placeholder="Institution name"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Year Of Joining</Text>
          <TextInput
            style={styles.input}
            value={yearOfJoining}
            onChangeText={setYearOfJoining}
            placeholder="2020"
          />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Profession +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveDetails}>
          <Text style={styles.saveButtonText}>Save Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingBottom:0
  },
  scrollViewContainer: {
    paddingBottom: 30,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#8F8F8F",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    fontSize: 16,
    backgroundColor: "#fff",
    fontFamily: "HankenGroteskRegular",
    color:"#3D3D3D"
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  dropdown: {
    height: 50,
    borderColor: "#8F8F8F",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#3D3D3D",
    fontFamily: "HankenGroteskRegular",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#3D3D3D",
    fontFamily: "HankenGroteskRegular",
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#3D3D3D",
    fontFamily: "HankenGroteskRegular",
  },
  addButton: {
    backgroundColor: "#BBDDFF",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 16,
    width: "50%",
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
  },
  addButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "HankenGroteskSemiBold",
  },
  saveButton: {
    backgroundColor: "#00B562",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "HankenGroteskBold",
  },
});

export default ProfileEditScreen;
