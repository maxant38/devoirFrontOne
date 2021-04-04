import React, {useEffect} from 'react';
import DrawerNavigator from './Navigation/mainNavigation';
import {Provider} from "react-redux";
import store from './Store/store';
import AsyncStorage from '@react-native-community/async-storage'
import { enableScreens } from "react-native-screens";
//const STORAGE_KEY = '@save_age';
//
//
//const readData = async () => {
//  try {
//    const dataSave = await AsyncStorage.getItem(STORAGE_KEY)
//
//    if (dataSave !== null) {
//      console.log("succes")
//      console.log(dataSave)
//    }
//  } catch (e) {
//    alert('Failed to fetch the data from storage')
//  }
//}

enableScreens(); // Unlocks the native screens of each platform! Better performance.


export default function App() {
  return ( <Provider store={store}><DrawerNavigator/></Provider>);
}
