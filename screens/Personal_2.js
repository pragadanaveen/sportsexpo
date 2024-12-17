import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Dropdown } from 'react-native-element-dropdown';

const PersonalDetailsScreen = () => {
    const navigation = useNavigation();
    const [sport, setSport] = useState('');
    const [sportRole, setSportRole] = useState('');
    const [level, setLevel] = useState(null); // Dropdown selected value

    const [fontsLoaded] = useFonts({
        'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
        'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
        'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
        'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    });

    const sportOptions = [
        { label: 'Cricket', value: 'Cricket' },
        { label: 'Football', value: 'Football' },
        { label: 'Basketball', value: 'Basketball' },
        { label: 'Tennis', value: 'Tennis' },
        // Add more sports as needed
    ];

    const levelOptions = [
        { label: 'District', value: 'District' },
        { label: 'State', value: 'State' },
        { label: 'National', value: 'National' },
        { label: 'International', value: 'International' },
        // Add more levels as needed
    ];

    const handleNext = () => {
        console.log('Sport:', sport);
        console.log('Sport Role:', sportRole);
        console.log('Level:', level);
        navigation.navigate('Personal_3');
        setSport('');
    setSportRole('');
    setLevel(null);
    };

    const handleSkip = () => {
        console.log('Skip clicked');
        navigation.navigate('Personal_3');
    };

    const handleAddMore = () => {
        console.log('Add More clicked');
    };

    return (
        <KeyboardAvoidingView
            style={styles.mainContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={80} // Adjust this value based on your header height
        >
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.stepContainer}>
                    <Text style={styles.stepText}>Step 2 of 4</Text>
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Sport Details</Text>
                <Text style={styles.description}>
                    Add details of your awards and recognitions. Example: "Best Performer of the Year".
                </Text>

                {/* Sport Dropdown */}
                <View style={styles.inputContainer}>
                    <Dropdown
                        data={sportOptions}
                        labelField="label"
                        valueField="value"
                        value={sport}
                        onChange={(item) => setSport(item.value)}
                        style={styles.dropdown}
                        dropdownStyle={styles.dropdownMenu}
                        placeholder="Select Sport"
                        // placeholderStyle={styles.dropdownPlaceholder}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={[styles.dropdownPlaceholder,styles.placeholderText]} // Apply placeholder style
                    />
                </View>

                {/* Sport Role Field */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={sportRole}
                        onChangeText={setSportRole}
                        placeholder="Sport Role"
                        placeholderTextColor="rgba(102, 102, 102, 1)" // Set placeholder color
                    />
                </View>

                {/* Level Dropdown */}
                <View style={styles.inputContainer}>
                    <Dropdown
                        data={levelOptions}
                        labelField="label"
                        valueField="value"
                        value={level}
                        onChange={(item) => setLevel(item.value)}
                        style={styles.dropdown}
                        dropdownStyle={styles.dropdownMenu}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholder="Select Level"
                        placeholderStyle={[styles.dropdownPlaceholder,styles.placeholderText]} // Apply placeholder style
                    />
                </View>

                {/* Add More Button */}
                <TouchableOpacity style={styles.addMoreButton} onPress={handleAddMore}>
                    <View style={styles.addMoreButtonContent}>
                        <Text style={styles.addMoreButtonText}>Add More</Text>
                        <Image
            source={require('../assets/Addmore.png')} // Ensure the correct path to the image
            style={styles.addMoreImage} // Apply styles to the image
        />
                    </View>
                </TouchableOpacity>
            </ScrollView>

            {/* Next Button */}
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: '20%',
    },
    scrollViewContainer: {
        flexGrow: 1,
        paddingBottom: 20,
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
        fontSize: 17,
        color: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 2,
        fontFamily: 'HankenGroteskSemiBold',
    },
    placeholderText: {
        fontSize: 16,
        fontFamily: "HankenGroteskSemiBold", // Apply the font family for the placeholder
        color: "rgba(102, 102, 102, 1)"  // Optional: set placeholder color
    },
    title: {
        fontSize: 24,
        fontFamily: "HankenGroteskBold",
        marginBottom: 10,
    },
    description: {
        fontSize: 17,
        color: '#555',
        marginBottom: 20,
        fontFamily: 'HankenGroteskRegular',
    },
    inputContainer: {
        marginBottom: 30,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(102, 102, 102, 1)',
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: 'HankenGroteskRegular',
    },
    dropdown: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(102, 102, 102, 1)',
        paddingHorizontal: 10,
    },
    dropdownMenu: {
        maxHeight: 150,
    },
    // dropdownPlaceholder: {
    //     color: 'rgba(102, 102, 102, 1)', // Set placeholder color for Dropdown
    //     fontFamily: 'HankenGroteskSemiBold',
    // },
    addMoreButton: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 25,
        backgroundColor: '#BBDDFF',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        alignSelf: 'flex-start',
        marginVertical: 20,
    },
    addMoreButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addMoreButtonText: {
        fontSize: 16,
        color: '#000',
        marginRight: 5,
        fontFamily: 'HankenGroteskRegular',
    },
    addMoreImage:{
        width:24,
        height:24
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
        fontFamily: 'HankenGroteskBold',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#3D3D3D',
        fontFamily: 'HankenGroteskRegular',
      },
});

export default PersonalDetailsScreen;
