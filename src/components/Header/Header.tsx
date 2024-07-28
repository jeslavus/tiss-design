"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.sass";

export default function Header() {
  const pathname:string = usePathname();

  return (
    <header className={styles.header}>
      <nav className={`${styles.header_nav_menu} container`}>
        {pathname === "/" ? (
          <p>Tiss Ekaterina</p>
        ) : (
          <Link href="/">Tiss Ekaterina</Link>
        )}
        <ul className={`${styles.header_menu} reset_ul`}>
          <li>
            {pathname === "/cases/" ? (
              <p>Проекты</p>
            ) : (
              <Link href="/cases/">Проекты</Link>
            )}
          </li>
          <li>
            {pathname === "/about/" ? (
              <p>О дизайнере</p>
            ) : (
              <Link href="/about/">О дизайнере</Link>
            )}
          </li>
          <li>
            {pathname === "/contacts/" ? (
              <p>Контакты</p>
            ) : (
              <Link href="/contacts/">Контакты</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
