import React from 'react';
import {View, StyleSheet , Platform } from 'react-native';
import Colors from './../constant/Colors'

// Tab Nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//tab nav for android 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'


// stack Nav
import StackNav from './StackNavigator'

// favorite stack nav
import FavoriteStackNav from './FavoriteStackNav'




const Tab = createBottomTabNavigator(); 

import { Ionicons } from '@expo/vector-icons'


const Tabnavigtor = ({navigation}) => {


    let tabScreenConfig = { tabBarActiveTintColor:Colors.primary,
        tabBarInactiveTintColor:'gray',
        tabBarLabelStyle:styles.iconLable }
      if ( Platform.OS==='android' && Platform.Version>=21){
        tabScreenConfig ={
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:Colors.inactive,
          tabBarStyle:{ backgroundColor:Colors.primary}
        }
      }


    return (
        <Tab.Navigator
        activeColor={Colors.primary}
    
      screenOptions={({route})=>({
          tabBarLabelStyle:{fontFamily:'open-sans-bold', fontSize:11},
          tabBarIcon:({focused, color, size})=>{
            let iconName;
            if ( route.name ==='Meals'){
              iconName= focused?"restaurant" :"restaurant-outline"
            }else if( route.name ==='Favorite'){
              iconName= focused?"star" :"star-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
  
          ...tabScreenConfig   
      } )} >


        <Tab.Screen name="Meals" component={StackNav} 
        options={{unmountOnBlur:true,headerShown:false, tabBarStyle:{ backgroundColor:Colors.primary}}}
         />


        <Tab.Screen name="Favorite" component={FavoriteStackNav}
          options={{ unmountOnBlur:true,headerShown:false, tabBarStyle:{ backgroundColor:Colors.accent}}}
          />
       
    </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    iconLable:{
        fontSize:12
      }
})

export default Tabnavigtor;
