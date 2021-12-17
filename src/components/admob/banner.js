import React from 'react';
import { BannerAdSize, BannerAd, } from '@react-native-firebase/admob';
import { bannerAdId } from './adMobId';

const Banner = () => {
    return (
        <BannerAd
            unitId={bannerAdId}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: false,
            }}
        />
    )
}

export default Banner
