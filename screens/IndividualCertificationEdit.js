import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddCertificationScreen = () => {
  const [title, setTitle] = useState('');
  const [issuingOrganization, setIssuingOrganization] = useState('');
  const [issueDate, setIssueDate] = useState(new Date());
  const [expirationDate, setExpirationDate] = useState('');
  const [credentialId, setCredentialId] = useState('');
  const [credentialURL, setCredentialURL] = useState('');
  const [skills, setSkills] = useState(['']);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSaveCertification = () => {
    console.log('Saved certification:', {
      title,
      issuingOrganization,
      issueDate,
      expirationDate,
      credentialId,
      credentialURL,
      skills,
    });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || issueDate;
    setShowDatePicker(false);
    setIssueDate(currentDate);
  };

  const handleExpirationDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || expirationDate;
    setShowDatePicker(false);
    setExpirationDate(currentDate ? currentDate.toDateString() : 'Enter here');
  };

  const handleDeleteSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Certification Name *</Text>
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
        <View style={styles.dateRow}>
          <TextInput
            style={styles.dateInput}
            value={issueDate.toDateString()}
            editable={false}
          />
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.iconContainer}
          >
            <Feather name="calendar" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={issueDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
            style={styles.datePicker}
          />
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Expiration Date</Text>
        <View style={styles.dateRow}>
          <TextInput
            style={styles.dateInput}
            value={expirationDate || 'Enter here'}
            editable={false}
          />
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.iconContainer}
          >
            <Feather name="calendar" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={expirationDate ? new Date(expirationDate) : new Date()}
            mode="date"
            display="default"
            onChange={handleExpirationDateChange}
            style={styles.datePicker}
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

      <View style={styles.formGroup}>
        <Text style={styles.label}>Credential URL</Text>
        <TextInput
          style={styles.input}
          value={credentialURL}
          onChangeText={setCredentialURL}
        />
      </View>

      <View style={styles.skillsSection}>
        <Text style={styles.label}>Skills Achieved</Text>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <TextInput
              style={styles.skillInput}
              value={skill}
              onChangeText={(text) => {
                const newSkills = [...skills];
                newSkills[index] = text;
                setSkills(newSkills);
              }}
            />
            <TouchableOpacity
              style={styles.deleteSkillButton}
              onPress={() => handleDeleteSkill(index)}
            >
              <Feather name="trash-2" size={20} color="black" />
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.addSkillButton} onPress={handleAddSkill}>
          <Text style={styles.addSkillButtonText}>+ Add Skill</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveCertification}>
        <Text style={styles.saveButtonText}>Save Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fFF',
  },
  scrollContent: {
    paddingBottom: 40, // Ensure enough space for the button
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  datePicker: {
    width: '100%',
    marginTop: 8,
  },
  skillsSection: {
    marginTop: 20,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  skillInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    position: 'relative',
  },
  deleteSkillButton: {
    position: 'absolute',
    right: 5,
    top: '38%',
    transform: [{ translateY: -10 }],
    padding: 5,
  },
  addSkillButton: {
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: "#00B562",
    borderWidth: 1,
    width: "50%",
    alignSelf: 'start',
  },
  addSkillButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    marginTop: 20,
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

export default AddCertificationScreen;
