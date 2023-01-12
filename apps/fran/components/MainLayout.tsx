import { MainFooter } from "@/components/MainFooter";
import { ThemeProvider } from "./context/ThemeProvider";
import MainNavBar from "./MainNavBar";

import styles from "./MainLayout.module.scss";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <ThemeProvider>
      <MainNavBar />
      <main className={styles["MainLayout"]}>{children}</main>
      <MainFooter />
    </ThemeProvider>
  );
};
