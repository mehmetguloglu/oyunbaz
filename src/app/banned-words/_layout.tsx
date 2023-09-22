import React from "react";
import { Stack } from "expo-router";

const _layout = () => (
  <>
    <Stack
      initialRouteName="banned-game"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="banned-game"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  </>
);

export default _layout;
