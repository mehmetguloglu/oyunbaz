import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="animation-game"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="animation-game" />
    </Stack>
  </>
);

export default _layout;
