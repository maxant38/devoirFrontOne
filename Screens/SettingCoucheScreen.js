import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button} from 'react-native';
import {addElement} from '../Store/Actions/actions';
import {useSelector, useDispatch} from 'react-redux';
import Element from '../Models/CoucheClass';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingCoucheScreen = function settingCoucheScreen({navigation,route}){

  const {couche,idPreviousCategory} = route.params
  const [input, onChangeInput] = useState('');
  const dispatch = useDispatch();
  let id = Math.random().toString();

  const [checkBoxOne,setCheckBoxOne] = useState("check-box")
  const [checkBoxTwo,setCheckBoxTwo] = useState("check-box-outline-blank")
  const [checkBoxThree,setCheckBoxThree] = useState("check-box-outline-blank")
  const [finalColor,setFinalColor] = useState("blue")

  const data = useSelector ((state) => state)
  const  {listElement} = data;

  const onCheckOne = () => {
    let result = checkBoxOne;
    switch(result){
      case result = 'check-box-outline-blank':
          setCheckBoxOne('check-box')
          setCheckBoxTwo('check-box-outline-blank')
          setCheckBoxThree('check-box-outline-blank')
          setFinalColor('blue')
          break;
      case result = 'check-box':
          break;
      default: 
           setCheckBoxOne('check-box-outline-blank')
           setCheckBoxTwo('check-box-outline-blank')
           setCheckBoxThree('check-box-outline-blank')
           setFinalColor('')
    };
  };

  const onCheckTwo = () => {
    let result = checkBoxTwo;
    switch(result){
      case result = 'check-box-outline-blank':
          setCheckBoxTwo('check-box')
          setCheckBoxOne('check-box-outline-blank')
          setCheckBoxThree('check-box-outline-blank')
          setFinalColor('red')
          break;
      case result = 'check-box':
          break;
      default: 
          setCheckBoxOne('check-box')
          setCheckBoxTwo('check-box-outline-blank')
          setCheckBoxThree('check-box-outline-blank')
          setFinalColor('')
    };
  };

  const onCheckThree = () => {
    let result = checkBoxThree;
    switch(result){
      case result = 'check-box-outline-blank':
          setCheckBoxThree('check-box')
          setCheckBoxOne('check-box-outline-blank')
          setCheckBoxTwo('check-box-outline-blank')
          setFinalColor('green')
          break;
      case result = 'check-box':
          break;
      default: 
          setCheckBoxOne('check-box')
          setCheckBoxTwo('check-box-outline-blank')
          setCheckBoxThree('check-box-outline-blank')
          setFinalColor('')
    };
  };

  
  const categoryId = idPreviousCategory;
  

  const add = () => { return(dispatch(addElement(new Element(id,couche,input,finalColor,categoryId))))};

 


    return(

        <View style={styles.container}>
         
            <StatusBar style='light-content'  />
            <View style= {styles.addElement}>
            <TextInput
            style={styles.input}
              onChangeText={text => onChangeInput(text)}
              value={input}
              placeholder="Enter the name of the new item"
              maxLength = {12}
            />
            </View>
            
            <View style={styles.containerCheckBox}>
              <TouchableOpacity onPress={onCheckOne} >
                  <Icon size={60} name={checkBoxOne} color='blue' />
              </TouchableOpacity>
              <TouchableOpacity onPress={onCheckTwo} >
                  <Icon size={60} name={checkBoxTwo} color='red' />
              </TouchableOpacity>
              <TouchableOpacity onPress={onCheckThree} >
                  <Icon size={60} name={checkBoxThree} color='green' />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={add} style={styles.buttonAdd}>
              <Text style={{color:'white', fontSize: 35, fontWeight:'bold'}}>Add</Text>
            </TouchableOpacity>
        
        </View>
        
    );
}


const styles = StyleSheet.create({


  buttonAdd:{
    backgroundColor: '#2E90FF',
    alignSelf: 'center',
    borderRadius: 30,
    width: '28%',
    justifyContent: 'center',
    alignItems:'center',
    height: 45,

  },

  containerCheckBox:{
    flexDirection:'row',
    marginTop: 20,
    marginBottom: 40,
  },

  addElement:{
    flexDirection:'row',
    width: '70%',
    marginBottom: 25,
    

    
  },


  input: {
    flex: 1,
    backgroundColor: "white",
    textAlign: 'center',
    borderRadius: 30,
    marginRight:15,
    height: 45,
  },

    container: {
      flex: 1,
      backgroundColor: "#E2E9F2",
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });
  
export default SettingCoucheScreen;

// 

// 