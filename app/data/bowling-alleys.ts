import { BowlingAlley } from "../types/bowling";

export const bowlingAlleys: BowlingAlley[] = [
  {
    id: 1,
    name: "パールボウル",
    location: "那覇市松山2-7-1",
    latitude: 26.2068,
    longitude: 127.6822,
    lanes: 24,
    facilities: ["キッズルーム", "食事処", "ゲームコーナー"],
    openingHours: {
      weekday: "11:00～23:00",
      weekend: "10:00～24:00",
    },
    parking: true,
    foods: true,
    wheelchair: true,
    description:
      "那覇市中心部に位置するボウリング場。24レーンの広いスペースと充実した施設が特徴です。家族連れから本格的なボウラーまで楽しめます。",
    image:
      "https://images.unsplash.com/photo-1625505086569-430174ad368c?w=600&h=400&fit=crop",
    phone: "098-911-5555",
    website: "https://example.com/pearl",
  },
  {
    id: 2,
    name: "シーサイドボウル",
    location: "宜野湾市真志喜4-1-1",
    latitude: 26.2944,
    longitude: 127.7333,
    lanes: 20,
    facilities: ["プロショップ", "ラウンジ", "レストラン"],
    openingHours: {
      weekday: "12:00～23:30",
      weekend: "10:00～24:00",
    },
    parking: true,
    foods: true,
    wheelchair: true,
    description:
      "宜野湾市にあるモダンなボウリング場。プロショップが完備されており、ボウリング用品の購入もできます。高速道路のインターチェンジ近くでアクセス良好です。",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
    phone: "098-898-6666",
    website: "https://example.com/seaside",
  },
  {
    id: 3,
    name: "スターボウリング沖縄",
    location: "浦添市仲間1-4-1",
    latitude: 26.2511,
    longitude: 127.6667,
    lanes: 32,
    facilities: ["キッズパーク", "カフェ", "ゲーム機"],
    openingHours: {
      weekday: "10:00～24:00",
      weekend: "10:00～深夜",
    },
    parking: true,
    foods: true,
    wheelchair: true,
    description:
      "沖縄県内最大級の32レーンを誇るボウリング場。最新のレーンとスコアリングシステムを完備。充実した食事施設とエンターテイメント施設があります。",
    image:
      "https://images.unsplash.com/photo-1503594007352-85f3c0d8a92f?w=600&h=400&fit=crop",
    phone: "098-872-7777",
    website: "https://example.com/star",
  },
  {
    id: 4,
    name: "トロピカルボウル",
    location: "読谷村字村木715",
    latitude: 26.3256,
    longitude: 127.7497,
    lanes: 18,
    facilities: ["BBQ施設", "カラオケ", "飲食店"],
    openingHours: {
      weekday: "11:00～22:00",
      weekend: "10:00～23:00",
    },
    parking: true,
    foods: true,
    wheelchair: false,
    description:
      "読谷村の自然豊かな環境に位置するボウリング場。BBQ施設も完備しており、グループやファミリーでの利用に最適です。",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop",
    phone: "098-956-8888",
  },
  {
    id: 5,
    name: "サンライズボウル",
    location: "名護市東江1-2-1",
    latitude: 26.5953,
    longitude: 128.0663,
    lanes: 16,
    facilities: ["ビリヤード", "ダーツ", "飲食コーナー"],
    openingHours: {
      weekday: "12:00～23:00",
      weekend: "11:00～23:30",
    },
    parking: true,
    foods: true,
    wheelchair: true,
    description:
      "名護市にあるアットホームなボウリング場。ビリヤードやダーツなどのゲーム施設も充実しており、ボウリング以外の娯楽も楽しめます。",
    image:
      "https://images.unsplash.com/photo-1595777076429-0d77fb12ba60?w=600&h=400&fit=crop",
    phone: "0980-52-9999",
  },
];

export function getBowlingAlleyById(id: number): BowlingAlley | undefined {
  return bowlingAlleys.find((alley) => alley.id === id);
}
