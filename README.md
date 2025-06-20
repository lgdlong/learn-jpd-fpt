# Japanese Vocabulary App

This project is a simple vocabulary learning tool built with [Next.js](https://nextjs.org/) and TypeScript. It lets you browse and search a list of Japanese words and provides a small administration interface for adding or editing entries.

## Features

- Search vocabulary by **romaji**, **hiragana** or **Vietnamese** meaning
- Responsive interface styled with [Bootstrap 5](https://getbootstrap.com/)
- Dataset stored locally in `src/data/vocabularies.json` and persisted in the browser using `localStorage`
- Optional development page for managing vocabulary entries

## Getting Started

Install dependencies and launch the development server:

```bash
yarn install
yarn dev
```

Open <http://localhost:3000> in your browser to view the app.

The latest version is deployed at <https://learn-jpd-fpt.vercel.app>.

## Available Scripts

- `yarn dev` – start the Next.js development server
- `yarn build` – build the production version
- `yarn start` – start the production server after a build
- `yarn lint` – run ESLint checks

## Development Page

There is an admin page located at `/dev` that allows you to add, edit and remove vocabulary items. Access is controlled by a flag inside `src/app/dev/page.tsx`:

```ts
const isAdmin = false; // change to true to enable access
```

Set this value to `true` during local development if you need to modify the vocabulary list.

## Data Format

Each vocabulary entry follows this interface:

```ts
interface JapaneseVocabulary {
  kanji: string;
  hiragana: string;
  romaji: string;
  vietnamese: string;
}
```

The starter dataset contains several hundred entries in `src/data/vocabularies.json`.

## License

This project is provided for learning purposes and does not include a specific license.
