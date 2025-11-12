import { notFound } from "next/navigation";
import Link from "next/link";
import { getBowlingAlleyById } from "@/app/data/bowling-alleys";
import styles from "./detail.module.css";

interface Params {
  id: string;
}

export default function BowlingDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = React.use(params);
  const alley = getBowlingAlleyById(Number(id));

  if (!alley) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* 戻るボタン */}
        <Link href="/" className={styles.backButton}>
          ← 一覧に戻る
        </Link>

        {/* メインコンテンツ */}
        <article className={styles.article}>
          {/* ヘッダー画像 */}
          <div className={styles.imageContainer}>
            <img
              src={alley.image}
              alt={alley.name}
              className={styles.headerImage}
            />
          </div>

          {/* 基本情報 */}
          <section className={styles.basicInfo}>
            <h1 className={styles.title}>{alley.name}</h1>

            {/* 主要情報カード */}
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>📍 住所</h3>
                <p className={styles.infoContent}>{alley.location}</p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>📱 電話番号</h3>
                <p className={styles.infoContent}>
                  <a href={`tel:${alley.phone}`}>{alley.phone}</a>
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>🎳 レーン数</h3>
                <p className={styles.infoContent}>{alley.lanes} レーン</p>
              </div>

              {alley.website && (
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>🌐 ウェブサイト</h3>
                  <p className={styles.infoContent}>
                    <a href={alley.website} target="_blank" rel="noopener noreferrer">
                      公式サイトを見る
                    </a>
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* 営業時間 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>営業時間</h2>
            <div className={styles.hoursContainer}>
              <div className={styles.hourItem}>
                <span className={styles.dayLabel}>平日</span>
                <span className={styles.hourValue}>
                  {alley.openingHours.weekday}
                </span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.dayLabel}>休日</span>
                <span className={styles.hourValue}>
                  {alley.openingHours.weekend}
                </span>
              </div>
            </div>
          </section>

          {/* 施設情報 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>施設・サービス</h2>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  {alley.parking ? "✅" : "❌"}
                </span>
                <span>駐車場</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  {alley.foods ? "✅" : "❌"}
                </span>
                <span>飲食施設</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  {alley.wheelchair ? "✅" : "❌"}
                </span>
                <span>バリアフリー対応</span>
              </div>
            </div>

            {alley.facilities.length > 0 && (
              <div className={styles.facilitiesList}>
                <h3 className={styles.facilitiesTitle}>その他の施設</h3>
                <ul className={styles.list}>
                  {alley.facilities.map((facility, index) => (
                    <li key={index} className={styles.listItem}>
                      • {facility}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* 詳細説明 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>詳細情報</h2>
            <p className={styles.description}>{alley.description}</p>
          </section>

          {/* 地図セクション */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>アクセス</h2>
            <div className={styles.mapContainer}>
              <iframe
                width="100%"
                height="400"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDummyKeyForExample&q=${encodeURIComponent(
                  alley.name + " " + alley.location
                )}`}
                className={styles.map}
              ></iframe>
            </div>
          </section>

          {/* CTA */}
          <section className={styles.ctaSection}>
            <a href={`tel:${alley.phone}`} className={styles.ctaButton}>
              📞 電話で問い合わせる
            </a>
            <Link href="/" className={styles.ctaButtonSecondary}>
              ← 他の店舗を見る
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}

import React from "react";
