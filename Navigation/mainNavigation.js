import { TouchableOpacity } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  CoucheOneScreen from '../Screens/CoucheOneScreen';
import  CoucheTwoScreen from '../Screens/CoucheTwoScreen';
import  CoucheThreeScreen from '../Screens/CoucheThreeScreen';
import  CoucheFourScreen from '../Screens/CoucheFourScreen';
import SettingCoucheScreen from '../Screens/SettingCoucheScreen';
import EditCoucheScreen from '../Screens/EditCoucheScreen';
import ProfilScreen from '../Screens/ProfilScreen';
import OptionScreen from '../Screens/OptionScreen';
import Colors from '../Constant/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import { Button } from 'react-native';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();




const MainNavigator = function mainNavigator ({navigation}){

const [drawerStatut , setDrawerStatut] = useState(false)


   const draw = () => {

      let statut = drawerStatut;

      switch (statut) {
      case false:
        navigation.openDrawer()
         setDrawerStatut(true)*
         console.log("open")
         break;
      case true:
        navigation.closeDrawer()
         setDrawerStatut(false)
         console.log("close")
          break;
      default: 
        console.log("error")
      break;}

    };


   


  return (
  

      <Stack.Navigator initialRouteName="CoucheOneNavigator"
      screenOptions={{
        headerStyle: {backgroundColor:  "yellow"},
        headerTintColor: 'black',
        headerTitleStyle: {fontWeight: 'bold'}}}>
        
      <Stack.Screen
        name="Home Page"
        component={TabNavigator}
        options={() => ({headerLeft : () =>  <TouchableOpacity onPress={draw}><Ionicons  name="menu-outline" size={40} color= '#2E90FF'/></TouchableOpacity>})}
        
      />

      <Stack.Screen
        name="CoucheTwoScreen"
        component={CoucheTwoScreen}
        options={({route}) => ({title : route.params.element.title})}
       
      />

      <Stack.Screen
        name="CoucheThreeScreen"
        component={CoucheThreeScreen}
        options={({route}) => ({title : route.params.element.title})}
      
      />

      <Stack.Screen
        name="CoucheFourScreen"
        component={CoucheFourScreen}
        options={({route}) => ({title : route.params.element.title})}
        
      />

      <Stack.Screen
      name="SettingCoucheScreen"
      component={SettingCoucheScreen}
      />

      <Stack.Screen
      name="EditCoucheScreen"
      component={EditCoucheScreen}
      />  

    </Stack.Navigator>




  );
};

const TabNavigator = function TabNavigator()  {
  return(
      <Tab.Navigator tabBarOptions= { {activeTintColor: 'yellow', labelStyle: { fontSize: 5}, showLabel: false, activeBackgroundColor: 'yellow', height: 2, backgroundColor: 'yellow',}}>
            <Tab.Screen name="Search" component={CoucheOneScreen} options={{tabBarIcon: () => (<MaterialCommunityIcons name="home" color={'#2E90FF'} size= {35} /> ) }} />
            <Tab.Screen name="Favourite" component={ProfilScreen}  options={{ tabBarIcon: () => (<MaterialCommunityIcons name="account" color={'#2E90FF'} size= {35} /> ) }}/>
      </Tab.Navigator>
 
  );  
};

const DrawerNavigator = function DrawerNavigator(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home Page">
          <Drawer.Screen name="Home Page" component={MainNavigator} />
          <Drawer.Screen name="Option" component={OptionScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};





export default DrawerNavigator;