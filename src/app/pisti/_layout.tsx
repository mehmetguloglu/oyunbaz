import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack initialRouteName="pisti-game" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pisti-game" />
    </Stack>
  </>
);

export default _layout;
