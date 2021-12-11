import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const GoLeft = ({ navigation, location }) => {
    return (
        <Pressable
            onPress={() => navigation.navigate(location)}
            title="Info"
            color="#fff">
            <Icon name="keyboard-backspace" size={25} style={{ marginRight: 20 }} />
        </Pressable>
    )
}

export const GoRight = ({ navigation, location }) => {
    return (
        <Pressable
            onPress={() => navigation.navigate(location)}
            title="Info"
            color="#fff">
            <Icon name="keyboard-backspace" size={25} style={{ transform: [{ rotate: '180deg' }] }} />
        </Pressable>
    )
}


