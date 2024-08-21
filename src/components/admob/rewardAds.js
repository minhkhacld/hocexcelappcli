import { useState, useEffect } from 'react';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

// Replace with your own ad unit ID
const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-8774393929760728/9059780648';

export function useRewardedAd() {
    const [rewardedAd, setRewardedAd] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [isEarnedReward, setIsEarnedReward] = useState(false)

    useEffect(() => {
        const ad = RewardedAd.createForAdRequest(adUnitId, {
            requestNonPersonalizedAdsOnly: true,
        });

        setRewardedAd(ad);

        const onAdLoaded = () => {
            setIsLoaded(true)
            setIsEarnedReward(false)
        };
        const onAdFailedToLoad = (error) => setError(error);

        const onAdClosed = () => {
            console.log('Ad closed');
            // Optionally reload the ad here
            load();
        };

        ad.addAdEventListener(RewardedAdEventType.LOADED, onAdLoaded);
        // ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, onAdFailedToLoad);
        ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
            // Handle reward
            // Reload the ad after receiving the reward
            console.log('User rewarded');
            setIsEarnedReward(true)
            load();
        });

        // Load the ad
        load();

        // Clean up event listeners on unmount
        return () => {
            ad.removeAllListeners();
        };
    }, []);

    const load = () => {
        if (rewardedAd) {
            console.log('Loading ad...');
            rewardedAd.load();
        }
    };

    const show = () => {
        if (rewardedAd && isLoaded) {
            console.log('Showing ad...');
            rewardedAd.show();
        } else {
            console.log('Ad not loaded yet');
        }
    };

    console.log(isLoaded, isEarnedReward);

    return {
        isLoaded,
        error,
        show,
        load,
        isEarnedReward,
    };
}
