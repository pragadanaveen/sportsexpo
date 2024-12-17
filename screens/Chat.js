// import React, { Component } from 'react';
// import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

// export default class Chat extends Component {
//   render() {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.container}>
//           <Text style={styles.text}>Content starts below the status bar</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "red",
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Add padding for Android status bar

//   },
//   container: {
//     flex: 1,
//     justifyContent: "flex-start", // Start content from the top
//     alignItems: "center",
//     backgroundColor: "red"
//   },
//   text: {
//     fontSize: 20,
//     color: "#333",
//   },
// });


import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CreateGroup from './CreateGroup'
import GroupChat from './GroupChat'

const App = () => {
  const [activeTab, setActiveTab] = useState('People');
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("GroupChat");
    console.log("navigation was happened");
  }
  const handleAddPress = () => {
    if (activeTab === 'Groups') {
      navigation.navigate('CreateGroup'); // Navigate to the CreateGroup screen
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'People':
        return (
          <View style={styles.contentContainer}>
            {[1, 2, 3].map((item, index) => (
              <View key={index} style={styles.cardContainer}>
                <View style={styles.profileContainer}>
                  <Image
                    source={require('../assets/profile1.png')}
                    style={styles.profilePic}
                  />
                  <View style={styles.profileTextContainer}>
                    <Text style={styles.playerName}>
                      John Doe <Ionicons name="checkmark-circle" size={16} color="blue" />
                    </Text>
                    <Text style={styles.playerInfo}>Are we playing today?</Text>
                  </View>
                </View>
                <View style={styles.notificationContainer}>
                  <Text style={styles.timeCard}>10:30 AM</Text>
                  <View style={[styles.notificationBadge, { backgroundColor: 'green' }]} >
                    <Text style={styles.notificationText}>2</Text>
                  </View>
                </View>
              </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
              <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        );
      case 'Teams':
        return (
          <View style={styles.contentContainer}>
            {[{ id: 1, name: 'Team A', notifications: 2 }, { id: 2, name: 'Team B', notifications: 5 }, { id: 3, name: 'Team C', notifications: 0 }].map(
              (team, index) => (
                <View key={index} style={styles.cardContainer}>
                  <View style={styles.profileContainer}>
                    <Image
                      source={require('../assets/profile1.png')}
                      style={styles.profilePic}
                    />
                    <View style={styles.profileTextContainer}>
                      <Text style={styles.playerName}>{team.name}</Text>
                      <Text style={styles.playerInfo}>Team chat message here...</Text>
                    </View>
                  </View>
                  <View style={styles.notificationContainer}>
                    <Text style={styles.timeCard2}>10:30 AM</Text>
                    {team.notifications > 0 && (
                      <View
                        style={[styles.notificationBadge, { backgroundColor: 'green' }]}>
                        <Text style={styles.notificationText}>
                          {team.notifications}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              )
            )}
            <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
              <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        );
        case 'Groups':
          return (
            <View style={styles.contentContainer}>
              {[1, 2, 3].map((item, index) => (
                <View key={index} style={styles.cardContainer}>
                  <View style={styles.profileContainer}>
                    <Image
                      source={require('../assets/profile1.png')}
                      style={styles.profilePic}
                    />
                    <View style={styles.profileTextContainer}>
                      <Text style={styles.playerName} onPress={handleCardPress}>
                        Group {item}
                      </Text>
                      <Text style={styles.playerInfo} onPress={handleCardPress}>Group message goes here.</Text>
                    </View>
                  </View>
                  <View style={styles.notificationContainer}>
                    <Text style={styles.timeCard2} onPress={handleCardPress}>10:30 AM</Text>
                    <View style={[styles.notificationBadge, { backgroundColor: 'green' }]} >
                      <Text style={styles.notificationText} onPress={handleCardPress}>2</Text>
                    </View>
                  </View>
                </View>
              ))}
              <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
                <Ionicons name="add" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          );
      case 'Requests':
        return (
          <View style={styles.contentContainer}>
            {[1, 2, 3].map((item, index) => (
              <View key={index} style={[styles.cardContainer, { backgroundColor: '#EDEAFF' }]}>
                <View style={styles.profileContainer}>
                  <Image
                    source={{ uri: 'https://via.placeholder.com/50' }}
                    style={styles.profilePic}
                  />
                  <View style={styles.profileTextContainer}>
                    <Text style={styles.playerName}>Player {item}</Text>
                    <View style={styles.ratingContainer}>
                      <Ionicons name="star" size={14} color="gold" />
                      <Text style={styles.ratingText}>4.{item}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={[styles.actionButton, { backgroundColor: 'green' }]}>
                    <Text style={styles.buttonText}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.actionButton, { backgroundColor: 'red' }]}>
                    <Text style={styles.buttonText}>Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
              <Ionicons name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        );
      default:
        return (
          <View style={styles.contentContainer}>
            <Text>{`${activeTab} content coming soon...`}</Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.tabContainer}>
        {['People', 'Teams', 'Groups', 'Requests'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText,
            ]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 14,
    color: '#555',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  contentContainer: {
    padding: 20,
    position: 'relative', // To position the add button at the bottom-right
    flex: 1,
  },
  cardContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row', // Align sections horizontally
    justifyContent: 'space-between', // Space evenly
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileTextContainer: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  notificationContainer: {
    flexDirection: 'column', // Arrange time and notification vertically
    alignItems: 'flex-end', // Align them to the right
    justifyContent: 'center', // Center items vertically
  },
  timeCard2: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4, // Space between the time and the badge
  },
  notificationBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
});

export default App;









