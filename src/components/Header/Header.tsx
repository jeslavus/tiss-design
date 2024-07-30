"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.sass";

export default function Header(): JSX.Element {
  const pathname: string = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.header_scroll : ""}`}>
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
