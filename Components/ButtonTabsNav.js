import React from 'react'
import { View, Text } from 'react-native'
// button nav tabs 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CategoriesScreen from './../Screens/CategoriesScreen'
import FavoritesScreen from './../Screens/FavoritesScreen'

const Tab = createBottomTabNavigator(); 

export default function ButtonNabTab() {
    return (
      <Tab.Navigator>
          <Tab.Screen name="All" component={CategoriesScreen} />
          <Tab.Screen name="Favorite" component={FavoritesScreen}/>
         
      </Tab.Navigator>
    )
}
