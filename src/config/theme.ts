export type Theme = 'light' | 'dark';
export type ThemePolicy = 'switchable' | Theme;

interface ThemeConfig {
  policy: ThemePolicy;
  storageKey: string;
  browserThemeColors: Record<Theme, string>;
}

export const themeConfig: ThemeConfig = {
  policy: 'switchable',
  storageKey: 'francanete-theme',
  browserThemeColors: {
    light: '#fbf1c7',
    dark: '#282828',
  },
};
