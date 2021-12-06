import React ,{ } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet ,View , Text } from 'react-native'

import BasicText from './../Components/BasicText'

import MealList from './../Components/MealList'
import store from './../store/store'

export default function CategoryMeal({route, navigation}) {
    const {itemId   } = route.params;

    // getting data from redux store 
    const { filteredMeals:MEALS } = useSelector(state=>state.mealsReducer )

    // filter the category Meals 
    const DisplayedMeal = MEALS.filter(meal => meal.categoryIds.includes(itemId))
   
    if ( !DisplayedMeal.length ){
        return <View style={styles.content}>
            <BasicText>No meals found, maybe check your filter?</BasicText>
        </View>
    }

    return (
       <MealList dataList={DisplayedMeal} navigation={navigation} />
    )
}
const styles = StyleSheet.create({
    content:{
        justifyContent: 'center',
        alignItems:'center',
        flex:1
    }
})
