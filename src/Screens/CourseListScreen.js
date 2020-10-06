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
                return(<Text style={styles.textStyle}>{item.item.course_code}</Text>)
                }
            }>

            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16
    }
})

export default CourseListScreen;