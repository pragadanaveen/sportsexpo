// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const MatchPage = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.teamContainer}>
//           <Text style={styles.teamName}>The Swords</Text>
//           <Image source={require("../assets/Logo.png")} style={styles.teamLogo} />
//         </View>
//         <Text style={styles.vs}>VS</Text>
//         <View style={styles.teamContainer}>
//           <Text style={styles.teamName}>Lorem Ipsum Eagle</Text>
//           <Image source={require("../assets/Logo.png")} style={styles.teamLogo} />
//         </View>
//       </View>

//       <View style={styles.matchDetails}>
//         <Text style={styles.detail}>Date: 12th October, 2024</Text>
//         <Text style={styles.detail}>Time: 04:30 PM</Text>
//         <Text style={styles.detail}>Venue: JS Grounds, Gachibowli</Text>
//         <Text style={styles.detail}>Referee: Harish Jayaraj</Text>
//       </View>

//       <Text style={styles.content}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque massa quis velit bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque massa quis velit bibendum.
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 30, // More spacing between header and match details
//   },
//   teamContainer: {
//     alignItems: 'center',
//     marginHorizontal: 20, // Add spacing between the teams
//   },
//   teamName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10, // Spacing between name and logo
//   },
//   teamLogo: {
//     width: 100,
//     height: 100,
//   },
//   vs: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginHorizontal: 10, // Add spacing around "VS"
//   },
//   matchDetails: {
//     marginBottom: 20,
//     alignSelf: 'flex-start', // Align the details to the left
//   },
//   detail: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   content: {
//     fontSize: 16,
//     marginTop: 1,
//   },
// });

// export default MatchPage;
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useFonts } from "expo-font"
const MatchPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isRequestSent, setIsRequestSent] = useState(false); // State to track request status
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });
  const handleSendRequest = () => {
    setModalVisible(true);
    setIsRequestSent(true); // Mark the request as sent
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>The Swords</Text>
          <Image source={require("../assets/Team.png")} style={styles.teamLogo} />
        </View>
        <Text style={styles.vs}>VS</Text>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Lorem Ipsum Eagle</Text>
          <Image source={require("../assets/Team.png")} style={styles.teamLogo} />
        </View>
      </View>

      <View style={styles.matchDetails}>
  <View style={styles.detailRow}>
    <Text style={styles.matchDetailLabel}>Date:</Text>
    <Text style={styles.matchDetailValue}>12th October, 2024</Text>
  </View>
  <View style={styles.detailRow}>
    <Text style={styles.matchDetailLabel}>Time:</Text>
    <Text style={styles.matchDetailValue}>04:30 PM</Text>
  </View>
  <View style={styles.detailRow}>
    <Text style={styles.matchDetailLabel}>Venue:</Text>
    <Text style={styles.matchDetailValue}>JS Grounds, Gachibowli</Text>
  </View>
  <View style={styles.refereeRow}>
    <Text style={styles.refereeLabel}>Referee:</Text>
    <View style={styles.refereeContainer}>
      <Text style={styles.refereeText}>Need Referee</Text>
    </View>
  </View>
</View>


      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque massa quis velit bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque massa quis velit bibendum.
      </Text>

      <View style={styles.footer}>
      <TouchableOpacity
  style={[
    styles.sendRequestButton,
    (modalVisible || isRequestSent) && styles.sendRequestButtonDisabled,
  ]}
  onPress={handleSendRequest}
  disabled={modalVisible || isRequestSent} // Disable button when modal is visible or request is sent
>
  <Text style={styles.sendRequestButtonText}>
    {isRequestSent ? "Request Sent" : "Send Request"}
  </Text>
</TouchableOpacity>

      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Referee Request</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Image
                  source={require('../assets/Delete_Icon.png')}
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>
              Your request has been sent to the admin. You will receive notification soon. Please check your home page for updates.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  teamContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  teamName: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
    marginBottom: 10,
    color:"#3D3D3D"
  },
  teamLogo: {
    width: 100,
    height: 100,
  },
  vs: {
    fontSize: 20,
    fontFamily: 'HankenGroteskBold',
    marginHorizontal: 10,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  matchDetailLabel: {
    fontSize: 16,
    color: '#666666',
    marginRight: 5,
    fontFamily: 'HankenGroteskRegular',
  },
  matchDetailValue: {
    fontSize: 16,
    color: '#3D3D3D',
    fontFamily: 'HankenGroteskBold',
  },
  refereeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  refereeLabel: {
    fontSize: 16,
    marginRight: 5,
    fontFamily: 'HankenGroteskRegular',
  },
  refereeContainer: {
    backgroundColor: '#00B56233',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  refereeText: {
    fontSize: 16,
    color: '#008C4C',
    fontFamily: 'HankenGroteskBold',
  },
  content: {
    fontSize: 16,
    marginTop: 1,
    flexGrow: 1,
    color:"#666666",
    textAlign:"left",
    fontFamily: 'HankenGroteskRegular',
    lineHeight:23
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  sendRequestButton: {
    backgroundColor: '#00B562',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
    width: '90%',
  },
  sendRequestButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'HankenGroteskBold',
  },
  sendRequestButtonDisabled: {
    backgroundColor: '#d3d3d3',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
  },
  deleteIcon: {
    width: 12,
    height: 12,
  },
  modalText: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'HankenGroteskRegular',
  },
});

export default MatchPage;






