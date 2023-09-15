import { Dimensions, Platform } from "react-native";
import React from "react";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";

const { width, height } = Dimensions.get("screen");

const adBannerId = __DEV__
  ? TestIds.BANNER
  : Platform.OS == "android"
  ? "ca-app-pub-8545961952430100/2689132775"
  : "ca-app-pub-8545961952430100/8725973801";

const BannerAds = () => {
  return (
    <BannerAd
      unitId={adBannerId}
      size={`${width}x${height > 1000 ? height / 18 : height / 12}`}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};

export default BannerAds;
