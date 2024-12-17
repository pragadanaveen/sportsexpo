import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFonts } from 'expo-font';
const BookingPage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const [selectedSport, setSelectedSport] = useState('Tennis');
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM - 11:00 AM');
  const [selectedCourt, setSelectedCourt] = useState('Court 1');
  const [needRacquetBall, setNeedRacquetBall] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());


  // Calculate total amount based on selected options
  const calculateTotal = () => {
    let total = 499; // Base amount
    if (needRacquetBall) total += 100; // Add cost if racquet and ball are needed
    return total;
  };

  const onPressPayButton = () => {
    const totalAmount = calculateTotal();
    // Navigate to the confirmation page and pass booking details as parameters
    navigation.navigate('BookingConfirmationScreen', {
      sport: selectedSport,
      slot: selectedSlot,
      court: selectedCourt,
      totalAmount: totalAmount,
    });
  };
  const calculateCourtFee = () => 300; // Static court fee for demonstration
  const calculatePlatformFee = () => 50; // Static platform fee for demonstration
  const calculateGST = () => 18; // Static GST value for demonstration


  // Handle date change from the DateTimePicker
  const onChangeDate = (event, date) => {
    setShowCalendar(false); // Hide the calendar after a date is selected
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.groundInfo}>
          <Text style={styles.groundTitle}>RS Grounds</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.5</Text>
            <Text style={styles.ratingSymbol}> ★</Text>
          </View>
        </View>

        {/* Timing with Icon */}
        <View style={styles.iconTextRow}>
          <Icon name="clock-o" size={16} color="#000" style={styles.icon} />
          <Text style={styles.timing}>6 AM - 9 PM</Text>
        </View>

        {/* Address with Icon and View Directions Button */}
        <View style={styles.infoRow}>
          <FontAwesome name="map-marker" size={20} color="#666" style={styles.icon} />
          <Text style={styles.address}>ABC Nagar, Nehru Colony, Hyderabad, Telangana, 534502</Text>
          <TouchableOpacity style={styles.directionsButton}>
            <Text style={styles.directionsButtonText}>View Directions</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sport Selection */}
      <View style={styles.sportSelection}>
        <TouchableOpacity onPress={() => setSelectedSport('Tennis')}>
          <Text style={[styles.sportTab, selectedSport === 'Tennis' && styles.activeTab]}>Tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedSport('Badminton')}>
          <Text style={[styles.sportTab, selectedSport === 'Badminton' && styles.activeTab]}>Badminton</Text>
        </TouchableOpacity>
      </View>

      {/* Slot Selection */}
      <View style={styles.slotSelection}>
        <View style={styles.slotHeader}>
          <Text style={styles.slotText}>Select a Slot</Text>
          <TouchableOpacity style={styles.todayContainer} onPress={() => setShowCalendar(true)}>
            <Text style={styles.todayText}>Today</Text>
            <FontAwesome name="calendar" size={16} color="#007AFF" style={styles.calendarIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.slotButtons}>
          {/* Two time slots per row */}
          {['10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM'].map((time) => (
            <TouchableOpacity
              key={time}
              style={[styles.slotButton, selectedSlot === time && styles.selectedSlotButton]}
              onPress={() => setSelectedSlot(time)}
            >
              <Text style={styles.slotButtonText}>{time}</Text>
            </TouchableOpacity>
          ))}
          {['1:00 PM - 2:00 PM', '3:00 PM - 4:00 PM'].map((time) => (
            <TouchableOpacity
              key={time}
              style={[styles.slotButton, selectedSlot === time && styles.selectedSlotButton]}
              onPress={() => setSelectedSlot(time)}
            >
              <Text style={styles.slotButtonText}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* DateTimePicker */}
      {showCalendar && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={onChangeDate}
        />
      )}

      {/* Court Selection */}
      <View style={styles.courtSelection}>
        <Text style={styles.courtText}>Select Court</Text>
        <View style={styles.courtButtons}>
          {['Court 1', 'Court 2', 'Court 3'].map((court) => (
            <TouchableOpacity
              key={court}
              style={[styles.courtButton, selectedCourt === court && styles.selectedCourtButton]}
              onPress={() => setSelectedCourt(court)}
            >
              <Text style={styles.courtButtonText}>{court}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Additional Options */}
      <View style={styles.additionalOptions}>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[styles.radioButton, needRacquetBall && styles.selectedRadioButton]}
            onPress={() => setNeedRacquetBall(!needRacquetBall)}
          >
            {needRacquetBall && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>I need racquet and ball</Text>
        </View>
        <View style={styles.couponContainer}>
        <Text style={styles.couponLabel}>Apply Coupon</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CouponPage')}>
          <Text style={styles.couponArrow}> &gt;</Text>
        </TouchableOpacity>
      </View>
      </View>
        {/* Charges Container */}
        <View style={styles.chargesContainer}>
        {/* Row 1 */}
        <View style={styles.chargesRow}>
          <Text style={styles.chargesText}>Total Amount</Text>
          <Text style={styles.chargesValue}>INR {calculateTotal()}</Text>
        </View>

        {/* Row 2 */}
        <View style={styles.chargesRow}>
          <Text style={styles.chargesText}>Court Fee</Text>
          <Text style={styles.chargesValue}>INR {calculateCourtFee()}</Text>
        </View>

        {/* Row 3 */}
        <View style={styles.chargesRow}>
          <Text style={styles.chargesText}>Platform Fee</Text>
          <Text style={styles.chargesValue}>INR {calculatePlatformFee()}</Text>
        </View>

        {/* Row 4 */}
        <View style={styles.chargesRow}>
          <Text style={styles.chargesText}>GST</Text>
          <Text style={styles.chargesValue}>INR {calculateGST()}</Text>
        </View>
      </View>


      {/* Total Amount */}
      <View style={styles.totalAmount}>
        <Text>Total Amount: INR {calculateTotal()}</Text>
      </View>

      {/* Payment Button */}
      <TouchableOpacity style={styles.payButton} onPress={onPressPayButton}>
        <Text style={styles.payButtonText}>Pay INR {calculateTotal()}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  topBar: {
    marginBottom: 16,
  },
  groundInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  groundTitle: {
    fontSize: 24,
    fontFamily: 'HankenGroteskBold',
    color: '#000',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#000',
    marginRight: 4,
    fontFamily: 'HankenGroteskBold',
  },
  ratingSymbol: {
    fontSize: 18,
    color: '#006336',
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  timing: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'HankenGroteskRegular',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  address: {
    fontSize: 14,
    color: '#000',
    flexShrink: 1,
    fontFamily: 'HankenGroteskRegular',
  },
  directionsButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#7A7A7A',
    marginLeft: 'auto',
  },
  directionsButtonText: {
    color: '#3d3d3d',
    textAlign: 'center',
  },
  sportSelection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  sportTab: {
    fontSize: 18,
    color: '#000',
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1976D2',
  },
  slotSelection: {
    marginBottom: 10,
  },
  slotHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1, // Additional space between header and slot buttons
    fontWeight:"bold"
  },
  slotText: {
    fontSize: 16,
    fontFamily: 'HankenGroteskBold',
  },
  todayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CCCCCC',
    padding: 7,
    borderRadius: 10,
  },
  todayText: {
    color: '#000',
    marginRight: 4,
    fontFamily: 'HankenGroteskRegular',
  },
  calendarIcon: {
    color: '#000',
  },
  slotButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Ensures buttons have space between them
  },
  slotButton: {
    // backgroundColor: '#f0f0f0',
    borderWidth:1,
    borderColor:"#00B562",
    padding: 10,
    margin: 8, // Increased margin for more spacing between buttons
    borderRadius: 5,
    width: '45%',
    textAlign: 'center',
  },
  selectedSlotButton: {
    backgroundColor: '#00B562',
  },

  slotButtonText: {
    color: '#000',
    fontFamily: 'HankenGroteskRegular',
  },
  courtSelection: {
    marginBottom: 16,
  },
  courtText: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'HankenGroteskBold',
  },
  courtButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courtButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 4,
    borderRadius: 5,
    width: '30%',
    textAlign: 'center',
  },
  selectedCourtButton: {
    backgroundColor: '#00B562',
  },
  courtButtonText: {
    color: '#000',
  },
  additionalOptions: {
    marginBottom: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioButton: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // Remove borderRadius to keep it square
  },
  
  selectedRadioButton: {
    backgroundColor: '#00B562',
    borderColor: 'green',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  checkboxText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'HankenGroteskSemiBold',
  },
  couponInput: {
    borderWidth: 1,
    borderColor: '#8F8F8F',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    // fontWeight:"bold"
  },
  chargesContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  chargesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  chargesText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'HankenGroteskRegular',
    // fontWeight:"bold"
  },
  chargesValue: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'HankenGroteskBold',
  },
  totalAmount: {
    marginBottom: 16,
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
  },
  payButton: {
    backgroundColor: '#00B562',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
  },
  // i have at 
  couponContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    padding: 20,
    borderWidth: 1,           // 1px border width
    borderColor: '#8F8F8F',    // Border color set to black
    borderRadius: 7,         // Optional: Rounded corners
  },
  couponLabel: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'HankenGroteskBold',
  },
  couponArrow: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'HankenGroteskBold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c5ffe4', 
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default BookingPage;
