import { bowlingAlleys } from "./data/bowling-alleys";
import BowlingCard from "./components/BowlingCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>沖縄ボウリング場ガイド</h1>
          <p className={styles.heroSubtitle}>
            沖縄県内の厳選ボウリング場情報をご紹介します
          </p>
          <p className={styles.heroDescription}>
            家族連れ、カップル、ボウリング愛好家など、すべての方のための情報サイト
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <div className={styles.container}>
        {/* 紹介セクション */}
        <section className={styles.introSection}>
          <h2 className={styles.sectionTitle}>ようこそ</h2>
          <p className={styles.introText}>
            このサイトは、沖縄県内のボウリング場をご紹介するポータルサイトです。各ボウリング場の営業時間、料金体系、設備情報などを掲載しています。
            あなたのお気に入りのボウリング場を見つけてください！
          </p>
        </section>

        {/* ボウリング場一覧 */}
        <section className={styles.alleysSection}>
          <h2 className={styles.sectionTitle}>沖縄のボウリング場</h2>
          <p className={styles.sectionSubtitle}>
            全 {bowlingAlleys.length} 店舗を紹介しています
          </p>
          <div className={styles.grid}>
            {bowlingAlleys.map((alley) => (
              <BowlingCard key={alley.id} alley={alley} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
