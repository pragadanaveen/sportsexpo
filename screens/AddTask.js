import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal,Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Dropdown } from 'react-native-element-dropdown';

const AddTaskScreen = () => {
  const [taskTitle, setTaskTitle] = useState('Water Drinking');
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [repeatOption, setRepeatOption] = useState('Daily');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });

  const handleSaveTask = () => {
    console.log('Saved task:', {
      taskTitle,
      startDate,
      repeatOption,
      selectedDays,
    });
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowDatePicker(false);
    setStartDate(currentDate);
  };

  const handleDaySelection = (day) => {
    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((selectedDay) => selectedDay !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };

  const handleApply = () => {
    setRepeatOption(selectedDays.join(', '));
    setShowPopup(false);
  };

  const taskOptions = [
    { label: 'Water Drinking', value: 'Water Drinking' },
    { label: 'Exercise', value: 'Exercise' },
    { label: 'Study', value: 'Study' },
    { label: 'Sleep', value: 'Sleep' },
    { label: 'Cooking', value: 'Cooking' },
  ];

  const repeatOptions = [
    { label: 'Daily', value: 'Daily' },
    { label: 'Alternative Days', value: 'Alternative Days' },
    { label: 'Customize', value: 'Customize' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Task Title *</Text>
          <Dropdown
            data={taskOptions}
            labelField="label"
            valueField="value"
            value={taskTitle}
            onChange={(item) => setTaskTitle(item.value)}
            style={styles.dropdown}
            placeholder="Select Task"
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Start From</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputWithIcon}>
            <Text>{startDate.toLocaleDateString()}</Text>
            <Ionicons name="calendar-outline" size={24} color="#525252" style={styles.calendarIcon} />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Repeat</Text>
          <Dropdown
            data={repeatOptions}
            labelField="label"
            valueField="value"
            value={repeatOption}
            onChange={(item) => {
              if (item.value === 'Customize') {
                setShowPopup(true);
              }
              setRepeatOption(item.value);
            }}
            style={styles.dropdown}
            placeholder="Select Repeat Option"
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
        <Text style={styles.saveButtonText}>Save Task</Text>
      </TouchableOpacity>

      {/* Popup for Customizing Repeat */}
      <Modal
        visible={showPopup}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowPopup(false)}
      >
        <View style={styles.popupOverlay}>
          <View style={styles.popupContainer}>
            <View style={styles.popupHeader}>
              <Text style={styles.popupTitle}>Repeat On</Text>
              <TouchableOpacity onPress={() => setShowPopup(false)}>
                <Text style={styles.closeButton}>×</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <TouchableOpacity
                  key={day}
                  onPress={() => handleDaySelection(day)}
                  style={[styles.radioOption]}
                >
                  <View
                    style={[styles.radioCircle, selectedDays.includes(day) && styles.selectedCircle]}
                  >
                    {selectedDays.includes(day) && (
                     <Image
                     source={require('../assets/TickMark.png')} // Path to your tick image
                     style={styles.tickMark}
                   />
                    )}
                  </View>
                  <Text style={styles.dayText}>{day}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
    fontFamily: 'HankenGroteskBold',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    height: 50,
  },
  calendarIcon: {
    marginLeft: 'auto',
  },
  dropdown: {
    height: 50,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: 'HankenGroteskRegular',
    color: '#3D3D3D',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'HankenGroteskRegular',
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#00B562',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    width:"85%",
    alignSelf:"center"
  },
  saveButtonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
  },
  popupOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 8,
    padding: 20,
  },
  popupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popupTitle: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
  },
  closeButton: {
    fontSize: 30,
    color: '#000',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: "3%",
  },
  radioCircle: {
    width: 17, // Square dimensions
    height: 17,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius:2 // Optional: add background color
  },
  selectedCircle: {
    backgroundColor: '#00B562',
    borderColor: '#00B562',
  },
  tickMark: {
    width: 12, // Slightly smaller than the container size
    height: 12, // Maintain aspect ratio
    resizeMode: 'contain', // Ensure the image scales properly
  },
  dayText: {
    fontSize: 16,
    fontFamily: 'HankenGroteskRegular',
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#00B562',
    paddingVertical: 12,
    borderRadius: 20,
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
    fontFamily: 'HankenGroteskRegular',
    alignSelf:"center"
  },
  applyButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'HankenGroteskSemiBold',
  },
});

export default AddTaskScreen;
