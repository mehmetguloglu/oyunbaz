import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack initialRouteName="dice-game" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="dice-game" />
    </Stack>
  </>
);

export default _layout;
