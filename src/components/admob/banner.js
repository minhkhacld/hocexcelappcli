// import React from 'react';
// import { bannerAdId } from './adMobId';

// const Banner = () => {
//     return (

//         <AdMobBanner
//             adSize="fullBanner"
//             adUnitID={bannerAdId}
//             onAdFailedToLoad={error => console.error(error)}
//         />
//     )
// }

// export default Banner

import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-8774393929760728/9421290027';

export default function Banner() {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}
