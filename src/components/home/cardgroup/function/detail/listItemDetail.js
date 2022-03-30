import React, { useCallback, useRef, useState } from 'react';
import { Dimensions, FlatList, RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { setItemDetailHeaderBar } from '../../../../../redux/reducer';
import Banner from '../../../../admob/banner';
import { InterstitialAd } from '../../../../admob/imperativeAd';
import path from './global';
// import {
//     AdEventType
// } from '@react-native-firebase/admob';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const ListItemDetail = ({ navigation, route,
    // interstitial 
}) => {


    const [state, setState] = useState({
        itemTitle: route.params.item.title,
        detailData: route.params.item.data,
        listIndex: route.params.listIndex
    });
    // const [loaded, setLoaded] = React.useState(false);
    const [refreshing, setRefreshing] = useState(false);


    const dispatch = useDispatch();
    let myList = useRef();
    let DATA = route.params.DATA;
    let picturePath = path.map(r => r.data.filter(d => d.type === state.itemTitle)).flatMap(r => r);
    let focusIndex = route.params.index;


    // React.useEffect(() => {

    //     const eventListener = interstitial.onAdEvent(type => {
    //         console.log('interstitialAd', type)
    //         if (type === AdEventType.LOADED) {
    //             setLoaded({ ...loaded, interstitial: true });
    //         }
    //         if (type === AdEventType.CLOSED) {
    //             setLoaded({ ...loaded, interstitial: false });
    //             //reload ad 
    //             interstitial.load();
    //         }
    //     });
    //     // Start loading the interstitial straight away
    //     interstitial.load();

    //     // Unsubscribe from events on unmount
    //     return () => {
    //         eventListener();
    //     };
    // }, []);

    const onRefresh = useCallback(() => {
        // const eventListener = interstitial.onAdEvent(type => {

        //     if (type === AdEventType.LOADED) {
        //         setLoaded({ ...loaded, interstitial: true });
        //     }
        //     if (type === AdEventType.CLOSED) {
        //         setLoaded({ ...loaded, interstitial: false });
        //         //reload ad 
        //         interstitial.load();
        //     }
        // });
        // // Start loading the interstitial straight away
        // interstitial.load();
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
        // Unsubscribe from events on unmount
        // return () => {
        //     eventListener();
        // };
    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <FlatList
                keyExtractor={(item, index) => String(index)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ref={myList}
                data={state.detailData}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                initialScrollIndex={focusIndex === undefined ? 0 : focusIndex}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <ListItem bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
                                    {item.description_vi !== "" && <Text style={styles.description}>{item.description_vi}</Text>}
                                    {item.syntax && item.syntax.syntax_fomular !== "" && <View>
                                        <Text style={styles.syntax_fomular}>{"◾ " + "Cú pháp: " + item.syntax.syntax_fomular}</Text>
                                        <Text style={styles.syntax}>{item.syntax.detail_1}</Text>
                                        <Text style={styles.syntax}>{item.syntax.detail_2}</Text>
                                        <Text style={styles.syntax}>{item.syntax.detail_3}</Text>
                                        <Text style={styles.syntax}>{item.syntax.detail_4}</Text>
                                    </View>
                                    }
                                    {item.example && item.example.detail_1 !== "" && <View>
                                        <Text style={styles.syntax_fomular}>{"◾ " + "Ví dụ:"}</Text>
                                        <Text style={styles.syntax}>{item.example.detail_1}</Text>
                                        <Text style={styles.syntax}>{item.example.detail_2}</Text>
                                    </View>
                                    }
                                    {item.example && <Text style={styles.picture_title}>◾ Sử dụng:</Text>}
                                    {
                                        picturePath[0].child[index].path !== "" && <Image source={picturePath[0].child[index].path} style={styles.image} />
                                    }
                                    {item.explanation !== "" && <Text style={styles.explanation}>{"Giải thích: " + item.explanation}</Text>}
                                    {item.note !== "" && <ListItem.Subtitle style={styles.note}>{" Lưu ý: " + item.note}</ListItem.Subtitle>}
                                    {item.title === "1. Bắt đầu" &&
                                        <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.scantogooglesheets')} style={styles.note}>
                                            <Text style={{ color: 'blue' }}>{"Link tải ứng dụng Scan To Google Sheets"}</Text>
                                        </TouchableOpacity>
                                    }
                                </ListItem.Content>
                            </ListItem>
                        </View>
                    )
                }}
            />
            {DATA &&
                <Icon name="chevron-double-right" size={35} style={styles.goforwardIcon} onPress={() => {
                    // if (loaded.interstitial) {
                    //     interstitial.show()
                    // }
                    if (state.listIndex < DATA.length - 1) {
                        setState({
                            ...state,
                            itemTitle: DATA[state.listIndex + 1].title,
                            detailData: DATA[state.listIndex + 1].data,
                            listIndex: state.listIndex + 1,
                        });
                        dispatch(setItemDetailHeaderBar(DATA[state.listIndex + 1].title));
                        myList.current.scrollToIndex({ animated: true, index: 0, viewPosition: 0 });
                    }
                    else {
                        setState({
                            ...state,
                            itemTitle: DATA[0].title,
                            detailData: DATA[0].data,
                            listIndex: 0,
                        });
                        dispatch(setItemDetailHeaderBar(DATA[0].title));
                        myList.current.scrollToIndex({ animated: true, index: 0, viewPosition: 0 });
                    }
                    InterstitialAd();
                }} />
            }
            <Banner />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 45,
    },
    pageHeader: {
        height: 50,
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: 'white',
    },
    pageHeaderText: {
        fontSize: 20, fontWeight: 'bold',
        fontWeight: 'bold',
        color: '#00A19D',
    },
    title: {
        fontSize: 16,
        padding: 5,
        marginBottom: 5,
        color: '#14279B',
        fontWeight: 'bold',

    },
    description: { fontSize: 12, marginBottom: 10, color: "black" },
    image: {
        width: Dimensions.get('window').width - 20, height: 'auto',
        resizeMode: 'contain', marginBottom: 10, aspectRatio: 4 / 2
    },
    explanation: { fontSize: 12, marginBottom: 10, color: "black" },
    note: { fontSize: 12, fontWeight: 'bold' },
    syntax_fomular: {
        fontSize: 14, fontWeight: 'bold', marginBottom: 10
    },
    syntax: { fontSize: 12, marginBottom: 10, color: 'black' },
    picture_title: { fontSize: 14, fontWeight: 'bold' },

    goforwardIcon: {
        backgroundColor: 'transparent',
        color: '#14279B',
        bottom: '50%',
        right: 0,
        zIndex: 1000,
        position: 'absolute',
    },
    adMobBanner: {
        width: '100%',
        justifyContent: 'center', alignItems: 'center',
    },
})

export default ListItemDetail
