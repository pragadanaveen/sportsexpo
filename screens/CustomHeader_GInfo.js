import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons
import { useNavigation } from '@react-navigation/native';

// Static Player Data
const player = {
  name: 'John Doe',
  image: require('../assets/profile1.png'), // Ensure the image exists at this path
};

const CustomHeader = () => {
  const navigation = useNavigation();

  const handleName = () => {
    navigation.navigate('GroupInfo');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 10, // Control horizontal padding
        paddingVertical: 5, // Optional vertical padding
      }}
    >
      {/* Left Side: Player Image and Name */}
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        <Image
          source={player.image}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10, // Space between image and text
          }}
        />
        <Text
          style={{ fontWeight: 'bold' }}
          onPress={handleName}
        >
          {player.name}
        </Text>
      </View>

      {/* Right Side: Ellipsis Icon */}
      <View>
        <Ionicons
          name="ellipsis-vertical"
          size={25}
          color="gray"
        />
      </View>
    </View>
  );
};

export default CustomHeader;
