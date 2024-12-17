import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();  // Initialize useNavigation hook
  const sportsData = [
    {
      icon: require('../assets/Logo.png'),
      name: 'Cricket',
      rating: '#32',
      matches: 158,
      role: 'All Rounder',
      level: 'Advanced',
    },
    {
      icon: require('../assets/Tennis.png'),
      name: 'Tennis',
      rating: '#32',
      matches: 158,
      role: 'All Rounder',
      level: 'Advanced',
    },
    {
      icon: require('../assets/Logo.png'),
      name: 'Basketball',
      rating: '#32',
      matches: 158,
      role: 'All Rounder',
      level: 'Advanced',
    },
    // ... other sports data
  ];

  const handleAddSport = () => {
    // Navigate to the AddSport page
    navigation.navigate('IndividualSportEdit');  // Assuming 'AddSport' is the name of the page in your stack
  };
  const handleaddsport = () => {
    navigation.navigate("AddSport"); // Make sure your EditDetails screen is registered in your navigation
  };

  return (
    <View style={styles.container}>
      <View style={styles.sportsSection}>
        <FlatList
          data={sportsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.sportItem}>
              <View style={styles.sportHeader}>
                <Image source={item.icon} style={styles.sportIcon} />
                <Text style={styles.sportName}>{item.name}</Text>
                <TouchableOpacity style={styles.editButton}>
                  <Feather name="edit" size={20} color="black"  onPress={handleAddSport} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton}>
                  <Feather name="trash-2" size={20} color="black" />
                </TouchableOpacity>
              </View>

              {/* Horizontal Ruler */}
              <View style={styles.horizontalRuler} />

              <View style={styles.detailsSection}>
                {/* Labels and values aligned horizontally */}
                <View style={styles.detailsRow}>
                  <Text style={styles.detailLabel}>Sport Rating: </Text>
                  <Text style={styles.detailValue}>{item.rating}</Text>
                </View>
                <View style={styles.detailsRow}>
                  <Text style={styles.detailLabel}>Total Matches: </Text>
                  <Text style={styles.detailValue}>{item.matches}</Text>
                </View>
                <View style={styles.detailsRow}>
                  <Text style={styles.detailLabel}>Sport Role: </Text>
                  <Text style={styles.detailValue}>{item.role}</Text>
                </View>
                <View style={styles.detailsRow}>
                  <Text style={styles.detailLabel}>Level: </Text>
                  <Text style={styles.detailValue}>{item.level}</Text>
                </View>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleaddsport}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  sportsSection: {
    flex: 1,
    marginBottom: 20,
  },
  sportItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sportIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sportName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginLeft: 12,
  },
  editButton: {
    padding: 8,
    backgroundColor: '#E8E8E8',
    borderRadius: 4,
    marginLeft: 8,
  },
  deleteButton: {
    padding: 8,
    backgroundColor: '#F8D7DA',
    borderRadius: 4,
    marginLeft: 8,
  },
  horizontalRuler: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 12,
  },
  detailsSection: {
    marginTop: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    width: '40%',  // To keep the label consistent width
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    width: '60%',  // Align value on the right side
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
