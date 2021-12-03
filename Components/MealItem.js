import React from 'react';
import {View,Text , StyleSheet ,  TouchableOpacity, Platform, TouchableNativeFeedback, ImageBackground } from 'react-native';

const Mealitem = ({onSelectMeal , item }) => {
    return (
        <View style={styles.mealContainer}>
            <TouchableOpacity onPress={onSelectMeal}>
                <View>

                    <View style={{...styles.mealRow , ...styles.mealHeader }}>
                        <ImageBackground source={{uri:item.imageUrl}} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                               <Text style={styles.title} numberOfLines={1}>{item.title}</Text> 
                            </View>
                            
                        </ImageBackground>
                    </View>
                
                
                    <View style={{...styles.mealRow, ...styles.mealDetails }}>
                        <Text>{item.duration}m</Text>
                        <Text>{item.complexity.toUpperCase()}</Text>
                        <Text>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealContainer:{
       height:200,
       width:'100%',
       backgroundColor:"#ccc",
       borderRadius:10,
       overflow:'hidden'
      
    },
    mealHeader:{
        height:'85%'
    },
    mealRow:{
        flexDirection:'row'
    },
    mealDetails:{
        justifyContent:'space-between',
        paddingHorizontal:10,
        alignItems:'center',
        backgroundColor:'#f5f5f5',
        height:'15%'
    },
    bgImage:{
        width:'100%',
        height:'100%',
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
    }
})

export default Mealitem;
