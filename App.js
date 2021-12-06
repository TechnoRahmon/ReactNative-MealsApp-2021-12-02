import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform,Button, LogBox   } from 'react-native';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

// navigator configuration 
import { NavigationContainer} from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'

// tab Nav
import TabsNav from './Components/TabNavigtor'

// filter stack nav 
import FilterStackNav from './Components/FilterStackNav'

// drawer nav 
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

// redux config .. 
import { Provider } from 'react-redux'
import store from './store/store'

// enbleScreen to optmize performance 
enableScreens(); 




// importing Screen
import CategoriesScreen from './Screens/CategoriesScreen'
import FavoritesScreen from './Screens/FavoritesScreen'

//import colors 
import Colors from './constant/Colors'

// load the font function
const fetchFont =()=>{
   return Font.loadAsync({
      'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
    })
}




// App component
export default function App() {


  const [ fontLoaded , setFontLoaded ] = useState(false);

  if (!fontLoaded){
    return <AppLoading 
            startAsync={fetchFont}
            onError={console.log}
            onFinish={()=>{ setFontLoaded(true)}}
          />
    }




  return (
    <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{
              drawerActiveTintColor:Colors.accent,
              drawerActiveBackgroundColor:Colors.bgColor,
              drawerLabelStyle:{ fontFamily:'open-sans-bold'}
          }}>
            <Drawer.Screen name="Meal Categories" component={TabsNav}
              options={{unmountOnBlur:true,headerShown:false}} />

              <Drawer.Screen name="FilterNav" component={FilterStackNav}
                options={{headerShown:false, title:'Filter'}}/>

          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
     
  );
}

const styles = StyleSheet.create({

});
