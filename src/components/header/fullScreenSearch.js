import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { closeSearchDropDown } from '../../redux/reducer';
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector, useDispatch } from 'react-redux';
import { setItemDetailHeaderBar } from '../../redux/reducer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FocusAwareStatusBar from './statusBar';

const FullScreenSearch = ({ navigation, SearchDATA }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    // console.log("🚀 ~ file: fullScreenSearch.js ~ line 9 ~ FullScreenSearch ~ SearchDATA", SearchDATA);
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
            // await AsyncStorage.clear();
            if (respone) {
                setSearchHistory(respone);
            }
            else {

            }
        })
    }, []);

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(value.item, jsonValue);
            return
        } catch (e) {

        }
    };

    // console.log("🚀 ~ file: fullScreenSearch.js ~ line 14 ~ FullScreenSearch ~ searchHistory", searchHistory);
    let SearchARR = SearchDATA.filter(d => d.data.some(a => a.title.toLowerCase().includes(searchValue.toLowerCase()))).slice(0, 10)
    const SuggestionTextBGColor = ['#38A3A5', '#57CC99', '#80ED99', '#FFB319', '#FFE194', '#E8F6EF', '#B8DFD8',
        '#3DB2FF', '#FFEDDA', '#FFB830', '#FF2442', '#FCFFA6', '#C1FFD7', '#B5DEFF', '#CAB8FF', '#FFB319',
        '#FFE194', '#B8DFD8', '#0CECDD', '#FF67E7', '#38A3A5'
        , '#57CC99', '#80ED99', '#E8F6EF',
    ];

    return (
        reducer.searchDropdownVisible &&
        <SafeAreaView style={[styles.fullScreenSearch]}>

            <View style={styles.search}>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />
                <Icon name={'arrow-back-ios'} size={30} style={styles.goBackIcon} onPress={() => dispatch(closeSearchDropDown())} />
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setSearchValue(e)}
                    placeholder='Học excel rất thú vị...'
                    autoFocus={true}
                    returnKeyType='none'
                    value={searchValue} />
                <Icon name={'search'} size={20} style={styles.icon} />
            </View>
            <View style={styles.body}>
                <View style={styles.resultContent}>
                    {searchValue === "" && Object.values(searchHistory).length > 0 && Object.values(searchHistory).map((r, idx) => {
                        console.log(r)
                        let item = SearchDATA.filter(d => d.data.some(a => a.title.toLowerCase().includes(r.item.toLowerCase()))).slice(0, 10)[0];
                        return (
                            <TouchableOpacity key={String(idx)}
                                onPress={() => {
                                    navigation.navigate('ListItemDetail', { item, index: r.index });
                                    dispatch(setItemDetailHeaderBar(item.title))
                                }}
                                style={[styles.resultOutline, { backgroundColor: SuggestionTextBGColor[idx] }]}>
                                <Text style={styles.resultText}>{r.item}</Text>
                            </TouchableOpacity>
                        )
                    })
                    }
                    {
                        searchValue !== "" && SearchARR.length > 0 && SearchARR.map(item => item.data.map((r, index) => {
                            return (
                                <TouchableOpacity key={String(index)}
                                    onPress={() => {
                                        navigation.navigate('ListItemDetail', { item, index });
                                        dispatch(setItemDetailHeaderBar(item.title));
                                        storeData({ item: r.title, index: index });
                                    }}
                                    style={[styles.resultOutline, { backgroundColor: SuggestionTextBGColor[index] }]}>
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
    },
    goBackIcon: {
        color: '#38A3A5',
        position: 'absolute',
        top: '36%',
        left: '5%',
        width: 30,
    },
    icon: {
        position: 'absolute',
        color: 'grey',
        top: '40%',
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
        backgroundColor: 'tomato',
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    resultText: {
        fontSize: 12
    },

})
export default FullScreenSearch
