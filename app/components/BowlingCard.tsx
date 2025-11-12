import Link from "next/link";
import { BowlingAlley } from "../types/bowling";
import styles from "./BowlingCard.module.css";

interface BowlingCardProps {
  alley: BowlingAlley;
}

export default function BowlingCard({ alley }: BowlingCardProps) {
  return (
    <Link href={`/bowling/${alley.id}`}>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={alley.image} alt={alley.name} className={styles.image} />
          <div className={styles.badge}>{alley.lanes} レーン</div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{alley.name}</h3>
          <p className={styles.location}>📍 {alley.location}</p>
          <div className={styles.features}>
            {alley.parking && <span className={styles.feature}>🅿 駐車場</span>}
            {alley.foods && <span className={styles.feature}>🍽 飲食</span>}
            {alley.wheelchair && (
              <span className={styles.feature}>♿ バリアフリー</span>
            )}
          </div>
          <p className={styles.description}>{alley.description.slice(0, 60)}...</p>
          <div className={styles.hours}>
            <div>
              <span className={styles.label}>平日:</span>{" "}
              {alley.openingHours.weekday}
            </div>
            <div>
              <span className={styles.label}>休日:</span>{" "}
              {alley.openingHours.weekend}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
