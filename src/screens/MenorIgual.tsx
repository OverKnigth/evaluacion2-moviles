import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { InputComponent } from '../components/InputComponent';
import { TitleComponent } from '../components/TitleComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export const MenorIgual = () => {
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');

    const handleNum1Change = (value: string) => {
        setNum1(value);
    };

    const handleNum2Change = (value: string) => {
        setNum2(value);
    };

    const compareNumbers = () => {
        const parsedNum1 = parseFloat(num1);
        const parsedNum2 = parseFloat(num2);

        if (parsedNum1 <= parsedNum2) {
            Alert.alert(`${parsedNum1} es menor o igual que ${parsedNum2}`);
        } else {
            Alert.alert(`${parsedNum1} no es menor o igual que ${parsedNum2}`);
        }
    };

    return (
        <View>
            <TitleComponent title="Menor o Igual Que" />
            <InputComponent placeholder="Número 1" onChangeText={handleNum1Change} />
            <InputComponent placeholder="Número 2" onChangeText={handleNum2Change} />
            <ButtonComponent title="Comparar" onPress={compareNumbers} />
        </View>
    );
};
