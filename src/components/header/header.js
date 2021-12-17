import React from 'react';
import { StyleSheet, TextInput, View, StatusBar } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from 'react-native-linear-gradient';
import { setSearchValue } from '../../redux/reducer';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <View style={styles.headerGroup} >
            <View style={styles.header}>
                <LinearGradient colors={['#FF3CAC', '#784BA0', '#2B86C5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                    style={styles.background}>
                    <StatusBar
                        backgroundColor={'transparent'} translucent={true} barStyle="light-content" />

                    <View style={styles.inputGroup}
                    >
                        <TextInput
                            style={styles.input}
                            onFocus={() => dispatch(setSearchValue())}
                            placeholder='Tìm kiếm hàm, nhóm hàm...'
                            placeholderTextColor="#14279B"
                        />
                    </View>
                </LinearGradient>
                <Icon name={'search'} size={20} style={styles.icon} color={'#14279B'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerGroup: {
        justifyContent: 'center',
        zIndex: -1,
        height: 100,
        width: "100%",
    },
    header: {
        width: "100%",
        height: "100%"
    },
    background: {
        width: '100%',
        height: '100%',
        borderBottomRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputGroup: {
        top: StatusBar.currentHeight,
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        height: 40,
        paddingLeft: 35,
        borderRadius: 20,
        top: ((90 - StatusBar.currentHeight) - 40) / 2,
        position: 'absolute',
        color: '#14279B',
    },
    icon: {
        position: 'absolute',
        left: '13%',
        top: StatusBar.currentHeight + ((90 - StatusBar.currentHeight) - 20) / 2
    },

})

export default Header
