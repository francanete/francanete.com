import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { menu } from "@/utils/getMenuItems";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classNames from "classnames";

import styles from "./MainNavBar.module.scss";

export default function MainNavBar() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const currentPath = useRouter();
  const isRootPath = currentPath.pathname === "/";

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
        <span
          onClick={() => setNavbarOpen(!navbarOpen)}
          data-collapse-toggle="mobile-menu "
          className={styles["MainNavBar__hamburger"]}
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          {navbarOpen ? <BiMenu size={30} /> : <AiOutlineClose size={30} />}
        </span>
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
