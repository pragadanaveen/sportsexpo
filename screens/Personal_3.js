import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFonts } from "expo-font";
import { Dropdown } from "react-native-element-dropdown";

const { width, height } = Dimensions.get("window");

const PersonalDetailsScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState(null);  // Changed to use dropdown
  const [city, setCity] = useState("");
  const [college, setCollege] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [issueDate, setIssueDate] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [credentialId, setCredentialId] = useState("");
  const [credentialUrl, setCredentialUrl] = useState("");
  const [skills, setSkills] = useState([""]);
  const [showIssueDatePicker, setShowIssueDatePicker] = useState(false);
  const [showExpirationDatePicker, setShowExpirationDatePicker] = useState(false);
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
  });

  const [focusedInput, setFocusedInput] = useState(null);

  // Dummy data for dropdowns
  const certificationData = [
    { label: "Select Certification", value: null },
    { label: "Certified Developer", value: "Certified Developer" },
    { label: "Certified Analyst", value: "Certified Analyst" },
  ];

  const collegeData = [
    { label: "College Studying In", value: null },
    { label: "University of ABC", value: "University of ABC" },
    { label: "College XYZ", value: "College XYZ" },
  ];

  const organizationData = [
    { label: "Select Organization", value: null },
    { label: "Company A", value: "Company A" },
    { label: "Company B", value: "Company B" },
  ];

  const handleNext = () => {
    console.log("Name:", name);
    console.log("City:", city);
    console.log("College:", college);
    console.log("Organization:", organization);
    console.log("Issue Date:", issueDate);
    console.log("Expiration Date:", expirationDate);
    console.log("Credential Id:", credentialId);
    console.log("Credential URL:", credentialUrl);
    console.log("Skills Achieved:", skills);
    navigation.navigate("Personal_4");
  };
  const handleAddMore = () => {
    console.log('Add More clicked');
};

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSkip = () => {
    navigation.navigate("Personal_4");
  };

  const onIssueDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || issueDate;
    setShowIssueDatePicker(false);
    setIssueDate(currentDate.toLocaleDateString());
  };

  const onExpirationDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || expirationDate;
    setShowExpirationDatePicker(false);
    setExpirationDate(currentDate.toLocaleDateString());
  };

  // Dynamically change the border color based on focus
  const getInputStyle = (inputName) => {
    return {
      ...styles.input,
      borderBottomColor: focusedInput === inputName ? "#000" : "#666666", // Black border when focused, gray when unfocused
    };
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.stepContainer}>
          <Text style={styles.stepText}>Step 3 of 4</Text>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Certification Details</Text>
        <Text style={styles.description}>Provide your certification details below.</Text>

        {/* Certification Name Dropdown */}
        <View style={styles.inputContainer}>
          {/* <Text style={styles.label}>Certification Name*</Text> */}
          <Dropdown
            data={certificationData}
            labelField="label"
            valueField="value"
            value={name}
            onChange={(item) => setName(item.value)}
            style={styles.dropdown}
            placeholder="Certification Name*"
            placeholderStyle={styles.placeholderStyle}
  selectedTextStyle={styles.selectedTextStyle} // Apply custom font here
  renderItem={(item) => (
    <Text style={styles.dropdownItem}>{item.label}</Text> // Apply custom font here
  )}
          />
        </View>

        {/* Issuing Organization Dropdown */}
        <View style={styles.inputContainer}>
          {/* <Text style={styles.label}>Issuing Organization</Text> */}
          <Dropdown
            data={organizationData}
            labelField="label"
            valueField="value"
            value={organization}
            onChange={(item) => setOrganization(item.value)}
            style={styles.dropdown}
            placeholder="Issuing Organization"
            placeholderStyle={styles.placeholderStyle}
  selectedTextStyle={styles.selectedTextStyle} // Apply custom font here
  renderItem={(item) => (
    <Text style={styles.dropdownItem}>{item.label}</Text> // Apply custom font here
  )}
          />
        </View>

        {/* College Dropdown */}
       

        {/* Issue Date and Expiration Date Row */}
        <View style={styles.rowContainer}>
          <View style={styles.column}>
            <Text style={styles.label}>Issue Date</Text>
            <View style={styles.dateContainer}>
              <TextInput
                style={styles.dateInput}
                value={issueDate}
                onChangeText={setIssueDate}
                placeholder="MM/DD/YYYY"
                onFocus={() => setFocusedInput("issueDate")}
                onBlur={() => setFocusedInput(null)}
              />
              <TouchableOpacity onPress={() => setShowIssueDatePicker(true)}>
              <Image
            source={require('../assets/calendar.png')} // Path to your calendar.png image
            style={styles.calendarIcon} // Apply styles for the icon
          />
              </TouchableOpacity>
              {showIssueDatePicker && (
                <DateTimePicker
                  value={new Date()}
                  mode="date"
                  display="calendar"
                  onChange={onIssueDateChange}
                />
              )}
            </View>
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Expiration Date</Text>
            <View style={styles.dateContainer}>
              <TextInput
                style={styles.dateInput}
                value={expirationDate}
                onChangeText={setExpirationDate}
                placeholder="MM/DD/YYYY"
                onFocus={() => setFocusedInput("expirationDate")}
                onBlur={() => setFocusedInput(null)}
              />
              <TouchableOpacity onPress={() => setShowExpirationDatePicker(true)}>
               <Image
            source={require('../assets/calendar.png')} // Path to your calendar.png image
            style={styles.calendarIcon} // Apply styles for the icon
          />
              </TouchableOpacity>
              {showExpirationDatePicker && (
                <DateTimePicker
                  value={new Date()}
                  mode="date"
                  display="calendar"
                  onChange={onExpirationDateChange}
                />
              )}
            </View>
          </View>
        </View>

        {/* Credential Id */}
        <View style={styles.inputContainer}>
          {/* <Text style={styles.label}>Credential ID</Text> */}
          <TextInput
            style={getInputStyle("credentialId")}
            value={credentialId}
            placeholder="Credential ID"
            onChangeText={setCredentialId}
            onFocus={() => setFocusedInput("credentialId")}
            onBlur={() => setFocusedInput(null)}
          />
        </View>

        {/* Credential URL */}
        <View style={styles.inputContainer}>
          {/* <Text style={styles.label}>Credential URL</Text> */}
          <TextInput
            style={getInputStyle("credentialUrl")}
            value={credentialUrl}
            placeholder="Credential URL"
            onChangeText={setCredentialUrl}
            // onFocus={() => setFocusedInput("credentialUrl")}
            // onBlur={() => setFocusedInput(null)}
          />
        </View>

        {/* Skills Achieved */}
        <View style={styles.inputContainer}>
          {/* <Text style={styles.label}>Skills Achieved</Text> */}
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillRow}>
              <TextInput
                style={styles.skillInput}
                value={skill}
                onChangeText={(text) => {
                  const updatedSkills = [...skills];
                  updatedSkills[index] = text;
                  setSkills(updatedSkills);
                }}
                placeholder="Skills Achieved"
              />
              {index === skills.length - 1 && (
                <TouchableOpacity style={styles.addButton} onPress={handleAddSkill}>
                 <Image
            source={require('../assets/Addmore.png')} // Path to your calendar.png image
            style={styles.addskillicon} // Apply styles for the icon
          />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.addMoreButton} onPress={handleAddMore}>
                    <View style={styles.addMoreButtonContent}>
                    <Text style={styles.addMoreButtonText}> Add More</Text>
                    <Image
            source={require('../assets/Addmore.png')} // Path to your calendar.png image
            style={styles.addskillicon} // Apply styles for the icon
          />
                        
                    </View>
                </TouchableOpacity>
        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  stepContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.05,
    marginBottom: height * 0.04,
  },
  stepText: {
    fontSize: 17,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'HankenGroteskSemiBold',
},
  skipText: {
    fontSize: width * 0.04,
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#666666",
    paddingBottom: 2,
  },
  title: {
    fontSize: width * 0.06,
    fontFamily: "HankenGroteskBlack",
    marginBottom: "0.5%",
  },
  description: {
    fontSize: width * 0.04,
    color: "#555",
    marginBottom: "0.5%",
    textAlign: "start",
    fontFamily: "HankenGroteskRegular",
  },
  inputContainer: {
    marginBottom: height * 0.02,
    
  },
  label: {
    fontSize: width * 0.045,
    fontFamily: "HankenGroteskSemiBold",
    color: "#666666",
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#666666",
    fontSize: width * 0.04,
    fontFamily: "HankenGroteskRegular",
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginBottom: 0,
    // color: "#666666",
  },
  
  dropdown: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#666666",
    paddingHorizontal: 10,
    fontSize: width * 0.04,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: "HankenGroteskSemiBold", // Custom font for placeholder text
    color: "#666666",
  },
  selectedTextStyle: {
    fontSize: width * 0.04,
    fontFamily: "HankenGroteskRegular", // Custom font for selected text
    color: "#000",
  },
  dropdownItem: {
    fontSize: width * 0.04,
    fontFamily: "HankenGroteskRegular", // Custom font for dropdown items
    padding: 10,
    color: "#000",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "40%",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#666666",
  },
  calendarIcon: {
    marginLeft: "45%",
    width:20,
    height:20
  },
  addskillicon:{width:25,
    height:25
  },
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#666666",
    paddingBottom: 5,
    marginBottom: 10,
  },
  skillInput: {
    flex: 1,
    height: 50,
    fontSize: width * 0.04,
    fontFamily: "HankenGroteskSemiBold",
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
  },
  nextButton: {
    backgroundColor: "#006336",
    paddingVertical: height * 0.02,
    alignItems: "center",
    borderRadius: 10,
    marginTop: height * 0.03,
    width:"70%",
    alignSelf:"center"
  },
  nextButtonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontFamily: "HankenGroteskBold",
  },
  addMoreButton: {
    borderColor: '#666666',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#BBDDFF',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    alignSelf: 'start',
},
addMoreButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
},
addMoreButtonText: {
    fontSize: 17,
    color: '#000',
    marginLeft: 5,
    // fontFamily: "HankenGroteskSemiBold"
    fontFamily:"HankenGroteskRegular"
},
});

export default PersonalDetailsScreen;
