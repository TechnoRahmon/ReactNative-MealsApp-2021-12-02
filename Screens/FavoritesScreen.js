import React from 'react'
import { View, Text,StyleSheet,Button } from 'react-native'
import MealList from './../Components/MealList'
import {MEALS} from '../data/dummy-data'


export default function FavoritesScreen({navigation}) {

   // filter the category Meals 
   const FavMeals = MEALS.filter(meal => meal.id ==='m1' || meal.id==='m2')

    return (
       <MealList dataList={FavMeals} navigation={navigation} />
    )
}

const styles = StyleSheet.create({})
