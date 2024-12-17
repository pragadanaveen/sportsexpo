import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const ProfileScreen = () => {
  const navigation=useNavigation();
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const handleaccountsettings =()=>{
    navigation.navigate("Gm_AccountSettings")
}
  const handleamybanners =()=>{
  navigation.navigate("Gm_MyBanners")
  }
  const handlebankaccount =()=>{
   navigation.navigate("Gm_Bankaccount")
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* User Info Section */}
        <View style={styles.userInfo}>
          <Image
            source={require("../assets/profile1.png")} // Replace with user image URL
            style={styles.userImage}
          />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>johndoe@example.com</Text>
            <Text style={styles.userPhone}>+1 123-456-7890</Text>
            <View style={styles.verifiedContainer}>
              <Text style={styles.verifiedText}>Verified Account</Text>
              <Icon name="check-circle" size={16} color="green" />
            </View>
          </View>
        </View>
        {/* Section: Account & Security */}
        <Text style={styles.sectionHeading}>Account & Security</Text>
        <TouchableOpacity style={styles.row}>
          <Icon name="settings" size={24} color="black" />
          <Text style={styles.rowText}>Account Settings</Text>
          <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon}  onPress={handleaccountsettings}/>
        </TouchableOpacity>
        <View style={styles.divider} />
        {/* Section: My Banners */}
        <TouchableOpacity style={styles.row}>
          <Icon name="flag" size={24} color="black" />
          <Text style={styles.rowText}>My Banners</Text>
          <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} onPress={handleamybanners}/>
        </TouchableOpacity>
        <View style={styles.divider} />
        {/* Section: Bank Account */}
        <TouchableOpacity style={styles.row}>
          <Icon name="account-balance" size={24} color="black" />
          <Text style={styles.rowText}>Bank Account</Text>
          <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon}   onPress={handlebankaccount}/>
        </TouchableOpacity>
        <View style={styles.divider} />
        {/* Section: General */}
        <Text style={styles.sectionHeading}>General</Text>
        <TouchableOpacity style={styles.row}>
          <Icon name="description" size={24} color="black" />
          <Text style={styles.rowText}>Terms & Conditions</Text>
          <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.row}>
          <Icon name="lock" size={24} color="black" />
          <Text style={styles.rowText}>Privacy Policy</Text>
          <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.row}>
          <Icon name="support-agent" size={24} color="black" />
          <Text style={styles.rowText}>Customer Services</Text>
          <Icon name="chevron-right" size={24} color="black" style={styles.chevronIcon} />
        </TouchableOpacity>
        <View style={styles.divider} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContent: {
    paddingHorizontal: width * 0.04, // Horizontal padding for responsiveness
    paddingBottom: height * 0.02, // Padding at the bottom for better spacing
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.04, // Adjusted spacing for better separation
    paddingTop: height * 0.06,
  },
  userImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
  },
  userDetails: {
    flex: 1,
    marginLeft: width * 0.05,
  },
  userName: {
    fontSize: width * 0.05,
    fontFamily:"HankenGroteskBold"
  },
  userEmail: {
    fontSize: width * 0.045,
    color: "#666",
    fontFamily:"HankenGroteskRegular"
  },
  userPhone: {
    fontSize: width * 0.045,
    color: "#666",
     fontFamily:"HankenGroteskRegular"
  },
  verifiedContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.015,
  },
  verifiedText: {
    fontSize: width * 0.04,
    color: "green",
    marginRight: width * 0.02,
     fontFamily:"HankenGroteskBold"
  },
  sectionHeading: {
    fontSize: width * 0.05,
     fontFamily:"HankenGroteskBold",
    marginVertical: height * 0.015,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.015,
  },
  rowText: {
    fontSize: width * 0.045,
    flex: 1,
    marginLeft: width * 0.03,
     fontFamily:"HankenGroteskRegular"
  },
  chevronIcon: {
    marginLeft: "auto",
     fontFamily:"HankenGroteskBold"
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: height * 0.01,
  },
});
export default ProfileScreen;