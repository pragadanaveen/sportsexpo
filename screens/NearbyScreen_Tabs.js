import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ["Live Matches", "Coming Soon", "Cricket", "Football"];

  return (
    <View style={styles.container}>
      {/* Horizontal Scrollable Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tab,
              selectedTab === index ? styles.activeTab : null,
            ]}
            onPress={() => setSelectedTab(index)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === index ? styles.activeTabText : null,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Render Content Based on Selected Tab */}
      <View style={styles.content}>
        {selectedTab === 0 && <Text style={styles.contentText}>Live Matches Content</Text>}
        {selectedTab === 1 && <Text style={styles.contentText}>Coming Soon Content</Text>}
        {selectedTab === 2 && <Text style={styles.contentText}>Cricket Content</Text>}
        {selectedTab === 3 && <Text style={styles.contentText}>Football Content</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#1976D2",
  },
  tabText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "blue",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default App;
