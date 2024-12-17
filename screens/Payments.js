import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar, Image
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { PieChart } from 'react-native-chart-kit';
import { useFonts } from 'expo-font';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for options-outline
const App = () => {
  const [firstDropdownValue, setFirstDropdownValue] = useState(null);
  const [secondDropdownValue, setSecondDropdownValue] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0); // State to manage dropdown width
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
  });
  const dropdownData = [
    { label: 'All', value: 'all' },
    { label: 'Court A', value: '1' },
    { label: 'Court B', value: '2' },
    { label: 'Court C', value: '3' },
  ];
  const chartData = [
    { name: 'Ground Managers', population: 50, color: '#008C4C', legendFontColor: '#000', legendFontSize: 12 },
    { name: 'App Owners', population: 30, color: '#FFD700', legendFontColor: '#000', legendFontSize: 12 },
    { name: 'Total Earnings', population: 20, color: '#8F8F8F', legendFontColor: '#000', legendFontSize: 12 },
  ];

  const renderTabContent = () => {
    const data = [
      {
        image: require('../assets/profile1.png'), // Replace with actual image URL or import
        paymentText: 'Payment from John Doe',
        timeText: 'Payment done | 9 hours ago',
        amount: '₹1200',
        creditedTo: 'Credited to UPI',
      },
      {
        image: require('../assets/profile1.png'),
        paymentText: 'Payment from Jane Smith',
        timeText: 'Payment done | 1 day ago',
        amount: '₹900',
        creditedTo: 'Credited to UPI',
      },
    ];
    return (
      <FlatList
        data={data}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardLeft}>
              <Image
                source={item.image}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.paymentText}>{item.paymentText}</Text>
                <Text style={styles.subText}>{item.timeText}</Text>
              </View>
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.amount}>{item.amount}</Text>
              <Text style={styles.subText}>{item.creditedTo}</Text>
            </View>
          </View>
        )}
        scrollEnabled={false} // Prevents independent scrolling
      />
    );
  };
  // Function to calculate and set dropdown width based on the longest label
  const calculateDropdownWidth = () => {
    const longestLabel = dropdownData.reduce((max, item) => (item.label.length > max.length ? item.label : max), '');
    // Set dropdown width to 20% more than the longest label's length (approximated by 8px per character)
    const width = longestLabel.length * 8 + 50;
    setDropdownWidth(width);
  };

  useEffect(() => {
    calculateDropdownWidth(); // Call on component mount to calculate dropdown width
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Card Section (30% height) */}
        <View style={styles.cardSection}>
          <View style={styles.card1}>
            {/* Dropdowns */}
            <View style={styles.dropdownParent}>
              <Dropdown
                style={[
                  styles.dropdown,
                  { width: dropdownWidth }, // Apply dynamic width
                  firstDropdownValue ? styles.selectedDropdown : styles.unselectedDropdown,
                ]}
                placeholderStyle={[
                  styles.placeholder,
                  firstDropdownValue ? styles.selectedPlaceholder : styles.unselectedPlaceholder,
                ]}
                selectedTextStyle={styles.selectedText} // Style for selected text
                data={dropdownData} // Dropdown options
                placeholder="All" // Placeholder text
                labelField="label" // The label key in dropdownData
                valueField="value" // The value key in dropdownData
                value={firstDropdownValue} // Current selected value
                onChange={(item) => setFirstDropdownValue(item.value)} // Handle value change
              />
              <Dropdown
                style={[
                  styles.dropdown,
                  { width: dropdownWidth }, // Apply dynamic width
                  secondDropdownValue ? styles.selectedDropdown : styles.unselectedDropdown,
                ]}
                placeholderStyle={[
                  styles.placeholder,
                  secondDropdownValue ? styles.selectedPlaceholder : styles.unselectedPlaceholder,
                ]}
                selectedTextStyle={styles.selectedText} // Style for selected text
                data={dropdownData} // Dropdown options
                placeholder="Select Court" // Placeholder text
                labelField="label" // The label key in dropdownData
                valueField="value" // The value key in dropdownData
                value={secondDropdownValue} // Current selected value
                onChange={(item) => setSecondDropdownValue(item.value)} // Handle value change
              />
            </View>
            {/* Doughnut Chart */}
            <View style={styles.chartContainer}>
              <PieChart
                data={chartData}
                width={150} // Responsive width
                height={150} // Responsive height
                chartConfig={{
                  backgroundColor: '#fff',
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="30"
                hasLegend={false}
                absolute
              />
              <View style={styles.legendContainer}>
                {chartData.map((item, index) => (
                  <View key={index} style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: item.color }]} />
                    <Text style={styles.legendText}>{item.name}</Text>
                    <Text style={styles.legendValue}>{item.population}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        {/* Tabs and Content Section (70% height) */}
        <View style={styles.tabsSection}>
          <View style={styles.tabContainer}>
            <SegmentedControlTab
              values={['Bookings', 'Pending', 'Cancelled']}
              selectedIndex={selectedTab}
              onTabPress={(index) => setSelectedTab(index)}
              tabsContainerStyle={styles.tabs} // Container for all tabs
              tabStyle={styles.tab} // General tab style without borders
              activeTabStyle={{
                backgroundColor: 'transparent',
                borderBottomColor: '#008C4C', // Green underline
                borderBottomWidth: 2,        // Thickness of underline
              }} // Active tab style with green bottom border
              tabTextStyle={styles.tabText} // Default tab text color
              activeTabTextStyle={styles.activeTabText} // Active tab text color green
            />
<TouchableOpacity style={styles.filterIcon}>
              <Ionicons name="options-outline" size={15} color="#fff" />
            </TouchableOpacity>
          </View>
          <ScrollView>{renderTabContent()}</ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
  tabsSection: {
    flex: 7, // 70% of the screen height
    backgroundColor: '#fff',
    padding: 16,
  },
  placeholder: {
    fontSize: 16,
    color: '#8F8F8F', // Neutral color for placeholder
  },
  card1: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    flex: 1,
  },
  // efeug jhddui the end of the day of the sela  dgig  uegfvfu hfvhugfug    
  dropdownParent: {
    flexDirection: 'row', // Align dropdowns horizontally
    marginBottom: 16,
    justifyContent: 'flex-start', // Align them to the left (or start)
    width: '100%', // Take full width of the parent container
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 5,
    height: 40, // Set a specific height for dropdowns
    marginRight: '4%' // Add a margin between the dropdowns
  },
  selectedDropdown: { borderColor: '#008C4C' },
  unselectedDropdown: { borderColor: '#8F8F8F' },
  selectedText: { color: '#000' },
  chartContainer: {
    flex: 1, // Take available space in the card
    flexDirection: 'row', // Align legend and chart horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
  },
  legendContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  cardSection: {
    flex: 3, // Allocate 30% height for the card
    backgroundColor: '#F5F5F5',
    padding: 16,
    justifyContent: 'center', // Center contents within the card
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: { fontSize: 14, flex: 1 },
  legendValue: { fontSize: 14, fontWeight: 'bold' },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  // tabs: { flex: 1 },
  tabs: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  tab: {
    borderWidth: 0, // Remove borders around tabs
    backgroundColor: 'transparent', // Transparent background
  },

  activeTab: {
    backgroundColor: 'transparent', // Transparent background
    borderBottomColor: '#008C4C', // Green bottom underline color
    borderBottomWidth: 2, // Thickness of the underline
  },

  tabText: {
    color: '#8F8F8F',
    fontSize: 16,
    fontFamily: 'HankenGroteskBold',
  },

  activeTabText: {
    color: '#008C4C',
    fontFamily: 'HankenGroteskBold',
  },

  filterIcon: {
    backgroundColor: '#008C4C',
    padding: 8,
    borderRadius: 16,
    marginLeft: 8,
  },
  filterText: { color: '#fff', fontSize: 12 },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRight: {
    alignItems: 'flex-end',
    flex: 1,
  },
  amount: { fontSize: 16, fontWeight: 'bold' },
  subText: { fontSize: 12, color: '#8F8F8F' },
  profileImage: {
    width: 40, // Adjust size as needed
    height: 40,
    borderRadius: 20, // Makes the image circular
    marginRight: 10, // Adds spacing between the image and text
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008C4C',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
});

export default App;
