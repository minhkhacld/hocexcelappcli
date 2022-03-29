import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from 'react-redux';
import { closeSearchDropDown, setItemDetailHeaderBar } from '../../redux/reducer';

const FullScreenSearch = ({ navigation, SearchDATA }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const dispatch = useDispatch();
    const reducer = useSelector((store) => {
        return store.Reducer
    });
    useEffect(() => {
        const localStorageData = async () => {
            try {
                const result = {};
                const keys = await AsyncStorage.getAllKeys();
                for (const key of keys) {
                    const val = await AsyncStorage.getItem(key);
                    result[key] = JSON.parse(val);
                }
                return result
            } catch (error) {
            }
        }
        localStorageData().then(async respone => {
            if (respone) {
                setSearchHistory(respone);
            }
        });
    }, []);

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(value.item, jsonValue);
            return
        } catch (e) {
        }
    };
    // console.log(searchHistory)
    let SearchARR = searchValue === "" ? [] : SearchDATA.filter(d => d.data.some(a => a.title.toLowerCase().includes(searchValue.toLowerCase()))).slice(0, 10)

    return (
        reducer.searchDropdownVisible &&
        <SafeAreaView style={[styles.fullScreenSearch]}>
            <StatusBar
                backgroundColor={'transparent'} translucent={true} barStyle="dark-content" />
            <View style={styles.search}>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />
                <Icon name={'arrow-back-ios'} size={hp('4%')} style={styles.goBackIcon} onPress={() => dispatch(closeSearchDropDown())} />
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setSearchValue(e)}
                    placeholder='Tìm kiếm các hàm, nhóm hàm...'
                    placeholderTextColor={'#14279B'}
                    autoFocus={true}
                    returnKeyType='none'
                    value={searchValue} />
                <Icon name={'search'} size={hp('2%')} style={styles.icon} />
            </View>
            <View style={styles.body}>
                <View style={styles.resultContent}>
                    {/* {searchValue === "" && Object.values(searchHistory).length > 0 && Object.values(searchHistory).map((r, idx) => {
                        let item = SearchDATA.filter(d => d.data.some(a => a.title.toLowerCase().includes(r.item.toLowerCase()))).slice(0, 10)[0];
                        return (
                            <TouchableOpacity key={String(idx)}
                                onPress={() => {
                                    navigation.navigate('ListItemDetail', { item, index: r.index });
                                    dispatch(setItemDetailHeaderBar(item.title))
                                }}
                                style={[styles.resultOutline,]}>
                                <Text style={styles.resultText}>{r.item}</Text>
                            </TouchableOpacity>
                        )
                    })
                    } */}
                    {
                        SearchARR.length > 0 && SearchARR.slice(0, 1).map(item => item.data.map((r, index) => {
                            return (
                                <TouchableOpacity key={String(index)} title={r.title}
                                    onPress={() => {
                                        navigation.navigate('ListItemDetail', { item, index });
                                        dispatch(setItemDetailHeaderBar(item.title));
                                        storeData({ item: r.title, index: index });
                                    }}
                                    style={[styles.resultOutline,]}
                                >
                                    <Text style={styles.resultText}>{r.title}</Text>
                                </TouchableOpacity>
                            )
                        }))
                    }
                </View>
            </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    fullScreenSearch: {
        flex: 1,
        backgroundColor: "white",
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    search: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        top: StatusBar.currentHeight - 10,

    },
    input: {
        backgroundColor: '#F1F3F5',
        width: '70%',
        height: '50%',
        minHeight: 40,
        borderRadius: 40,
        paddingLeft: '10%',
        color: '#14279B',
        fontSize: hp('1.6%')
    },
    goBackIcon: {
        color: '#14279B',
        position: 'absolute',
        top: '36%',
        left: '5%',
        width: 30,
    },
    icon: {
        position: 'absolute',
        color: '#14279B',
        top: '43%',
        left: '18%',
    },
    //dropdown
    body: {
        flex: 6,
        width: '100%',
        alignItems: 'center',
    },
    resultContent: {
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        marginTop: 20,
    },
    resultOutline: {
        flexDirection: 'row',
        backgroundColor: '#2089DC',
        color: 'white',
        padding: 10,
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    resultText: {
        fontSize: 12, color: 'white', fontWeight: 'bold'
    },

})
export default FullScreenSearch
