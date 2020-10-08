import React from 'react';
import {Text,View,StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const CourseListScreen= (props)=>{
    return (
        <View>
            <FlatList
            data = {props.route.params}
            renderItem={
                function(item){
                return(
                <View>
                    <View style={styles.SemContainer}>
                        <Text style={styles.semStyle} >{item.item.sem}</Text>
                    </View>

                    <View style={styles.CourseContainer}>
                        <Text style={styles.textStyle}>{item.item.key}   {item.item.course_code}</Text>
                    </View>
                
                </View>)
                }
            }>

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16
    },
    semStyle :{
        fontSize: 30,
    },
    SemContainer:{
        alignItems:'center'
    },
    CourseContainer:{
        alignItems:'center'
    }
})

export default CourseListScreen;