import React, { useState,  } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, KeyboardAvoidingView, SafeAreaView, TouchableNativeFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FocusAwareStatusBar from '../../../header/statusBar';
import {BannerAdSize, BannerAd} from '@react-native-firebase/admob';

const ShortcutDetail = ({ navigation, route }) => {
    // console.log(route.params)
    const [searchValue, setSearchValue] = useState('');


    let ShortcutData = route.params.item.data[0].data;
    if (searchValue !== '') {
        ShortcutData = ShortcutData.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.description.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    return (
        <KeyboardAvoidingView >
            <SafeAreaView>
              
                <BannerAd
                    unitId="ca-app-pub-8774393929760728/9421290027"
                    // unitId={'ca-app-pub-3940256099942544/6300978111'}
                    size={BannerAdSize.FULL_BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: false,
                    }}
                />
                <FocusAwareStatusBar backgroundColor={'white'} barStyle="dark-content" />
                <TouchableNativeFeedback>
                    <View style={styles.shortcutSearch} >
                        <Icon name={'arrow-back-ios'} size={28} style={styles.goBackIcon} onPress={() => navigation.goBack()} />
                        <Icon name={'search'} style={styles.icon} size={20} />
                        <TextInput style={styles.input} placeholder='Thử gõ + và tên phím để tìm nhanh...' onChangeText={(e) => setSearchValue(e)}
                            placeholderTextColor="black"
                        />
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.container}>
                    <FlatList
                        data={ShortcutData}
                        keyExtractor={(item, index) => String(index)}
                        ListHeaderComponent={() => {
                            return (
                                <View style={styles.columnHeader}>
                                    <Text style={[styles.textTitle, { fontSize: 14, fontWeight: 'bold', textAlign: 'center', borderRightWidth: 0.25 }]}>Phím tắt</Text>
                                    <Text style={[styles.textDescription, { fontSize: 14, fontWeight: 'bold', textAlign: 'center', }]}>Công dụng</Text>
                                </View>
                            )
                        }}
                        stickyHeaderIndices={[0]}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.shortcutContainer}>
                                    <Text style={styles.textTitle}>{item.title}</Text>
                                    <Text style={styles.textDescription}>{item.description}</Text>
                                </View>
                            )
                        }}
                    />
                </View>

            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    shortcutSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 50,
    },
    input: {
        backgroundColor: '#F1F3F5',
        width: '75%',
        height: 40,
        paddingLeft: 30,
        borderRadius: 40,
        color: "black",
    },
    goBackIcon: {
        position: 'absolute',
        zIndex: 1000,
        left: '4%',
        width: 30,
        color: '#38A3A5',
    },
    icon: {
        position: 'absolute',
        zIndex: 1000,
        left: '14%',
        color: "black"
    },

    //Content
    shortcutContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.25,
        minHeight: 50,
        backgroundColor: 'white',
    },

    columnHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        height: 45,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.25,


    },
    textTitle: {
        width: '40%',
        fontSize: 12,
        padding: 5,
        color: "black",
    },
    textDescription: {
        width: '60%',
        fontSize: 12,
        padding: 5,
        color: "black",
    },
    adMobBanner: {
        width: '100%',
        justifyContent: 'center', alignItems: 'center',
    },
})
export default ShortcutDetail
