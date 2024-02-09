import React from 'react'
import { Text, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator'

interface Props extends StackScreenProps <RootStackParamList, 'WelcomeScreen'>{};

export const WelcomeScreen = ({navigation}: Props) => {
  return (
    <View>
        <TitleComponent title='¡BIENVENIDO!' />
        <BodyComponent>
        <ButtonComponent title='Imagen 1' onPress={() => navigation.navigate('ImagenUno')} />
        <ButtonComponent title='Imagen 2' onPress={() => navigation.navigate('ImagenDos')} />
        <ButtonComponent title='>=' onPress={() => navigation.navigate('MayorIgual')} />
        <ButtonComponent title='<=' onPress={() => navigation.navigate('MenorIgual')} />
        </BodyComponent>
    </View>
  )
}
