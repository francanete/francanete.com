import { MainFooter } from "@/components/MainFooter";

import styles from "./MainLayout.module.scss";
import MainNavBar from "./MainNavBar";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      <MainNavBar />
      <main className={styles["MainLayout"]}>{children}</main>
      <MainFooter />
    </>
  );
};
