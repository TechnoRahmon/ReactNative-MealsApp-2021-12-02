import React from 'react'
import { View, Text,StyleSheet,Button } from 'react-native'

export default function FavoritesScreen({navigation}) {
    return (
        <View style={styles.screen}>
            <Text>Favorites Screen</Text>
            <Button title="Go to Meal Details Screen" 
                onPress={()=>{navigation.navigate('MealDetails')}} />
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})
