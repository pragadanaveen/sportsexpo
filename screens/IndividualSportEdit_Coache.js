import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
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

      {/* Save Details Button */}
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveDetails}>
          <Text style={styles.saveButtonText}>Save Details</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color of the screen
  },
  formContent: {
    flex: 1,  // This makes the form content take all available space
    padding: 16,
    justifyContent: 'flex-start',  // Content starts at the top
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
  fixedButtonContainer: {
    justifyContent: 'flex-end',  // Aligns button to the bottom of the screen
    padding: 16,  // Add some padding for button spacing
  },
  saveButton: {
    backgroundColor: '#00B562',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
  },
});

export default ProfileScreen;
