import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window'); // Screen dimensions

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require('../assets/fonts/HankenGrotesk-Black.ttf'),
    HankenGroteskRegular: require('../assets/fonts/HankenGrotesk-Regular.ttf'),
  });

  const handleLoginSuccess = () => {
    navigation.navigate('TabNavigator2');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? height * 0.1 : 0} // Adjust offset if needed
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Top green section */}
        <View style={styles.topSection}>
          <Text style={styles.title}>Sports 2 Connect</Text>
        </View>

        {/* Card section with form */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Login</Text>

          {/* Username Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <Image
              source={require('../assets/user.png')}
              style={styles.inputIcon}
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Image
              source={require('../assets/password.png')}
              style={styles.inputIcon}
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleLoginSuccess}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Social Login */}
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/Google.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/facebook.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          {/* New User Text */}
          <Text style={styles.newUserText}>New User?</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    paddingTop: Platform.OS === 'ios' ? height * 0.15 : height * 0.12,
    paddingBottom: height * 0.05,
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.08,
    fontFamily: 'HankenGroteskBlack',
    color: '#fff',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  subtitle: {
    fontSize: width * 0.06,
    marginBottom: height * 0.03,
    fontFamily: 'HankenGroteskBlack',
    color: '#006336',
  },
  inputContainer: {
    width: '100%',
    marginBottom: height * 0.02,
  },
  input: {
    height: height * 0.06,
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    paddingLeft: width * 0.02,
    fontSize: width * 0.045,
    fontFamily: 'HankenGroteskRegular',
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
    paddingVertical: height * 0.02,
    borderRadius: 10,
    marginTop: height * 0.03,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontFamily: 'HankenGroteskBold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: height * 0.02,
    fontSize: width * 0.04,
    color: '#666666',
    fontFamily: 'HankenGroteskRegular',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: height * 0.03,
  },
  socialButton: {
    marginHorizontal: width * 0.02,
    padding: width * 0.01,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.1,
    height: width * 0.1,
  },
  newUserText: {
    textAlign: 'center',
    fontSize: width * 0.04,
    color: '#02364A',
    borderBottomColor: '#02364A',
    borderBottomWidth: 1,
    fontFamily: 'HankenGroteskRegular',
  },
});

export default LoginScreen;
