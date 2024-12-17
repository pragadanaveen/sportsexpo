import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons'; // Import Feather icon library
import { useFonts } from "expo-font";
const AddAchievementScreen = () => {
  const [title, setTitle] = useState('');
  const [issuingOrganization, setIssuingOrganization] = useState('');
  const [issueDate, setIssueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [credentialId, setCredentialId] = useState('');
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const handleSaveAchievement = () => {
    console.log('Saved achievement:', {
      title,
      issuingOrganization,
      issueDate,
      credentialId,
    });
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || issueDate;
    setShowDatePicker(false);
    setIssueDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Award Title *</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Issuing Organization *</Text>
        <TextInput
          style={styles.input}
          value={issuingOrganization}
          onChangeText={setIssuingOrganization}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Issue Date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputWithIcon}>
          <Text>{issueDate.toLocaleDateString()}</Text>
          <Feather name="calendar" size={20} color="#525252" style={styles.calendarIcon} />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={issueDate}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Credential ID</Text>
        <TextInput
          style={styles.input}
          value={credentialId}
          onChangeText={setCredentialId}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveAchievement}>
        <Text style={styles.saveButtonText}>Save Details</Text>
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
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontFamily: 'HankenGroteskBold',
    marginBottom: 8,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8F8F8F', // 1px solid gray border
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#fff',
    fontFamily: 'HankenGroteskRegular',
    color:"#3D3D3D"
     // White background for fields
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8F8F8F', // 1px solid gray border
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#fff', // White background for fields
  },
  calendarIcon: {
    marginLeft: 250,
  },
  saveButton: {
    backgroundColor: '#00B562',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 270,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddAchievementScreen;
