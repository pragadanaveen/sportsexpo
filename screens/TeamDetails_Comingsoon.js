import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlayerInfo = ({ playerName, role, rating, profilePic }) => {
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  return (
    <View style={styles.playerRow}>
      <Image source={profilePic} style={styles.profilePic} />
      <View style={styles.playerDetails}>
        <Text style={styles.playerName}>{playerName}</Text>
        <Text style={styles.playerRole}>{role}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingSymbol}>★</Text>
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  );
};

const MyPage = () => {
  const teamData = {
    teamA: [
      { name: 'Harshit Kapoor', role: 'All Rounder', rating: 4.5, profilePic: require('../assets/Logo.png') },
      { name: 'Ravi Kumar', role: 'Batsman', rating: 4.2, profilePic: require('../assets/Logo.png') },
    ],
    teamB: [
      { name: 'Ankit Sharma', role: 'Bowler', rating: 4.7, profilePic: require('../assets/Logo.png') },
      { name: 'Sandeep Singh', role: 'Wicketkeeper', rating: 4.1, profilePic: require('../assets/Logo.png') },
    ],
  };

  const [dropdownVisible, setDropdownVisible] = useState({
    teamA: false,
    teamB: false,
  });

  const toggleDropdown = (team) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [team]: !prev[team],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Team A */}
      <View style={styles.teamHeaderTeamA}>
        <Text style={styles.teamName}>Lorem Ipsum Titans</Text>
        <TouchableOpacity onPress={() => toggleDropdown('teamA')} style={styles.dropdownButton}>
  <Icon
    name={dropdownVisible.teamA ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
    size={24}
    color="#3D3D3D"
  />
</TouchableOpacity>

      </View>
      {dropdownVisible.teamA && (
        <View style={styles.teamMembersList}>
          {teamData.teamA.map((player, index) => (
            <View key={index}>
              <PlayerInfo
                playerName={player.name}
                role={player.role}
                rating={player.rating}
                profilePic={player.profilePic}
              />
              <View style={styles.horizontalLine} />
            </View>
          ))}
        </View>
      )}

      {/* Team B */}
      <View style={styles.teamHeaderTeamB}>
        <Text style={styles.teamName}>Opposite Team</Text>
        <TouchableOpacity onPress={() => toggleDropdown('teamB')} style={styles.dropdownButton}>
  <Icon
    name={dropdownVisible.teamB ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
    size={24}
    color="#3D3D3D"
  />
</TouchableOpacity>
      </View>
      {dropdownVisible.teamB && (
        <View style={styles.teamMembersList}>
          {teamData.teamB.map((player, index) => (
            <View key={index}>
              <PlayerInfo
                playerName={player.name}
                role={player.role}
                rating={player.rating}
                profilePic={player.profilePic}
              />
              <View style={styles.horizontalLine} />
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  teamHeaderTeamA: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#EAF4FF',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  teamHeaderTeamB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#EAFFF5',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  teamName: {
    fontSize: 17,
    fontFamily: 'HankenGroteskBold',
  },
  dropdownButton: {
    padding: 5,
  },
  dropdownText: {
    fontSize: 18,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  playerName: {
    fontSize: 18,
    fontFamily: 'HankenGroteskSemiBold',
  },
  playerRole: {
    fontSize: 16,
    color: '#3D3D3D',
    fontFamily: 'HankenGroteskSemiBold',
  },
  ratingContainer: {
    backgroundColor: '#EDEAFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingSymbol: {
    fontSize: 20,
    marginRight: 5,
    color: '#001963',
    fontFamily: 'HankenGroteskSemiBold', // Ensures the color is applied
  },
  
  
  rating: {
    fontSize: 16,
    fontFamily: 'HankenGroteskSemiBold',
  },
  teamMembersList: {
    marginTop: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#B8B8B8',
    marginVertical: 7,
  },
});

export default MyPage;
