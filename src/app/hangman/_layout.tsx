import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="hangman-game"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="hangman-game" />
    </Stack>
  </>
);

export default _layout;
