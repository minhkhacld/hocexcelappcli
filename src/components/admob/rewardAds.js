import { useState, useEffect, useCallback } from 'react';
import { RewardedAd, RewardedAdEventType, AdEventType, TestIds } from 'react-native-google-mobile-ads';

// Replace with your own ad unit ID
const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-8774393929760728/9059780648';


export const useRewardedAd = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [rewardedAd, setRewardedAd] = useState(null);
    const [error, setError] = useState(null);
    const [isEarnedReward, setIsEarnedReward] = useState(false)

    useEffect(() => {
        const ad = RewardedAd.createForAdRequest(adUnitId);
        setRewardedAd(ad);
        const loadAd = () => ad.load();

        // Set up event listeners
        const unsubscribeLoaded = ad.addAdEventListener(RewardedAdEventType.LOADED, () => {
            console.log('Ad is loaded...');
            setIsLoaded(true);
            setIsEarnedReward(false);
        });

        const unsubscribeClosed = ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
            setIsLoaded(false);
            setIsEarnedReward(true);
            loadAd(); // Reload the ad after it's closed
        });

        loadAd();

        return () => {
            unsubscribeLoaded();
            unsubscribeClosed();
        };
    }, []);

    const show = useCallback(() => {
        if (isLoaded && rewardedAd) {
            rewardedAd.show();
            console.log('Ad is showing...');
        } else {
            console.log('Ad is not loaded yet.');
            rewardedAd.load();
            setIsEarnedReward(false);
        }
    }, [isLoaded, rewardedAd]);

    // console.log(isEarnedReward);

    return { show, isLoaded, isEarnedReward, rewardedAd };
};