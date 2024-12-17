import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = () => {
  const [sport, setSport] = useState('Select a sport');
  const [totalGames, setTotalGames] = useState('');
  const [sportRole, setSportRole] = useState('Select your role');
  const [level, setLevel] = useState('Beginner');

  const handleAddDetails = () => {
    // Handle adding the sport details to the list of sports
    console.log('Added sport:', {
      sport,
      totalGames,
      sportRole,
      level,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Sport *</Text>
        <Picker
          selectedValue={sport}
          onValueChange={(itemValue) => setSport(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a sport" value="Select a sport" />
          <Picker.Item label="Cricket" value="Cricket" />
          <Picker.Item label="Tennis" value="Tennis" />
          {/* Add other sports here */}
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Total Games <Feather name="info" size={16} color="#007AFF" /></Text>
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
          <Picker.Item label="Select your role" value="Select your role" />
          <Picker.Item label="All Rounder" value="All Rounder" />
          <Picker.Item label="Batsman" value="Batsman" />
          {/* Add other roles here */}
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

      <TouchableOpacity style={styles.addButton} onPress={handleAddDetails}>
        <Text style={styles.addButtonText}>Add Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // White background for the screen
  },
  formGroup: {
    marginBottom: 30, // Increased margin to add more space between fields
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    backgroundColor: '#f0f0f0', // Gray background for the fields
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    backgroundColor: '#f0f0f0', // Gray background for the fields
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#00B562',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 270, // Adjusted to space the button further from the fields
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProfileScreen;
