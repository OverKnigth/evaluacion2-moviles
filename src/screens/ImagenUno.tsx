import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'

export const ImagenUno = () => {
  return (
    <View>
        <TitleComponent title='Imagen 1'/>
        <Image source={{uri : 'https://lh3.googleusercontent.com/proxy/ej34flYHLWbFjiEuPSZzki_UQQURnT_zRZeqbbcEWoRVeZjx3kphzkzg_DK2fVzNJPBxDQR9s39XK1M96hsArU23hrojz6J3-GVnAJWu8qotYqO_KRIrnVRU-q7YExOKSmpNb42AidRM9WQApTrxMwPxpi8fsbSLu2OrIaGCkRr1KefwiO2LYg'}} style={styles.img}/>
        <Text style={styles.text}>Infernape{'\n'}Pokémon Tipo Fuego/Lucha</Text>
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