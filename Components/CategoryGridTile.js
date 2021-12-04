import React from 'react';
import {View, StyleSheet , Text , TouchableOpacity, Platform, TouchableNativeFeedback  } from 'react-native';

const Categorygridtile = ({onSelect, itemData }) => {
    
    let TouchableCmp = TouchableOpacity ; 
    if ( Platform.OS==='android' && Platform.Version >= 21 ){
        TouchableCmp = TouchableNativeFeedback; 
    }
   
    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={styles.TouchContainer} onPress={onSelect}>
                <View style={{...styles.container, backgroundColor:itemData.item.color}}>
                    <Text style={styles.title} numberOfLines={2}>{itemData.item.name}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
}

const styles = StyleSheet.create({

    gridItem:{
        flex:1,
        margin:15,
        height:150,
       overflow:Platform.OS==='android' && Platform.Version>=21 ? 'hidden' : 'visible',
       borderRadius:10,
       elevation:3,
    },
    TouchContainer:{
        flex:1
    },
    container:{
        flex:1,
        padding :15, 
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        borderRadius:10,
       
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        shadowOpacity:0.24
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22
    }
})

export default Categorygridtile;
