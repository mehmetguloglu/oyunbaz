import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="continuous-novel-game"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="continuous-novel-game" />
    </Stack>
  </>
);

export default _layout;
