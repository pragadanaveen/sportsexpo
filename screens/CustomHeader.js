import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons
import { UseNavigation} from 'react';
import { useNavigation } from '@react-navigation/native';
// Static Player Data
const player = {
  name: 'John Doe',
  image: require('../assets/profile1.png'), // Ensure the image exists at this path
};

const CustomHeader = () => {
  const navigation=useNavigation();
  const handlename=()=>{
    navigation.navigate("GroupInfo")
  }
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>
      {/* Left side: Player Image and Name */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={player.image} // Player image
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10,marginLeft: "-20"}}
        />
        <Text style={{ fontWeight: 'bold' }} onPress={handlename}>{player.name}</Text>
      </View>

      {/* Right side: Icons for Call, Video Call, and More Options */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../assets/Whatsapp_call.png')} // Ensure this path is correct
          style={{ width: 25, height: 25, marginLeft: 25 }} // Increased the margin and size
        />
        <Image
          source={require('../assets/Videocall.png')} // Ensure this path is correct
          style={{ width: 25, height: 25, marginLeft: 25 }} // Increased the margin and size
        />
        <Ionicons
          name="ellipsis-vertical" // Vertical three dots icon
          size={25}
          color="gray" // Icon color
          style={{ marginLeft: 25}} // Increased space between icons
        />
      </View>
    </View>
  );
};

export default CustomHeader;
