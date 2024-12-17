import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/AntDesign'; // Importing the icon set
import { useNavigation } from '@react-navigation/native'; // Use navigation hook

const { width, height } = Dimensions.get('window');

const BannerPage = () => {
    const navigation = useNavigation();

    const handleEditBanner = () => {
        // navigation.navigate('Gm_Editbanner'); // Navigate to the "Gm_Editbanner" screen
    };

    return (
        <MenuProvider>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Card 1 */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.bannerText}>Banner1</Text>
                        <Menu>
                            <MenuTrigger>
                                <View style={styles.dotsContainer}>
                                    <Text style={styles.dots}>.</Text>
                                    <Text style={styles.dots}>.</Text>
                                    <Text style={styles.dots}>.</Text>
                                </View>
                            </MenuTrigger>
                            <MenuOptions style={styles.menuOptions}>
                                <MenuOption onSelect={handleEditBanner}> {/* Handle Edit Banner */}
                                    <View style={styles.menuOptionContainer}>
                                        <Icon name="edit" size={18} color="#fff" style={styles.menuIcon} />
                                        <Text style={styles.menuText}>Edit Banner</Text> {/* Correctly wrapped in Text */}
                                    </View>
                                </MenuOption>

                                {/* Divider Line */}
                                <View style={styles.divider} />

                                <MenuOption onSelect={() => alert('Delete Banner')}>
                                    <View style={styles.menuOptionContainer}>
                                        <Icon name="delete" size={18} color="#fff" style={styles.menuIcon} />
                                        <Text style={styles.menuText}>Delete Banner</Text> {/* Correctly wrapped in Text */}
                                    </View>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                    </View>
                    <Image source={require('../assets/Banner1.png')} style={styles.bannerImage} />
                </View>

                {/* Additional cards... */}
            </ScrollView>
        </MenuProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: width * 0.05,
        backgroundColor: '#f9f9f9',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: height * 0.02,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: width * 0.03,
    },
    bannerText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#333',
    },
    dotsContainer: {
        flexDirection: 'column', // Stack dots vertically
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5, // Adding padding for better touch area
    },
    dots: {
        fontSize: width * 0.05,
        color: '#000',
        lineHeight: 7,
        borderRadius: 20, // This ensures spacing between dots
    },
    bannerImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    menuOptions: {
        backgroundColor: '#008C4C', // Apply green background to the entire menu
        borderRadius: 10,
        position: 'absolute', // Positioning the menu relative to the trigger (dots)
        top: -50, // Adjust this value based on the dot's position
        right: 0,
        width: 130, // Set the width of the menu
        padding: 0,
    },
    menuText: {
        fontSize: 14, // Smaller text size
        color: '#fff', // Make sure text is white
        padding: 5, // Reduced padding
    },
    menuOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5, // Keeps the vertical padding small
        paddingHorizontal: 5, // Reduce horizontal padding to decrease space between icon and text
        width: 130, // Fixed width for consistency
    },
    menuIcon: {
        marginRight: 5, // Reduces the space between the icon and the text
        color: "#fff", // Ensure icon color is white
    },
    divider: {
        height: 0.5, // The height of the divider line
        backgroundColor: '#fff', // White line for the divider
        marginVertical: 5, // Adding some space above and below the divider
    },
});

export default BannerPage;
