import React, { useEffect } from 'react';
import { StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, Button } from 'react-native';
import FlatListData from '../../asset/data/function_data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//component
import CardGroup from './cardgroup/cardgroup';
import ListGroup from './listgroup/listgroup';
import Header from '../header/header';

import { setData } from '../../redux/reducer';
import { useSelector, useDispatch } from 'react-redux';
import FullScreenSearch from '../header/fullScreenSearch';

// import { InterstitialAd, AdEventType, TestIds } from '@react-native-firebase/admob';



const Home = ({ navigation, route }) => {

    // const [loaded, setLoaded] = React.useState(false);

    const dispatch = useDispatch();
    const reducer = useSelector((store) => {
        return store.Reducer
    });
    useEffect(() => {
        dispatch(setData(FlatListData))
    }, []);

    const windowHeight = Dimensions.get('window').height;
    let cardData = FlatListData.filter(r => r.category === 'card')[0].data;
    let listData = FlatListData.filter(r => r.category === 'list')[0].data;
    let SearchDATA = FlatListData.map(d => d.data.filter(v => v.title === "Common use functions").map(a => a.data)).flatMap(r => r).flatMap(r => r);


    // const interstitial = InterstitialAd.createForAdRequest("ca-app-pub-3940256099942544/1033173712");
    // const testIntitital = () => {
    //     const eventListener = interstitial.onAdEvent(type => {
    //         if (type === AdEventType.LOADED) {
    //             setLoaded(true);
    //             // No advert ready to show yet
    //             if (!loaded) {
    //                 return null;
    //             }
    //             interstitial.show();
    //         }
    //     });
    //     // Start loading the interstitial straight away
    //     interstitial.load();

    //     // Unsubscribe from events on unmount
    //     return () => {
    //         eventListener();
    //     };
    // }


    return (
        <SafeAreaView style={[styles.container]}>
            <KeyboardAvoidingView style={{ height: windowHeight }}>
                <Header DATA={FlatListData} navigation={navigation} />
                {/* <Button
                    title="Show Interstitial"
                    onPress={() => {
                        testIntitital()
                    }}
                /> */}
                <CardGroup CardGroupDATA={cardData} navigation={navigation} />
                <ListGroup ListGroupDATA={listData} navigation={navigation} />
                {
                    reducer.searchDropdownVisible &&
                    <FullScreenSearch SearchDATA={SearchDATA} navigation={navigation} />
                }
            </KeyboardAvoidingView>

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
