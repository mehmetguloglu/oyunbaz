import { Dimensions, Platform } from "react-native";
import React, { memo } from "react";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";
import { useAppSelector } from "../../bussiness/hooks";

const { width, height } = Dimensions.get("screen");

const BannerAds = () => {
  const { developerMode } = useAppSelector(
    (state) => state.developerModeReducer
  );
  const calcHeight = (height > 1000 ? height / 18 : height / 12).toFixed(0);
  const adBannerId =
    __DEV__ || developerMode
      ? TestIds.BANNER
      : Platform.OS == "android"
      ? "ca-app-pub-8545961952430100/2689132775"
      : "ca-app-pub-8545961952430100/8725973801";

  return (
    <BannerAd
      unitId={adBannerId}
      size={`${width.toFixed(0)}x${calcHeight}`}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};

export default memo(BannerAds);
