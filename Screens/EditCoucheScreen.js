import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button} from 'react-native';
import {editElement} from '../Store/Actions/actions';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

const EditCoucheScreen = function EditCoucheScreen({navigation,route}){

  const {element} = route.params;
  const dispatch = useDispatch();
  const [input, onChangeInput] = useState('');


  const [checkBoxOne,setCheckBoxOne] = useState("check-box");
  const [checkBoxTwo,setCheckBoxTwo] = useState("check-box-outline-blank");
  const [checkBoxThree,setCheckBoxThree] = useState("check-box-outline-blank");
  const [finalColor,setFinalColor] = useState("blue");


  // if (element.color = 'blue'){setCheckBoxOne('check-box')};
  // if (element.color = 'red'){setCheckBoxTwo('check-box')};
  // if (element.color = 'green'){setCheckBoxThree('check-box')};



  console.log(element);

  const confirmEdit = () => {
    element.color = finalColor;
    element.title = input;
    
    dispatch(editElement(element))};





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



    return(
      <View style={styles.container}>

        
        <View style= {styles.editElement}>
            <TextInput
            style={styles.input}
              onChangeText={text => onChangeInput(text)}
              value={input}
              placeholder="Enter the new name of the new item"
              maxLength = {12}
            />
            </View>

        <View style={styles.containerCheck}>
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
        <TouchableOpacity onPress={confirmEdit} style={styles.buttonAdd}>
              <Text style={{color:'white', fontSize: 25, fontWeight:'bold'}}>Confirm Edit</Text>
        </TouchableOpacity>        
        </View>
    );


}


const styles = StyleSheet.create({

  
  editElement:{
    flexDirection:'row',
    width: '80%',
    marginBottom: 25,
    alignItems:'center',
    justifyContent:'center',
    
  },
  
  input: {
    backgroundColor: "white",
    textAlign: 'center',
    borderRadius: 30,
    marginRight:15,
    height: 45,
    flex:1,
  },
  
  buttonAdd:{
    backgroundColor: '#2E90FF',
    alignSelf: 'center',
    borderRadius: 30,
    width: '48%',
    justifyContent: 'center',
    alignItems:'center',
    height: 45,
    marginVertical: 35,

  },



  container:{ 
    flex: 1,
    backgroundColor: "#E2E9F2",
    alignItems: 'center',
    justifyContent: 'center',
  },


  containerCheck : {
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    marginVertical: 25,
  },

  });
  
export default EditCoucheScreen;

