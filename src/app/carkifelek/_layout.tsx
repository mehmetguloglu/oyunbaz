import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="carkifelek-game"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="carkifelek-game" />
    </Stack>
  </>
);

export default _layout;
