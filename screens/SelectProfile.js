import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window'); // Get screen dimensions

const InitialScreen = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height; // Get the screen height

  console.log('Screen Height:', screenHeight); // Logs the screen height in the console

  // State to track the selected role
  const [selectedRole, setSelectedRole] = useState(null);

  // For fonts
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
  });

  // Use effect to hide splash screen after fonts are loaded
  useEffect(() => {
    const loadResources = async () => {
      try {
        // Prevent the splash screen from auto hiding
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    };

    loadResources();
  }, []);

  // Once fonts are loaded, hide the splash screen
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // If fonts are not loaded, do not render the UI yet
  if (!fontsLoaded) {
    return null; // This keeps the splash screen visible while fonts are loading
  }

  // Function to handle role selection
  const handleRoleSelect = (role) => {
    setSelectedRole(role); // Set the selected role
  };

  // Handle sign-up logic with navigation
  const handlesignup = () => {
    if (selectedRole === 'Ground Manager') {
      // If Ground Manager is selected, navigate to TabNavigator2
      // navigation.navigate("TabNavigator2");
      navigation.navigate("SignUp_Gm")
    }

    if (selectedRole === 'Player') {
      // If Player is selected, navigate to SignUp
      navigation.navigate("SignUp");
    }
    if (selectedRole === 'Coach') {
      // If Player is selected, navigate to SignUp
      navigation.navigate("SignUp");
    }
  };

  return (
    <View style={styles.container}>
      {/* Top green section */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Sports 2 Connect</Text>
      </View>

      {/* Card section with roles and button */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Select your role to continue</Text>

        <View style={styles.roleOptionsContainer}>
          {/* Player role option */}
          <TouchableOpacity
            style={[
              styles.roleOption,
              selectedRole === 'Player' && styles.selectedRoleOption, // Apply selected style for Player
            ]}
            onPress={() => handleRoleSelect('Player')}
          >
            <View style={styles.roleOptionIconContainer}>
              <Image
                source={require('../assets/Player.png')} // Local image for Player role
                style={styles.roleOptionIcon}
              />
            </View>
            <Text style={styles.roleOptionText}>Player</Text>
          </TouchableOpacity>

          {/* Coach role option */}
          <TouchableOpacity
            style={[
              styles.roleOption,
              selectedRole === 'Coach' && styles.selectedRoleOption, // Apply selected style for Coach
            ]}
            onPress={() => handleRoleSelect('Coach')}
          >
            <View style={styles.roleOptionIconContainer}>
              <Image
                source={require('../assets/Coache.png')} // Local image for Coach role
                style={styles.roleOptionIcon}
              />
            </View>
            <Text style={styles.roleOptionText}>Coach</Text>
          </TouchableOpacity>

          {/* Ground Manager role option */}
          <TouchableOpacity
            style={[
              styles.roleOption,
              selectedRole === 'Ground Manager' && styles.selectedRoleOption, // Apply selected style for Ground Manager
            ]}
            onPress={() => handleRoleSelect('Ground Manager')}
          >
            <View style={styles.roleOptionIconContainer}>
              <Image
                source={require('../assets/Groundmanager.png')} // Local image for Ground Manager role
                style={styles.roleOptionIcon}
              />
            </View>
            <Text style={styles.roleOptionText}>Ground Manager</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.getStartedButton,
            !selectedRole && styles.disabledButton // Apply disabledButton style if no role is selected
          ]}
          onPress={handlesignup}
          disabled={!selectedRole} // Disable the button if no role is selected
        >
          <Text
            style={[
              styles.getStartedButtonText,
              !selectedRole && styles.disabledButtonText // Apply disabled text style if no role is selected
            ]}
          >
            Get Started
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006336', // Green background for the top section
  },
  topSection: {
    // flex: 0.2, // Take up the remaining 20% of the screen height
    alignItems: 'center', // Centers content horizontally
    justifyContent: 'center', // Centers content vertically
    // backgroundColor: 'pink',
    paddingTop: 80,
    paddingBottom:50,
  },
  disabledButton: {
    backgroundColor: '#D3D3D3', // Light gray background for disabled state
  },
  disabledButtonText: {
    color: '#A9A9A9', // Gray color for disabled text
  },

  title: {
    fontSize: 35,
    fontFamily: "HankenGroteskBlack",
    color: '#fff',
  },
  card: {
    // flex: 0.8, // Takes up 80% of the screen height
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%', // Full width of the screen
    height: height - 110,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds shadow on Android
    justifyContent: 'center', // Centers all content vertically within the card
  },
  title: {
    fontSize: 35,
    fontFamily: "HankenGroteskBlack",
    color: '#fff',
  },
  subtitle: {
    fontSize: 25,
    marginBottom: 40, // Adds space below subtitle
    textAlign: 'center',
    fontFamily: "HankenGroteskSemiBold",
  },
  roleOptionsContainer: {
    alignItems: 'center',
    width: '100%',
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 15,
    width: '80%',
    height: "18%",
    fontFamily: "HankenGroteskRegular",
  },
  roleOptionIconContainer: {
    // backgroundColor: '#E0E0E0',
    padding: 10,
    // borderRadius: 50,
    marginRight: 15,
  },
  roleOptionIcon: {
    width: 40, // Adjust the size of the icon image
    height: 40,
  },
  roleOptionText: {
    fontSize: 20,
    fontFamily: "HankenGroteskSemiBold",
  },
  selectedRoleOption: {
    backgroundColor: '#EAFFF5', // Light green background for selected option
    borderWidth: 0.5, // Add border
    borderColor: 'rgba(0, 99, 54, 1)', // Black border color
  },
  getStartedButton: {
    backgroundColor: '#006336',
    padding: 15,
    borderRadius: 10,
    width: '60%',
    marginTop: "-23%",
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: "HankenGroteskBold",
    textAlign: 'center',
  },});


export default InitialScreen;
