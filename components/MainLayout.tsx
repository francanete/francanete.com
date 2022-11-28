import MainNavBar from "./MainNavBar";

import styles from "./MainLayout.module.scss";
import { MainFooter } from "./MainFooter";
import { ThemeContainer } from "./ThemeContainer";

interface IMainLayout {
  preview?: boolean;
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      <ThemeContainer>
        {/* <MainNavBar /> */}
        <main className={styles["MainLayout"]}>{children}</main>
        <MainFooter />
      </ThemeContainer>
    </>
  );
};
