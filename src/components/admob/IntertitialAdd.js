import { useState, useEffect, useCallback } from 'react';
import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';


// Replace with your own ad unit ID
const adUnitId = __DEV__ ? 'ca-app-pub-3940256099942544/1033173712' : 'ca-app-pub-8774393929760728/9059780648';

export const useInterstitialAd = () => {
  const [interstitialAd, setInterstitialAd] = useState(null);
  const [isIntLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadAd = () => {
      const ad = InterstitialAd.createForAdRequest(adUnitId);
      setInterstitialAd(ad);

      // Set up event listeners
      const unsubscribeLoaded = ad.addAdEventListener(AdEventType.LOADED, () => {
        setIsLoaded(true);
      });

      const unsubscribeClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
        setIsLoaded(false);
        loadAd(); // Reload the ad after it's closed
      });

      ad.load();

      // Cleanup listeners on component unmount
      return () => {
        unsubscribeLoaded();
        unsubscribeClosed();
      };
    };

    loadAd(); // Initial load when the component mounts

  }, [adUnitId]);

  const showAd = useCallback(() => {
    if (isIntLoaded && interstitialAd) {
      interstitialAd.show();
    } else {
      console.log('Ad not loaded yet.');
      interstitialAd.load();
    }
  }, [isIntLoaded, interstitialAd]);

  return { showAd, isIntLoaded, interstitialAd };
};


