import BowlingListClient from "./components/BowlingListClient";
import styles from "./page.module.css";
import { getBowlingsList } from "@/server_libs/micro_cms";

export default async function Home() {
  const bowlingDataList = await getBowlingsList();
  
  return (
    <main className={styles.main}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>沖縄県ボウリング場ガイド</h1>
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


        {/* ボウリング場一覧 */}
        <section className={styles.alleysSection}>
          <h2 className={styles.sectionTitle}>沖縄県のボウリング場</h2>
          <p className={styles.sectionSubtitle}>
            全 {bowlingDataList.contents.length} 店舗を紹介しています
          </p>
          {/* クライアント側で位置フィルタ・ソートするコンポーネントに差し替え */}
          <div>
            {/* BowlingListClient はクライアントコンポーネントで、alleys データを受け取って処理する */}
            <BowlingListClient alleys={bowlingDataList} />
          </div>
        </section>
      </div>
    </main>
  );
}
