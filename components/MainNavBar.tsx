import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import useDarkMode from "../hooks/useDarkMode";
import { menu } from "../utils/getMenuItems";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./MainNavBar.module.scss";
import classNames from "classnames";

export default function MainNavBar() {
  const [colorTheme, setTheme]: any = useDarkMode();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const currentPath = useRouter();
  const isRootPath = currentPath.pathname === "/tempo";

  const showMenu = isRootPath ? menu.filter((item) => item.path !== "/") : menu;

  return (
    <nav className={styles["MainNavBar"]}>
      <div
        className={classNames(styles["MainNavBar__container"], {
          [styles["MainNavBar__container--isRootPath"]]: isRootPath,
        })}
      >
        {!isRootPath ? (
          <Link href="/" className="flex ">
            <span className={styles["MainNavBar__logo"]}>Fran Canete</span>
          </Link>
        ) : null}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          data-collapse-toggle="mobile-menu "
          type="button"
          className={styles["MainNavBar__hamburger"]}
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          {navbarOpen ? <BiMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
        <div
          className={classNames(styles["MainNavBar__menuItems"], {
            [styles["MainNavBar__menuItems--hidden"]]: navbarOpen,
          })}
        >
          <ul className={styles["MainNavBar__itemsList"]}>
            {showMenu.map((item) => {
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={styles["MainNavBar__item"]}
                    aria-current="page"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}

            {/* {navbarOpen ? (
              <>
                <span onClick={() => setTheme(colorTheme)}>
                  {colorTheme === "light" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="#b88806"
                    >
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="#666666"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </span>
              </>
            ) : (
              <span
                className="flex justify-center mt-4"
                onClick={() => setTheme(colorTheme)}
              >
                {colorTheme === "light" ? (
                  <>
                    <button className=" inline-flex items-center  gap-3  bg-transparent text-grey py-2 px-4 border border-white: border-opacity-40  rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" inline-block h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#b88806"
                      >
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                      </svg>
                      Light
                    </button>
                  </>
                ) : (
                  <>
                    <button className=" inline-flex items-center gap-3 bg-transparent text-gray-700 font-semibold  py-2 px-4 border border-black border-opacity-40  rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" inline-block h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#666666"
                      >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                      Dark
                    </button>
                  </>
                )}
              </span>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
