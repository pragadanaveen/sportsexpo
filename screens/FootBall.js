import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import { useFonts } from 'expo-font';
// MatchCard Component
const MatchCard = ({ title, team1, team2, team1Score, team2Score, description }) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });
  const handleCardPress = () => {
    navigation.navigate('MatchCardPage');
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.teams}>
          {/* Team 1 */}
          <View style={styles.team}>
            <Image source={team1.logo} style={styles.logo} />
            <Text style={styles.teamName}>{team1.name}</Text>
            <Text style={[styles.score, styles.teamScore]}>{team1Score}</Text>
          </View>
          {/* Team 2 */}
          <View style={styles.team}>
            <Image source={team2.logo} style={styles.logo} />
            <Text style={styles.teamName}>{team2.name}</Text>
            <Text style={[styles.score, styles.teamScore]}>{team2Score}</Text>
          </View>
        </View>
        {/* Match Description */}
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </TouchableOpacity>
  );
};

// MyPage Component (Football Matches Only)
const MyPage = ({ navigation }) => {
  const matchData = [
    {
      title: 'ISL - Match 1, 30 Nov',
      sportType: 'cricket',
      team1: {
        name: 'The Swords',
        logo: require('../assets/Logo.png'),
      },
      team2: {
        name: 'Team Lorem Ipsum Eagle',
        logo: require('../assets/Logo.png'),
      },
      team1Score: '144/6(20)',
      team2Score: '-',
      description: 'TT chose to bat',
    },
    {
      title: 'Football League - Semi Finals, 30 Nov',
      sportType: 'football',
      team1: {
        name: 'Lacrosse Sport Team',
        logo: require('../assets/Team2.png'),
      },
      team2: {
        name: 'New Kings Warriors',
        logo: require('../assets/Team.png'),
      },
      team1Score: '3',
      team2Score: '2',
      description: 'ACD requires 4 goals to win',
    },
  ];

  // Filter football matches
  const footballMatches = matchData.filter(match => match.sportType === 'football');

  return (
    <View style={styles.container}>
      {footballMatches.map((match, index) => (
        <MatchCard key={index} {...match} navigation={navigation} />
      ))}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#B8B8B8',
    justifyContent: 'flex-start',
    width: width * 0.9,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'HankenGroteskBold',
    marginBottom: 6,
    color:"#3d3d3d"
  },
  teams: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    width: '100%',
    justifyContent: 'space-between',
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 6,
  },
  teamName: {
    fontSize: 14,
    fontFamily: 'HankenGroteskSemiBold',
    flex: 1,
    color:"#3d3d3d"
  },
  score: {
    fontSize: 17,
    textAlign: 'right',
    fontFamily: 'HankenGroteskBold',
    color:"#000"
  },
  description: {
    fontSize: 14,
    marginTop: "-2%",
    fontFamily: 'HankenGroteskRegular',
    color:"#000"
  },
});

export default MyPage;
