import { createAnimations } from "@tamagui/animations-react-native";

import { createInterFont } from "@tamagui/font-inter";

import { createMedia } from "@tamagui/react-native-media-driver";

import { shorthands } from "@tamagui/shorthands";

import { themes, tokens } from "@tamagui/themes";

import { createTamagui } from "tamagui";
const animations = createAnimations({
  bouncy: {
    type: "spring",

    damping: 10,

    mass: 0.9,

    stiffness: 100,
  },

  lazy: {
    type: "spring",

    damping: 20,

    stiffness: 60,
  },

  quick: {
    type: "spring",

    damping: 20,

    mass: 1.2,

    stiffness: 250,
  },
});
const headingFont = createInterFont();

const bodyFont = createInterFont();
const config = createTamagui({
  animations,

  defaultTheme: "light",

  shouldAddPrefersColorThemes: false,

  themeClassNameOnRoot: false,

  shorthands,

  fonts: {
    heading: headingFont,

    body: bodyFont,
  },

  themes: {
    dark: {
      color1: "#fff",
      color2: "#f9f9f9",
      color3: "hsl(0, 0%, 97.3%)",
      color4: "hsl(0, 0%, 95.1%)",
      color5: "hsl(0, 0%, 94.0%)",
      color6: "hsl(0, 0%, 92.0%)",
      color7: "hsl(0, 0%, 89.5%)",
      color8: "hsl(0, 0%, 81.0%)",
      color9: "hsl(0, 0%, 56.1%)",
      color10: "hsl(0, 0%, 50.3%)",
      color11: "hsl(0, 0%, 42.5%)",
      color12: "hsl(0, 0%, 9.0%)",
      background: "#f9f9f9",
      backgroundHover: "hsl(0, 0%, 97.3%)",
      backgroundPress: "hsl(0, 0%, 95.1%)",
      backgroundFocus: "hsl(0, 0%, 94.0%)",
      backgroundStrong: "#fff",
      backgroundTransparent: "rgba(255,255,255,0)",
      color: "hsl(0, 0%, 9.0%)",
      colorHover: "hsl(0, 0%, 42.5%)",
      colorPress: "hsl(0, 0%, 9.0%)",
      colorFocus: "hsl(0, 0%, 42.5%)",
      colorTransparent: "rgba(10,10,10,0)",
      borderColor: "hsl(0, 0%, 94.0%)",
      borderColorHover: "hsl(0, 0%, 92.0%)",
      borderColorFocus: "hsl(0, 0%, 95.1%)",
      borderColorPress: "hsl(0, 0%, 94.0%)",
      placeholderColor: "hsl(0, 0%, 56.1%)",
      blue1: "hsl(206, 100%, 99.2%)",
      blue2: "hsl(210, 100%, 98.0%)",
      blue3: "hsl(209, 100%, 96.5%)",
      blue4: "hsl(210, 98.8%, 94.0%)",
      blue5: "hsl(209, 95.0%, 90.1%)",
      blue6: "hsl(209, 81.2%, 84.5%)",
      blue7: "hsl(208, 77.5%, 76.9%)",
      blue8: "hsl(206, 81.9%, 65.3%)",
      blue9: "hsl(206, 100%, 50.0%)",
      blue10: "hsl(208, 100%, 47.3%)",
      blue11: "hsl(211, 100%, 43.2%)",
      blue12: "hsl(211, 100%, 15.0%)",
      gray1: "hsl(0, 0%, 99.0%)",
      gray2: "hsl(0, 0%, 97.3%)",
      gray3: "hsl(0, 0%, 95.1%)",
      gray4: "hsl(0, 0%, 93.0%)",
      gray5: "hsl(0, 0%, 90.9%)",
      gray6: "hsl(0, 0%, 88.7%)",
      gray7: "hsl(0, 0%, 85.8%)",
      gray8: "hsl(0, 0%, 78.0%)",
      gray9: "hsl(0, 0%, 56.1%)",
      gray10: "hsl(0, 0%, 52.3%)",
      gray11: "hsl(0, 0%, 43.5%)",
      gray12: "hsl(0, 0%, 9.0%)",
      green1: "hsl(136, 50.0%, 98.9%)",
      green2: "hsl(138, 62.5%, 96.9%)",
      green3: "hsl(139, 55.2%, 94.5%)",
      green4: "hsl(140, 48.7%, 91.0%)",
      green5: "hsl(141, 43.7%, 86.0%)",
      green6: "hsl(143, 40.3%, 79.0%)",
      green7: "hsl(146, 38.5%, 69.0%)",
      green8: "hsl(151, 40.2%, 54.1%)",
      green9: "hsl(151, 55.0%, 41.5%)",
      green10: "hsl(152, 57.5%, 37.6%)",
      green11: "hsl(153, 67.0%, 28.5%)",
      green12: "hsl(155, 40.0%, 14.0%)",
      orange1: "hsl(24, 70.0%, 99.0%)",
      orange2: "hsl(24, 83.3%, 97.6%)",
      orange3: "hsl(24, 100%, 95.3%)",
      orange4: "hsl(25, 100%, 92.2%)",
      orange5: "hsl(25, 100%, 88.2%)",
      orange6: "hsl(25, 100%, 82.8%)",
      orange7: "hsl(24, 100%, 75.3%)",
      orange8: "hsl(24, 94.5%, 64.3%)",
      orange9: "hsl(24, 94.0%, 50.0%)",
      orange10: "hsl(24, 100%, 46.5%)",
      orange11: "hsl(24, 100%, 37.0%)",
      orange12: "hsl(15, 60.0%, 17.0%)",
      pink1: "hsl(322, 100%, 99.4%)",
      pink2: "hsl(323, 100%, 98.4%)",
      pink3: "hsl(323, 86.3%, 96.5%)",
      pink4: "hsl(323, 78.7%, 94.2%)",
      pink5: "hsl(323, 72.2%, 91.1%)",
      pink6: "hsl(323, 66.3%, 86.6%)",
      pink7: "hsl(323, 62.0%, 80.1%)",
      pink8: "hsl(323, 60.3%, 72.4%)",
      pink9: "hsl(322, 65.0%, 54.5%)",
      pink10: "hsl(322, 63.9%, 50.7%)",
      pink11: "hsl(322, 75.0%, 46.0%)",
      pink12: "hsl(320, 70.0%, 13.5%)",
      purple1: "hsl(280, 65.0%, 99.4%)",
      purple2: "hsl(276, 100%, 99.0%)",
      purple3: "hsl(276, 83.1%, 97.0%)",
      purple4: "hsl(275, 76.4%, 94.7%)",
      purple5: "hsl(275, 70.8%, 91.8%)",
      purple6: "hsl(274, 65.4%, 87.8%)",
      purple7: "hsl(273, 61.0%, 81.7%)",
      purple8: "hsl(272, 60.0%, 73.5%)",
      purple9: "hsl(272, 51.0%, 54.0%)",
      purple10: "hsl(272, 46.8%, 50.3%)",
      purple11: "hsl(272, 50.0%, 45.8%)",
      purple12: "hsl(272, 66.0%, 16.0%)",
      red1: "hsl(359, 100%, 99.4%)",
      red2: "hsl(359, 100%, 98.6%)",
      red3: "hsl(360, 100%, 96.8%)",
      red4: "hsl(360, 97.9%, 94.8%)",
      red5: "hsl(360, 90.2%, 91.9%)",
      red6: "hsl(360, 81.7%, 87.8%)",
      red7: "hsl(359, 74.2%, 81.7%)",
      red8: "hsl(359, 69.5%, 74.3%)",
      red9: "hsl(358, 75.0%, 59.0%)",
      red10: "hsl(358, 69.4%, 55.2%)",
      red11: "hsl(358, 65.0%, 48.7%)",
      red12: "hsl(354, 50.0%, 14.6%)",
      yellow1: "hsl(60, 54.0%, 98.5%)",
      yellow2: "hsl(52, 100%, 95.5%)",
      yellow3: "hsl(55, 100%, 90.9%)",
      yellow4: "hsl(54, 100%, 86.6%)",
      yellow5: "hsl(52, 97.9%, 82.0%)",
      yellow6: "hsl(50, 89.4%, 76.1%)",
      yellow7: "hsl(47, 80.4%, 68.0%)",
      yellow8: "hsl(48, 100%, 46.1%)",
      yellow9: "hsl(53, 92.0%, 50.0%)",
      yellow10: "hsl(50, 100%, 48.5%)",
      yellow11: "hsl(42, 100%, 29.0%)",
      yellow12: "hsl(40, 55.0%, 13.5%)",
      shadowColor: "rgba(0,0,0,0.066)",
      shadowColorHover: "rgba(0,0,0,0.066)",
      shadowColorPress: "rgba(0,0,0,0.02)",
      shadowColorFocus: "rgba(0,0,0,0.02)",
    },
    light: {
      color1: "#fff",
      color2: "#f9f9f9",
      color3: "hsl(0, 0%, 97.3%)",
      color4: "hsl(0, 0%, 95.1%)",
      color5: "hsl(0, 0%, 94.0%)",
      color6: "hsl(0, 0%, 92.0%)",
      color7: "hsl(0, 0%, 89.5%)",
      color8: "hsl(0, 0%, 81.0%)",
      color9: "hsl(0, 0%, 56.1%)",
      color10: "hsl(0, 0%, 50.3%)",
      color11: "hsl(0, 0%, 42.5%)",
      color12: "hsl(0, 0%, 9.0%)",
      background: "#f9f9f9",
      backgroundHover: "hsl(0, 0%, 97.3%)",
      backgroundPress: "hsl(0, 0%, 95.1%)",
      backgroundFocus: "hsl(0, 0%, 94.0%)",
      backgroundStrong: "#fff",
      backgroundTransparent: "rgba(255,255,255,0)",
      color: "hsl(0, 0%, 9.0%)",
      colorHover: "hsl(0, 0%, 42.5%)",
      colorPress: "hsl(0, 0%, 9.0%)",
      colorFocus: "hsl(0, 0%, 42.5%)",
      colorTransparent: "rgba(10,10,10,0)",
      borderColor: "hsl(0, 0%, 94.0%)",
      borderColorHover: "hsl(0, 0%, 92.0%)",
      borderColorFocus: "hsl(0, 0%, 95.1%)",
      borderColorPress: "hsl(0, 0%, 94.0%)",
      placeholderColor: "hsl(0, 0%, 56.1%)",
      blue1: "hsl(206, 100%, 99.2%)",
      blue2: "hsl(210, 100%, 98.0%)",
      blue3: "hsl(209, 100%, 96.5%)",
      blue4: "hsl(210, 98.8%, 94.0%)",
      blue5: "hsl(209, 95.0%, 90.1%)",
      blue6: "hsl(209, 81.2%, 84.5%)",
      blue7: "hsl(208, 77.5%, 76.9%)",
      blue8: "hsl(206, 81.9%, 65.3%)",
      blue9: "hsl(206, 100%, 50.0%)",
      blue10: "hsl(208, 100%, 47.3%)",
      blue11: "hsl(211, 100%, 43.2%)",
      blue12: "hsl(211, 100%, 15.0%)",
      gray1: "hsl(0, 0%, 99.0%)",
      gray2: "hsl(0, 0%, 97.3%)",
      gray3: "hsl(0, 0%, 95.1%)",
      gray4: "hsl(0, 0%, 93.0%)",
      gray5: "hsl(0, 0%, 90.9%)",
      gray6: "hsl(0, 0%, 88.7%)",
      gray7: "hsl(0, 0%, 85.8%)",
      gray8: "hsl(0, 0%, 78.0%)",
      gray9: "hsl(0, 0%, 56.1%)",
      gray10: "hsl(0, 0%, 52.3%)",
      gray11: "hsl(0, 0%, 43.5%)",
      gray12: "hsl(0, 0%, 9.0%)",
      green1: "hsl(136, 50.0%, 98.9%)",
      green2: "hsl(138, 62.5%, 96.9%)",
      green3: "hsl(139, 55.2%, 94.5%)",
      green4: "hsl(140, 48.7%, 91.0%)",
      green5: "hsl(141, 43.7%, 86.0%)",
      green6: "hsl(143, 40.3%, 79.0%)",
      green7: "hsl(146, 38.5%, 69.0%)",
      green8: "hsl(151, 40.2%, 54.1%)",
      green9: "hsl(151, 55.0%, 41.5%)",
      green10: "hsl(152, 57.5%, 37.6%)",
      green11: "hsl(153, 67.0%, 28.5%)",
      green12: "hsl(155, 40.0%, 14.0%)",
      orange1: "hsl(24, 70.0%, 99.0%)",
      orange2: "hsl(24, 83.3%, 97.6%)",
      orange3: "hsl(24, 100%, 95.3%)",
      orange4: "hsl(25, 100%, 92.2%)",
      orange5: "hsl(25, 100%, 88.2%)",
      orange6: "hsl(25, 100%, 82.8%)",
      orange7: "hsl(24, 100%, 75.3%)",
      orange8: "hsl(24, 94.5%, 64.3%)",
      orange9: "hsl(24, 94.0%, 50.0%)",
      orange10: "hsl(24, 100%, 46.5%)",
      orange11: "hsl(24, 100%, 37.0%)",
      orange12: "hsl(15, 60.0%, 17.0%)",
      pink1: "hsl(322, 100%, 99.4%)",
      pink2: "hsl(323, 100%, 98.4%)",
      pink3: "hsl(323, 86.3%, 96.5%)",
      pink4: "hsl(323, 78.7%, 94.2%)",
      pink5: "hsl(323, 72.2%, 91.1%)",
      pink6: "hsl(323, 66.3%, 86.6%)",
      pink7: "hsl(323, 62.0%, 80.1%)",
      pink8: "hsl(323, 60.3%, 72.4%)",
      pink9: "hsl(322, 65.0%, 54.5%)",
      pink10: "hsl(322, 63.9%, 50.7%)",
      pink11: "hsl(322, 75.0%, 46.0%)",
      pink12: "hsl(320, 70.0%, 13.5%)",
      purple1: "hsl(280, 65.0%, 99.4%)",
      purple2: "hsl(276, 100%, 99.0%)",
      purple3: "hsl(276, 83.1%, 97.0%)",
      purple4: "hsl(275, 76.4%, 94.7%)",
      purple5: "hsl(275, 70.8%, 91.8%)",
      purple6: "hsl(274, 65.4%, 87.8%)",
      purple7: "hsl(273, 61.0%, 81.7%)",
      purple8: "hsl(272, 60.0%, 73.5%)",
      purple9: "hsl(272, 51.0%, 54.0%)",
      purple10: "hsl(272, 46.8%, 50.3%)",
      purple11: "hsl(272, 50.0%, 45.8%)",
      purple12: "hsl(272, 66.0%, 16.0%)",
      red1: "hsl(359, 100%, 99.4%)",
      red2: "hsl(359, 100%, 98.6%)",
      red3: "hsl(360, 100%, 96.8%)",
      red4: "hsl(360, 97.9%, 94.8%)",
      red5: "hsl(360, 90.2%, 91.9%)",
      red6: "hsl(360, 81.7%, 87.8%)",
      red7: "hsl(359, 74.2%, 81.7%)",
      red8: "hsl(359, 69.5%, 74.3%)",
      red9: "hsl(358, 75.0%, 59.0%)",
      red10: "hsl(358, 69.4%, 55.2%)",
      red11: "hsl(358, 65.0%, 48.7%)",
      red12: "hsl(354, 50.0%, 14.6%)",
      yellow1: "hsl(60, 54.0%, 98.5%)",
      yellow2: "hsl(52, 100%, 95.5%)",
      yellow3: "hsl(55, 100%, 90.9%)",
      yellow4: "hsl(54, 100%, 86.6%)",
      yellow5: "hsl(52, 97.9%, 82.0%)",
      yellow6: "hsl(50, 89.4%, 76.1%)",
      yellow7: "hsl(47, 80.4%, 68.0%)",
      yellow8: "hsl(48, 100%, 46.1%)",
      yellow9: "hsl(53, 92.0%, 50.0%)",
      yellow10: "hsl(50, 100%, 48.5%)",
      yellow11: "hsl(42, 100%, 29.0%)",
      yellow12: "hsl(40, 55.0%, 13.5%)",
      shadowColor: "rgba(0,0,0,0.066)",
      shadowColorHover: "rgba(0,0,0,0.066)",
      shadowColorPress: "rgba(0,0,0,0.02)",
      shadowColorFocus: "rgba(0,0,0,0.02)",
    },
  },

  tokens,

  media: createMedia({
    xs: { maxWidth: 660 },

    sm: { maxWidth: 800 },

    md: { maxWidth: 1020 },

    lg: { maxWidth: 1280 },

    xl: { maxWidth: 1420 },

    xxl: { maxWidth: 1600 },

    gtXs: { minWidth: 660 + 1 },

    gtSm: { minWidth: 800 + 1 },

    gtMd: { minWidth: 1020 + 1 },

    gtLg: { minWidth: 1280 + 1 },

    short: { maxHeight: 820 },

    tall: { minHeight: 820 },

    hoverNone: { hover: "none" },

    pointerCoarse: { pointer: "coarse" },
  }),
});
export type AppConfig = typeof config;
declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types

  // work everywhere you import `tamagui`

  interface TamaguiCustomConfig extends AppConfig {}
}
export default config;
