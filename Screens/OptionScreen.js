import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {useSelector, useDispatch} from 'react-redux';

const OptionScreen = function OptionScreen({navigation,route}){

  const STORAGE_KEY = '@save_data'
  //const [sauvegarde, setSauvegarde] = useState('')
  const sauvegarde = JSON.stringify(useSelector ((state) => state));


  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, sauvegarde)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }


    return(
      <View style={styles.container}><TouchableOpacity onPress={saveData}><Text>Save</Text></TouchableOpacity></View>
    );
    


};


const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
},

});
  
export default OptionScreen;

