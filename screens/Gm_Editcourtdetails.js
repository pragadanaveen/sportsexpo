import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function CourtDetailsPage() {
const navigation=useNavigation()
  const [courtName, setCourtName] = useState('');
  const [surfaceType, setSurfaceType] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState('');
  const [notes, setNotes] = useState('');

const handlesave=()=>{
  navigation.navigate("Gm_Editcourtdetails")
}


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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.formContainer}>
        {/* Court Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Court Name</Text>
          <TextInput
            style={styles.inputField}
            value={courtName}
            onChangeText={setCourtName}
            placeholder="Sunrise Court"
          />
        </View>

        {/* Surface Type Dropdown */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Surface Type</Text>
          <Picker
            selectedValue={surfaceType}
            onValueChange={setSurfaceType}
            style={styles.picker} // Apply font to Picker component
          >
            <Picker.Item label="Grass Court" value="grass" style={styles.pickerItem} />
            <Picker.Item label="Clay Court" value="clay" style={styles.pickerItem} />
            <Picker.Item label="Hard Court" value="hard" style={styles.pickerItem} />
          </Picker>
        </View>

        {/* Dimensions Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Dimensions (Length x Width)</Text>
          <TextInput
            style={styles.inputField}
            value={dimensions}
            onChangeText={setDimensions}
            placeholder="78 ft * 36 ft"
          />
        </View>

        {/* Hourly Rate Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Hourly Rate</Text>
          <TextInput
            style={styles.inputField}
            value={hourlyRate}
            onChangeText={setHourlyRate}
            placeholder="₹500 per hour"
            keyboardType="numeric"
          />
        </View>

        {/* Availability Status Dropdown */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Availability Status</Text>
          <Picker
            selectedValue={availabilityStatus}
            onValueChange={setAvailabilityStatus}
            style={styles.picker} // Apply font to Picker component
          >
            <Picker.Item label="Available" value="available" style={styles.pickerItem} />
            <Picker.Item label="Not Available" value="not_available" style={styles.pickerItem} />
          </Picker>
        </View>

        {/* Notes Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Notes</Text>
          <TextInput
            style={styles.inputField}
            value={notes}
            onChangeText={setNotes}
            placeholder="Court closed on national holidays."
          />
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#E0E0E0' }]}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#00B562' }]} onPress={handlesave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    fontFamily: "HankenGroteskBlack"
  },
  inputField: {
    height: 40,
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 14,
    paddingLeft: 8,
    fontFamily: "HankenGroteskRegular"
  },
  picker: {
    height: 50,
    borderColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: "#f2f2f2",
    fontFamily: "HankenGroteskRegular", // Apply font to Picker component
  },
  pickerItem: {
    fontFamily: "HankenGroteskRegular", // Apply font family to Picker.Item
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8, // Added margin for spacing between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: "HankenGroteskBlack"
  },
});
