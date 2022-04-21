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
      <div className="min-h-screen dark:text-gray-200 bg-white  dark:bg-dark transition duration-700">
        <main className="">
          <MainNavBar />
          {children}
        </main>
        <MainFooter />
      </div>
    </>
  );
};
