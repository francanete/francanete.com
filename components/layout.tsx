import Footer from "./footer";
import Meta from "./meta";
import NavBar from "./NavBar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen dark:text-gray-200 bg-gray-100  dark:bg-gray-900 transition duration-700">
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
