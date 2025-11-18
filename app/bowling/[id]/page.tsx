import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./detail.module.css";

import React from "react";
import { getBowling } from "@/server_libs/micro_cms";
import Image from "next/image";
interface Params {
  id: string;
}

export default async function BowlingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bowlingData = await getBowling(id);
  console.log(bowlingData);

  if (!bowlingData) {
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
            <Image src={bowlingData.image.url} alt={bowlingData.name} width={bowlingData.image.width} height={bowlingData.image.height} className={styles.headerImage} />
          </div>

          {/* 基本情報 */}
          <section className={styles.basicInfo}>
            <h1 className={styles.title}>{bowlingData.name}</h1>

            {/* 主要情報カード */}
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>📍 住所</h3>
                <p className={styles.infoContent}>{bowlingData.location}</p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>📱 電話番号</h3>
                <p className={styles.infoContent}>
                  <a href={`tel:${bowlingData.phone}`}>{bowlingData.phone}</a>
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>🎳 レーン数</h3>
                <p className={styles.infoContent}>{bowlingData.lanes} レーン</p>
              </div>

              {bowlingData.website && (
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>🌐 ウェブサイト</h3>
                  <p className={styles.infoContent}>
                    <Link href={"bowlingData.website"}>
                      公式サイトを見る
                    </Link>
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
                  {bowlingData.weekday}
                </span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.dayLabel}>休日</span>
                <span className={styles.hourValue}>
                  {bowlingData.weekend}
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
                  {bowlingData.parking ? "✅" : "❌"}
                </span>
                <span>駐車場</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  {bowlingData.foods ? "✅" : "❌"}
                </span>
                <span>飲食施設</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  {bowlingData.wheelchair ? "✅" : "❌"}
                </span>
                <span>バリアフリー対応</span>
              </div>
            </div>

            {bowlingData.facilities.length > 0 && (
              <div className={styles.facilitiesList}>
                <h3 className={styles.facilitiesTitle}>その他の施設</h3>
                <ul className={styles.list}>
                  {bowlingData.facilities.split(",").map((facility, index) => (
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
            <p className={styles.description}>{bowlingData.description}</p>
          </section>

          {/* 地図セクション */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>アクセス</h2>
            <div className={styles.mapContainer}>
              <iframe
                src={`https://maps.google.com/maps?output=embed&q=${bowlingData.latitude},${bowlingData.longitude}&ll=${bowlingData.latitude},${bowlingData.longitude}&t=m&hl=ja&z=18`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </section>

          {/* CTA */}
          <section className={styles.ctaSection}>
            <a href={`tel:${bowlingData.phone}`} className={styles.ctaButton}>
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


