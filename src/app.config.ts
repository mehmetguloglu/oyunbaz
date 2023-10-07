import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: "mehmet-guloglu-88621c4e3",
            project: "oyunbaz",
            authToken: process.env.SENTRY_AUTH_TOKEN,
          },
        },
      ],
    },
    plugins: [
      [
        "expo-build-properties",
        {
          android: {
            compileSdkVersion: 33,
            targetSdkVersion: 33,
            buildToolsVersion: "33.0.0",
          },
          ios: {
            useFrameworks: "static",
            deploymentTarget: "13.0",
          },
        },
      ],
      [
        "expo-updates",
        {
          username: "mehmet10x",
        },
      ],
      "sentry-expo",
      "expo-router",
    ],
    name: "Oyunbaz",
    slug: "oyunbaz",
    scheme: "oyunbaz",
    version: "1.0.7",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.oyunbaz.app",
      buildNumber: "1.0.7",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      versionCode: 7,
      package: "com.oyunbaz.app",
    },
    web: {
      favicon: "./assets/favicon.png",
      bundler: "metro",
    },
    runtimeVersion: {
      policy: "sdkVersion",
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "a4f152d2-7c22-4554-9a7d-2b24343de86b",
      },
    },
    updates: {
      fallbackToCacheTimeout: 2000,
      checkAutomatically: "ON_LOAD",
      url: "https://u.expo.dev/a4f152d2-7c22-4554-9a7d-2b24343de86b",
    },
    experiments: {
      typedRoutes: false,
    },
  };
};
