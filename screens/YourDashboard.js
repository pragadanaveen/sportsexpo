import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Dropdown } from 'react-native-element-dropdown';

const FitnessTracker = () => {
    const navigation = useNavigation();
    const handleadd = () => {
        navigation.navigate("AddTask");
    };

    // Load fonts
    const [fontsLoaded] = useFonts({
        'HankenGroteskBlack': require('../assets/fonts/HankenGrotesk-Black.ttf'),
        'HankenGroteskRegular': require('../assets/fonts/HankenGrotesk-Regular.ttf'),
        'HankenGroteskSemiBold': require('../assets/fonts/HankenGrotesk-SemiBold.ttf'),
        'HankenGroteskMedium': require('../assets/fonts/HankenGrotesk-Medium.ttf'),
    });

    const initialTasks = [
        { title: '100 Pull-ups', completed: false, day: 'Mon', streak: 20 },
        { title: '200 Pull-ups', completed: false, day: 'Mon', streak: 20 },
        { title: '200 Pull-ups', completed: false, day: 'Mon', streak: 20 },
        { title: '200 Pull-ups', completed: false, day: 'Mon', streak: 20 },
        { title: '200 Pull-ups', completed: false, day: 'Mon', streak: 20 },
        { title: 'Drink 5L of Water', completed: false, day: 'Tue', streak: 15 },
        { title: 'Drink 5L of Water', completed: false, day: 'Tue', streak: 15 },
        { title: 'Drink 5L of Water', completed: false, day: 'Tue', streak: 15 },
        { title: 'Drink 5L of Water', completed: false, day: 'Tue', streak: 15 },
        { title: 'Drink 5L of Water', completed: false, day: 'Tue', streak: 15 },
        { title: 'Run 5km', completed: true, day: 'Wed', streak: 10 },
        { title: 'Run 5km', completed: true, day: 'Wed', streak: 10 },
        { title: 'Run 5km', completed: true, day: 'Wed', streak: 10 },
        { title: 'Run 5km', completed: true, day: 'Wed', streak: 10 },
        { title: 'Run 5km', completed: true, day: 'Wed', streak: 10 },
        { title: 'Push-ups', completed: true, day: 'Thu', streak: 5 },
        { title: 'Push-ups', completed: true, day: 'Thu', streak: 5 },
        { title: 'Push-ups', completed: true, day: 'Thu', streak: 5 },
        { title: 'Push-ups', completed: true, day: 'Thu', streak: 5 },
        { title: 'Push-ups', completed: true, day: 'Thu', streak: 5 },
        { title: 'Meditation', completed: false, day: 'Fri', streak: 3 },
        { title: 'Meditation', completed: false, day: 'Fri', streak: 3 },
        { title: 'Meditation', completed: false, day: 'Fri', streak: 3 },
        { title: 'Meditation', completed: false, day: 'Fri', streak: 3 },
        { title: 'Meditation', completed: false, day: 'Fri', streak: 3 },
        { title: 'Yoga Session', completed: false, day: 'Sat', streak: 2 },
        { title: 'Yoga Session', completed: false, day: 'Sat', streak: 2 },
        { title: 'Yoga Session', completed: false, day: 'Sat', streak: 2 },
        { title: 'Yoga Session', completed: false, day: 'Sat', streak: 2 },
        { title: 'Yoga Session', completed: false, day: 'Sat', streak: 2 },
        { title: 'Eat a Fruit', completed: false, day: 'Sun', streak: 1 },
        { title: 'Eat a Fruit', completed: false, day: 'Sun', streak: 1 },
        { title: 'Eat a Fruit', completed: false, day: 'Sun', streak: 1 },
        { title: 'Eat a Fruit', completed: false, day: 'Sun', streak: 1 },
        { title: 'Eat a Fruit', completed: false, day: 'Sun', streak: 1 },
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [selectedValue, setSelectedValue] = useState('This Week');

    const toggleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const calculateProgressForDay = (day) => {
        const dayTasks = tasks.filter(task => task.day === day);
        const completedTasks = dayTasks.filter(task => task.completed).length;
        return {
            completed: completedTasks,
            total: dayTasks.length,
        };
    };

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <View style={styles.container}>
            {/* Scrollable Content */}
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Header with Dropdown and Total Progress Bar */}
                <View style={styles.header}>
                    <Dropdown
                        data={[{ label: "This Week", value: "This Week" }, { label: "This Month", value: "This Month" }]}
                        labelField="label"
                        valueField="value"
                        style={styles.dropdown}
                        placeholder="Select Time Frame"
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        value={selectedValue}
                        onChange={(item) => setSelectedValue(item.value)}
                    />
                </View>

                {/* Vertical Progress Bars for Days */}
                <View style={styles.weekProgressContainer}>
                    {weekDays.map((day, index) => {
                        const progress = calculateProgressForDay(day);
                        const progressHeight = progress.total ? (progress.completed / progress.total) * 100 : 0;
                        return (
                            <View key={index} style={styles.dayContainer}>
                                <View style={styles.progressWrapper}>
                                    <View style={[styles.progressBar, { height: `${progressHeight}%` }]} >
                                        {/* Display progress text */}
                                        {progress.completed === 0 ? (
                                            <Text style={styles.progressTextNoTasks}>
                                                {progress.completed}/{progress.total}
                                            </Text>
                                        ) : (
                                            <Text style={styles.progressText}>
                                                {progress.completed}/{progress.total}
                                            </Text>
                                        )}
                                    </View>
                                </View>
                                <Text style={styles.dayText}>{day}</Text>
                            </View>
                        );
                    })}
                </View>

                {/* Task List */}
                <View style={styles.tasksContainer}>
                    {tasks.map((task, index) => (
                        <View key={index} style={styles.taskContainer}>
                            {/* Radio button for task completion */}
                            <TouchableOpacity
                                style={[styles.checkbox, task.completed && styles.checked]}
                                onPress={() => toggleTaskCompletion(index)}
                            >
                                {task.completed && <Image
                     source={require('../assets/TickMark.png')} // Path to your tick image
                     style={styles.tickMark}
                   />}
                            </TouchableOpacity>

                            {/* Task Details */}
                            <View style={styles.taskInfo}>
                                <Text style={styles.taskTitle}>{task.title}</Text>
                                <Text style={styles.streakText}>{task.streak}-day Streak</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Add Button at the bottom right */}
            <TouchableOpacity style={styles.addButton} onPress={handleadd}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "0%",
        padding: "5%",
        position: 'relative',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        marginBottom: 10,
    },
    dropdown: {
        height: 50,
        width: "100%",
        borderColor: '#D0D0D0',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    placeholderStyle: {
        fontSize: 16,
        fontFamily: "HankenGroteskSemiBold",
        color: '#3D3D3D',
    },
    selectedTextStyle: {
        fontSize: 20,
        fontFamily: "HankenGroteskSemiBold",
        color: '#3D3D3D',
    },
    weekProgressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: "2%",
    },
    dayContainer: {
        alignItems: 'center',
    },
    progressWrapper: {
        width: 45,
        height: 90,
        backgroundColor: '#f2f2f2',
        borderRadius: 25,
        justifyContent: 'flex-end',
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
    },
    progressBar: {
        width: '100%',
        backgroundColor: '#008C4C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    progressText: {
        fontSize: 12,
        color: '#000',
        fontWeight: 'bold',
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 30,
        position: 'absolute',
        top: 3,
    },
    progressTextNoTasks: {
        fontSize: 12,
        color: '#000',  // Red color for no tasks completed
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 3,  // Positioning the text inside the progress bar
        textAlign: 'center',
        width: 30,  // Fixed width for circular shape
        height: 30,  // Fixed height for circular shape
        borderRadius: 20,  // Half of width/height to make it circular
        justifyContent: 'center',  // Centers the text vertically
        alignItems: 'center',  // Centers the text horizontally
        lineHeight: 30,  // Centers the text vertically within the circle
        borderWidth: 1,  // Border for the circle
        borderColor: '#FFFFFF',  // White border color
    },
    dayText: {
        fontFamily: 'HankenGroteskSemiBold',
        fontSize: 14,
        color: '#3D3D3D',
        marginTop: 5,
    },
    tasksContainer: {
        marginTop: 15,
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 15,   // Increased padding for higher task container height
        borderWidth: 1,
        borderColor: '#D0D0D0',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000', // Black border for unchecked state
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: '#008C4C', // Green background for checked state
        borderWidth: 0, // Remove border when checked
    },
    checkboxText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    taskInfo: {
        flexDirection: 'column',
    },
    taskTitle: {
        fontFamily: 'HankenGroteskSemiBold',
        fontSize: 16,
        color: '#000',
    },
    streakText: {
        fontFamily: 'HankenGroteskMedium',
        fontSize: 14,
        color: '#525252',
        marginTop: 5,  // Space between task title and streak text
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        backgroundColor: '#008C4C',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
    tickMark: {
        width: 12, // Slightly smaller than the container size
        height: 12, // Maintain aspect ratio
        resizeMode: 'contain', // Ensure the image scales properly
      },
});

export default FitnessTracker;
