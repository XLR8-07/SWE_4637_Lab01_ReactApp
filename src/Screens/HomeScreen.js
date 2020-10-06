import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const HomeScreen = (props) =>{
    return(
        <View>
            <Button title="Semesterwise Course List" onPress={
                function(){
                    console.log("NIGGA CHAP DISE!");
                    props.navigation.navigate("Semesters");
                }
            }>
            </Button>
        </View>
    )
}

export default HomeScreen;