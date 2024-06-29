import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import classNames from 'classnames';
import styles from './MainNavBar.module.scss';

const menu = [
  { title: 'About', path: '/about' },
  { title: 'Blog', path: '/blog' },
  { title: 'Projects', path: '/projects' },
];

export default function MainNavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const currentPath = useRouter().pathname;

  return (
    <nav className={styles['MainNavBar']}>
      <div className={classNames(styles['MainNavBar__container'])}>
        <Link href="/" className="flex" onClick={() => setNavbarOpen(false)}>
          <span className={styles['MainNavBar__logo']}>Fran Canete</span>
        </Link>
        <span
          onClick={() => setNavbarOpen(!navbarOpen)}
          data-collapse-toggle="mobile-menu"
          className={styles['MainNavBar__hamburger']}
          aria-controls="mobile-menu-2"
          aria-expanded={navbarOpen ? 'true' : 'false'}
        >
          {navbarOpen ? <AiOutlineClose size={30} /> : <BiMenu size={30} />}
        </span>
        <div
          className={classNames(styles['MainNavBar__menuItems'], {
            [styles['MainNavBar__menuItems--hidden']]: !navbarOpen,
          })}
          id="mobile-menu"
        >
          <ul className={styles['MainNavBar__itemsList']}>
            {menu.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={styles['MainNavBar__item']}
                  aria-current={currentPath === item.path ? 'page' : undefined}
                  onClick={() => setNavbarOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
