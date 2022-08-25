import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';

type IProps = {
    value: string
    onChangeText: (value: string) => void
    placeholder: string
}

const {width, height} = Dimensions.get('screen')
const WIDTH = width
const HEIGHT = height

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
        width: WIDTH - 40,
        height: HEIGHT / 25,
        backgroundColor: 'darkgrey',
        marginLeft: 20,
        margin: 5
    }
})

