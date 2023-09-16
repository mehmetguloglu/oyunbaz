import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Platform } from "react-native";
import { TestIds, useInterstitialAd } from "react-native-google-mobile-ads";
import { useAppSelector } from "../hooks";

export function getRewardedAds() {
  const { developerMode } = useAppSelector(
    (state) => state.developerModeReducer
  );
  const adRewardedId =
    __DEV__ || developerMode
      ? TestIds.REWARDED
      : Platform.OS == "android"
      ? "ca-app-pub-8545961952430100/4350764469"
      : "ca-app-pub-8545961952430100/3885814314";

  const { isLoaded, isClosed, load, show, isShowing } = useInterstitialAd(
    adRewardedId,
    {
      requestNonPersonalizedAdsOnly: false,
      keywords: [],
    }
  );
  //Prepare Advertisement for watch
  useFocusEffect(
    useCallback(() => {
      if (isLoaded === false) load();
    }, [load, isLoaded])
  );

  return { isLoaded, show, isShowing };
}
