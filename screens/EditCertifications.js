import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import DeleteConfirmationPopup from './DeleteConfirmationPopup'; // Import DeleteConfirmationPopup component

const CertificationsScreen = () => {
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      title: 'Professional Tennis Registry (PTR) Certification',
      date: 'Certified on 12-06-2022',
      logo: require('../assets/Logo.png'),
      skills: 'Lorem Ipsum, Lorem ipsum dolor, Tennis lorem',
    },
  ]);

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);

  const navigation = useNavigation();

  const handleDeleteCertification = (index) => {
    // Delete certification logic
    setCertifications((prevCertifications) =>
      prevCertifications.filter((_, i) => i !== index)
    );
  };

  const handleDeleteConfirmation = (index) => {
    setSelectedCertIndex(index);
    setIsPopupVisible(true);
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };
  const handleIndividualCertificationEdit = () => {
    navigation.navigate("IndividualCertificationEdit"); // Make sure your EditDetails screen is registered in your navigation
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={certifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.certificationItem}>
            <Text style={styles.certificationTitle}>Certification {index + 1}</Text>
            <View style={styles.certificationDetails}>
              {item.logo && <Image source={item.logo} style={styles.certificationLogo} />}
              <View style={styles.textContainer}>
                <Text style={styles.certificationText}>{item.title}</Text>
                <Text style={styles.certificationDate}>{item.date}</Text>
                <View style={styles.certificationSkillsContainer}>
                  <Text style={styles.certificationSkillsTitle}>Skills Achieved:</Text>
                  <Text style={styles.certificationSkills}>{item.skills}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleEditCertification(index)}
            >
              <Feather name="edit" size={20} color="black" onPress={handleIndividualCertificationEdit} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteConfirmation(index)}
            >
              <Feather name="trash-2" size={20} color="black" />
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* Render DeleteConfirmationPopup */}
      {isPopupVisible && selectedCertIndex !== null && (
        <DeleteConfirmationPopup
          visible={isPopupVisible}
          onCancel={handleCancel}
          onDelete={() => {
            handleDeleteCertification(selectedCertIndex); // Delete certification
            handleCancel(); // Close the popup after deletion
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  certificationItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 16,
  },
  certificationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  certificationDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  certificationLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 12,
    marginBottom: 48,
  },
  textContainer: {
    flex: 1,
  },
  certificationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8, // Added margin to separate title and skills
  },
  certificationSkillsContainer: {
    marginBottom: 8,
    marginTop: 15,
  },
  certificationSkillsTitle: {
    fontSize: 16,
    fontWeight: 'bold', // Making "Skills Achieved" text bold
    color: '#333',
  },
  certificationSkills: {
    fontSize: 14,
    color: '#666',
    marginTop: 4, // Added margin-top to ensure spacing from title
  },
  certificationDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  editButton: {
    position: 'absolute',
    right: 50,
    top: 10,
    padding: 5,
  },
  deleteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 5,
  },
  separator: {
    height: 10,
  },
});

export default CertificationsScreen;
