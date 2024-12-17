import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
const InstagramPost = ({ profileName, profileDesignation, postImage, caption, timestamp, likes, comments, shares }) => {
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image source={require("../assets/Logo.png")} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{profileName}</Text>
            <Text style={styles.profileDesignation}>{profileDesignation}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>...</Text>
        </TouchableOpacity>
      </View>

      <Image source={postImage} style={styles.postImage} />

      <View style={styles.footer}>
        <View style={styles.interactionIcons}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require("../assets/Logo.png")} style={styles.icon} />
            <Text style={styles.iconText}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require("../assets/Logo.png")} style={styles.icon} />
            <Text style={styles.iconText}>{comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require("../assets/Logo.png")} style={styles.icon} />
            <Text style={styles.iconText}>{shares}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
};

const InstagramFeed = () => {
  const posts = [
    {
      profileName: 'Rishika Jain',
      profileDesignation: 'Football Coach',
      postImage: require("../assets/postimage1.png"),
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timestamp: '3 days ago',
      likes: '9,044',
      comments: '76',
      shares: '17',
    },
    {
      profileName: 'John Doe',
      profileDesignation: 'Basketball Coach',
      postImage: require("../assets/postimage1.png"),
      caption: 'Vestibulum ante ipsum primis in faucibus orci.',
      timestamp: '5 days ago',
      likes: '5,200',
      comments: '50',
      shares: '10',
    },
    {
      profileName: 'Sarah Lee',
      profileDesignation: 'Soccer Coach',
      postImage: require("../assets/postimage1.png"),
      caption: 'Aliquam erat volutpat. Cras tristique nisl ut sapien.',
      timestamp: '1 week ago',
      likes: '2,300',
      comments: '120',
      shares: '30',
    },
  ];

  return (
    <ScrollView style={styles.feedContainer}>
      {posts.map((post, index) => (
        <InstagramPost key={index} {...post} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileDesignation: {
    fontSize: 12,
    color: '#777',
  },
  moreButton: {
    padding: 10,
  },
  moreButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777',
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 0,
    marginBottom: 10,
  },
  footer: {
    marginTop: 10,
  },
  interactionIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginLeft: 10,
  },
  iconText: {
    fontSize: 14,
    color: '#555',
  },
  caption: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  feedContainer: {
    flex: 1,
  },
});

export default InstagramFeed;
