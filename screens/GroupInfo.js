import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MembersScreen = () => {
  const [members] = useState([
    { name: 'Jyosthna Jain', role: 'Admin', image: require('../assets/profile1.png') }, // Add image path
    { name: 'Rami Reddy', role: '', image: require('../assets/profile1.png') }, // Add image path
    // ... other members
  ]);

  const handleAddMember = () => {
    // Handle the "Add" button action, e.g., navigate to a new screen to add a member
    console.log('Add Member clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Left: "Members" Text */}
        <Text style={styles.title}>Members</Text>

        {/* Right: Add button with icon */}
        <TouchableOpacity onPress={handleAddMember} style={styles.addButtonContainer}>
          <Image
            source={require('../assets/addmembersicon.png')} // Ensure the image path is correct
            style={styles.addButtonIcon}
          />
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={members}
        renderItem={({ item }) => (
          <View>
            <View style={styles.memberItem}>
              {/* Display Player's Image */}
              <Image source={item.image} style={styles.memberImage} />
              {/* Display Player's Name and Role */}
              <View style={styles.memberTextContainer}>
                <Text style={styles.memberName}>{item.name}</Text>
              </View>

              {/* Display Role at the End */}
              {item.role && (
                <View style={styles.memberRoleContainer}>
                  <Text style={styles.memberRole}>{item.role}</Text>
                </View>
              )}
            </View>

            {/* Horizontal Divider Below Each Member */}
            <View style={styles.divider}></View>
          </View>
        )}
        keyExtractor={(item) => item.name}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space between elements
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonIcon: {
    width: 20,
    height: 20,
    marginRight: 10, // Space between icon and text
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center', // Align the image and text in the center
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  memberImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular image
    marginRight: 10, // Space between the image and text
  },
  memberTextContainer: {
    flex: 1, // Allow text to take up available space
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberRoleContainer: {
    justifyContent: 'flex-end', // Align the role to the right end
  },
  memberRole: {
    fontSize: 14,
    color: 'gray',
  },
  // Divider style
  divider: {
    height: 1,
    backgroundColor: '#ddd', // Light gray color for the divider
    marginVertical: 10, // Adds space above and below the divider
  },
});

export default MembersScreen;
