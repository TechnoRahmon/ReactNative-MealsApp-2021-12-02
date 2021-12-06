import React ,{ } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'


import MealList from './../Components/MealList'
import store from './../store/store'

export default function CategoryMeal({route, navigation}) {
    const {itemId   } = route.params;

    // getting data from redux store 
    const { filteredMeals:MEALS } = useSelector(state=>state.mealsReducer )

    // filter the category Meals 
    const DisplayedMeal = MEALS.filter(meal => meal.categoryIds.includes(itemId))
   

    return (
       <MealList dataList={DisplayedMeal} navigation={navigation} />
    )
}
const styles = StyleSheet.create({
   
})
