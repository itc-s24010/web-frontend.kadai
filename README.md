# 🎳 沖縄ボウリング場ガイド

沖縄県内のボウリング場を紹介するWebアプリケーション。ボウリング場の検索、詳細情報の確認ができます。

##  主な機能

### トップページ
- ボウリング場一覧をカード形式で表示（9施設）
- 営業時間、施設情報（駐車場・飲食・バリアフリー）を表示
- レーン数をバッジ表示
- センター情報CMS管理

### 詳細ページ
- 店舗の詳細情報を表示
- 営業時間、施設・サービス情報
- 地図埋め込み、電話連絡機能

##  技術スタック

- **Next.js 16.0.1** - フレームワーク
- **TypeScript** - 言語
- **React 19.2.0** - UIライブラリ
- **CSS Modules** - スコープ付きスタイル
- **ESLint** - コード品質管理


##  ファイル構成

```
app/
├── components/               # 共有コンポーネント（UIの小さなパーツ）
│   ├── Header.tsx / Header.module.css               # サイトのヘッダー（ロゴ、ナビゲーション）
│   ├── Footer.tsx / Footer.module.css               # ページ下部のフッター（著作権や補足情報）
│   ├── BowlingCard.tsx / BowlingCard.module.css     # ボウリング場をカード表示するコンポーネント（一覧で使う）
│   └── BowlingListClient.tsx / BowlingListClient.module.css  # クライアントサイドで動く一覧＋検索ロジック（検索フォームとフィルタ）
│ 
├── data/
│   └── bowling-alleys.ts     # ローカルで保持しているボウリング場データ配列（編集して施設を追加）
│ 
├── types/
│   └── bowling.ts            # TypeScript の型定義（BowlingAlley 型など）
│ 
├── bowling/[id]/             # 施設ごとの動的ルート（idに応じた詳細ページ）
│   ├── page.tsx              # 詳細ページのレンダリング（サーバーコンポーネント）
│   ├── detail.module.css     # 詳細ページ専用のスタイル定義
│   ├── not-found.tsx         # 指定IDの施設が見つからない場合に表示するカスタム404
│ 　└── not-found.module.css  # 404ページのスタイル
│ 
├── layout.tsx                # アプリ全体のルートレイアウト（Header / Footer を含む）
├── page.tsx                  # トップページ（一覧をレンダリング）
├── page.module.css           # トップページ専用のスタイル
└── globals.css               # 全体に適用するグローバルスタイル（リセット、色変数など）
```

その他の重要なフォルダ:

- `server_libs/micro_cms/` - microCMS からデータを取得するためのラッパーと型定義。サーバーコンポーネントからコンテンツを取得する際に使用します。

上記は主要なファイルと役割の一覧です。各コンポーネントは `*.module.css` と組み合わせてスタイルを分離しているため、見た目の調整は該当コンポーネントの CSS を編集してください。

##  コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm start        # 本番サーバー起動
npm run lint     # ESLint実行
```

##  データ

### BowlingAlley 型

```typescript
interface BowlingAlley {
  id: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  lanes: number;
  facilities: string[];
  openingHours: { weekday: string; weekend: string };
  parking: boolean;
  foods: boolean;
  wheelchair: boolean;
  description: string;
  image: string;
  phone: string;
  website?: string;
}
```

### 掲載施設
- サラダボウル
- てだこボウル
- エナジックボウルサザン
- マチナトボウル
- スカイレーン
- エナジックボウル美浜
- ドラゴンボウル.
- レーントゥセントラル
- 名桜ボウル

---

**作成日**: 2025年11月25日  
**バージョン**: 1.0.0
