import React from 'react'
import { View,
     Text,
     StyleSheet ,
      Button,
       FlatList,
       TouchableOpacity,
      } from 'react-native'

// import categories data 
import {CATEGORIES } from './../data/dummy-data'

//import Colors 
import Colors from './../constant/Colors'
import CategoryGridTile from './../Components/CategoryGridTile'


export default function CategoriesScreen({ navigation }) {


    const renderGridItem =(itemData)=>{
        return(<CategoryGridTile itemData={itemData} onSelect={()=>{navigation.navigate('CategoryMeal',
                {itemId:itemData.item.id, itemName:itemData.item.name })}} /> )}



    return (
        <FlatList 
            data={CATEGORIES}  
            renderItem={renderGridItem}  
            numColumns={2} />
    )
}



const styles = StyleSheet.create({
        screen:{
            flex:1,
            justifyContent: 'center',
            alignItems:'center'
        },
        
})
