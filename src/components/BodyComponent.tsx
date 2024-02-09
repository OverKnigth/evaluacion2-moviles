import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { BACKBUTTON_COLOR, BODY_COLOR } from '../commons/comonsColors';

export const BodyComponent = (props : any) => {

    const { height } = useWindowDimensions();

  return (
    <View style={{
        height: height *0.70,
        ...styles.container}}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKBUTTON_COLOR,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 20
    }        
})