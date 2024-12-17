import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const JobPreviewModal = ({ closeModal }) => {
  return (
    <Modal
      visible={true}
      transparent={true}
      animationType="slide"
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Preview</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>

          {/* Job Details */}
          <View style={styles.jobDetails}>
            <View style={styles.row}>
              <Image source={require('../assets/Logo.png')} style={styles.icon} />
              <Text style={styles.jobLocation}>XYZ Sports Academy | Mumbai, Maharashtra</Text>
            </View>
            <View style={styles.row}>
              <Image source={require('../assets/Logo.png')} style={styles.icon} />
              <Text style={styles.jobType}>Full-Time Role</Text>
            </View>

            <View style={styles.postedByContainer}>
              <Text style={styles.postedByText}>Posted by</Text>
              <View style={styles.profileContainer}>
                <Image source={require('../assets/Logo.png')} style={styles.profileImage} />
                <View>
                  <Text style={styles.profileName}>John Doe</Text>
                  <Text style={styles.profileDesignation}>Head Coach | Mentor</Text>
                </View>
              </View>
            </View>

            <Text style={styles.sectionHeader}>Job Description</Text>
            <Text style={styles.jobDescription}>
              We are looking for an experienced cricket coach to join our team. The role involves coaching players,
              organizing training sessions, and managing match strategies.
            </Text>

            <Text style={styles.sectionHeader}>Responsibilities</Text>
            <View style={styles.bulletPoints}>
              <Text style={styles.bulletPoint}>• Conduct cricket training sessions</Text>
              <Text style={styles.bulletPoint}>• Analyze player performance</Text>
              <Text style={styles.bulletPoint}>• Plan strategies for upcoming matches</Text>
            </View>

            <Text style={styles.sectionHeader}>Qualifications</Text>
            <View style={styles.bulletPoints}>
              <Text style={styles.bulletPoint}>• Minimum 5 years of coaching experience</Text>
              <Text style={styles.bulletPoint}>• Cricket Coaching Certification</Text>
              <Text style={styles.bulletPoint}>• Excellent communication skills</Text>
            </View>

            <Text style={styles.sectionHeader}>Required Skills</Text>
            <View style={styles.skillsContainer}>
              <Text style={styles.skill}>Team Management</Text>
              <Text style={styles.skill}>Tactical Knowledge</Text>
              <Text style={styles.skill}>Leadership</Text>
              <Text style={styles.skill}>Player Motivation</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  jobDetails: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  jobLocation: {
    fontSize: 14,
    marginLeft: 10,
  },
  jobType: {
    fontSize: 14,
    marginLeft: 10,
  },
  postedByContainer: {
    marginBottom: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontWeight: 'bold',
  },
  profileDesignation: {
    fontSize: 12,
    color: '#777',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  jobDescription: {
    fontSize: 14,
    color: '#333',
  },
  bulletPoints: {
    marginTop: 5,
    marginLeft: 15,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  skill: {
    fontSize: 14,
    color: '#007AFF',
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#E6F0FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default JobPreviewModal;
