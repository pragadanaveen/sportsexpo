import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const PlayerInfo = ({ playerNumber, playerName, onPlayerClick, isSelected }) => {
  return (
    <TouchableOpacity
      onPress={() => onPlayerClick(playerName)}
      style={[styles.playerRow, isSelected && styles.selectedPlayerRow]} // Apply selected style
    >
      <Text style={styles.playerName}>{`${playerNumber}. ${playerName}`}</Text>
    </TouchableOpacity>
  );
};

const MyPage = () => {
  const navigation = useNavigation();

  const teamData = {
    teamA: [
      { name: 'Harshit Kapoor', role: 'All Rounder', rating: 4.5 },
      { name: 'Ravi Kumar', role: 'Batsman', rating: 4.2 },
    ],
    teamB: [
      { name: 'Ankit Sharma', role: 'Bowler', rating: 4.7 },
      { name: 'Sandeep Singh', role: 'Wicketkeeper', rating: 4.1 },
    ],
  };

  const [dropdownVisible, setDropdownVisible] = useState({
    teamA: false,
    teamB: false,
  });

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const toggleDropdown = (team) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [team]: !prev[team],
    }));
  };

  const handlePlayerClick = (playerName) => {
    setSelectedPlayer(playerName);
    navigation.navigate('Rate_Individualplayer', { playerName });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Team A */}
      <View style={styles.teamHeaderTeamA}>
        <Text style={styles.teamName}>Lorem Ipsum Titans</Text>
        <TouchableOpacity onPress={() => toggleDropdown('teamA')} style={styles.dropdownButton}>
          <Icon name={dropdownVisible.teamA ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {dropdownVisible.teamA && (
        <View style={styles.teamMembersList}>
          {teamData.teamA.map((player, index) => (
            <View key={index}>
              <PlayerInfo
                playerNumber={index + 1}
                playerName={player.name}
                onPlayerClick={handlePlayerClick}
                isSelected={selectedPlayer === player.name}
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
          <Icon name={dropdownVisible.teamB ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {dropdownVisible.teamB && (
        <View style={styles.teamMembersList}>
          {teamData.teamB.map((player, index) => (
            <View key={index}>
              <PlayerInfo
                playerNumber={index + 1}
                playerName={player.name}
                onPlayerClick={handlePlayerClick}
                isSelected={selectedPlayer === player.name}
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
    padding: 30,
    paddingLeft:0,
    paddingRight:0,
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
    fontSize: 16,
    fontFamily: 'HankenGroteskBlack',
  },
  dropdownButton: {
    padding: 10,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingLeft:15,
    paddingRight:15,
  },
  selectedPlayerRow: {
    backgroundColor: '#E3F2FD',
  },
  playerName: {
    fontSize: 18,
    fontFamily: 'HankenGroteskSemiBold',
    color: '#3D3D3D',
  },
  teamMembersList: {
    marginTop: 1,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 3, // Increased for better spacing
    marginTop: "-1%",
    marginBottom:10 // Added to increase the gap above the horizontal line
  },
});

export default MyPage;
