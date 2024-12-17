import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddMembersScreen = ({ navigation }) => {
  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState([
    'Jyosthna Jain',
    'Rami Reddy',
    // ... other members
  ]);

  useEffect(() => {
    // Hide the bottom tab bar when this screen is active
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });

    // Optionally: Reset the tabBarStyle when leaving this screen
    return () => {
      navigation.setOptions({
        tabBarStyle: { display: 'flex' }, // or whatever default style you have
      });
    };
  }, [navigation]);

  const handleDone = () => {
    // Handle the "Done" action, e.g., send data to a server
    console.log('Group Name:', groupName);
    console.log('Members:', members);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.cameraIcon}>
              <Ionicons name="camera" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <TextInput
            style={styles.input}
            value={groupName}
            onChangeText={setGroupName}
            placeholder="Enter group name"
            placeholderTextColor="#888"
          />
        </View>

        {/* Add Members */}
        <View style={styles.addMembersRow}>
          <Text style={styles.addMembersText}>Add Members</Text>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={24} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Members List */}
        <FlatList
          data={members}
          renderItem={({ item }) => (
            <View style={styles.memberContainer}>
              {/* Member Profile */}
              <View style={styles.memberInfo}>
                <Image
                  source={require('../assets/profile1.png')} // Add the path to your profile image
                  style={styles.profilePic}
                />
                <Text style={styles.member}>{item}</Text>
              </View>

              {/* Horizontal Line Below Member Info */}
              <View style={styles.separator} />
            </View>
          )}
          keyExtractor={(item) => item}
          style={styles.list}
        />

        {/* Done Button */}
        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20, // Ensure bottom space for the Done button
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  cameraIcon: {
    backgroundColor: '#808080', // gray color
    padding: 20,
    borderRadius: 10, // Square shape
  },
  input: {
    borderBottomWidth: 1, // Bottom border only
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    flex: 1,
  },
  addMembersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  addMembersText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
  },
  searchIcon: {
    padding: 10,
    borderRadius: 50,
  },
  list: {
    marginBottom: 20, // Add space to ensure items don't touch the Done button
  },
  memberContainer: {
    backgroundColor: '#fff',
    padding: 10, // Reduced padding to decrease distance
    borderRadius: 8,
    marginBottom: 8, // Reduced margin between member rows
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0, // Reduced space between profile picture and name
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  member: {
    fontSize: 16,
    color: '#333',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd', // Light gray line
    marginTop: 8, // Reduced margin between member info and separator
    width: '100%', // Ensure the separator spans across the full width without padding
  },
  doneButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddMembersScreen;
