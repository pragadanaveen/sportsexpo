import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const sportsData = [
  {
    value: 'cricket',
    lable: 'Cricket',
    image: require('../assets/Tennis.png'),
  },
  {
    value: 'football',
    lable: 'Football',
    image: require('../assets/Tennis.png'),
  },
  {
    value: 'basketball',
    lable: 'Basketball',
    image: require('../assets/Tennis.png'),
  },
  {
    value: 'tennis',
    lable: 'Tennis',
    image: require('../assets/Tennis.png'),
  },
  {
    value: 'badminton',
    lable: 'Badminton',
    image: require('../assets/Tennis.png'),
  },
];

export default function GroundDetailsPage() {
  const navigation = useNavigation()
  const [groundName, setGroundName] = useState('Phoenix Sports Arena');
  const [groundAddress, setGroundAddress] = useState('ABC Nagar, Nehru Colony, Hyderabad.');
  const [amenityText, setAmenityText] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [selectedSport, setSelectedSport] = useState('');
  const [addedSports, setAddedSports] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);
  const handlesave = () => {
    navigation.navigate("Gm_Editcourtdetails")
  }
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require('../assets/fonts/HankenGrotesk-Black.ttf'),
    HankenGroteskRegular: require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    HankenGroteskSemiBold: require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
  });

  useEffect(() => {
    const loadImages = async () => {
      const storedImages = await AsyncStorage.getItem('selectedImages');
      if (storedImages) {
        setSelectedImages(JSON.parse(storedImages));
      } else {
        setSelectedImages([]); // Fallback to empty array if no images are stored
      }
    };
    loadImages();
  }, []);


  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted || !cameraPermission.granted) {
      Alert.alert('Permission to access camera and photos is required!');
      return;
    }

    Alert.alert('Select Photo', 'Choose an option', [
      {
        text: 'Camera',
        onPress: async () => {
          const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
          });
          handleImageResponse(result);
        },
      },
      {
        text: 'Gallery',
        onPress: async () => {
          const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
          });
          handleImageResponse(result);
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const handleImageResponse = async (response) => {
    if (response.canceled) {
      console.log('User cancelled image picker');
    } else if (response.assets && response.assets.length > 0) {
      const imageUri = response.assets[0].uri;
      setSelectedImages([...selectedImages, { uri: imageUri }]); // Add the new image to the array
      await AsyncStorage.setItem('selectedImages', JSON.stringify([...selectedImages, { uri: imageUri }])); // Save to AsyncStorage
    } else {
      console.log('Image selection was cancelled or failed.');
    }
  };

  const handleDeleteImage = (uri) => {
    // Remove the image URI from the selected images array
    setSelectedImages((prevImages) => prevImages.filter((image) => image.uri !== uri));
  };
  const handleAddAmenity = () => {
    if (amenityText) {
      setAmenities([...amenities, amenityText]);
      setAmenityText('');
    }
  };

  const handleDeleteAmenity = (index) => {
    const updatedAmenities = amenities.filter((_, i) => i !== index);
    setAmenities(updatedAmenities);
  };

  const handleAddSport = () => {
    if (selectedSport && !addedSports.includes(selectedSport)) {
      setAddedSports([...addedSports, selectedSport]);
      setSelectedSport('');
    }
  };

  const handleDeleteSport = (sport) => {
    setAddedSports(addedSports.filter((item) => item !== sport));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ground Name</Text>
              <TextInput
                style={styles.inputField}
                value={groundName}
                onChangeText={setGroundName}
                placeholder="Phoenix Sports Arena"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ground Address</Text>
              <TextInput
                style={styles.inputField}
                value={groundAddress}
                onChangeText={setGroundAddress}
                placeholder="ABC Nagar, Nehru Colony, Hyderabad."
              />
            </View>

            <Text style={styles.sectionTitle}>Amenities</Text>
            <TextInput
              style={styles.inputField}
              value={amenityText}
              onChangeText={setAmenityText}
              placeholder="Add an amenity"
            />
            <View style={styles.amenitiesContainer}>
              {amenities.map((amenity, index) => (
                <View key={index} style={styles.amenityBox}>
                  <Text style={styles.amenityText}>{amenity}</Text>
                  <TouchableOpacity
                    onPress={() => handleDeleteAmenity(index)}
                    style={styles.deleteButton}
                  >
                    <Image
                      source={require('../assets/Delete_Icon.png')}
                      style={styles.deleteIcon}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.addButton} onPress={handleAddAmenity}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Available Sports</Text>
            <SelectCountry
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              placeholderStyle={styles.placeholderStyle}
              imageStyle={styles.imageStyle}  // This will apply to the icons in the dropdown list
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              search
              maxHeight={150}
              value={selectedSport}
              data={sportsData}
              valueField="value"
              labelField="lable"
              imageField="image"
              placeholder="Select a sport"
              searchPlaceholder="Search..."
              onChange={(item) => {
                setSelectedSport(item.value);
              }}
            />

            <View style={styles.addedSportsContainer}>
              {addedSports.map((sport, index) => {
                const sportData = sportsData.find((item) => item.value === sport);
                return (
                  <View key={index} style={styles.sportBox}>
                    {sportData && (
                      <>
                        <Image source={sportData.image} style={styles.sportImage} />
                        <Text style={styles.sportText}>{sportData.lable}</Text>
                      </>
                    )}
                    <TouchableOpacity
                      onPress={() => handleDeleteSport(sport)}
                      style={styles.deleteButton2}
                    >
                      <Image
                        source={require('../assets/Delete_Icon.png')}
                        style={styles.deleteIcon}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>

            <TouchableOpacity style={styles.addButton} onPress={handleAddSport}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Photos</Text>
            <TouchableOpacity style={styles.addPhotosText} onPress={handleImagePicker}>
              <Image
                source={require('../assets/Gallery_Icon.png')}
                style={styles.galleryIcon}
              />
              <Text style={styles.addPhotosTextInside}>Add photos from gallery</Text>
            </TouchableOpacity>

            {/* Horizontal ScrollView for selected photos */}
            {selectedImages && selectedImages.length > 0 && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.imagePreview}
              >
                {selectedImages.map((image, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image
                      source={{ uri: image.uri }}
                      style={styles.imagePreviewThumbnail}
                    />
                    <TouchableOpacity
                      style={styles.deleteButton3}
                      onPress={() => handleDeleteImage(image.uri)}  // Delete image on press
                    >
                      <Image
                        source={require('../assets/delete2.png')}  // Replace with your delete icon
                        style={styles.deleteIcon3}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            )}





            {/* Horizontal ScrollView for selected photos */}
            {selectedImage && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}  // Optional: Hide the scroll bar
                style={styles.imagePreview}
              >
                <Image
                  source={{ uri: selectedImage.uri }}
                  style={styles.imagePreviewThumbnail}
                />
              </ScrollView>
            )}

          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handlesave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
    backgroundColor: '#F5F5F5',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
    fontFamily: 'HankenGroteskBlack',
  },
  inputContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 8,
    fontFamily: 'HankenGroteskSemiBold',
  },
  inputField: {
    height: 40,
    borderColor: '#8F8F8F',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingLeft: 8,
    fontFamily: 'HankenGroteskRegular',
    color: '#333',
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    marginTop: 8,
  },
  addedSportsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    marginTop: 8,
  },
  amenityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 8,
    marginBottom: 8,
  },
  amenityText: {
    fontSize: 16,
    color: '#7A7A7A',
    fontFamily: 'HankenGroteskRegular',
  },
  deleteButton: {
    marginLeft: 8,
    // marginRight: 8,
  },
  deleteButton2: {
    marginLeft: 8,
    marginRight: 3,
  },
  deleteIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  addButton: {
    backgroundColor: '#00B562',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'HankenGroteskSemiBold',
  },
  dropdown: {
    height: 50,
    borderBottomColor: '#8F8F8F',
    borderBottomWidth: 1,
    borderRadius: 0,
    paddingHorizontal: 8,
    marginBottom: 8,
    marginTop: 8,
    // backgroundColor: '#fff',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#8F8F8F',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  }, sportBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 8,
    paddingVertical: 0,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 8,
  },
  imageStyle: {
    width: 40,  // Increase width of the icon
    height: 40, // Increase height of the icon
    resizeMode: 'contain', // Ensure the icon is scaled properly
  },
  inputSearchStyle: {
    fontSize: 16,
    color: '#333',
  },
  iconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  sportImage: {
    width: 40,
    height: 40,
    marginRight: 4,
    marginLeft: "-7",
  },
  sportText: {
    fontSize: 16,
    color: '#7A7A7A',
    fontFamily: 'HankenGroteskRegular',
    marginLeft: "-7",
  },

  sectionTitle: {
    fontSize: 18,
    marginVertical: 8,
    fontFamily: 'HankenGroteskSemiBold',
  },

  addPhotosText: {
    borderWidth: 1,
    borderColor: '#8F8F8F',
    borderStyle: 'dotted',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },

  galleryIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
    resizeMode: 'contain',
  },

  addPhotosTextInside: {
    fontSize: 17,
    color: '#00B562',
    textAlign: 'center',
  },

  // Horizontal ScrollView styling
  imagePreview: {
    marginTop: 16,
    flexDirection: 'row',  // Arrange images horizontally
    paddingVertical: 10,
  },

  imageContainer: {
    position: 'relative', // Allows absolute positioning of the delete button
    marginRight: 10,  // Space between images
  },
  imagePreviewThumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
    opacity: 0.7,  // Apply transparency to the image
  },
  deleteButton3: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -10 }, { translateY: -10 }],  // Center the delete button
    zIndex: 1,  // Ensure the delete button is above the image
  },
  deleteIcon3: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    // color:"gray"
  },
  // for bottom buttons

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 16,  // Ensure the padding is consistent
    // marginTop: 'auto',      // Pushes the buttons to the bottom
    // marginBottom: 0,        // Remove unnecessary space at the bottom
  },
  button: {
    flex: 0.48,  // Make both buttons have the same width
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#E0E0E0',
  },
  saveButton: {
    backgroundColor: '#00B562',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'HankenGroteskSemiBold',
  },


});
