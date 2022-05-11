import { MainFooter } from "./MainFooter";
import MainNavBar from "./MainNavBar";
import { MetaData } from "./MetaData";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MetaData />
      <div className="dark:text-gray-200 bg-white  dark:bg-dark transition duration-700">
        <MainNavBar />
        <main className="mx-auto w-9/12">{children}</main>
        <MainFooter />
      </div>
    </>
  );
};
