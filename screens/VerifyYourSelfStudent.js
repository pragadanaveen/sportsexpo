import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // Importing library

const ProfileEditScreen = () => {
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require('../assets/fonts/HankenGrotesk-Black.ttf'),
    HankenGroteskRegular: require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    HankenGroteskSemiBold: require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    HankenGroteskBold: require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });

  const navigation = useNavigation();
  const [profession, setProfession] = useState('');
  const [college, setCollege] = useState('');
  const [institute, setInstitute] = useState('');
  const [collegeEmail, setCollegeEmail] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [idCardImage, setIdCardImage] = useState(null);

  const professionOptions = [
    { label: 'Student', value: 'Student' },
    { label: 'Teacher', value: 'Teacher' },
  ];

  const collegeOptions = [
    { label: 'NIT Rourkela', value: 'NIT Rourkela' },
    { label: 'IIT Bombay', value: 'IIT Bombay' },
    { label: 'IISc Bangalore', value: 'IISc Bangalore' },
  ];

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setIdCardImage(result.uri);
    }
  };

  const handleSaveDetails = () => {
    console.log('Saved details:', {
      profession,
      college,
      institute,
      idCardImage,
      collegeEmail,
      companyEmail,
    });
    navigation.navigate('VerifyYourself');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.formContent}>
            {/* Profession Dropdown */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Profession *</Text>
              <Dropdown
                data={professionOptions}
                labelField="label"
                valueField="value"
                value={profession}
                onChange={(item) => setProfession(item.value)}
                style={styles.dropdown}
                placeholder="Select Profession"
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                renderItem={(item) => (
                  <Text style={styles.dropdownItem}>{item.label}</Text>
                )}
              />
            </View>

            {/* Fields for "Student" */}
            {profession === 'Student' && (
              <>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>College</Text>
                  <Dropdown
                    data={collegeOptions}
                    labelField="label"
                    valueField="value"
                    value={college}
                    onChange={(item) => setCollege(item.value)}
                    style={styles.dropdown}
                    placeholder="Select College"
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    renderItem={(item) => (
                      <Text style={styles.dropdownItem}>{item.label}</Text>
                    )}
                  />
                </View>

                <TouchableOpacity style={styles.uploadButton} onPress={handlePickImage}>
                  <View style={styles.iconWrapper}>
                    {idCardImage ? (
                      <Image source={{ uri: idCardImage }} style={styles.idCardImage} />
                    ) : (
                      <Feather name="camera" size={30} color="#3d3d3d" />
                    )}
                  </View>
                  <Text style={styles.uploadButtonText}>
                    {idCardImage ? 'Change College ID Card' : 'Upload College ID Card'}
                  </Text>
                </TouchableOpacity>

                <Text style={styles.orText}>Or</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter College Email ID"
                  value={collegeEmail}
                  onChangeText={setCollegeEmail}
                  keyboardType="email-address"
                />
              </>
            )}

            {/* Fields for "Teacher" */}
            {profession === 'Teacher' && (
              <>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Institute/Organization</Text>
                  <Dropdown
                    data={collegeOptions}
                    labelField="label"
                    valueField="value"
                    value={institute}
                    onChange={(item) => setInstitute(item.value)}
                    style={styles.dropdown}
                    placeholder="Enter Institute/Organization Name"
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    renderItem={(item) => (
                      <Text style={styles.dropdownItem}>{item.label}</Text>
                    )}
                  />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.label}>Company Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Company Email ID"
                    value={companyEmail}
                    onChangeText={setCompanyEmail}
                    keyboardType="email-address"
                  />
                </View>
              </>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>

      {/* Fixed Footer with Verify Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.saveButton,
            { backgroundColor: profession ? '#00B562' : '#aaa' },
          ]}
          onPress={handleSaveDetails}
          disabled={!profession}
        >
          <Text style={styles.saveButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  formContent: {
    flex: 1,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 17,
    fontFamily: 'HankenGroteskBold',
    marginBottom: 8,
    color: '#000',
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: '#8f8f8f',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#3d3d3d',
    fontFamily: 'HankenGroteskRegular',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#3d3d3d',
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'HankenGroteskRegular',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#3d3d3d',
    fontFamily: 'HankenGroteskSemiBold',
  },
  saveButton: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#00B562",
    width:"90%",
    alignSelf:"center"
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'HankenGroteskSemiBold',
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingVertical: 10,
  },
  iconWrapper: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#cccccc',
    marginRight: 10,
  },
  uploadButtonText: {
    fontSize: 16,
    fontFamily: 'HankenGroteskRegular',
    color: '#3d3d3d',
  },
  idCardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default ProfileEditScreen;
