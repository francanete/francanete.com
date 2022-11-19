import { Footer } from "./Footer";
import MainNavBar from "./MainNavBar";
import { MetaData } from "./MetaData";

import styles from "./MainLayout.module.scss";

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
      <Footer />
    </>
  );
};
