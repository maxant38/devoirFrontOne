import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {delElement} from '../Store/Actions/actions';
import { Ionicons } from '@expo/vector-icons';

const ListElementRender = function listElementRender({navigation, couche, idPreviousCategory}) {
    

    const data = useSelector ((state) => state)
    const  {listElement} = data;
    const dispatch = useDispatch();
    let listElementTrie = []
    
    

    if (couche>1) {for (let i = 0; i < listElement.length; i++) {
        
        if (listElement[i].couche == couche && listElement[i].categoryId == idPreviousCategory ){
            listElementTrie.push(listElement[i])
        };
    };};

    if (couche==1) {for (let i = 0; i < listElement.length; i++) {
        
        if (listElement[i].couche == couche ){
            listElementTrie.push(listElement[i])
        };
    };};

    
  

    const coucheSuivante = (element) => {
        
        let nextCouche;
        
        switch(couche){
            case 1:
                nextCouche = 'CoucheTwoScreen'
                break;
            case 2:
                nextCouche = 'CoucheThreeScreen'
                break;
            case 3:
                nextCouche = 'CoucheFourScreen'
                break;
            default: 
                nextCouche = 'CoucheTwoScreen'

        };

        navigation.navigate((nextCouche),{idPreviousCategory : element.id, element: element})};

    
    const deleteButton = (element) => {dispatch(delElement(element))};

    const editButton = (element) => { navigation.navigate(('EditCoucheScreen'),{element: element})};
    
   



    return ( listElementTrie.map((element) => 
            <View style={[styles.container,{backgroundColor:element.color}]} key={(element.id+1)*5}>

                <View style={styles.editIconContainer}>
                    <TouchableOpacity key={(element.id+1)*6 } style={styles.element} onPress={() => editButton(element)}>
                        <Ionicons key={(element.id+1)*7} name="pencil-outline" size={40} color= 'black'/>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity key={(element.id+1)*2 } style={styles.element} onPress={() => coucheSuivante(element)}>
                    <Text key={element.id} style={styles.text}>{element.title}</Text>
                </TouchableOpacity>
                <View style={styles.thrashIconContainer}>
                    <TouchableOpacity key={(element.id+1)*3 } style={styles.element} onPress={() => deleteButton(element)}>
                        <Ionicons key={(element.id+1)*4} name="trash-outline" size={40} color= 'black'/>
                    </TouchableOpacity>
                </View>


            </View>
            

        ))
   
    
         ;}



    const styles = StyleSheet.create({

    editIconContainer:{
        width:'13%',
        marginLeft: 23,
    },

    container:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical: 15,
    },

    thrashIconContainer: {
        width:'13%',
    },
    
    container:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical: 15,
    },

    delete:{

        marginHorizontal: 5,
        borderColor: 'black',
  
    },    
    
    element:{
        flex:1,
        marginHorizontal: 5,
        justifyContent:'center',
        alignItems:'center',
        
    },    

    text:{
        color:'black',
        fontSize: 30,
        textAlign:'center',
        flex:1,
        justifyContent:'center'
        
    },
        

  
    });

export default ListElementRender;