import React from 'react'
import { View, Text,StyleSheet,Button } from 'react-native'
import MealList from './../Components/MealList'


import { useSelector } from 'react-redux'

export default function FavoritesScreen({navigation}) {

   // retrive data from redux
   const { favoriteMeals }= useSelector(state => state.mealsReducer );


    return (
       <MealList dataList={favoriteMeals} navigation={navigation} />
    )
}

const styles = StyleSheet.create({})
