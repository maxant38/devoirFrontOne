import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Element from '../Models/CoucheClass';
import {delElement} from '../Store/Actions/actions';

const ListElementRender = function listElementRender({navigation, couche}) {
    

    const data = useSelector ((state) => state)
    const  {listElement} = data;
    const dispatch = useDispatch();
    let listElementTrie = []
    
    
    

    for (let i = 0; i < listElement.length; i++) {
        
        if (listElement[i].couche == couche){
            listElementTrie.push(listElement[i])
        };

    };

    console.log(listElementTrie)

    const coucheSuivante = () => {
        
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

        navigation.navigate(nextCouche)};


    const delElement = () => console.log(element)


//  ({element}) => {dispatch(delElement(element))};


 
    //console.log(ab.map((element)=> element.id))


    // const title = route.params.titlte
    return ( listElementTrie.map((element) => 
            <View style={styles.container} key={(element.id+1)*5}>
                <TouchableOpacity key={(element.id+1)*2 } style={styles.element} onPress={coucheSuivante}>
                    <Text key={element.id} style={styles.text}>{element.title}</Text>
                </TouchableOpacity>

                <TouchableOpacity key={(element.id+1)*3 } style={styles.element} onPress={delElement(element)}>
                    <Text key={(element.id+1)*4} style={styles.delete}>delete</Text>
                </TouchableOpacity>
                

            </View>
            

        ))
   
    
         ;}

    const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        flex:1,

    },

    delete:{
        flex: 1,
        marginHorizontal: 40,
        borderColor: 'black',
        flex:1,
    },    
    
    element:{
        flex: 1,
        backgroundColor: 'orange',
        marginHorizontal: 40,
        borderBottomWidth:4,
        borderColor: 'black',
    },    

    txt:{
        color:'pink',
        fontSize: 25,
        textAlign:'center',
        marginHorizontal: 15,
        marginVertical: 17, 
        fontSize:20,
        flex:1,
        
    },
        

  
    });

export default ListElementRender;