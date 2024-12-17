import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const ProfileEditScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("Student");
  const [college, setCollege] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState({
    startYear: 2021,
    endYear: 2024,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateType, setDateType] = useState(""); // to track which date picker (start or end) is open

  const handleSaveDetails = () => {
    console.log("Saved details:", {
      firstName,
      middleName,
      lastName,
      description,
      city,
      profession,
      college,
      yearOfStudy,
    });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    if (dateType === "start") {
      setYearOfStudy({
        ...yearOfStudy,
        startYear: currentDate.getFullYear(),
      });
    } else if (dateType === "end") {
      setYearOfStudy({
        ...yearOfStudy,
        endYear: currentDate.getFullYear(),
      });
    }
    setShowDatePicker(false); // Hide date picker after selection
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
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
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
          <Text style={[styles.label]}>Profession</Text>
          <Picker
            selectedValue={profession}
            onValueChange={(itemValue) => setProfession(itemValue)}
            style={[styles.picker, styles.pickerBorder,styles.input]} // Add border styling here
          >
            <Picker.Item label="Student" value="Student" />
            <Picker.Item label="Professional" value="Professional" />
          </Picker>
        </View>

        {/* College Field */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>College</Text>
          <TextInput
            style={styles.input}
            value={college}
            onChangeText={setCollege}
            placeholder="Enter your college name"
          />
        </View>

        {/* Year of Study Fields */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Year of Study</Text>
          <View style={styles.yearGroup}>
            <TouchableOpacity
              onPress={() => {
                setDateType("start");
                setShowDatePicker(true);
              }}
              style={styles.dateButton}
            >
              <Text style={styles.dateText}>
                {yearOfStudy.startYear}
              </Text>
            </TouchableOpacity>
            <Text style={styles.yearSeparator}>-</Text>
            <TouchableOpacity
              onPress={() => {
                setDateType("end");
                setShowDatePicker(true);
              }}
              style={styles.dateButton}
            >
              <Text style={styles.dateText}>
                {yearOfStudy.endYear}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Date Picker */}
        {showDatePicker && (
          <DateTimePicker
            value={new Date(yearOfStudy.startYear, 0, 1)}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Profession +</Text>
        </TouchableOpacity>

        {/* Save Button with adjustment */}
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
    paddingBottom: 30, // Prevent overlap of buttons with the bottom of the screen
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  pickerBorder: {
    borderColor: "#000", // Applying 1px solid black border for profession field
    borderWidth: 1,
  },
  yearGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateButton: {
    width: 120,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  yearSeparator: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 8,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#BBDDFF",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 16,
    width: "50%",
    borderWidth: 1,
    borderColor: "#000",
    alignSelf: "start", // Center the button
  },
  addButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#00B562",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20, // Adjusted margin
    width: "100%", // Full width button
    alignSelf: "center",
    marginBottom:0 // Center the button horizontally if needed
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileEditScreen;
