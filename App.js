import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SemesterSelectionScreen from './src/Screens/SemesterSelectionScreen';
import HomeScreen from './src/Screens/HomeScreen';
import CourseListScreen from './src/Screens/CourseListScreen';
import FacultyListScreen from './src/Screens/FacultyListScreen';
import MyProfileScreen from './src/Screens/MyProfileScreen';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Semesters" component={SemesterSelectionScreen}/>
        <stack.Screen name="Course Lists" component={CourseListScreen}/>
        <stack.Screen name="Faculty Lists" component={FacultyListScreen}/>
        <stack.Screen name="User Profile" component={MyProfileScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

