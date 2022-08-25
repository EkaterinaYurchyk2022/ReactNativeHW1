import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

type IProps = {
    value: string
    onChangeText: (value: string) => void
    placeholder: string
}

export const InputValueSelector = ({value, onChangeText, placeholder}: IProps) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}

        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderStyle: 'solid',
        width: 350,
        height: 38,
        backgroundColor: 'darkgrey',
        marginLeft: 20,
        alignItems: 'center'
    }
})

