import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const Basictext = ({style, children}) => {
    return (
       <Text  style={{...styles.text, ...style }}>
            {children}
       </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'open-sans'
    }
})

export default Basictext;
