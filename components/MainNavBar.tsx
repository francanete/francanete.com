import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { menu } from "../utils/getMenuItems";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillLightbulbFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

import styles from "./MainNavBar.module.scss";
import classNames from "classnames";

interface IMainNavBar {
  theme: string;
  switchTheme: () => void;
}

export default function MainNavBar({ theme, switchTheme }: IMainNavBar) {
  const [navbarOpen, setNavbarOpen] = useState(true);
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

            <button
              onClick={() => {
                switchTheme();
                setNavbarOpen(!navbarOpen);
              }}
              className={styles["MainNavBar__theme"]}
            >
              {theme === "light" ? (
                <MdDarkMode size={24} color="0f172a" />
              ) : (
                <BsFillLightbulbFill color="#EBC351" size={20} />
              )}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
