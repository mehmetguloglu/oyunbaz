import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack initialRouteName="abdi-game" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="abdi-game" />
    </Stack>
  </>
);

export default _layout;
