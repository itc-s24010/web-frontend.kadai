import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>ページが見つかりません</h2>
        <p className={styles.description}>
          申し訳ございません。お探しのページが見つかりませんでした。
        </p>
        <Link href="/" className={styles.button}>
          ホームに戻る
        </Link>
      </div>
    </main>
  );
}
