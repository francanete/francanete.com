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
      <div className="min-h-screen dark:text-white">
        <main className="bg-white dark:bg-gray-900 transition duration-700">
          <NavBar />
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
