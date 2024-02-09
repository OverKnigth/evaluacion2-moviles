import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'

export const ImagenDos = () => {
  return (
    <View>
    <TitleComponent title='Imagen 2'/>
    <Image source={{uri : 'https://imgix.ranker.com/list_img_v2/11716/3171716/original/3171716?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720'}} style={styles.img}/>
    <Text style={styles.text}>Gliscor{'\n'}Pokémon Tipo Tierra/Volador</Text>
</View>
  )
}

const styles = StyleSheet.create({
    img:{
        height: 300,
        width: 400,
        alignSelf: 'center',
        borderRadius: 10
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',   
        padding: 10
    }
})