import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const VerifyEmailScreen = () => {
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require('../assets/fonts/HankenGrotesk-Black.ttf'),
    HankenGroteskRegular: require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    HankenGroteskSemiBold: require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    HankenGroteskBold: require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(23);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (resendTimer > 0) {
        setResendTimer((prev) => prev - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [resendTimer]);

  const handleOtpChange = (text) => {
    setOtp(text);
  };

  const handleResendOtp = () => {
    // Implement logic to resend OTP here
    setResendTimer(23);
  };

  const handleSubmit = () => {
    // Implement logic to submit OTP here
    navigation.navigate("VerifyedPersonScreen");
    console.log('OTP:', otp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Verify Email</Text>
        <Text style={styles.descriptionText}>
          Please enter the OTP sent to
        </Text>
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>abcde123@gmail.com</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/Edit.png')} // Replace with your edit icon
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.otpContainer}>
          {Array(4)
            .fill()
            .map((_, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={handleOtpChange}
              />
            ))}
        </View>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Resend OTP in {resendTimer}s
          </Text>
          {resendTimer === 0 && (
            <TouchableOpacity onPress={handleResendOtp}>
              <Text style={styles.resendLink}>Resend OTP</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'HankenGroteskBold',
    marginBottom: 10,
    color: '#333',
  },
  descriptionText: {
    fontSize: 20,
    color: '#000', // Black color
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'HankenGroteskBold',
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  emailText: {
    fontSize: 16,
    color: '#525252',
    fontFamily: 'HankenGroteskSemiBold',
    marginRight: 5,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    elevation: 2,
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  resendText: {
    fontSize: 17,
    color: '#525252',
    fontFamily: 'HankenGroteskSemiBold', // Resend OTP text color
  },
  resendLink: {
    fontSize: 16,
    color: '#8F8F8F',
    textDecorationLine: 'underline', // Underline for the link
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#00B562',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 2,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    color: '#000', // Black color for the text
    fontFamily: 'HankenGroteskBold',
  },
});

export default VerifyEmailScreen;
