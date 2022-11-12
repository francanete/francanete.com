import Link from "next/link";
import SocialIcons from "./SocialIcons";

export const MainFooter = () => {
  return (
    <footer className="">
      <div className="container  px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex title-font font-medium items-center md:justify-start justify-center ">
          <span className="ml-3 text-xl">Fran Canete</span>
        </span>
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 —
          <Link
            href="https://twitter.com/francanetecom"
            className=" ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @francantecom
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <SocialIcons width={20} height={20} />
        </span>
      </div>
    </footer>
  );
};
