import { MainFooter } from "./MainFooter";
import { ThemeContainer } from "./ThemeContainer";

import styles from "./MainLayout.module.scss";

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
