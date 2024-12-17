import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; // Make sure you have installed these icons
import { useFonts } from 'expo-font';
const MyPage = () => {
  const [name, setName] = useState('Harshit Kapoor');
  const [profilePicture, setProfilePicture] = useState(require('../assets/profile1.png'));
  const [textContent, setTextContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // State to hold messages
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
    HankenGroteskMedium: require("../assets/fonts/HankenGrotesk-Medium.ttf"),
  });
  const handleSend = () => {
    if (message.trim()) {
      // Add the new message to the messages list
      setMessages([...messages, { name, profilePicture, message }]);
      setMessage(''); // Clear the message input after sending
    }
  };
  return (
    <View style={styles.container}>
      {/* Scrollable area to display all messages */}
      <ScrollView style={styles.messageContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={styles.messageBox}>
            <View style={styles.header}>
              <Image source={msg.profilePicture} style={styles.profilePicture} />
              <View style={styles.headerTextContainer}>
                <Text style={styles.name}>{msg.name}</Text>
                {/* Display the message instead of the textContent */}
                <Text style={styles.text}>{msg.message}</Text>
              </View>
            </View>
            {/* No need to display textContent here anymore */}
          </View>
        ))}
      </ScrollView>

      {/* Footer area for message input and buttons */}
      <View style={styles.footer}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <MaterialIcons name="send" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.emojiButton}>
          <Ionicons name="happy-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    padding: 9,
    marginBottom: 60, // Adjust for the footer space
  },
  messageBox: {
    marginBottom: 15,
    // backgroundColor: '#f9f9f9',
    // padding: 15,
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  headerTextContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 15,
    // borderWidth: 1,
    // borderColor: '#ddd',
  },
  name: {
    fontSize: 14,
    fontFamily: 'HankenGroteskRegular',
    color:"#000"
  },
  text: {
    fontSize: 17,
    color: '#000',
    lineHeight: 25,
    fontFamily: 'HankenGroteskMedium',
  color:"#666666"
  },
  footer: {
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sendButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiButton: {
    marginLeft: 10,
    padding: 10,
  },
});

export default MyPage;
