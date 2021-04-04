import AsyncStorage from "@react-native-async-storage/async-storage"

export async function storeData(key,data) {
    try {
      await AsyncStorage.setItem(key,data)
      console.log('t dans le dur')
      } catch(e) {
            console.log('Error during storage');
      }
}

export async function getData(key) {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null ) {
          return value
          // value previously stored
        }
        if (value == undefined){
          return 'Invité'
        }        
      } 
      catch(e) {
        return "Error data can't be load"
      }
    }