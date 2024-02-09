import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { INPUT_COLOR } from '../commons/comonsColors';

interface InputProps {
    placeholder: string;
    onChangeText: (value: string) => void;
}

export const InputComponent = ({ placeholder, onChangeText } : InputProps) => {
    const [text, setText] = useState<string>('');

    const handleChangeText = (value: string) => {
        setText(value);
        onChangeText(value);
    };

    return (
        <TextInput style={styles.inputT}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            value={text}
            keyboardType="numeric"
        />
    );
};

const styles = StyleSheet.create({
    inputT: {
        backgroundColor: INPUT_COLOR,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10
    }
})
