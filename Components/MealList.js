import React from 'react';
import {View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem'

const Meallist = ({ dataList , navigation }) => {

    // render Meal item function 
    const renderMealItem = (itemData) =>{
        return (<MealItem  item={itemData.item} 
                    onSelectMeal={()=>{ navigation.navigate('MealDetails',{mealId:itemData.item.id, mealName : itemData.item.title})}}
                    />)
        }

    
    return (
        <View style={styles.screen}>
            <FlatList 
                style={{width:'100%'}}
                data={dataList}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding :15
    }
})

export default Meallist;
