import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Share,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Pie from "react-native-pie-chart";
// import { Picker } from '@react-native-picker/picker';



const ProfileScreen = ({ navigation }) => {
    const [selectedSport, setSelectedSport] = useState(null);
  
    const handleShare = async () => {
      try {
        await Share.share({
          message: "Check out this profile on our app!",
        });
      } catch (error) {
        alert(error.message);
      }
    };
  
    const onPressHandle = () => {
      navigation.navigate("EditDetails"); // Make sure your EditDetails screen is registered in your navigation
    };
    const handlechange = () => {
      navigation.navigate("EditSports"); // Make sure your EditDetails screen is registered in your navigation
    };
    const Addhandlechange = () => {
      navigation.navigate("AddSport"); // Make sure your EditDetails screen is registered in your navigation
    };
  
    const handle = () => {
      navigation.navigate("EditAbout"); // Make sure your EditDetails screen is registered in your navigation
    };
    const handleEditAchievement = () => {
      navigation.navigate("EditAchievements"); // Make sure your EditDetails screen is registered in your navigation
    };
    const handleIndividualAchivementEdit = () => {
      navigation.navigate("IndividualAchivementEdit"); // Make sure your EditDetails screen is registered in your navigation
    };
    const handleEditCertifications = () => {
      navigation.navigate("EditCertifications"); // Make sure your EditDetails screen is registered in your navigation
    };
    const handleIndividualCertificationEdit = () => {
      navigation.navigate("IndividualCertificationEdit"); // Make sure your EditDetails screen is registered in your navigation
    };
  
    const sports = [
      { id: 1, name: "Cricket", icon: require("../assets/Tennis.png") },
      { id: 2, name: "Football", icon: require("../assets/Tennis.png") },
      { id: 3, name: "Basketball", icon: require("../assets/Tennis.png") },
      { id: 4, name: "Tennis", icon: require("../assets/Tennis.png") },
      // Add more sports as needed
    ];
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* Background Image and Profile Photo */}
        <View style={styles.backgroundContainer}>
          <Image
            source={require("../assets/ground.jpg")}
            style={styles.backgroundImage}
          />
          <Image
            source={require("../assets/profile1.png")}
            style={styles.profileImage}
          />
        </View>
  
        {/* Player Info Row */}
        <View style={styles.playerInfoRow}>
          <Text style={styles.playerName}>Keshav Ram Chowhan</Text>
          <View style={styles.iconsRow}>
            <TouchableOpacity onPress={handleShare}>
              <Feather name="share-2" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton} onPress={onPressHandle}>
              <Feather name="edit" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
  
        {/* User Details */}
        <View style={styles.userDetails}>
          <Text style={styles.details}>User since 2023</Text>
          <Text style={styles.details}>Student at NIT Rourkela</Text>
          <Text style={styles.details}>Lives in Hyderabad, Telangana</Text>
        </View>
  
        {/* Sports Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sports</Text>
            <View style={styles.iconsRow}>
              <TouchableOpacity>
                <Feather name="plus" size={20} color="black" onPress={Addhandlechange} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.editButton} onPress={handlechange}>
                <Feather name="edit" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sports.map((sport) => (
              <TouchableOpacity
                key={sport.id}
                style={[
                  styles.sportItem,
                  {
                    backgroundColor:
                      selectedSport === sport.id ? "#BBDDFF" : "transparent",
                  },
                ]}
                onPress={() => setSelectedSport(sport.id)}
              >
                <Image source={sport.icon} style={styles.sportIcon} />
                <Text style={styles.sportName}>{sport.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
  
        {/* Sport Statistics Section */}
        <View style={styles.sportStatsSection}>
          <View style={styles.statsColumn}>
            <Text style={styles.statsLabel}>Sport Rating</Text>
            <Text style={styles.statsLabel}>Total Matches</Text>
            <Text style={styles.statsLabel}>Sport Role</Text>
            <Text style={styles.statsLabel}>Level</Text>
            <Text style={styles.statsLabel}>Time Spent</Text>
          </View>
          <View style={styles.statsValuesColumn}>
            <Text style={styles.statsValue}>4.5</Text>
            <Text style={styles.statsValue}>30</Text>
            <Text style={styles.statsValue}>Player</Text>
            <Text style={styles.statsValue}>Intermediate</Text>
            <Text style={styles.statsValue}>150 hrs</Text>
          </View>
          <View style={styles.statsChartColumn}>
            <View style={styles.pieContainer}>
              <Pie
                widthAndHeight={90}
                series={[60, 40, 30]}
                sliceColor={["#36A2EB", "#FFCE56", "red"]}
                doughnut={true}
                coverRadius={0.69}
                coverFill={"#fff"}
              />
              <Text style={styles.pieText1}>Win Rate 60%</Text>
              <View style={styles.colorLegend}>
                <View style={styles.colorBox}>
                  <View
                    style={[styles.colorCircle, { backgroundColor: "#36A2EB" }]}
                  />
                  <Text style={styles.colorName}>Win</Text>
                </View>
                <View style={styles.colorBox}>
                  <View
                    style={[styles.colorCircle, { backgroundColor: "#FFCE56" }]}
                  />
                  <Text style={styles.colorName}>Tie</Text>
                </View>
                <View style={styles.colorBox}>
                  <View
                    style={[styles.colorCircle, { backgroundColor: "red" }]}
                  />
                  <Text style={styles.colorName}>Lost</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

      {/* About Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle1}>About</Text>
          <TouchableOpacity style={styles.editButton1} onPress={handle}>
            <Feather name="edit" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          pellentesque massa quis velit bibendum ultricies.
        </Text>
      </View>

      {/* Certifications Section */}

      <View style={styles.sectionContainer}>
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Certifications</Text>
    <View style={styles.iconsRow}>
      <TouchableOpacity>
        <Feather name="plus" size={20} color="black"  onPress={handleIndividualCertificationEdit}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
        <Feather name="edit" size={20} color="black" onPress={handleEditCertifications}/>
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.horizontalLine} />

  {/* Certification Item 1 */}
  <View style={styles.certificationItem}>
    <Image
      source={require("../assets/Logo.png")}
      style={styles.certificationLogo}
    />
    <View>
      <Text style={styles.certificationTitle}>
        Professional Tennis Registry (PTR)
      </Text>
      <Text style={styles.certificationDate}>
        Certified on: January 2023
      </Text>
      <View style={styles.distance} />
      <Text style={styles.skillsAchievedTitle}>Skills Achieved</Text>
      <Text style={styles.skillsList}>Tennis, Coaching, Strategy</Text>
    </View>
  </View>

  {/* Horizontal line after certification item 1 */}
  <View style={styles.horizontalLine} />

  {/* Certification Item 2 */}
  <View style={styles.certificationItem}>
    <Image
      source={require("../assets/Logo.png")}
      style={styles.certificationLogo}
    />
    <View>
      <Text style={styles.certificationTitle}>
        Certified Basketball Coach
      </Text>
      <Text style={styles.certificationDate}>
        Certified on: March 2022
      </Text>
      <View style={styles.distance} />
      <Text style={styles.skillsAchievedTitle}>Skills Achieved</Text>
      <Text style={styles.skillsList}>Basketball, Coaching, Team Management</Text>
    </View>
  </View>

  {/* Horizontal line after certification item 2 */}
  <View style={styles.horizontalLine} />

  {/* Certification Item 3 */}
  <View style={styles.certificationItem}>
    <Image
      source={require("../assets/Logo.png")}
      style={styles.certificationLogo}
    />
    <View>
      <Text style={styles.certificationTitle}>
        Advanced Football Training Certification
      </Text>
      <Text style={styles.certificationDate}>
        Certified on: August 2021
      </Text>
      <View style={styles.distance} />
      <Text style={styles.skillsAchievedTitle}>Skills Achieved</Text>
      <Text style={styles.skillsList}>Football, Strategy, Leadership</Text>
    </View>
  </View>
