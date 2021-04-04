import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import email from 'react-native-email';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData,getData} from '../Components/saveProfilFunction';





const ProfilScreen = function ProfilScreen({navigation,route}){

  const key = '@profile_key'
  var initialName="";
  getData(key).then((data => setName(data)))


  const [name,setName] = useState(initialName)

  
  const data = JSON.stringify(useSelector ((state) => state));
  const [CC,setCC] = useState([])
  const [BCC,setBCC] = useState([])
  const [TO,setTO] = useState([])
  const [input,setInput] = useState("");

  

  const changeProfile = (newProfile) => {

    storeData(key,newProfile)
    getData(key).then((data) => {setName(data)});

  };



      
  const handleEmail = () => {
    const to = TO // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: CC, // string or array of email addresses
        bcc: BCC, // string or array of email addresses
        subject: 'Export of the data',
        body: data
    }).catch(console.error)
  }

 

    return(
    <ScrollView>
      <View style={styles.container}> 
        <View style={styles.top}>
          <Image 
          style={{width: 160, height: 160,borderRadius: 200 / 2, overflow: "hidden", borderWidth: 3,borderColor: "yellow", alignItems:'center', justifyContent:'center', marginBottom:30, marginTop:30,}} 
          source={{uri: 'https://fnfsblog.files.wordpress.com/2016/04/chevre-drole.jpg?w=381&h=238'}} 
          />
          <Text  style={{color:'black', fontSize: 25, fontWeight:'bold', marginBottom:30, alignItems:'center', justifyContent:'center'}}>-- Your Profile -- </Text>


        </View>
        <View style={styles.containerProfil}>
          <Text style={{fontSize:15}}>Vous êtes connecté en tant que </Text><Text style={{fontSize:24, fontWeight:'bold', color: 'yellow' }}>{name}</Text>
          </View>   
        <View style={{flexDirection:'row',marginVertical: 15,textAlign : 'center', alignItems: 'center', justifyContent: 'center',marginTop: 25, width:'32%'}}>
            <TextInput
            style={styles.profil}  
            onChangeText={input => setInput(input)}
            value={input || ''}
            placeholder="Type your new profile name here"
            />
            <TouchableOpacity onPress={() => changeProfile(input)}   style={{marginLeft: 15,width: '69%', alignItems:'center',height: 35,  backgroundColor: '#2E90FF', borderRadius: 30,justifyContent: 'center', }}>
            <Text style={{color:'white', fontSize: 20, fontWeight:'bold'}}>Confirm</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Send your data by Mail</Text>
        <View style={styles.form}>
        <TextInput
              style={styles.input}
              onChangeText={text => setTO(text)}
              value={TO}
              placeholder="to:"
             />

        <TextInput
              style={styles.input}
              onChangeText={text => setCC(text)}
              value={CC}
              placeholder="cc:"
             />

        <TextInput
              style={styles.input}
              onChangeText={text => setBCC(text)}
              value={BCC}
              placeholder="bcc:"
             />
        </View>
        <TouchableOpacity onPress={handleEmail} style={styles.confirm}>
           <Text style={{color:'white', fontSize: 25, fontWeight:'bold'}}>SEND MAIL</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    );


}


const styles = StyleSheet.create({

  containerProfil:{
    flexDirection:'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  profil:{
    alignItems: 'center',
    width: 230,
    backgroundColor:'white',
    height:40,
    justifyContent:'center'


  },

  top:{
    borderBottomWidth: 7,
    borderColor: 'black',
    paddingBottom: 15, 

  },
  confirm: {
    marginTop: 35,
    backgroundColor: '#2E90FF',
    alignSelf: 'center',
    borderRadius: 30,
    width: '48%',
    justifyContent: 'center',
    alignItems:'center',
    height: 45,
    marginBottom:20,
   

  },
  input:{
    fontSize:20,
    marginVertical: 15,
    paddingLeft:10,


  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#E2E9F2",
  },

  form:{
    backgroundColor:'white',
    width:'90%',
    borderRadius: 25,
  },

  title:{
    marginVertical:16,
    fontWeight:'bold',
    fontSize:25,
    textAlign:'left',
    marginTop: 40
  }



});
  
export default ProfilScreen;

