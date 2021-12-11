import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FocusAwareStatusBar from '../../header/statusBar';
import admob, { BannerAdSize, BannerAd } from '@react-native-firebase/admob';

const AboutDetail = ({ navigation, route }) => {

    let data = route.params.item.data;

    return (
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar
                backgroundColor={'white'} barStyle="dark-content" />
            <BannerAd
                unitId="ca-app-pub-8774393929760728/9421290027"
                // unitId={'ca-app-pub-3940256099942544/6300978111'}
                size={BannerAdSize.FULL_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: false,
                }}
            />
            <View style={styles.innerContainer}>
                <View style={styles.title}>
                    <View style={styles.logoContainer}>
                        {/* <Image style={styles.logo} source={require('../../../../assets/icon.png')} /> */}
                        <Image style={styles.logo} source={require('../../../../assets/ic_launcher.png')} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{route.params.item.description_vi}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <FlatList data={data}
                        keyExtractor={(item, index) => String(index)}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Text style={styles.contentText}>{item.description_vi}</Text>
                                    {item.note !== "" && <Text style={styles.note}>{item.note}</Text>}
                                </View>
                            )
                        }}
                    />
                </View>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    innerContainer: {
        flex: 1,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    logoContainer: {
        width: '30%',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: { width: 50, height: 50 },
    titleContainer: {
        width: '70%',
        marginLeft: 10
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#14279B'
    },
    content: {
        flex: 8,
        padding: 10,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    contentText: {
        padding: 5, color: "black"
    },
    note: { padding: 5, fontSize: 14, fontWeight: 'bold' },
    adMobBanner: {
        width: '100%',
        justifyContent: 'center', alignItems: 'center',
    },
})
export default AboutDetail
