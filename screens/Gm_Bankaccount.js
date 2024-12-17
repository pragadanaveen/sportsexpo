import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // Importing AntDesign for right arrow icon
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');

const BankPage = () => {
    const [fontsLoaded] = useFonts({
        'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
        'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
        'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
        'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return null; // Return null while fonts are loading
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {/* First Row: HDFC text, icon, and primary tag */}
                <View style={styles.row}>
                    <Image source={require('../assets/Logo.png')} style={styles.iconImage} />
                    <Text style={styles.bankText}>HDFC</Text>
                    <View style={styles.rightSection}>
                        <Text style={styles.primaryTag}>Primary</Text>
                        <Icon name="right" size={18} color="#000" style={styles.arrowIcon} />
                    </View>
                </View>

                {/* Horizontal Ruler */}
                <View style={styles.horizontalLine} />

                {/* Second Row: Bank Icon, Bank Name, and Arrow */}
                <View style={styles.row}>
                    <View style={styles.leftSection}>
                        <Image source={require('../assets/Logo.png')} style={styles.iconImage} />
                        <Text style={styles.bankName}>HDFC Bank</Text>
                    </View>
                    <Icon name="right" size={18} color="#000" style={styles.arrowIcon} />
                </View>
            </ScrollView>

            {/* Add New Account Button */}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add New Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    contentContainer: {
        padding: width * 0.05,
        paddingBottom: 80, // Add extra padding to avoid overlap with the button
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensure space between logo+text and icon
        marginVertical: 10,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center', // Align logo and text vertically
    },
    bankText: {
        fontSize: 18,
        fontFamily: 'HankenGroteskRegular',
        color: '#333',
        marginRight: 10,
    },
    iconImage: {
        width: 24, // Adjust size to match your icons
        height: 24,
        marginRight: 10,
        resizeMode: 'contain',
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto', // Push this group to the right
    },
    primaryTag: {
        fontSize: 14,
        color: 'white',
        // fontWeight: '600',
        fontFamily: 'HankenGroteskSemiBold',
        backgroundColor: '#00B562',
        paddingVertical: 4, // Vertical padding for height
        paddingHorizontal: 10, // Horizontal padding for width
        borderRadius: 12, // Rounded corners
        overflow: 'hidden', // Ensure text doesn't overflow the background
        marginRight: 5, // Space between "Primary" and the arrow icon
    },
    arrowIcon: {
        marginRight: 0, // No additional margin needed here
    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    bankName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        left: width * 0.05,
        right: width * 0.05,
        backgroundColor: '#00B562',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'HankenGroteskBold',
    },
});

export default BankPage;
