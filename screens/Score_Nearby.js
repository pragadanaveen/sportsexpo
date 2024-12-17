import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const MatchScoreCard = () => {
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ensure fonts are loaded before rendering
  }

  return (
    <View style={styles.container}>
      <View style={styles.teamWrapper}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>The Swords</Text>
          <Image source={require('../assets/Team.png')} style={styles.teamLogo} />
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>122/6</Text>
          </View>
          <Text style={styles.overs}>(10.4 Overs)</Text>
        </View>
      </View>

      <View style={styles.vsContainer}>
        <Text style={styles.vsText}>VS</Text>
      </View>

      <View style={styles.teamWrapper}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Lorem Ipsum Eagle</Text>
          <Image source={require('../assets/Team2.png')} style={styles.teamLogo} />
          <Text style={styles.teamScore}>Yet to Bat</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  teamWrapper: {
    flex: 1,
    justifyContent: 'center', // Ensures equal vertical alignment
  },
  teamContainer: {
    alignItems: 'center',
    justifyContent: 'center', // Aligns content within the team container
  },
  teamLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
    marginBottom: 15, // Ensures consistent spacing below team name
    color: '#3D3D3D',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  score: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'HankenGroteskBold',
  },
  overs: {
    fontSize: 16,
    color: '#525252',
    fontFamily: 'HankenGroteskRegular',
  },
  teamScore: {
    fontSize: 16,
    color: '#525252',
    fontFamily: 'HankenGroteskBold',
    marginTop: 10, // Aligns with "overs" placement
  },
  vsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vsText: {
    fontSize: 20,
    fontFamily: 'HankenGroteskBold',
    color: '#000',
  },
});

export default MatchScoreCard;
