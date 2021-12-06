import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from './../constant/Colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// header buttons 
import HeaderButton from './HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

//Drawer action 
import { DrawerActions } from '@react-navigation/native'

// screen 
import FilterScreen from './../Screens/FilterScreen'



const Stack = createNativeStackNavigator();

const FilterStacknav = ({navigation}) => {


    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:styles.headerStyle ,
            headerTitleStyle:{ fontFamily:'open-sans-bold'},
            headerTintColor:Platform.OS=='android'?'#fff' : Colors.primary , 
           
          }}>
                <Stack.Screen name="Filter" component={FilterScreen}
                    options={({route})=>{
                        return({
                             headerLeft :()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                                             <Item name="menu" iconName="menu" onPress={()=>{
                                                navigation.dispatch(DrawerActions.toggleDrawer())
                                                }}/>
                                            </HeaderButtons>,

                            headerRight:({  })=><HeaderButtons HeaderButtonComponent={HeaderButton}>
                                                    <Item name="menu" iconName="ios-save" onPress={()=>{
                                                        route.params.save()
                                                    }}/>
                                                </HeaderButtons>
                            })
              
                       
                    } }
                
                />

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerStyle:{
        backgroundColor:Platform.OS==='android'? Colors.primary:'#fff',
        
      }
})

export default FilterStacknav;
