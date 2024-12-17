import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const JobListingScreen = () => {
  const navigation = useNavigation();
  const jobs = [
    {
      playerName: 'John Doe',
      title: 'Lorem Ipsum',
      company: 'ABC Institute | Hyderabad, Telangana',
      type: 'Full Time',
      postedOn: '01 November, 2024',
      applications: 12,
      status: 'Open',
      playerProfilePic: require('../assets/Coache1.png'),
      rating: 4.5,
      sport1: { name: 'Football', role: 'Striker', playersCount: 11 },
      sport2: { name: 'Basketball', role: 'Guard', playersCount: 5 },
      totalGames: 200,
    },
    {
      playerName: 'Jane Smith',
      title: 'Lorem Ipsum',
      company: 'ABC Institute | Hyderabad, Telangana',
      type: 'Full Time',
      postedOn: '01 November, 2024',
      applications: 12,
      status: 'Closed',
      playerProfilePic: require('../assets/Coache1.png'),
      rating: 4.2,
      sport1: { name: 'Cricket', role: 'Batsman', playersCount: 10 },
      sport2: { name: 'Tennis', role: 'Player', playersCount: 2 },
      totalGames: 150,
    },
  ];

  const handleJobClick = (job) => {
    if (job.status === 'Open') {
      navigation.navigate('OpentagJobDetails', { job });
    }
  };

  const handleProfileClick = (job) => {
    // Navigate to the ProfileScreen when the profile picture is clicked
    navigation.navigate('CoachProfile', { playerName: job.playerName, profilePic: job.playerProfilePic });
  };

  return (
    <View style={styles.container}>
      {jobs.map((job, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.jobCard}>
            <Text style={styles.playerName}>{job.playerName}</Text>
            <View style={styles.jobDetails}>
              <View style={styles.jobLeft}>
                <Text style={styles.jobDetailText}>
                  {job.sport1.name} | {job.sport1.role} | #{job.sport1.playersCount}
                </Text>
                <Text style={styles.jobDetailText}>
                  {job.sport2.name} | {job.sport2.role} | #{job.sport2.playersCount}
                </Text>
                <Text style={styles.jobDetailText}>Total Games: {job.totalGames}</Text>
              </View>
              <View style={styles.jobRight}>
                <TouchableOpacity onPress={() => handleProfileClick(job)}>
                  <Image source={job.playerProfilePic} style={styles.profilePic} />
                </TouchableOpacity>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{job.rating} ★</Text>
                </View>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.buttonRow}>
              {/* Player Since 2023 Text */}
              <Text style={styles.playerSinceText}>Player Since 2023</Text>
              <TouchableOpacity style={[styles.actionButton, styles.acceptButton]}>
                <Text style={styles.buttonText}>Send Request</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  jobCard: {
    marginBottom: 15, // Reduced margin for smaller card height
    padding: 15, // Reduced padding to decrease height
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    width: '100%',
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8, // Adjusted margin for smaller height
  },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobLeft: {
    flex: 2,
    justifyContent: 'center',
  },
  jobRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 60,  // Reduced size of profile picture
    height: 60, // Reduced size of profile picture
    borderRadius: 30,
    marginBottom: 10, // Reduced margin
    marginTop: -20,  // Adjusted top margin
    borderWidth: 3,  // Adds a 1px border
    borderColor: 'rgba(0, 25, 99, 1)', // Sets the border color to rgba(0, 25, 99, 1)
  },
  ratingContainer: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 4,  // Reduced padding
    paddingHorizontal: 8, // Reduced padding
    borderRadius: 15,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0, 25, 99, 1)',
  },
  jobDetailText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4, // Reduced margin
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 8, // Reduced margin
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,  // Added slight space for buttons
  },
  playerSinceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    flex: 1,
    textAlign: 'left',
  },
  actionButton: {
    paddingVertical: 8,  // Reduced padding for a smaller button
    paddingHorizontal: 16, // Reduced padding for a smaller button
    borderRadius: 5,
    width: '48%',
  },
  acceptButton: {
    backgroundColor: '#00B562',
    width: "35%",  // Adjusted width for a smaller button
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default JobListingScreen;
