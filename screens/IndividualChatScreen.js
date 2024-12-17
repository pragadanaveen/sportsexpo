import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hello, how are you?',
      sender: 'other',
      timestamp: '10:00 AM',
      profilePic: 'https://example.com/profile1.png',
    },
    {
      id: '2',
      text: "I'm doing great! How about you?",
      sender: 'me',
      timestamp: '10:02 AM',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      const message = {
        id: (messages.length + 1).toString(),
        text: newMessage,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const renderMessageItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'me' ? styles.senderMessage : styles.receiverMessage,
      ]}
    >
      <View style={styles.messageContent}>
        {item.sender === 'other' && (
          <Image
            source={{ uri: item.profilePic }}
            style={styles.profilePic}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message"
          multiline
        />
          <Image
            source={require('../assets/app.png')}
            style={styles.icon}
          />
          <Image
            source={require('../assets/camera.png')}
            style={styles.icon}
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Image
              source={require('../assets/sendbutton.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  messageContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    maxWidth: '100%',
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084ff',
    marginRight: 10,
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e5e5',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  textContainer: {
    maxWidth: '80%',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#bbb',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#A3A3A3',
    backgroundColor: '#fff',
    borderRadius:20
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    borderWidth: 0,
    paddingLeft: 10,
    fontSize: 15,
  },
  sendButton: {
    padding: 5,
    width: 30,
    height: 30,
  },
});

export default ChatScreen;
