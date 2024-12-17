import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Keyboard, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker
import { Dropdown } from 'react-native-element-dropdown'; // Import Dropdown
const { width, height } = Dimensions.get("window");
const PersonalDetailsScreen = () => {
    const navigation = useNavigation();
    const [awardTitle, setAwardTitle] = useState('');
    const [issuingOrg, setIssuingOrg] = useState('');
    const [organization, setOrganization] = useState(null);
    const [issueDate, setIssueDate] = useState('');
    const [credentialId, setCredentialId] = useState('');
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false); // State to control the date picker visibility
    const [fontsLoaded] = useFonts({
        'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
        'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
        'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    });

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const handleNext = () => {
        console.log('Award Title:', awardTitle);
        console.log('Issuing Organization:', issuingOrg);
        console.log('Organization:', organization);
        console.log('Issue Date:', issueDate);
        console.log('Credential ID:', credentialId);
        navigation.navigate('TabNavigator');
    };

    const handleSkip = () => {
        console.log('Skip clicked');
        navigation.navigate("Login");
    };

    const handleAddMore = () => {
        console.log('Add More clicked');
    };

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || new Date();
        setShowDatePicker(false); // Hide the date picker after selecting the date
        setIssueDate(currentDate.toLocaleDateString()); // Format the date as a string
    };

    // Organization Dropdown Data (replace with real data as needed)
    const organizationData = [
        { label: "Organization 1", value: "org1" },
        { label: "Organization 2", value: "org2" },
        { label: "Organization 3", value: "org3" },
    ];

    return (
        <KeyboardAvoidingView
            style={styles.mainContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepText}>Step 4 of 4</Text>
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Achievements</Text>
                <Text style={styles.description}>
                    Add details of your awards and recognitions. Example: "Best Performer of the Year".
                </Text>

                <View style={styles.inputContainer}>
                    {/* <Text style={styles.label}>Award Title</Text> */}
                    <TextInput
                        style={styles.input}
                        value={awardTitle}
                        placeholder='Award Title'
                        onChangeText={setAwardTitle}
                    />
                </View>



                {/* <View style={styles.inputContainer}> */}
                {/* <Text style={styles.label}>Organization</Text> */}
                <Dropdown
                    data={organizationData}
                    labelField="label"
                    valueField="value"
                    value={organization}
                    onChange={(item) => setOrganization(item.value)}
                    style={styles.dropdown}
                    placeholder="Issuing Organization"
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    renderItem={(item) => (
                        <View style={styles.dropdownItemContainer}>
                            <Text style={styles.dropdownItem}>{item.label}</Text>
                        </View>
                    )}
                />
                {/* </View> */}

                <View style={styles.inputContainer}>
    <View style={styles.issueDateContainer}>
        <TextInput
            style={styles.input}
            value={issueDate} // Use issueDate here
            placeholder="Issue Date"
            editable={false} // Make this field non-editable
        />
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Image
                source={require('../assets/calendar.png')} // Path to your calendar.png image
                style={styles.calendarIcon} // Apply styles for the icon
            />
        </TouchableOpacity>
    </View>
    {showDatePicker && (
        <DateTimePicker
            value={new Date()}
            mode="date"
            display="calendar"
            onChange={onDateChange}
        />
    )}
</View>


                <View style={styles.inputContainer}>
                    {/* <Text style={styles.label}>Credential ID</Text> */}
                    <TextInput
                        placeholder='Credential ID'
                        style={styles.input}
                        value={credentialId}
                        onChangeText={setCredentialId}
                    />
                </View>

                <TouchableOpacity style={styles.addMoreButton} onPress={handleAddMore}>
                    <View style={styles.addMoreButtonContent}>
                        <Text style={styles.addMoreButtonText}> Add More</Text>
                        <Image
                            source={require('../assets/Addmore.png')} // Path to your calendar.png image
                            style={styles.addskillicon} // Apply styles for the icon
                        />

                    </View>
                </TouchableOpacity>
            </ScrollView>

            {/* Next Button at the Bottom */}
            {!keyboardVisible && (
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            )}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 0,
    },
    scrollViewContainer: {
        paddingBottom: 10,
    },
    stepContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    stepText: {
        fontSize: 17,
        color: 'rgba(0, 0, 0, 1)',
        fontFamily: 'HankenGroteskSemiBold',
    },
    skipText: {
        fontSize: width * 0.04,
        color: "#000",
        borderBottomWidth: 1,
        borderBottomColor: "#666666",
        paddingBottom: 2,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        fontFamily: "HankenGroteskBold"
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
        fontFamily: "HankenGroteskRegular"
    },
    inputContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#666666',
    },
    label: {
        fontSize: 18,
        fontFamily: "HankenGroteskSemiBold",
        marginBottom: 5,
        color: "#666666"
    },
    input: {
        height: 50,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: "HankenGroteskRegular",
        color: "#666666"
    },
    dropdown: {
        height: 60,
        borderColor: "#666666",   // Border color for bottom border
        borderBottomWidth: 1, // Only bottom border
        paddingLeft: 10,
        marginBottom: "5%", // Optional: Adds spacing below the dropdown
        paddingRight: 10, // Optional: Adds spacing to the right side
    },

    dropdownItemContainer: {
        paddingVertical: 8,  // Adds vertical padding around each item
        paddingHorizontal: 10, // Optional: Adds horizontal padding around each item
    },

    dropdownItem: {
        fontFamily: "HankenGroteskRegular",
        fontSize: 16,   // Adjust font size to make items readable
        lineHeight: 24,  // Adjust the line height to add spacing between items
    },
    placeholderStyle: {
        fontSize: 16,
        fontFamily: "HankenGroteskRegular",
        color: "#666666"
    },
    selectedTextStyle: {
        fontFamily: "HankenGroteskRegular",
        fontSize: 16,
    },
    // dropdownItem: {
    //     fontFamily: "HankenGroteskRegular",
    //     fontSize: 20,
    // },
    issueDateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    issueDateInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    calendarIcon: {
        marginLeft: "80%",
        width: 20,
        height: 20
    },
    addMoreButton: {
        borderColor: '#666666',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#BBDDFF',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        alignSelf: 'start',
    },
    addMoreButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addMoreButtonText: {
        fontSize: 17,
        color: '#000',
        marginLeft: 5,
        // fontFamily: "HankenGroteskSemiBold"
        fontFamily: "HankenGroteskRegular"
    },
    addskillicon: {
        width: 25,
        height: 25
    },
    nextButton: {
        backgroundColor: '#006336',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        width: '70%',
        marginBottom: 20,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "HankenGroteskBold"
    },
});


export default PersonalDetailsScreen;