</View>



      {/* Achievements Section */}
     {/* Achievements Section */}
<View style={styles.sectionContainer}>
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Achievements</Text>
    <View style={styles.iconsRow}>
      <TouchableOpacity>
        <Feather name="plus" size={20} color="black" onPress={handleIndividualAchivementEdit}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
        <Feather name="edit" size={20} color="black" onPress={handleEditAchievement}/>
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles.horizontalLine} />
  
  {/* Achievement Item 1 */}
  <View style={styles.achievementItem}>
    <Image
      source={require("../assets/Logo.png")} // Replace with your logo image path
      style={styles.achievementLogo}
    />
    <View>
      <Text style={styles.achievementTitle}>Regional Tennis Champion</Text>
      <Text style={styles.achievedDate}>Achieved on: 15/08/2022</Text>
    </View>
  </View>

  {/* Horizontal line after achievement item 1 */}
  <View style={styles.horizontalLine} />

  {/* Achievement Item 2 */}
  <View style={styles.achievementItem}>
    <Image
      source={require("../assets/Logo.png")} // Replace with your logo image path
      style={styles.achievementLogo}
    />
    <View>
      <Text style={styles.achievementTitle}>State Basketball Champion</Text>
      <Text style={styles.achievedDate}>Achieved on: 20/11/2021</Text>
    </View>
  </View>

  {/* Horizontal line after achievement item 2 */}
  <View style={styles.horizontalLine} />

  {/* Achievement Item 3 */}
  <View style={styles.achievementItem}>
    <Image
      source={require("../assets/Logo.png")} // Replace with your logo image path
      style={styles.achievementLogo}
    />
    <View>
      <Text style={styles.achievementTitle}>National Football Tournament Winner</Text>
      <Text style={styles.achievedDate}>Achieved on: 05/02/2020</Text>
    </View>
  </View>
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingLeft: 15,
    padding: 12,
  },
  sectionTitle1: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  editButton1: {
    marginTop: 20,
    marginLeft: 10,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // You can customize the color
    marginVertical: 10, // Controls space around the line
  },

  backgroundContainer: { position: "relative" },
  backgroundImage: { width: "100%", height: 140, borderRadius: 10 },
  profileImage: {
    position: "absolute",
    bottom: -50,
    left: 15,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  playerInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  playerName: { fontSize: 24, fontWeight: "bold", color: "#333" },
  iconsRow: { flexDirection: "row" },
  editButton: { marginLeft: 10 },
  userDetails: { marginTop: 15, marginBottom: 20 },
  details: { fontSize: 16, color: "#666" },
  sectionContainer: { marginBottom: 25 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#333" },
  horizontalLine: { height: 1, backgroundColor: "#ddd", marginVertical: 12 },
  sportsScroll: { flexDirection: "row" },
  sportItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
  },
  sportIcon: { width: 40, height: 30, marginRight: 7 },
  sportName: { fontSize: 16, color: "#333", marginRight: 8 },
  sportStatsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statsColumn: { flex: 1, paddingRight: 10 },
  statsValuesColumn: { flex: 1, paddingLeft: 10 },
  statsChartColumn: { flex: 1, alignItems: "center" },
  statsLabel: { fontSize: 16, color: "#666", marginBottom: 5 },
  statsValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  aboutText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    paddingTop: 2, // Adding some padding on top of the about section
  },

  certificationItem: {
    flexDirection: "row",
    alignItems: "center", // Ensures the logo and text are aligned vertically in the center
    marginBottom: 20,
    justifyContent: "flex-start", // Ensures the logo stays at the start of the line
  },

  certificationLogo: { width: 40, height: 40, marginRight: 12, marginTop: -55 },
  certificationTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  certificationSkills: { fontSize: 14, color: "#666" },
  achievementItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  achievementLogo: { width: 40, height: 40, marginRight: 10 },
  achievementTitle: { fontSize: 16, fontWeight: "bold", color: "#333" },
  achievedDate: { fontSize: 14, color: "#666", marginTop: 5 }, // New style for date
  //   i have
  pieContainer: {
    alignItems: "center", // Center the pie chart and text
    justifyContent: "center",
  },
  pieText: {
    position: "absolute",
    top: "50%", // Vertically center the text inside the pie chart
    left: "50%", // Horizontally center the text inside the pie chart
    transform: [{ translateX: -10 }, { translateY: -25 }],
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
  },
  pieText1: {
    position: "absolute",
    top: "50%", // Vertically center the text inside the pie chart
    left: "50%", // Horizontally center the text inside the pie chart
    transform: [{ translateX: -15 }, { translateY: -25 }],
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
  },
  colorLegend: {
    flexDirection: "row", // Display the color boxes horizontally
    marginTop: 10,
    justifyContent: "center",
  },
  colorBox: {
    flexDirection: "row", // Arrange the circle and text in a row
    alignItems: "center",
    marginRight: 9, // Add space between the items
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10, // Make the circle
    marginRight: 5, // Add space between circle and text
  },
  colorName: {
    fontSize: 14,
    color: "#333",
  },
  certificationDate: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5, // Adds a little space between the title and date
  },
  distance: {
    height: 10, // Adds a small gap for spacing
  },
  skillsAchievedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10, // Adds top margin to give space from the date
  },
  skillsList: {
    fontSize: 14,
    color: "#666",
  },
});

export default ProfileScreen;
