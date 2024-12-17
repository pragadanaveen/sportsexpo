import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useFonts } from "expo-font";

const ProfileScreen = () => {
  const [sport, setSport] = useState(null);
  const [experience, setExperience] = useState(null);
  const [teamscoached, setTeamsCoached] = useState('158');
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });

  const sportOptions = [
    { label: 'Cricket', value: 'Cricket' },
    { label: 'Tennis', value: 'Tennis' },
    // Add other sports as needed
  ];

  const experienceOptions = [
    { label: '1 year', value: '1 year' },
    { label: '2 years', value: '2 years' },
    { label: '3 years', value: '3 years' },
    { label: '4 years', value: '4 years' },
    { label: '5+ years', value: '5+ years' },
    // Add more experience options as needed
  ];

  const handleSaveDetails = () => {
    console.log('Saved details:', {
      sport,
      teamscoached,
      experience,
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContent}>
          {/* Sport Dropdown */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Sport *</Text>
            <Dropdown
              data={sportOptions}
              labelField="label"
              valueField="value"
              value={sport}
              onChange={(item) => setSport(item.value)}
              style={styles.dropdown}
              placeholder="Select a Sport"
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              renderItem={(item) => <Text style={styles.dropdownItem}>{item.label}</Text>}
            />
          </View>

          {/* Experience Dropdown */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Experience (Years)</Text>
            <Dropdown
              data={experienceOptions}
              labelField="label"
              valueField="value"
              value={experience}
              onChange={(item) => setExperience(item.value)}
              style={styles.dropdown}
              placeholder="Select Experience"
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              renderItem={(item) => <Text style={styles.dropdownItem}>{item.label}</Text>}
            />
          </View>

          {/* Teams Coached Input */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Teams Coached</Text>
            <TextInput
              style={styles.input}
              value={teamscoached}
              onChangeText={setTeamsCoached}
              keyboardType="numeric"
            />
          </View>
        </View>
      </ScrollView>

      {/* Save Details Button with Fixed Position */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveDetails}>
        <Text style={styles.saveButtonText}>Save Details</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,  // Ensures content can scroll
    paddingBottom: 100,  // Adds some space to the bottom for the button
  },
  formContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: 'HankenGroteskBold',
    color: '#3D3D3D',
    marginBottom: 8,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: '#8F8F8F',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 10,
    paddingRight: 10, // Ensure dropdown has enough padding
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#3D3D3D',
    fontFamily: 'HankenGroteskRegular',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#3D3D3D',
    fontFamily: 'HankenGroteskRegular',
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#3D3D3D',
    backgroundColor: '#fff',
    fontFamily: 'HankenGroteskRegular',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#8F8F8F',
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 12,
    fontFamily: 'HankenGroteskRegular',
  },
  saveButton: {
    position: 'absolute',  // Fixed position
    bottom: 20,  // 20px from the bottom
    left: 16,  // 16px from the left edge
    right: 16, // 16px from the right edge
    backgroundColor: '#00B562',
    paddingVertical: "4%",
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: "5%",  // Added margin for spacing from screen edge
  },
  saveButtonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
  },
});

export default ProfileScreen;
