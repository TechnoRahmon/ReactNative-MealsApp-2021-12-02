import React, {useState , useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch , LogBox } from 'react-native'
import Colors from './../constant/Colors'

import BasicText from './../Components/BasicText'
import { setFilters} from './../store/action'
import {useDispatch  } from 'react-redux'

export default function FilterScreen({navigation }) {

    const dispatch = useDispatch();

    // Filter Switch 
    const FilterSwitch =({ state, onChange,lable })=><View style={styles.filterContainer}>
                                                    <BasicText >{lable}</BasicText>        
                                                    <Switch onValueChange={onChange} 
                                                        trackColor={{ false: "#767577", true: Colors.primary }}
                                                        thumbColor={state ? Colors.primary: "#f4f3f4"}
                                                        value={state} />
                                                </View>
  

    const [isGlutenFree , setGlutenFree ] = useState(false);
    const [isLactoseFree , setLactoseFree ] = useState(false);
    const [ isVegan , setVegan ] = useState(false)
    const [Vegetarian , setVegetarian] = useState(false);

    const SaveFilters =useCallback( () =>{
            const appliedFilters ={
                glutenFree : isGlutenFree ,
                lactoseFree : isLactoseFree,
                vegan : isVegan,
                vegetarian : Vegetarian
            }
            dispatch(setFilters(appliedFilters));

            console.log(appliedFilters);
    }, [isLactoseFree, isVegan,isGlutenFree,Vegetarian,dispatch ])

    useEffect(()=>{
        navigation.setParams({ save : SaveFilters })
    },[ SaveFilters])

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);

      
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions </Text>

            <FilterSwitch lable='Gluten Free' state={isGlutenFree} onChange={()=>{ setGlutenFree(state=> !state )}}/>
         
            <FilterSwitch lable='Lactose Free' state={isLactoseFree} onChange={()=>{ setLactoseFree(state=> !state )}}/>

            <FilterSwitch lable='Vegan' state={isVegan} onChange={()=>{ setVegan(state=> !state )}}/>

            <FilterSwitch lable='Vegetarian' state={Vegetarian} onChange={()=>{ setVegetarian(state=> !state )}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        marginVertical:20,
        textAlign:'center'
    },
    filterContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'75%',
        marginVertical:10
        
       
    }
})
