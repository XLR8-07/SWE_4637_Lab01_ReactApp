import React from 'react';
import {Text,View,StyleSheet, Button,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const MyProfileScreen = () =>{
    return(
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('./../../assets/profileImage.png')}></Image>
            </View>
            <View style={styles.text}>
                <Text style={styles.text}>Name:    MD Ashiqur Rahman</Text>
                <Text style={styles.text}>Student ID:      170042085</Text>
                <Text style={styles.text}>Room No:       Non-Residential</Text>
                <Text style={styles.text}>Email:      ashiqurrahman85@iut-dhaka.edu</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems : "center"
      },
    image :{
        width: 200,
        height: 200,
        marginBottom: 20,
        borderColor: 'black',
        borderRadius : 250/2,
        overflow: "hidden",
        borderWidth: 2
    },
    text:{
        textAlign: 'center',
        
    }
})

export default MyProfileScreen;