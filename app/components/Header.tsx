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
          {/* ランキング・お問い合わせ機能は不要のためナビから削除 */}
        </nav>
      </div>
    </header>
  );
}
