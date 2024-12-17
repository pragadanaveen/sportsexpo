// PlayerCallout.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PlayerCallOut = ({ player, onViewProfile, onSendRequest }) => {
  return (
    <View style={styles.calloutContainer}>
      <View style={styles.header}>
        <Text style={styles.playerName}>{player.name}</Text>
        <Text style={styles.playerRating}>{player.rating}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoSection}>
          <Text>Total Games</Text>
          <Text>{player.totalGames}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text>Player Since</Text>
          <Text>{player.playerSince}</Text>
        </View>
      </View>
      <View style={styles.gameContainer}>
        <View style={styles.gameSection}>
          <Text>Tennis</Text>
          <Text>Net Player</Text>
          <Text>80 matches</Text>
        </View>
        <View style={styles.gameSection}>
          <Text>Cricket</Text>
          <Text>All Rounder</Text>
          <Text>120 matches</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onViewProfile}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSendRequest}>
          <Text style={styles.buttonText}>Send Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calloutContainer: {
    padding: 10,
    width: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  playerName: {
    fontWeight: 'bold',
  },
  playerRating: {
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoSection: {
    alignItems: 'center',
  },
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gameSection: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default PlayerCallOut;
