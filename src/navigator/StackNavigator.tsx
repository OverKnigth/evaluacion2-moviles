import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { BODY_COLOR } from '../commons/comonsColors';
import { ImagenUno } from '../screens/ImagenUno';
import { ImagenDos } from '../screens/ImagenDos';
import { MayorIgual } from '../screens/MayorIgual';
import { MenorIgual } from '../screens/MenorIgual';

export type RootStackParamList = {
    WelcomeScreen: undefined;
    ImagenUno: undefined;
    ImagenDos: undefined;
    MayorIgual: undefined;
    MenorIgual: undefined;
}

const Stack = createStackNavigator <RootStackParamList> ();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: BODY_COLOR} }}>
      <Stack.Screen name="WelcomeScreen" options={{ title: 'Inicio'}} component={WelcomeScreen} />
      <Stack.Screen name="ImagenUno" options={{ title: 'Imagen 1'}} component={ImagenUno} />
      <Stack.Screen name="ImagenDos" options={{ title: 'Imagen 2'}} component={ImagenDos} />
      <Stack.Screen name="MayorIgual" options={{ title: 'Operacion'}} component={MayorIgual} />
      <Stack.Screen name="MenorIgual" options={{ title: 'Operacion'}} component={MenorIgual} />
    </Stack.Navigator>
  );
}