import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack initialRouteName="batak-game" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="batak-game" />
    </Stack>
  </>
);

export default _layout;
