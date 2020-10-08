import React from 'react';
import {Text,View,StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const firstSemCourses = [{sem : 'First Semester',key: ''},{course_code:'SWE 4101',key: '1'},{course_code:'MATH 4141',key: '2'},{course_code: 'CSE 4107',key: '3'},{course_code:'HUM 4145',key: '4'},{course_code: 'HUM 4147',key: '5'},{course_code: 'PHY 4143',key: '6'}];
const secondSemCourses = [{sem : 'Second Semester',key: ''},{course_code:'HUM 4247',key: '1'},{course_code:'HUM 4249',key: '2'},{course_code:'MATH 4241',key: '3'},{course_code:'CSE 4203',key: '4'},{course_code:'CSE 4205',key: '5'},{course_code:'SWE 4201',key: '6'}];
const thirdSemCourses = [{sem : 'Third Semester',key: ''},{course_code:'MATH 4341',key: '1'},{course_code:'CSE 4303',key: '2'},{course_code:'CSE 4305',key: '3'},{course_code:'CSE 4307',key: '4'},{course_code:'CSE 4309',key: '5'},{course_code:'SWE 4301',key: '6'}];
const SemesterSelectionScreen = (props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button color="#bfb4de" title='1st Semester' onPress={
                    function(){
                        props.navigation.navigate('Course Lists',firstSemCourses);
                    }
                }>     
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button color="#bfb4de" title='2nd Semester' onPress={
                    function(){
                        props.navigation.navigate('Course Lists',secondSemCourses);
                    }
                }>

                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button color="#bfb4de" title ='3rd Semester' onPress={
                    function(){
                        props.navigation.navigate('Course Lists',thirdSemCourses);
                    }
                }>

                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
      },
    buttonContainer:{
        justifyContent: 'center',
        padding: 5,
        marginTop: 20,
        marginBottom: 10,
        width: '50%',
        height: '20%',
    }
})

export default SemesterSelectionScreen;