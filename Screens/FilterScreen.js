import React from 'react'
import { View, Text } from 'react-native'

export default function FilterScreen() {
    return (
        <View style={styles.screen}>
            <Text>Filter SCreen  </Text>
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
