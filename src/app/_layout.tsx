import { Suspense, useEffect, useMemo } from "react";
import { useColorScheme } from "react-native";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Text, Theme, View } from "tamagui";
import * as Updates from "expo-updates";
import StorageKeys from "../utils/storage-keys";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as StoreReview from "expo-store-review";
import config from "../tamagui.config";
import { Provider } from "react-redux";
import { store } from "../bussiness/redux-store";
import * as Sentry from "sentry-expo";
import Constants from "expo-constants";

Sentry.init({
  dsn: "https://352f8b74a3d3306cbcc0db1c715c23cc@o4505896257650688.ingest.sentry.io/4505896278884352",
  enableInExpoDevelopment: true,
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  tracesSampleRate: 1.0,
  integrations: [
    new Sentry.Native.ReactNativeTracing({
      shouldCreateSpanForRequest: (url) => {
        return (
          !__DEV__ ||
          !url.startsWith(`http://${Constants.expoConfig.hostUri}/logs`)
        );
      },
    }),
  ],
});
export default function Layout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {}
  }

  const storeReviewOpen = async () => {
    let openCount = await getOpenCount();
    if (openCount / 10 === 1 || openCount % 100 === 0) {
      let hasAction = await StoreReview.hasAction();
      if (hasAction) {
        StoreReview.requestReview();
      }
    }
  };

  const getOpenCount = async (): Promise<number> => {
    let openCount = await AsyncStorage.getItem(
      StorageKeys.APPLICATION_OPEN_COUNT
    );
    if (!openCount) {
      openCount = "1";
      if (openCount)
        await AsyncStorage.setItem(
          StorageKeys.APPLICATION_OPEN_COUNT,
          openCount
        );
    } else {
      openCount = (parseInt(openCount) + 1).toString();
      if (openCount)
        await AsyncStorage.setItem(
          StorageKeys.APPLICATION_OPEN_COUNT,
          openCount
        );
    }
    return parseInt(openCount);
  };
  useMemo(() => {
    onFetchUpdateAsync();
    storeReviewOpen();
  }, []);

  return (
    <Provider store={store}>
      <TamaguiProvider config={config}>
        <Suspense
          fallback={
            <View f={1} backgroundColor={"red"} ai="center" jc="center">
              <Text>Loading...</Text>
            </View>
          }
        >
          <Theme name={colorScheme}>
            <ThemeProvider
              value={colorScheme === "light" ? DefaultTheme : DefaultTheme}
            >
              <Stack
                initialRouteName="index"
                screenOptions={{ headerShown: false, gestureEnabled: false }}
              >
                <Stack.Screen
                  name="index"
                  options={{
                    headerShown: false,
                    headerTitleAlign: "center",
                  }}
                />
                <Stack.Screen
                  name="banned-words"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="hangman"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="quiz"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="roll-dice"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="who-am-i"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="sudoku"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="batak"
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack>
            </ThemeProvider>
          </Theme>
        </Suspense>
        <StatusBar />
      </TamaguiProvider>
    </Provider>
  );
}
