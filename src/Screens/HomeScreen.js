import React from 'react';
import {Text,View,StyleSheet,Button,TouchableOpacity, Image} from 'react-native';

const HomeScreen = (props) =>{
    return(
        <View style={styles.container}>
            <Image source={require('./../../assets/IUT.png')}></Image>
            <Text>Department of CSE</Text>
            <Text>Programme :  SWE</Text>
            <View style={styles.touchable}>
                <TouchableOpacity
                    onPress={
                        function(){
                            props.navigation.navigate("User Profile");
                        }
                    }>
                    <Text style={styles.text}>My Profile</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.buttonContainer}>
                <Button color="#bfb4de"  title="Semesterwise Course List" onPress={
                    function(){
                        props.navigation.navigate("Semesters");
                    }
                }>
                </Button>
                <Button color="#bfb4de"  title="List of Faculty Members" onPress={
                    function(){
                        props.navigation.navigate("Faculty Lists");
                    }
                }>
                </Button>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems : "center"
      },
    touchable:{
        alignItems: "center",
        backgroundColor: "#bfb4de",
        padding: 10,
        marginTop: 10,
        width: '35%',
        height: 40,
        justifyContent: 'center',
        borderRadius: 7
      },
    buttonContainer: {
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        width: '50%',
        height: '25%',
        borderRadius: 7
      },
    image :{
        width: 300,
        height: 400
    },
    text:{
        color: 'white'
    }
})

export default HomeScreen;