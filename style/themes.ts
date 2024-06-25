import * as colors42 from './Colors';

export const LightTheme = {
  dark: false,
  colors: {
    text: colors42.C42_TEXT,
    background: colors42.C42_BACKGROUND,
    border: colors42.C42_ORANGE,
    card: colors42.C42_GREEN,

    primary: 'rgb(0, 122, 255)',
    notification: 'rgb(255, 59, 48)',
    tint: colors42.C42_GREEN,
    icon: colors42.C42_ORANGE,

    tabIconDefault: colors42.C42_VIOLET,
    tabIconSelected: colors42.C42_VIOLET
  }
};

export const DarkTheme = {
  dark: true,
  colors: {
    text: colors42.C42_TEXT_DARK,
    background: colors42.C42_BACKGROUND_DARK,
    border: colors42.C42_ORANGE_DARK,
    card: colors42.C42_GREEN_DARK,

    primary: 'rgb(0, 122, 255)',
    notification: 'rgb(255, 59, 48)',
    tint: colors42.C42_GREEN_DARK,
    icon: colors42.C42_ORANGE_DARK,
    tabIconDefault: colors42.C42_VIOLET_DARK,
    tabIconSelected: colors42.C42_VIOLET_DARK
  }
};
