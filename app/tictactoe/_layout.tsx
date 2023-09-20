import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="tictactoe-game"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="tictactoe-game" />
    </Stack>
  </>
);

export default _layout;
