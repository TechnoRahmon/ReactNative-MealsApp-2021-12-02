import React from 'react'
import { View, Text,StyleSheet, FlatList, ScrollView, ImageBackground  } from 'react-native'
import { MEALS } from './../data/dummy-data'




export default function MealDetailsScreen({route }) {

    const {mealId } = route.params; 
    const selectedMeal = MEALS.find(meal=> meal.id === mealId ); 

    return (
 
        <ScrollView contentContainerStyle={styles.containerScroll}>
            <View style={styles.screen}> 
                <View style={{...styles.mealRow , ...styles.mealHeader }}>
                    <ImageBackground source={{uri:selectedMeal.imageUrl}} style={styles.bgImage} >
                        <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>{selectedMeal.title}</Text> 
                        </View>
                        
                    </ImageBackground>
                </View>


                <View style={{...styles.mealRow, ...styles.mealDetails }}>
                    <Text>{selectedMeal.duration}m</Text>
                    <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text>{selectedMeal.affordability.toUpperCase()}</Text>
                </View>

                
                <View style={styles.ingredientsList}>
                    <Text>{selectedMeal.duration}m</Text>
                    <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text>{selectedMeal.affordability.toUpperCase()}</Text>
                </View>
              
            </View>
          
        </ScrollView>
     
      
    )
}

const styles = StyleSheet.create({
    containerScroll:{
       flexGrow:1,
       paddingBottom:20
      
    },  
    screen:{
       
        justifyContent: 'center',
        alignItems:'center',
     
     
        backgroundColor:"#ccc",
        borderRadius:10,
        
    },
    mealContainer:{

       
     },
     mealHeader:{
        height:'80%'
     },
     mealRow:{
         flexDirection:'row'
     },
     mealDetails:{
         justifyContent:'space-between',
         paddingHorizontal:10,
         alignItems:'center',
         backgroundColor:'#f5f5f5',
        
         width:'100%'
     },
     bgImage:{
         width:'100%',
        
         justifyContent:'flex-end'
     },
     titleContainer:{
         backgroundColor:'rgba(0,0,0,0.5)', 
         paddingVertical:5,
         paddingHorizontal:12,
     },
     title:{
         fontFamily:'open-sans-bold',
         fontSize:22,
         color:'#fff',
        
         textAlign:'center'
     },
     ingredientsList:{
         flex:1,
       
     }
})
