# React Starter

モダンなReact開発のためのスターターテンプレート。TypeScript、Tailwind CSS、Vite、React Routerを使用した、すぐに開発を始められる構成。

## ✨ 特徴

- ⚡ **高速開発環境** - Viteによる爆速ホットリロード
- 🎨 **モダンUI** - Tailwind CSSによる美しいデザイン
- 🔒 **型安全** - TypeScriptによる堅牢な開発体験
- 🧪 **テスト環境** - Vitest + Testing Libraryで品質保証
- 🧭 **ルーティング** - React Routerによる本格的なSPA
- 📱 **レスポンシブ** - モバイルファーストデザイン
- 🛠️ **開発ツール** - ESLint、Prettier、VS Code設定済み

## 🚀 クイックスタート

### 必要条件

- Node.js 18以上
- pnpm (推奨) または npm

### セットアップ

```bash
# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認。

## 📜 利用可能なスクリプト

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバーを起動 |
| `pnpm build` | 本番用ビルドを作成 |
| `pnpm preview` | ビルド結果をプレビュー |
| `pnpm test` | テストをウォッチモードで実行 |
| `pnpm test:coverage` | カバレッジ付きでテスト実行 |
| `pnpm lint` | ESLintでコードをチェック |
| `pnpm lint:fix` | ESLintで自動修正 |
| `pnpm format` | Prettierでコードを整形 |
| `pnpm type-check` | TypeScriptの型チェック |

## 🏗️ プロジェクト構造

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── ui/             # 基本UIコンポーネント
│   ├── layout/         # レイアウトコンポーネント
│   └── index.ts        # コンポーネント統合export
├── hooks/              # カスタムフック
├── pages/              # ページコンポーネント
├── utils/              # ユーティリティ関数
├── types/              # TypeScript型定義
│   ├── common.ts       # 共通型
│   ├── components.ts   # コンポーネント型
│   └── index.ts
├── constants/          # 定数・設定
│   ├── app.ts          # アプリ設定
│   ├── routes.ts       # ルート定義
│   └── index.ts
├── styles/             # スタイルファイル
│   └── globals.css     # グローバルスタイル
├── App.tsx             # アプリケーションルート
└── main.tsx            # エントリーポイント
```

## 🎨 技術スタック

### フロントエンド
- **React 19** - UIライブラリ
- **TypeScript** - 型安全なJavaScript
- **React Router** - SPA ルーティング
- **Tailwind CSS** - ユーティリティファーストCSS

### 開発ツール
- **Vite** - 高速ビルドツール
- **Vitest** - 軽量テストフレームワーク
- **Testing Library** - React コンポーネントテスト
- **ESLint** - コード品質チェック
- **Prettier** - コードフォーマッター

## 🧪 テスト

### テスト実行
```bash
# ウォッチモードでテスト実行
pnpm test

# 一回のみテスト実行
pnpm test run

# カバレッジ付きテスト
pnpm test:coverage
```

### テストファイルの場所
```
src/components/ui/*.test.tsx         # コンポーネントテスト
src/hooks/*.test.ts                  # フックテスト
src/pages/*.test.tsx                 # ページテスト
```

## 🔧 開発ガイド

### 新しいコンポーネントの追加

1. **コンポーネントファイル作成**
   ```bash
   touch src/components/ui/Modal.tsx
   touch src/components/ui/Modal.test.tsx
   ```

2. **index.ts に export 追加**
   ```typescript
   // src/components/ui/index.ts
   export { default as Modal } from './Modal'
   ```

3. **型定義追加 (必要に応じて)**
   ```typescript
   // src/types/components.ts
   export interface ModalProps {
     // props定義
   }
   ```

### 新しいページの追加

1. **ページコンポーネント作成**
   ```bash
   touch src/pages/Contact.tsx
   ```

2. **ルート追加**
   ```typescript
   // src/App.tsx
   <Route path="/contact" element={<Contact />} />
   ```

3. **ナビゲーション追加**
   ```typescript
   // src/components/layout/Header.tsx
   { name: 'Contact', path: '/contact' }
   ```

### 推奨ファイル命名規則

| ファイル種別 | 命名規則 | 例 |
|-------------|----------|-----|
| コンポーネント | `PascalCase.tsx` | `Button.tsx`, `UserCard.tsx` |
| フック | `use*.ts` | `useLocalStorage.ts`, `useApi.ts` |
| ユーティリティ | `camelCase.ts` | `helpers.ts`, `formatters.ts` |
| テストファイル | `*.test.tsx` | `Button.test.tsx` |
| 型定義ファイル | `camelCase.ts` | `common.ts`, `api.ts` |

## 📁 VS Code 設定

このプロジェクトには最適化されたVS Code設定が含まれている：

### 推奨拡張機能
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Importer
- Auto Rename Tag

### 設定内容
- ファイル保存時の自動フォーマット
- ESLint自動修正
- ファイルネスト表示（テストファイルの整理）
- TypeScript厳密モード

## 🛠️ カスタマイズ

### Tailwind CSS設定

デザインシステムのカスタマイズは `tailwind.config.js` で行う：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-brand-color',
      },
      fontFamily: {
        sans: ['Your Font', 'system-ui'],
      },
    },
  },
}
```

### import エイリアス

`@/` を使用してクリーンなimportが可能：

```typescript
// 長いパス
import { Button } from '../../../components/ui/Button'

// エイリアス使用
import { Button } from '@/components/ui'
```

**Happy Coding! 🎉**