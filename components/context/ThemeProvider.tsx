import { createContext } from 'react';
import useLocalStorage from 'use-local-storage';

import styles from './ThemeProvider.module.scss';

export interface IThemeContext {
  theme: string;
  switchTheme: () => void;
}

interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContext);

const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div className={styles['ThemeProvider']} data-theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          switchTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext, ThemeProvider };
