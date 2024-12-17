import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For the edit icon
import { useNavigation } from '@react-navigation/native';

const JobPostingForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('harishjayaraj12@gmail.com');
  const [isEditing, setIsEditing] = useState(false);
  const [availableCredits, setAvailableCredits] = useState(0); // Track available credits

  const handleSubmit = () => {
    console.log('Email:', email);
    navigation.navigate("JobPost_SuccessScreen");
  };

  const handleTopUpPress = () => {
    navigation.navigate('WalletTopUpScreen');
  };

  return (
    <View style={styles.container}>
      {/* Instruction Text */}
      <Text style={styles.instructionText}>
        You will receive applicants to the below email.
      </Text>

      {/* Email Field with Edit Icon Inside */}
      <View style={styles.emailContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
        />
        <TouchableOpacity
          style={styles.editIconContainer}
          onPress={() => setIsEditing(!isEditing)}
        >
          <MaterialIcons
            name={isEditing ? 'done' : 'edit'}
            size={20}
            color="#007bff"
          />
        </TouchableOpacity>
      </View>

      {/* Spacer and Credit Points Info */}
      <Text style={styles.creditRequirementText}>
        To post the job you will be requiring 20 credit points.
      </Text>

      {/* Available Credit Section */}
      <View style={styles.creditContainer}>
        <MaterialIcons name="account-balance-wallet" size={20} style={styles.creditIcon} />
        <Text style={styles.creditText}>Available Credit</Text>
        <Text style={styles.creditPoints}>{availableCredits} Points</Text>
      </View>

      {/* Top-Up Button */}
      <TouchableOpacity style={styles.topUpButton} onPress={handleTopUpPress}>
        <Text style={styles.topUpButtonText}>Top-up your wallet to gain credit points</Text>
        <MaterialIcons name="arrow-forward" size={20} style={styles.arrowIcon} />
      </TouchableOpacity>

      {/* Post Job Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={[
            styles.postJobButton,
            availableCredits === 0 && styles.disabledButton, // Apply disabled style
          ]}
          onPress={handleSubmit}
          disabled={availableCredits === 0} // Disable button if credits are zero
        >
          <Text
            style={[
              styles.postJobButtonText,
              availableCredits === 0 && styles.disabledButtonText, // Adjust text style
            ]}
          >
            Post Job
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 30,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 35,
  },
  editIconContainer: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  creditRequirementText: {
    fontSize: 14,
    marginBottom: 20,
  },
  creditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 30,
    backgroundColor: '#fff',
    height: '9%',
  },
  creditIcon: {
    marginRight: 10,
  },
  creditText: {
    fontSize: 14,
    flex: 1,
  },
  creditPoints: {
    fontWeight: 'bold',
  },
  topUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#bbddff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
    width: '100%',
    height: '12%',
  },
  topUpButtonText: {
    color: '#000',
    flex: 1,
  },
  arrowIcon: {
    color: '#000',
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  postJobButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  postJobButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc', // Greyed-out background for disabled state
  },
  disabledButtonText: {
    color: '#999', // Greyed-out text for disabled state
  },
});

export default JobPostingForm;
