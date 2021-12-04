import React from 'react';
import {View, StyleSheet, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constant/Colors'

const Headerbutton = (props ) => {
    return (
    <HeaderButton {...props} 
        IconComponent={Ionicons} 
        iconSize={23} 
        color={Platform.OS=='android' ? '#fff' : Colors.primary } />);
}


const styles = StyleSheet.create({})

export default Headerbutton;
