import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
const ProfileEditScreen = () => {
  const [about, setAbout] = useState('');
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const handleSaveDetails = () => {
    // Handle saving the details to the server or local storage
    console.log('Saved details:', {
      about,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>About *</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          value={about}
          onChangeText={setAbout}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveDetails}>
        <Text style={styles.saveButtonText}>Save Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
    marginBottom: 8,
  },
  input: {
    height: 100,
    borderColor: '#8F8F8F',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    // backgroundColor: '#fff',
    fontSize: 16,
    textAlignVertical: 'top',
    fontFamily: 'HankenGroteskRegular',
    color:"#3D3D3D" // Ensures text is aligned to the top in multiline TextInput
  },
  saveButton: {
    backgroundColor: '#00B562',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 540,
  },
  saveButtonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
  },
});

export default ProfileEditScreen;
