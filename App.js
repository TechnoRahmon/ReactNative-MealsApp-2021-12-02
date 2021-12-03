import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform  } from 'react-native';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

// navigator configuration 
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens'

// enbleScreen to optmize performance 
enableScreens(); 


// importing Screen
import CategoriesScreen from './Screens/CategoriesScreen'
import CategoryMeal from './Screens/CategoryMeal'
import MealDetailsScreen from './Screens/MealDetailsScreen'
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


// Navigation Stack
const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories"
          screenOptions={{
            headerStyle:styles.headerStyle ,
            headerTintColor:Platform.OS=='android'?'#fff' : Colors.accent , 
            headerTitleAlign:"center"
          }} >
           
            <Stack.Screen name="Categories"  component={CategoriesScreen} 
              options={{title:"Meals Categories" ,
              } } />

            <Stack.Screen name="CategoryMeal"  component={CategoryMeal} 
              options={({route})=>({title:route.params.itemName+' Meals' })} />


            <Stack.Screen name="MealDetails"  component={MealDetailsScreen} 
            options={({route})=>({ headerTitle:(props)=><Text style={styles.title} {...props} numberOfLines={1} >{route.params.mealName} </Text>})} /> 



            <Stack.Screen name="Favorites"  component={FavoritesScreen} 
              options={{title:"Favorites Meal"} } />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle:{
    backgroundColor:Platform.OS==='android'? Colors.primary:'#fff',
    
  },
  title:{
    fontFamily:"open-sans-bold",
    fontSize:20,
    paddingHorizontal:10,
    color:'#fff'
  }
});
