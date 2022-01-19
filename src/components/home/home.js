import React, { useEffect } from 'react';
import { Dimensions, KeyboardAvoidingView, SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FlatListData from '../../asset/data/function_data';
import { setData } from '../../redux/reducer';
import FullScreenSearch from '../header/fullScreenSearch';
import Header from '../header/header';
//component
import CardGroup from './cardgroup/cardgroup';
import ListGroup from './listgroup/listgroup';
import { InterstitialAd } from '../admob/imperativeAd';
import RemotePushController from '../notyfication/remotePushController';

const Home = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const reducer = useSelector((store) => {
        return store.Reducer
    });
    useEffect(() => {
        dispatch(setData(FlatListData));
        InterstitialAd();
    }, []);

    const windowHeight = Dimensions.get('window').height;
    let cardData = FlatListData.filter(r => r.category === 'card')[0].data;
    let listData = FlatListData.filter(r => r.category === 'list')[0].data;
    let SearchDATA = FlatListData.map(d => d.data.filter(v => v.title === "Common use functions").map(a => a.data)).flatMap(r => r).flatMap(r => r);
    return (
        <SafeAreaView style={[styles.container]}>
            <KeyboardAvoidingView style={{ height: windowHeight }}>
                <Header DATA={FlatListData} navigation={navigation} />
                <CardGroup CardGroupDATA={cardData} navigation={navigation} />
                <ListGroup ListGroupDATA={listData} navigation={navigation} />
                {
                    reducer.searchDropdownVisible &&
                    <FullScreenSearch SearchDATA={SearchDATA} navigation={navigation} />
                }
            </KeyboardAvoidingView>
            <View>
                <RemotePushController />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        width: "100%",
        height: "100%",

    },
});

export default Home
