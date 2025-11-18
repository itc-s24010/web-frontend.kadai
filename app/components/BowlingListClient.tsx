"use client";

import React, { useMemo, useState } from "react";
import BowlingCard from "./BowlingCard";
import styles from "./BowlingListClient.module.css";
import { bowling } from "@/server_libs/micro_cms/data";
import { MicroCMSListResponse } from "microcms-js-sdk";

interface Props {
  alleys: MicroCMSListResponse<bowling>;
}

export default function BowlingListClient({ alleys }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = alleys.contents;

    // 名前 or 住所でフィルタ
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (a) => a.name.toLowerCase().includes(q) || a.location.toLowerCase().includes(q)
      );
    }

    return list;
  }, [alleys.contents, query]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <input
          className={styles.search}
          type="search"
          placeholder="店舗名や市区町村で検索（例: 那覇）"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className={styles.grid}>
        {filtered.map((alley, index) => (
          <BowlingCard key={index} alley={alley} />
        ))}
      </div>
    </div>
  );
}
