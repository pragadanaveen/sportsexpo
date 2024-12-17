import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import DeleteConfirmationPopup from './DeleteConfirmationPopup'; // Import DeleteConfirmationPopup component
import { useFonts } from "expo-font";

const CertificationsScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });

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
    navigation.navigate("IndividualCertificationEdit_coache"); // Make sure your EditDetails screen is registered in your navigation
  };

  const handleAddCertification = () => {
    // Handle Add New Certification logic here
    navigation.navigate("IndividualCertificationEdit_coache")
    console.log("Add New Certification");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={certifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.certificationItem}>
            <Text style={styles.certificationTitle}>Certification {index + 1}</Text>
            {/* Horizontal Ruler */}
            <View style={styles.horizontalLine} />
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
              <Feather name="edit" size={20} color="#525252" onPress={handleIndividualCertificationEdit} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteConfirmation(index)}
            >
              <Feather name="trash-2" size={20} color="#525252" />
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

      {/* Add Button at the bottom-right */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddCertification}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  certificationItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  certificationTitle: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
    color: '#333',
    marginBottom: 8,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#B8B8B8', // Light gray color for the line
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
    fontSize: 17,
    fontFamily: 'HankenGroteskSemiBold',
    color: '#3D3D3D',
    marginBottom: 8,
  },
  certificationSkillsContainer: {
    marginBottom: 8,
    marginTop: 15,
  },
  certificationSkillsTitle: {
    fontSize: 17,
    fontFamily: 'HankenGroteskSemiBold',
    color: '#3d3d3d',
  },
  certificationSkills: {
    fontSize: 15,
    fontFamily: 'HankenGroteskSemiRegular',
    color: '#525252',
    marginTop: 4,
  },
  certificationDate: {
    fontSize: 14,
    color: '#525252',
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
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#00B562', // Green background
    borderRadius: 50,
    padding: 15,
    elevation: 5, // Adds shadow effect
  },
});

export default CertificationsScreen;
