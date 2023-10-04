import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="spin-bottle-game"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="spin-bottle-game" />
    </Stack>
  </>
);

export default _layout;
