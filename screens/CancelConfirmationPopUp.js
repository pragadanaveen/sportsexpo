import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmationPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleCancelBooking = () => {
    // Add your actual cancellation logic here
    console.log('Booking cancelled!');
    setIsPopupVisible(false);
  };

  return (
    <View>
      {/* ... Your main app content ... */}

      {isPopupVisible && (
        <View style={styles.popupContainer}>
          <Text style={styles.popupText}>Are you sure to cancel your booking?</Text>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancelBooking}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={() => setIsPopupVisible(false)}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* ... Rest of your app content ... */}

      <TouchableOpacity style={styles.triggerButton} onPress={() => setIsPopupVisible(true)}>
        <Text>Cancel Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupText: {
    fontSize: 18,
    marginBottom: 20,
  },
  cancelButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  triggerButton: {
    // Style the button that triggers the popup
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default ConfirmationPopup;