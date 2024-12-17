import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// MatchCard Component
const MatchCard = ({ title, team1, team2, team1Score, team2Score }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });
  const handleCardPress = () => {
    navigation.navigate('ComingSoon_cardDetails'); // Navigate to MatchCardPage
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.teams}>
          {/* Team 1 Section */}
          <View style={styles.team}>
            <Image source={team1.logo} style={styles.logo} />
            <Text style={styles.teamName}>{team1.name}</Text>
            <Text style={[styles.score, styles.teamScore]}>
              {team1Score || '-'} {/* Display dash if score is empty */}
            </Text>
          </View>

          {/* Team 2 Section */}
          <View style={styles.team}>
            <Image source={team2.logo} style={styles.logo} />
            <Text style={styles.teamName}>{team2.name}</Text>
            <Text style={[styles.score, styles.teamScore]}>
              {team2Score || '-'} {/* Display dash if score is empty */}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// MyPage Component
const MyPage = () => {
  const matchData = [
    {
      title: 'ISL - Match 1, 30 Nov',
      team1: {
        name: 'The Swords',
        logo: require('../assets/Team2.png'),
      },
      team2: {
        name: 'Team Lorem Ipsum Eagle',
        logo: require('../assets/Team.png'),
      },
      team1Score: '', // No score available (coming soon)
      team2Score: '', // No score available (coming soon)
    },
    {
      title: 'Football League - Semi Finals, 30 Nov',
      team1: {
        name: 'Lacrosse Sport Team',
        logo: require('../assets/Team.png'),
      },
      team2: {
        name: 'New Kings Warriors',
        logo: require('../assets/Team2.png'),
      },
      team1Score: '', // No score available (coming soon)
      team2Score: '', // No score available (coming soon)
    },
  ];

  return (
    <View style={styles.container}>
      {matchData.map((match, index) => (
        <MatchCard key={index} {...match} />
      ))}
    </View>
  );
};

// Screen Dimensions
const { width } = Dimensions.get('window');

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff', // Background color for better visuals
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#B8B8B8',
    justifyContent: 'flex-start',
    width: width * 0.9, // Fixed width relative to screen size
    height: 150, // Fixed height for uniformity
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
   fontFamily:"HankenGroteskBold",
    marginBottom: 8,
    color:"#3D3D3D"
  },
  teams: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: '100%',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  teamName: {
    fontSize: 16,
    flex: 1,
    fontFamily:"HankenGroteskSemiBold",
    color:"#3D3D3D"
  },
  score: {
    fontSize: 18,
    textAlign: 'right',
    color:"#3d3d3d"
  },
});

export default MyPage;
