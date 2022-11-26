import MainNavBar from "./MainNavBar";
import { MetaData } from "./MetaData";

import styles from "./MainLayout.module.scss";
import { MainFooter } from "./MainFooter";

interface IMainLayout {
  preview?: boolean;
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      <MetaData />
      <MainNavBar />
      <main className={styles["MainLayout"]}>{children}</main>
      <MainFooter />
    </>
  );
};
