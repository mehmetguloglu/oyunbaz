import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="who-am-i-game"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="who-am-i-game" />
    </Stack>
  </>
);

export default _layout;
