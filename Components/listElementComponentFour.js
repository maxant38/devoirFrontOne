import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {delElement} from '../Store/Actions/actions';
import { Ionicons } from '@expo/vector-icons';

const ListElementRenderFour = function listElementRenderFour({navigation, couche, idPreviousCategory}) {
    

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
                nextCouche = 'CoucheTwo'
                break;
            case 2:
                nextCouche = 'CoucheThree'
                break;
            case 3:
                nextCouche = 'CoucheFour'
                break;
            default: 
                nextCouche = 'CoucheTwo'

        };

        navigation.navigate((nextCouche),{idPreviousCategory : element.id})};

    
    const deleteButton = (element) => {dispatch(delElement(element))};
    console.log(listElementTrie)
   



    return ( listElementTrie.map((element) => 
            <View style={[styles.container,{backgroundColor:element.color}]} key={(element.id+1)*5}>
                
                <TouchableOpacity key={(element.id+1)*2 } style={styles.element} onPress={() => {}}>
                    <Text key={element.id} style={styles.text}>{element.title}</Text>
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <TouchableOpacity key={(element.id+1)*3 } style={styles.element} onPress={() => deleteButton(element)}>
                        <Ionicons key={(element.id+1)*4} name="trash-outline" size={40} color= 'black'/>
                    </TouchableOpacity>
                </View>

            </View>
            

        ))
   
    
         ;}



    const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'center',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderColor: 'black',
        marginVertical: 15,
    },

    iconContainer: {
        width:'13%',
    },
    
    container:{
        flexDirection:'row',
        justifyContent:'center',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderColor: 'black',
        marginVertical: 15,


    },

    delete:{

        marginHorizontal: 5,
        borderColor: 'black',
  
    },    
    
    element:{
        flex:1,
        marginHorizontal: 5,
        borderColor: 'black',
    },    

    text:{
        color:'black',
        fontSize: 30,
        textAlign:'center',
        flex:1,
        
    },
        

  
    });

export default ListElementRenderFour;