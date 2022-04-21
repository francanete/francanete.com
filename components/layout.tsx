import { Footer } from "./Footer";
import Meta from "./Meta";
import NavBar from "./NavBar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen dark:text-gray-200 bg-white  dark:bg-dark transition duration-700">
        <main className=" ">
          <NavBar />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
