import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const WalletTopUpScreen = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (text) => {
    setAmount(text);
  };

  const handlePay = () => {
    console.log('Payment amount:', amount);
  };

  return (
    <View style={styles.container}>
      {/* Wallet Icon */}
      <Image source={require('../assets/Cashback.png')} style={styles.walletIcon} />

      {/* Available Credit */}
      <Text style={styles.title}>Available Credit</Text>
      <Text style={styles.availableCreditText}>0 Points</Text>

      {/* Top Up Wallet Section */}
      <Text style={styles.sectionTitle}>Top up Wallet</Text>
      <TextInput
        style={styles.input}
        placeholder="INR 100"
        keyboardType="numeric"
        onChangeText={handleAmountChange}
      />

      {/* Recommended Amounts */}
      <Text style={styles.sectionTitle}>Recommended</Text>
      <View style={styles.recommendedContainer}>
        {['250', '500', '750', '1,000'].map((value) => (
          <TouchableOpacity key={value} style={styles.recommendedButton}>
            <Text style={styles.recommendedButtonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay {amount || 100}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  walletIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  availableCreditText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  recommendedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  recommendedButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#f0f8ff',
  },
  recommendedButtonText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WalletTopUpScreen;
