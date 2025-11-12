"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          🎳 沖縄ボウリング場ガイド
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            ホーム
          </Link>
          <Link href="#" className={styles.navLink}>
            ランキング
          </Link>
          <Link href="#" className={styles.navLink}>
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
