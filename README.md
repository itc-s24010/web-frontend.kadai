# 🎳 沖縄ボウリング場ガイド

沖縄県内のボウリング場を紹介するWebアプリケーション。ボウリング場の検索、詳細情報の確認ができます。

##  主な機能

### トップページ
- ボウリング場一覧をカード形式で表示（9施設）
- 店舗名・市区町村で検索可能
- 営業時間、施設情報（駐車場・飲食・バリアフリー）を表示
- レーン数をバッジ表示

### 詳細ページ
- 店舗の詳細情報を表示
- 営業時間、施設・サービス情報
- 地図埋め込み、電話連絡機能
- 404エラーハンドリング

### レスポンシブデザイン
- デスクトップ・タブレット・モバイルに対応
- ヘッダー・フッター完備

##  技術スタック

- **Next.js 16.0.1** - フレームワーク
- **TypeScript** - 言語
- **React 19.2.0** - UIライブラリ
- **CSS Modules** - スコープ付きスタイル
- **ESLint** - コード品質管理

##  ファイル構成

```
app/
├── components/               # 共有コンポーネント
│   ├── Header.tsx / Header.module.css
│   ├── Footer.tsx / Footer.module.css
│   ├── BowlingCard.tsx / BowlingCard.module.css
│   └── BowlingListClient.tsx / BowlingListClient.module.css
├── data/
│   └── bowling-alleys.ts     # ボウリング場データ（9施設）
├── types/
│   └── bowling.ts            # 型定義
├── bowling/[id]/             # 詳細ページ
│   ├── page.tsx
│   ├── detail.module.css
│   ├── not-found.tsx
│   └── not-found.module.css
├── layout.tsx                # ルートレイアウト
├── page.tsx                  # トップページ
├── page.module.css
└── globals.css               # グローバルスタイル
```

##  セットアップ

### 要件
- Node.js 18.0.0 以上

### インストール＆実行

```bash
# パッケージのインストール
npm install

# 開発サーバー起動
npm run dev

# ブラウザで開く
# http://localhost:3000
```

##  コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm start        # 本番サーバー起動
npm run lint     # ESLint実行
```

##  デザイン

### カラースキーム
- **プライマリー**: `#0066cc`（青）
- **背景**: `#ffffff`（白）
- **テキスト**: `#333`～`#666`（グレー系）

### レイアウト
- **デスクトップ**: 3カラムグリッド
- **タブレット**: 2カラムグリッド
- **モバイル**: 1カラム

##  ルーティング

- `/` - トップページ（一覧）
- `/bowling/[id]` - 詳細ページ
- `/bowling/[id]/not-found` - 404ページ

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
- 
- 
- 
- 
- 
- 
- 
- 

##  検索機能

トップページの検索ボックスで、店舗名や市区町村で検索・絞り込みが可能。

---

**作成日**: 2025年11月19日  
**バージョン**: 1.0.0
