import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack initialRouteName="jump-game" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="jump-game" />
    </Stack>
  </>
);

export default _layout;
