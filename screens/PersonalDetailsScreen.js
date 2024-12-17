import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { useFonts } from 'expo-font';

const PersonalDetailsScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [college, setCollege] = useState(null); // Dropdown selected value
    const [yearOfStudyStart, setYearOfStudyStart] = useState(null); // Start year dropdown value
    const [yearOfStudyEnd, setYearOfStudyEnd] = useState(null); // End year dropdown value
    const [gender, setGender] = useState('Male');

    const [fontsLoaded] = useFonts({
        'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
        'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
        'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
        'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
        'HankenGroteskMedium': require('../assets/fonts/HankenGrotesk-Medium.ttf'),
    });

    // Dropdown data for college and year of study
    const collegeData = [
        { label: 'College A', value: 'College A' },
        { label: 'College B', value: 'College B' },
        { label: 'College C', value: 'College C' },
    ];

    const yearOptions = [...Array(10).keys()].map((year) => {
        const yearValue = 2020 + year;
        return { label: yearValue.toString(), value: yearValue };
    });

    const handleNext = () => {
        // Reset fields after "Next" button click
        setName('');
        setCity('');
        setCollege(null);
        setYearOfStudyStart(null);
        setYearOfStudyEnd(null);
        setGender('Male');

        console.log('Name:', name);
        console.log('City:', city);
        console.log('College:', college);
        console.log('Year of Study:', `${yearOfStudyStart} - ${yearOfStudyEnd}`);
        console.log('Gender:', gender);
        navigation.navigate("Personal_2");
    };

    const handleSkip = () => {
        console.log('Skip clicked');
        navigation.replace("Personal_2");
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                {/* Step 1 of 2 and Skip button row */}
                <View style={styles.stepContainer}>
                    <Text style={styles.stepText}>Step 1 of 4</Text>
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>

                {/* Personal Details Title */}
                <Text style={styles.title}>Personal Details</Text>
                <Text style={styles.description}>Fill in your personal details to continue.</Text>

                {/* Input for Your Name */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholder="Your Name"
                        placeholderStyle={styles.inputPlaceholder}
                        placeholderTextColor="rgba(102, 102, 102, 1)" // Make the placeholder color transparent
                    />
                </View>

                {/* Input for Your City */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={city}
                        onChangeText={setCity}
                        placeholder="Your City"
                        placeholderStyle={{ fontFamily: 'HankenGroteskSemiBold' }} 
                        placeholderTextColor="rgba(102, 102, 102, 1)" // Set placeholder color
                    />
                </View>

                {/* Dropdown for College */}
                <View style={styles.inputContainer}>
                    <Dropdown
                        data={collegeData}
                        labelField="label"
                        valueField="value"
                        value={college}
                        onChange={(item) => setCollege(item.value)}
                        style={styles.dropdown}
                        dropdownStyle={styles.dropdownMenu} // Limit height
                        placeholder="Institute/College"
                        textStyle={styles.dropdownText}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderText} // Apply text style here
                    />
                </View>

                {/* Year of Study Section */}
                <View style={styles.inputContainer}>
                    <View style={styles.yearDropdownContainer}>
                        <Dropdown
                            data={yearOptions}
                            labelField="label"
                            valueField="value"
                            value={yearOfStudyStart}
                            onChange={(item) => setYearOfStudyStart(item.value)}
                            style={[styles.dropdown, styles.yearDropdown]}
                            dropdownStyle={styles.dropdownMenu} // Limit height
                            placeholder="Start Year"
                            textStyle={styles.dropdownText}
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholderStyle={styles.placeholderText} // Apply font family here
                        />
                        <Dropdown
                            data={yearOptions}
                            labelField="label"
                            valueField="value"
                            value={yearOfStudyEnd}
                            onChange={(item) => setYearOfStudyEnd(item.value)}
                            style={[styles.dropdown, styles.yearDropdown]}
                            dropdownStyle={styles.dropdownMenu} // Limit height
                            placeholder="End Year"
                            textStyle={styles.dropdownText}
                            selectedTextStyle={styles.selectedTextStyle}
                            placeholderStyle={styles.placeholderText} // Apply font family here
                        />
                    </View>
                </View>

                {/* Gender Section */}
                <View style={styles.genderContainer}>
                    <Text style={styles.label}>Gender</Text>
                    <View style={styles.genderRadioContainer}>
                        <TouchableOpacity
                            style={styles.radioContainer}
                            onPress={() => setGender('Male')}
                        >
                            <View style={[styles.radioCircle, gender === 'Male' ? styles.selectedRadio : null]} />
                            <Text style={styles.radioText}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.radioContainer}
                            onPress={() => setGender('Female')}
                        >
                            <View style={[styles.radioCircle, gender === 'Female' ? styles.selectedRadio : null]} />
                            <Text style={styles.radioText}>Female</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Next Button */}
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "5%",
        backgroundColor: '#fff',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    stepContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 40,
    },
    stepText: {
        fontSize: 17,
        color: 'rgba(0, 0, 0, 1)',
        fontFamily: 'HankenGroteskSemiBold',
    },
    skipText: {
        fontSize: 17,
        color: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 2,
        fontFamily: 'HankenGroteskSemiBold',
    },
    title: {
        fontSize: 24,
        fontFamily: "HankenGroteskBold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 20,
        fontFamily: "HankenGroteskRegular",
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(102, 102, 102, 1)',
        paddingHorizontal: 10,
        fontSize: 17,
        fontFamily: "HankenGroteskRegular",
    },
    inputPlaceholder: {
        fontFamily: "HankenGroteskSemiBold", // Apply semi-bold font for placeholders
        fontSize: 16, // Adjust the font size if needed
        color: 'rgba(102, 102, 102, 1)', // Set the placeholder text color
    },
    dropdown: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#666666',
        paddingHorizontal: 10,
    },
    dropdownMenu: {
        maxHeight: 200, // Increase the max height for dropdowns
    },
    dropdownText: {
        fontSize: 16,
        fontFamily: "HankenGroteskRegular",  
        color: "rgba(102, 102, 102, 1)"
    },
    placeholderText: {
        fontSize: 16,
        fontFamily: "HankenGroteskSemiBold", // Apply semi-bold font for placeholders
        color: "rgba(102, 102, 102, 1)"
    },
    yearDropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    yearDropdown: {
        width: '48%',
    },
    genderContainer: {
        marginBottom: 50,
    },
    genderRadioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        marginRight: 10,
    },
    selectedRadio: {
        backgroundColor: '#006336',
        borderWidth:2,
        borderColor:"black"
    },
    radioText: {
        fontSize: 16,
        color: '#333',
        fontFamily: "HankenGroteskRegular",
    },
    nextButton: {
        backgroundColor: '#006336',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 'auto',
        alignSelf: "center",
        width: "70%",
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "HankenGroteskSemiBold",
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#3D3D3D',
        fontFamily: 'HankenGroteskRegular',
    },
});

export default PersonalDetailsScreen;
