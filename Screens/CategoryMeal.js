import React from 'react'
import { StyleSheet } from 'react-native'
import { MEALS } from './../data/dummy-data'

import MealList from './../Components/MealList'

export default function CategoryMeal({route, navigation}) {
    const {itemId   } = route.params;

    // filter the category Meals 
    const DisplayedMeal = MEALS.filter(meal => meal.categoryIds.includes(itemId))
   

    return (
       <MealList dataList={DisplayedMeal} navigation={navigation} />
    )
}
const styles = StyleSheet.create({
   
})
