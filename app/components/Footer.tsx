import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} 沖縄ボウリング場ガイド. All rights reserved.
          </p>
          <p className={styles.description}>
            沖縄県内のボウリング場情報を紹介しています。
          </p>
        </div>
      </div>
    </footer>
  );
}
