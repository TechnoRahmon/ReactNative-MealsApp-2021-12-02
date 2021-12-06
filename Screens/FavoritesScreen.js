import React from 'react'
import { View, Text,StyleSheet,Button } from 'react-native'
import MealList from './../Components/MealList'

import BasicText from './../Components/BasicText'

import { useSelector } from 'react-redux'

export default function FavoritesScreen({navigation}) {

   // retrive data from redux
   const { favoriteMeals }= useSelector(state => state.mealsReducer );

   if (!favoriteMeals.length){
      return <View style={styles.content}>
         <BasicText> No favorite meals found. Start to add some!</BasicText>
      </View>
   }
    return (
       <MealList dataList={favoriteMeals} navigation={navigation} />
    )
}

const styles = StyleSheet.create({
   content:{
     alignItems:'center',
     justifyContent: 'center',
     flex:1
   }
})
