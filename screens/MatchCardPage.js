import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Video } from "expo-av";
import MatcheDetails from "./MatcheDetails";
import LiveChat from "./LiveChat";
import Score from "./Score_Nearby";
import Team from "./Team";
import { useFonts } from "expo-font"

const App = () => {
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const [fontsLoaded] = useFonts({
    HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
    HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
    HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
    HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
  });
  const handleCustomIndexSelect = (index) => {
    setCustomStyleIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Live Video Section */}
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: "https://www.youtube.com/watch?v=MvmKSNdyJ9g&t=31s" }}
          style={{ width: "100%", height: 200 }}
          useNativeControls
          resizeMode="contain"
        />
      </View>

      {/* Segmented Control Tabs */}
      <SegmentedControlTab
        values={["Live Chat", "Score", "Teams", "MatchDetails"]}
        selectedIndex={customStyleIndex}
        onTabPress={handleCustomIndexSelect}
        borderRadius={0}
        tabsContainerStyle={styles.segment}
        tabStyle={styles.tab}
        activeTabStyle={styles.activeTab}
        tabTextStyle={styles.tabText}
        activeTabTextStyle={styles.activeTabText}
      />

      {/* Horizontal Ruler */}
      <View style={styles.horizontalRuler} />

      {/* Tab Content */}
      {customStyleIndex === 0 && <LiveChat />}
      {customStyleIndex === 1 && <Score />}
      {customStyleIndex === 2 && <Team />}
      {customStyleIndex === 3 && <MatcheDetails />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  videoContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#000",
    marginBottom: 10,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  segment: {
    width: "90%", // Maintain width to accommodate all tabs
    marginVertical: 20,
    alignSelf: "center",
    borderWidth: 0,
  },
  tab: {
    backgroundColor: "#fff",
    borderWidth: 0,
    paddingVertical: 12, // Maintain good vertical alignment
    paddingHorizontal: "1%", // Reduced horizontal padding
  },
  activeTab: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
  },
  tabText: {
    color: "#8F8F8F",
    fontFamily: "HankenGroteskSemiBold",
    fontSize: 16, // Maintain font size for readability
  },
  activeTabText: {
    color: "#000000",
    fontFamily: "HankenGroteskBold",
    fontSize: 16
  },
  horizontalRuler: {
    height: 1,
    backgroundColor: "#f2f2f2",
    marginVertical: 5, // Add spacing between tabs and content
    width: "90%",
    alignSelf: "center",
  },
});

export default App;
// import React, { useState } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import SegmentedControlTab from "react-native-segmented-control-tab";
// import { Video } from "expo-av";
// import MatcheDetails from "./MatcheDetails";
// import RatePlayer from "./RatePlayer";
// import Score from "./Score_Nearby";
// import Team from "./Team";
// import { useFonts } from "expo-font"

// const App = () => {
//   const [customStyleIndex, setCustomStyleIndex] = useState(0);
//   const [fontsLoaded] = useFonts({
//     HankenGroteskBlack: require("../assets/fonts/HankenGrotesk-Black.ttf"),
//     HankenGroteskRegular: require("../assets/fonts/HankenGrotesk-Regular.ttf"),
//     HankenGroteskSemiBold: require("../assets/fonts/HankenGrotesk-SemiBold.ttf"),
//     HankenGroteskBold: require("../assets/fonts/HankenGrotesk-Bold.ttf"),
//   });
//   const handleCustomIndexSelect = (index) => {
//     setCustomStyleIndex(index);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Live Video Section */}
//       <View style={styles.videoContainer}>
//         <Video
//           source={{ uri: "https://www.youtube.com/watch?v=MvmKSNdyJ9g&t=31s" }}
//           style={{ width: "100%", height: 200 }}
//           useNativeControls
//           resizeMode="contain"
//         />
//       </View>

//       {/* Segmented Control Tabs */}
//       <SegmentedControlTab
//         values={[ "Score", "Teams", "MatchDetails","RatePlayers"]}
//         selectedIndex={customStyleIndex}
//         onTabPress={handleCustomIndexSelect}
//         borderRadius={0}
//         tabsContainerStyle={styles.segment}
//         tabStyle={styles.tab}
//         activeTabStyle={styles.activeTab}
//         tabTextStyle={styles.tabText}
//         activeTabTextStyle={styles.activeTabText}
//       />

//       {/* Horizontal Ruler */}
//       <View style={styles.horizontalRuler} />

//       {/* Tab Content */}
      
//       {customStyleIndex === 0 && <Score />}
//       {customStyleIndex === 1 && <Team />}
//       {customStyleIndex === 2 && <MatcheDetails />}
//       {customStyleIndex === 3&& <RatePlayer />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   videoContainer: {
//     width: "100%",
//     height: 200,
//     backgroundColor: "#000",
//     marginBottom: 10,
//   },
//   video: {
//     width: "100%",
//     height: "100%",
//   },
//   segment: {
//     width: "90%", // Maintain width to accommodate all tabs
//     marginVertical: 20,
//     alignSelf: "center",
//     borderWidth: 0,
//   },
//   tab: {
//     backgroundColor: "#fff",
//     borderWidth: 0,
//     paddingVertical: 12, // Maintain good vertical alignment
//     paddingHorizontal: "1%", // Reduced horizontal padding
//   },
//   activeTab: {
//     backgroundColor: "#fff",
//     borderWidth: 0,
//     borderBottomWidth: 2,
//     borderBottomColor: "blue",
//   },
//   tabText: {
//     color: "#8F8F8F",
//     fontFamily: "HankenGroteskSemiBold",
//     fontSize: 16, // Maintain font size for readability
//     textAlign: "center", // Ensure the text remains centered
//     paddingHorizontal: 10, // Add horizontal space around text
//     letterSpacing: 1, // Optional: Adjust letter spacing for a cleaner look
//   },
//   activeTabText: {
//     color: "#000000",
//     fontFamily: "HankenGroteskBold",
//     fontSize: 16
//   },
//   horizontalRuler: {
//     height: 1,
//     backgroundColor: "#f2f2f2",
//     marginVertical: "-4%", // Add spacing between tabs and content
//     width: "90%",
//     alignSelf: "center",
//   },
// });

// export default App;
