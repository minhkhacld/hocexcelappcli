import React from 'react';
import { BannerAdSize, BannerAd, } from '@react-native-firebase/admob';
import { bannerAdId } from './adMobId';
import {
    AdMobBanner,
} from 'react-native-admob';

const Banner = () => {
    return (
        // <BannerAd
        //     unitId={bannerAdId}
        //     size={BannerAdSize.FULL_BANNER}
        //     requestOptions={{
        //         requestNonPersonalizedAdsOnly: false,
        //     }}
        //     onAdFailedToLoad={(error) => {
        //         console.log(error)
        //         // if (error) {
        //         //     setShowBanner(false)
        //         // }
        //     }}
        // />

        <AdMobBanner
            adSize="fullBanner"
            adUnitID={bannerAdId}
            onAdFailedToLoad={error => console.error(error)}
        />
    )
}

export default Banner
