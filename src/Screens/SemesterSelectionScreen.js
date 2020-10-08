import React from 'react';
import {Text,View,StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const buttonTitle = [{sem :'1st Semester',key: '1'},{sem :'2nd Semester',key: '2'}, {sem :'3rd Semester',key: '3'}];
const firstSemCourses = [{sem : 'First Semester',key: ''},{course_code:'SWE 4101',key: '1'},{course_code:'MATH 4141',key: '2'},{course_code: 'CSE 4107',key: '3'},{course_code:'HUM 4145',key: '4'},{course_code: 'HUM 4147',key: '5'},{course_code: 'PHY 4143',key: '6'}];
const secondSemCourses = [{sem : 'Second Semester',key: ''},{course_code:'HUM 4247',key: '1'},{course_code:'HUM 4249',key: '2'},{course_code:'MATH 4241',key: '3'},{course_code:'CSE 4203',key: '4'},{course_code:'CSE 4205',key: '5'},{course_code:'SWE 4201',key: '6'}];
const thirdSemCourses = [{sem : 'Third Semester',key: ''},{course_code:'MATH 4341',key: '1'},{course_code:'CSE 4303',key: '2'},{course_code:'CSE 4305',key: '3'},{course_code:'CSE 4307',key: '4'},{course_code:'CSE 4309',key: '5'},{course_code:'SWE 4301',key: '6'}];
const SemesterSelectionScreen = (props)=>{
    return(
        <View>
            <FlatList
            data = {buttonTitle}
            renderItem= {
                function({item}){
                    return(
                        <Button styles={styles.viewStyle} color="#bfb4de"  title={item.sem} onPress={
                        function(){
                            if(item.sem=='1st Semester'){
                                
                                props.navigation.navigate('Course Lists',firstSemCourses);
                            }
                            else if(item.sem == '2nd Semester'){
                                
                                props.navigation.navigate('Course Lists',secondSemCourses);
                            }
                            else if(item.sem == '3rd Semester'){
                                
                                props.navigation.navigate('Course Lists',thirdSemCourses);
                            }
                        }
                    }>
                    </Button>
                    );
                } 
            }>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 2,
        justifyContent: "center",
        paddingHorizontal: 10,
        padding: 20,
        marginVertical: 200
    },
    button: {
        alignItems: "center",
        padding: 60,
        marginTop: 10,
        marginBottom: 10,
        width: '50%',
        height: '50%'
      }
})

export default SemesterSelectionScreen;