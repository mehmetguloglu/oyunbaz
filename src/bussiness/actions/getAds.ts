import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Platform } from "react-native";
import {
  TestIds,
  useInterstitialAd,
  useRewardedAd,
} from "react-native-google-mobile-ads";
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

  const { isLoaded, isClosed, load, show, isShowing } = useRewardedAd(
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

export function getInterstitialAds() {
  const { developerMode } = useAppSelector(
    (state) => state.developerModeReducer
  );
  const adInterstitialId =
    __DEV__ || developerMode
      ? TestIds.REWARDED
      : Platform.OS == "android"
      ? "ca-app-pub-8545961952430100/2023514833"
      : "ca-app-pub-8545961952430100/4152938433";

  const { isLoaded, isClosed, load, show, isShowing } = useInterstitialAd(
    adInterstitialId,
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
