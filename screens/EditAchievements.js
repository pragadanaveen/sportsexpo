import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Correct import

const AchievementsScreen = () => {
  const navigation = useNavigation(); // Correct hook usage

  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: 'Professional Tennis Registry (PTR) Certification and Achievements in National Competitions',
      date: 'Achieved on 12-06-2022',
      logo: require('../assets/Logo.png'),
    },
    // Add more achievements here
  ]);

  const handleAddAchievement = () => {
    setAchievements([
      ...achievements,
      {
        id: achievements.length + 1,
        title: '',
        date: '',
        logo: null,
      },
    ]);
  };

  const handleEditAchievement = (index) => {
    // Handle editing an existing achievement
  };

  const handleDeleteAchievement = (index) => {
    setAchievements(achievements.filter((item, i) => i !== index));
  };

  const handleIndividualAchivementEdit = () => {
    navigation.navigate('IndividualAchivementEdit'); // Use the navigation to go to the edit screen
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {achievements.map((achievement, index) => (
          <View key={achievement.id} style={styles.achievementItem}>
            <Text style={styles.achievementTitle}>Achievement {index + 1}</Text>
            <View style={styles.achievementDetails}>
              <Image source={achievement.logo} style={styles.achievementLogo} />
              <View style={styles.achievementTextContainer}>
                <Text style={styles.achievementText}>{achievement.title}</Text>
                <Text style={styles.achievementDate}>{achievement.date}</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditAchievement(index)}
              >
                <Feather name="edit" size={20} color="black" onPress={handleIndividualAchivementEdit} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteAchievement(index)}
              >
                <Feather name="trash-2" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleIndividualAchivementEdit}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
    position: 'relative', // Ensures the absolute positioned button stays in place
  },
  scrollContainer: {
    paddingBottom: 100, // Adds padding to the bottom to prevent the button from overlapping with content
  },
  achievementItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  achievementDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  achievementLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  achievementTextContainer: {
    flex: 1, // Allows text container to take remaining space
  },
  achievementText: {
    fontSize: 16,
    fontWeight: '500',
    flexWrap: 'wrap', // Enables wrapping for long titles
  },
  achievementDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    position: 'absolute',
    top: 16,
    right: 16,
  },
  editButton: {
    marginRight: 10,
  },
  deleteButton: {},
  addButton: {
    backgroundColor: '#007AFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default AchievementsScreen;
