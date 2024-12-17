// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// const NoJobPostingsPage = () => {
//   const navigation=useNavigation()
//   const handleCreateJob=()=>{
//     navigation.navigate("CreateJob")
//   }
//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <Image source={require('../assets/jobpost.png')} style={styles.image} />
//         <Text style={styles.message}>It looks like there are no job postings.</Text>
//         <Text style={styles.message}>Create a new job listing to get started.</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleCreateJob}>
//         <Text style={styles.buttonText}>Create a Job</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'space-between',  // This will push the button to the bottom
//     padding: 20,  // To add padding around the content
//   },
//   content: {
//     flex: 1,  // This allows the content to take up remaining space and pushes the button down
//     justifyContent: 'center',
//     alignItems: 'center',
    
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//     lineHeight:15
//   },
//   button: {
//     backgroundColor: '#00B562',
//     padding: 15,
//     borderRadius: 20,
//     marginBottom: 20,  // Adding a margin for spacing
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     alignSelf:"center"
//   },
// });

// export default NoJobPostingsPage;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";

const JobListingScreen = () => {
  const [fontsLoaded] = useFonts({
    'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
    'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
    'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
    'HankenGroteskBold': require('../assets/fonts/HankenGrotesk-Bold.ttf'),
  });
  const navigation = useNavigation();
  const jobs = [
    {
      title: 'Lorem Ipsum',
      company: 'ABC Institute | Hyderabad, Telangana',
      type: 'Full Time',
      postedOn: '01 November, 2024',
      applications: 12,
      status: 'Open',
    },
    {
      title: 'Lorem Ipsum',
      company: 'ABC Institute | Hyderabad, Telangana',
      type: 'Full Time',
      postedOn: '01 November, 2024',
      applications: 12,
      status: 'Closed',
    },
  ];

  const handleJobClick = (job) => {
    if (job.status === 'Open') {
      navigation.navigate('OpentagJobDetails', { job });
    }
  };

  return (
    <View style={styles.container}>
      {jobs.map((job, index) => (
        <TouchableOpacity key={index} onPress={() => handleJobClick(job)}>
          <View style={styles.jobCard}>
            <View style={styles.header}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <TouchableOpacity
                style={[
                  styles.statusTag,
                  {
                    backgroundColor: job.status === 'Open' ? 'green' : 'Red',
                  },
                ]}
              >
                <Text style={styles.statusTagText}>{job.status}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.jobDetail}>
              <Image source={require('../assets/Location.png')} style={styles.icon} />
              <Text style={styles.jobDetailText}>{job.company}</Text>
            </View>
            <View style={styles.jobDetail}>
              <Image source={require('../assets/FullTime.png')} style={styles.icon2} />
              <Text style={styles.jobDetailText}>{job.type}</Text>
            </View>
            <View style={styles.jobDetail}>
              {/* Posted On label */}
              <Text style={[styles.jobDetailText, styles.label]}>
                Posted On:
              </Text>
              {/* Posted On date with custom color */}
              <Text style={[styles.jobDetailText, styles.date]}>
                {job.postedOn}
              </Text>
            </View>
            <View style={styles.jobDetail}>
              {/* Received Applications label */}
              <Text style={[styles.jobDetailText, styles.label]}>
                Received Applications:
              </Text>
              {/* Applications count with custom color */}
              <Text style={[styles.jobDetailText, styles.count]}>
                {job.applications}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  jobCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#666666',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 18,
    fontFamily: 'HankenGroteskBold',
    color: '#000',
  },
  statusTag: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: "rgba(33, 223, 29, 0.2)"
  },
  statusTagText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'HankenGroteskBold',
  },
  jobDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    width: 15,
    height: 17,
  },
  icon2: {
    marginRight: 10,
    width: 15,
    height: 15,
  },
  jobDetailText: {
    fontSize: 15,
    color: '#525252',
    fontFamily: 'HankenGroteskRegular',
  },
  label: {
    color: '#525252',
    fontFamily:"HankenGroteskRegular" // Color for labels like "Posted On" and "Received Applications"
  },
  date: {
    color: '#3D3D3D',
    fontFamily:"HankenGroteskBold" // Color for the date (01 November, 2024)
  },
  count: {
    color: '#3D3D3D',
    fontFamily:"HankenGroteskBold" // Color for the number of applications (12)
  },
  addButton: {
    backgroundColor: '#00B562',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default JobListingScreen;



