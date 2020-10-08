import React from 'react';
import {Text,View,StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const FacultyList = [{name:'Prof. Dr Mahbub Alam',key:'1'},{name:'Prof Dr Md Hasanul Kabir',key:'2'},{name:'A.B.M Ashikur Rahman',key:'3'},{name:'Mohayeminul Islam',key:'4'},{name:'Bakhtiar Hasan',key:'5'},{name:'Tasnim Ahmed',key:'6'}];


const FacultyListScreen = () =>{
    return(
        <View>
            <FlatList
                data={FacultyList}
                renderItem={
                    function(item){
                        return(
                            <View style={styles.container}>
                                <Text style={styles.texts}>{item.item.key}:     {item.item.name}</Text>
                            </View>
                        )
                    }
                }></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 20
    },
    texts:{
        fontSize: 18,
        fontFamily:'Roboto'
    }
})

export default FacultyListScreen;