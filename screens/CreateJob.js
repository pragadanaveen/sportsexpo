import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import JobPreviewModal from './JobPreviewModal'; // Importing the modal

const JobPostingForm = () => {
  const navigation = useNavigation();
  const [jobTitle, setJobTitle] = useState('');
  const [hiringFor, setHiringFor] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [selectedRadioButton, setSelectedRadioButton] = useState(null);
  const [question, setQuestion] = useState('');
  const [responseType, setResponseType] = useState('');
  const [idealAnswer, setIdealAnswer] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
      setIsAddingSkill(false);
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handlePreview = () => {
    setIsModalVisible(true); // Show modal on preview button click
  };

  const handleSubmit = () => {
    console.log('Job Posting Data:', {
      jobTitle,
      hiringFor,
      organizationName,
      selectedOrganization,
      jobLocation,
      jobType,
      jobDescription,
      skills,
      question,
      responseType,
      idealAnswer,
    });
    navigation.navigate("CreateJobPost2");
  };

  const chunkSkills = (skills) => {
    const chunked = [];
    for (let i = 0; i < skills.length; i += 3) {
      chunked.push(skills.slice(i, i + 3));
    }
    return chunked;
  };

  const handleCancelSkillInput = () => {
    setIsAddingSkill(false);
    setSkillInput('');
  };

  const handleRadioButtonSelect = (value) => {
    setSelectedRadioButton(value);
  };

  return (
    <ScrollView style={styles.container}>
       {/* Job Title */}
       <Text style={styles.label}>Job Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Job Title"
        value={jobTitle}
        onChangeText={setJobTitle}
      />

      {/* Hiring For */}
      <Text style={styles.label}>Hiring For</Text>
      <TextInput
        style={styles.input}
        placeholder="Hiring For"
        value={hiringFor}
        onChangeText={setHiringFor}
      />

      {/* Organization Name */}
      <Text style={styles.label}>Organization Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Organization Name"
        value={organizationName}
        onChangeText={setOrganizationName}
      />

      {/* Organization Selection Dropdown */}
      <Text style={styles.label}>Select Organization</Text>
      <Picker
        selectedValue={selectedOrganization}
        onValueChange={setSelectedOrganization}
        style={styles.picker}
      >
        <Picker.Item label="Select Organization" value="" />
        <Picker.Item label="Organization 1" value="org1" />
        <Picker.Item label="Organization 2" value="org2" />
      </Picker>

      {/* Job Location */}
      <Text style={styles.label}>Job Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Job Location"
        value={jobLocation}
        onChangeText={setJobLocation}
      />

      {/* Job Type */}
      <Text style={styles.label}>Job Type (Full-time/Part-time)</Text>
      <Picker
        selectedValue={jobType}
        onValueChange={setJobType}
        style={styles.picker}
      >
        <Picker.Item label="Full-time" value="full-time" />
        <Picker.Item label="Part-time" value="part-time" />
      </Picker>

      {/* Job Description */}
      <Text style={styles.label}>Job Description</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Enter Job Description"
        multiline={true}
        value={jobDescription}
        onChangeText={setJobDescription}
      />

      {/* Skills */}
      <Text style={styles.sectionHeader}>Skills</Text>
      <View style={styles.skillsContainer}>
        {chunkSkills(skills).map((skillRow, rowIndex) => (
          <View key={rowIndex} style={styles.skillRow}>
            {skillRow.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <View style={styles.skillContainer}>
                  <Text>{skill}</Text>
                  <TouchableOpacity onPress={() => handleRemoveSkill(rowIndex * 3 + index)} style={styles.removeButton}>
                    <Text>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}

        {/* Display the skill input field only if isAddingSkill is true */}
        {isAddingSkill && (
          <TextInput
            style={styles.skillInput}
            placeholder="Add Skill"
            value={skillInput}
            onChangeText={setSkillInput}
          />
        )}

        <TouchableOpacity
          onPress={() => {
            setIsAddingSkill(!isAddingSkill); // Toggle visibility of the skill input field
          }}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>{isAddingSkill ? 'Cancel' : '+ Add Skill'}</Text>
        </TouchableOpacity>

        {/* Only show the Add Skill button if the input is visible */}
        {isAddingSkill && (
          <TouchableOpacity onPress={handleAddSkill} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Skill +</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Radio Button and Text */}
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity
          style={[styles.radioButton, selectedRadioButton === 'yes' && styles.selectedRadioButton]}
          onPress={() => handleRadioButtonSelect('yes')}
        >
          {selectedRadioButton === 'yes' && <Text style={styles.tick}>✔</Text>}
        </TouchableOpacity>
        <Text style={styles.radioButtonText}>Add Screening Questions</Text>
      </View>

      {/* Enter Question Input Field */}
      {selectedRadioButton === 'yes' && (
        <View>
          <Text style={styles.label}>Enter Question</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Screening Question"
            value={question}
            onChangeText={setQuestion}
          />

          {/* Response Type and Ideal Answer */}
          <View style={styles.responseContainer}>
            <View style={styles.column}>
              <Text style={styles.label}>Response Type</Text>
              <Picker
                selectedValue={responseType}
                onValueChange={setResponseType}
                style={styles.picker}
              >
                <Picker.Item label="Select Response Type" value="" />
                <Picker.Item label="Text" value="text" />
                <Picker.Item label="Multiple Choice" value="multiple" />
              </Picker>
            </View>

            <View style={styles.column}>
              <Text style={styles.label}>Ideal Answer</Text>
              <Picker
                selectedValue={idealAnswer}
                onValueChange={setIdealAnswer}
                style={styles.picker}
              >
                <Picker.Item label="Select Ideal Answer" value="" />
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </View>
          </View>

          {/* Mandatory Question Radio Button */}
          <View style={styles.radioButtonContainer}>
            <TouchableOpacity
              style={[styles.radioButton, selectedRadioButton === 'mandatory' && styles.selectedRadioButton]}
              onPress={() => handleRadioButtonSelect('mandatory')}
            >
              {selectedRadioButton === 'mandatory' && <Text style={styles.tick}>✔</Text>}
            </TouchableOpacity>
            <Text style={styles.radioButtonText}>Mandatory Question</Text>
          </View>

          {/* Add One More Question Button */}
          <TouchableOpacity style={styles.addQuestionButton}>
            <Text style={styles.addQuestionText}>+ Add One More Question</Text>
          </TouchableOpacity>
        </View>
      )}



      {/* Preview and Continue Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePreview} style={styles.previewButton}>
          <Text style={styles.buttonText}>Preview</Text>
        </TouchableOpacity>

        {/* Job Preview Modal */}
        {isModalVisible && (
          <JobPreviewModal closeModal={() => setIsModalVisible(false)} />
        )}

        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 4,
  },
  multiline: {
    height: 100,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  skillsContainer: {
    marginBottom: 20,
  },
  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    width: '30%',
    marginBottom: 10,
    marginRight: 10,
  },
  skillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 4,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadioButton: {
    backgroundColor: '#BBDDFF',
  },
  tick: {
    color: 'green',
    fontWeight: 'bold',
  },
  radioButtonText: {
    fontSize: 16,
  },
  responseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  addQuestionButton: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addQuestionText: {
    color: '#000',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Distribute space evenly
    marginTop: 5,
    width: '100%',
    marginBottom:30  // Ensure the container takes full width
  },
  previewButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 4,
    width: '48%',  // Make the button take up 48% of the width
    marginRight: '2%',  // Add a small margin to the right button
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    width: '48%',
    // marginTop:-20  // Make the button take up 48% of the width
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default JobPostingForm;
