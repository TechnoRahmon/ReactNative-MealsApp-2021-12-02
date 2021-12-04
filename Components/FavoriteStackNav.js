import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Colors from './../constant/Colors'

// header buttons 
import HeaderButton from './HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// importing Screen
import FavoritesScreen from './../Screens/FavoritesScreen'
import CategoryMeal from './../Screens/CategoryMeal'
import MealDetailsScreen from './../Screens/MealDetailsScreen'

// Navigation Stack
const Stack = createNativeStackNavigator();

// drawer action
import { DrawerActions } from '@react-navigation/native'


const Stacknavigator = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Categories"
          screenOptions={{
            headerStyle:styles.headerStyle ,
            headerTitleStyle:{ fontFamily:'open-sans-bold'},
            headerBackTitleStyle:{fontFamily:'open-sans'},
            headerTintColor:Platform.OS=='android'?'#fff' : Colors.accent , 
           
          }} >
           
            <Stack.Screen name="Categories"  component={FavoritesScreen} 
              options={{title:"Favorite Meals" ,
              headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                                    <Item title='Drawer' iconName="menu" onPress={()=>{
                                                    navigation.dispatch(DrawerActions.toggleDrawer())
                                            }} />
                             </HeaderButtons>
              } } />

            <Stack.Screen name="MealDetails"  component={MealDetailsScreen} 
            options={({route})=>({ headerTitle:route.params.mealName,
                                  headerRight:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                      <Item title="Favorite" iconName="ios-star-outline" onPress={()=>{
                                        console.log('Mark as favorite!')
                                    }} />
                                  </HeaderButtons>})} /> 



        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerStyle:{
        backgroundColor:Platform.OS==='android'? Colors.accent:'#fff',
        
      },
      title:{
        fontFamily:"open-sans-bold",
        fontSize:18,
       
        color:'#fff',
        width:'80%',
       
      }
})

export default Stacknavigator;
