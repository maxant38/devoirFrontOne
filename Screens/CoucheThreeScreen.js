import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import ListElementRender from '../Components/listElementComponent';
import Element from '../Models/CoucheClass'
import { Ionicons } from '@expo/vector-icons';

const CoucheThreeScreen = function coucheThreeScreen({navigation,route}){


    const couche = 3;
    const {idPreviousCategory} = route.params
    const addElement = () => {navigation.navigate('SettingCoucheScreen', {couche: couche, idPreviousCategory: idPreviousCategory})};

   
   
    return(

        <View style={styles.container}>
            <StatusBar style='light-content'/>
            <View style={styles.topComponent}>
                <TouchableOpacity style={styles.add} onPress={addElement}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons  name="add-outline" size={40} color= 'white'  />
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.listRender}>
                    <ListElementRender navigation={navigation} couche={couche}  idPreviousCategory={idPreviousCategory}/> 
                </View>
          </ScrollView>
        </View>
        
    );


}


const styles = StyleSheet.create({


    topComponent:{
        width:'100%',
        borderColor: '#2E90FF',
      

      
    },


    listRender:{
        justifyContent:'center',
    },
    
    addThing:{
        backgroundColor: '#2E90FF',
        fontSize: 15,
        color: 'white',
        padding: 5,
       

    },
    add:{
        height: 45,
        backgroundColor: '#2E90FF',
        width: '100%',
        alignSelf: 'center',
        

    },

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    scroll:{
        backgroundColor:"#E2E9F2",
        width: '100%',
   
    },    
  });
  
  export default CoucheThreeScreen;