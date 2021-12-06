import React from 'react'
import { View, Text,StyleSheet, FlatList, ScrollView, Image  } from 'react-native'


import BasicText from './../Components/BasicText'
import { useSelector } from 'react-redux'

export default function MealDetailsScreen({route }) {

    const { meals : MEALS } = useSelector(state=>state.mealsReducer );

    const ListItem = ({  children})=><View >
                                                <BasicText style={styles.listItem}>
                                                    {children}
                                                </BasicText>
                                        </View>
    


    const {mealId } = route.params; 
    const selectedMeal = MEALS.find(meal=> meal.id === mealId ); 

    return (
 
        <ScrollView contentContainerStyle={styles.containerScroll}>
           
              
                <Image source={{uri:selectedMeal.imageUrl}} style={styles.bgImage} / >
               
          

                <View style={styles.details}>
                    <BasicText>{selectedMeal.duration}m</BasicText>
                    <BasicText>{selectedMeal.complexity.toUpperCase()}</BasicText>
                    <BasicText>{selectedMeal.affordability.toUpperCase()}</BasicText>
                </View>

                <Text style={styles.subtitle} >Ingredients</Text>
                {selectedMeal.ingredients.map((item, index )=><ListItem key={index} > {item} </ListItem>)}

                <Text style={styles.subtitle} >Steps</Text>
                {selectedMeal.steps.map((step, index )=> <ListItem key={index} >{index+1}. {step} </ListItem>)}
                
              
          
          
        </ScrollView>
     
      
    )
}

const styles = StyleSheet.create({
    containerScroll:{
       flexGrow:1,
       paddingBottom:20
      
    },
    details:{
        justifyContent:'space-around',
        flexDirection:'row',
        padding :15
    },
     bgImage:{
         width:'100%',
        height:300,
       
     },
     title:{
         fontFamily:'open-sans-bold',
         fontSize:22,
         color:'#fff',

         textAlign:'center'
     },
     subtitle:{
       
       fontFamily:'open-sans-bold',
       fontSize:22,
       textAlign:'center'
     },
     listItem:{
        marginVertical : 10,
        marginHorizontal:12,
        borderColor:'#ccc',
        borderWidth:1,
        padding :10
     }

})
