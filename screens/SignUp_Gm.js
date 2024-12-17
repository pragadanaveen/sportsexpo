import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { height } = Dimensions.get('window'); // Get screen height

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlelogin = () => {
    navigation.navigate("Login_Gm");
  }
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
    'HankenGroteskMedium': require('../assets/fonts/HankenGrotesk-Medium.ttf'),
  });

  const handleSignUp = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleNavigation= () => {
    console.log("Navigating to TabNavigator2");
    navigation.navigate('TabNavigator2');
  };

  if (!fontsLoaded) {
    return null; // Add a loader if needed
  }

  return (
    <View style={styles.container}>
      {/* Top green section */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Sports 2 Connect</Text>
      </View>

      {/* Card section with form */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>SIGNUP</Text>

        <View style={styles.inputContainer}>
          {username === '' && <Text style={styles.placeholderText}>Username</Text>}
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="transparent"
          />
          <Image
            source={require('../assets/user.png')}
            style={styles.inputIcon}
          />
        </View>

        <View style={styles.inputContainer}>
          {email === '' && <Text style={styles.placeholderText}>Email</Text>}
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="transparent"
          />
          <Image
            source={require('../assets/email.png')}
            style={styles.inputIcon}
          />
        </View>

        <View style={styles.inputContainer}>
          {password === '' && <Text style={styles.placeholderText}>Password</Text>}
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholderTextColor="transparent"
          />
          <Image
            source={require('../assets/password.png')}
            style={styles.inputIcon}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or continue with</Text>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/Google.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/facebook.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.alreadyUserText} onPress={handlelogin}>Already a User?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006336',
  },
  topSection: {
    backgroundColor: '#006336',
    width: '100%',
    paddingTop: 130,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontFamily: "HankenGroteskBlack",
    color: '#fff',
  },
  card: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    height: height * 0.8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 25,
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: "HankenGroteskBlack",
    color: '#006336',
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 15,
    width: '100%',
  },
  input: {
    height: 50,
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    paddingLeft: 10,
    fontSize: 16,
    width: '100%',
    fontFamily: "HankenGroteskRegular",
  },
  placeholderText: {
    position: 'absolute',
    left: 10,
    top: 14,
    fontSize: 16,
    color: '#666666',
    fontFamily: "HankenGroteskBold",
  },
  inputIcon: {
    position: 'absolute',
    top: 12,
    right: 10,
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: '#006336',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '60%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "HankenGroteskBold",
  },
  orText: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 17,
    color: '#555',
    fontFamily: "HankenGroteskRegular",
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    margin: 5,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  alreadyUserText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#02364A',
    borderBottomColor: "#666666",
    borderBottomWidth: 1,
    fontFamily: "HankenGroteskRegular",
  },
});

export default SignupScreen;
