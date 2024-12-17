import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = () => {
  const [sport, setSport] = useState('Cricket');
  const [rating, setRating] = useState('32');
  const [totalGames, setTotalGames] = useState('158');
  const [sportRole, setSportRole] = useState('All rounder');
  const [level, setLevel] = useState('Advanced');

  const handleSaveDetails = () => {
    // Handle saving the details to the server or local storage
    console.log('Saved details:', {
      sport,
      rating,
      totalGames,
      sportRole,
      level,
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Sport *</Text>
        <Picker
          selectedValue={sport}
          onValueChange={(itemValue) => setSport(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Cricket" value="Cricket" />
          <Picker.Item label="Tennis" value="Tennis" />
          {/* ... other sports */}
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Rating</Text>
        <TextInput
          style={styles.input}
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Total Games</Text>
        <TextInput
          style={styles.input}
          value={totalGames}
          onChangeText={setTotalGames}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Sport Role</Text>
        <Picker
          selectedValue={sportRole}
          onValueChange={(itemValue) => setSportRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All Rounder" value="All Rounder" />
          <Picker.Item label="Batsman" value="Batsman" />
          {/* ... other roles */}
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Level</Text>
        <Picker
          selectedValue={level}
          onValueChange={(itemValue) => setLevel(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Beginner" value="Beginner" />
          <Picker.Item label="Intermediate" value="Intermediate" />
          <Picker.Item label="Advanced" value="Advanced" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveDetails}>
        <Text style={styles.saveButtonText}>Save Details</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // Background color of the screen
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    backgroundColor: '#f0f0f0', // Gray background for Picker
    marginBottom: 12,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000', // Black border for input fields
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#f0f0f0', // Gray background for input fields
    marginBottom: 12,
  },
  saveButton: {
    marginTop: 140,
    backgroundColor: '#00B562',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProfileScreen;
