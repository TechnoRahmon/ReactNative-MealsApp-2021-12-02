import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { MEALS } from './../data/dummy-data'
import MealItem from './../Components/MealItem'

export default function CategoryMeal({route, navigation}) {
    const {itemId , itemName  } = route.params;


    // render Meal item function 
    const renderMealItem = (itemData) =>{
            return (<MealItem  item={itemData.item} 
                        onSelectMeal={()=>{ navigation.navigate('MealDetails',{mealId:itemData.item.id, mealName : itemData.item.title})}}
                        />)
    }

    // filter the category Meals 
    const DisplayedMeal = MEALS.filter(meal => meal.categoryIds.includes(itemId))
   

    return (
        <View style={styles.screen}>
            <FlatList 
                style={{width:'100%'}}
                data={DisplayedMeal}
                renderItem={renderMealItem}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding :15
    }
})
