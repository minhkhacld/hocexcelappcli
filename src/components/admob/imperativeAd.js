import {
    AdMobInterstitial, AdMobRewarded
} from 'react-native-admob';
import { interstitialAdId, rewardAdId } from './adMobId';

export const InterstitialAd = () => {
    // Display an interstitial
    AdMobInterstitial.removeAllListeners();
    AdMobInterstitial.setAdUnitID(interstitialAdId);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
}

export const RewardedAd = () => {
    // Display an interstitial
    AdMobRewarded.setAdUnitID(rewardAdId);
    AdMobRewarded.requestAd().then(() =>
        AdMobRewarded.showAd()
    );
}



