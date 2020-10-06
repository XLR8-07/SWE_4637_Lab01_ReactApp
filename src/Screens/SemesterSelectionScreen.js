import React from 'react';
import {Text,View,StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const buttonTitle = [{sem :'1st Semester'},{sem :'2nd Semester'}, {sem :'3rd Semester'}];
const firstSemCourses = [{course_code:'SWE 4101'},{course_code:'MATH 4141'},{course_code: 'CSE 4107'},{course_code:'HUM 4145'},{course_code: 'HUM 4147'},{course_code: 'PHY 4143'}];
const secondSemCourses = [{course_code:'HUM 4247'},{course_code:'HUM 4249'},{course_code:'MATH 4241'},{course_code:'CSE 4203'},{course_code:'CSE 4205'},{course_code:'SWE 4201'}];
const thirdSemCourses = [{course_code:'MATH 4341'},{course_code:'CSE 4303'},{course_code:'CSE 4305'},{course_code:'CSE 4307'},{course_code:'CSE 4309'},{course_code:'SWE 4301'}];
const SemesterSelectionScreen = (props)=>{
    return(
        <View>
            <FlatList
            data = {buttonTitle}
            renderItem= {
                function({item}){
                    return(<Button title={item.sem} onPress={
                        function(){
                            if(item.sem=='1st Semester'){
                                console.log(item.sem);
                                props.navigation.navigate('Course Lists',firstSemCourses);
                            }
                            else if(item.sem == '2nd Semester'){
                                console.log(item.sem);
                                props.navigation.navigate('Course Lists',secondSemCourses);
                            }
                            else if(item.sem == '3rd Semester'){
                                console.log(item.sem);
                                props.navigation.navigate('Course Lists',thirdSemCourses);
                            }
                        }
                    }>
                    </Button>);
                } 
            }>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        
    }
})

export default SemesterSelectionScreen;