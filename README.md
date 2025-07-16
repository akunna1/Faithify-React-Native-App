# Faithify React Native App

A React Native app built with Expo to provide users with categorized Bible verses on topics like Grace, Love, Hope, Resilience, and Faith.

---

## Setup

1. Follow Expo docs: https://docs.expo.dev/  
2. Create app:  
   ```bash
   npx create-expo-app@latest
   cd your-app-folder
````

3. Start app on iOS simulator:

   ```bash
   npx expo start --ios
   ```

---

## Firebase Setup

1. Create a Firebase project and register your app as a web app
2. Install Firebase SDK:

   ```bash
   npm install firebase
   ```
3. Create a `config.tsx` file with your Firebase config copied from Firebase console
4. Use Firestore functions like `addDoc`, `getFirestore`, `collection`, `getDocs`, `deleteDoc`, `Timestamp`, `query`, `orderBy`, `onSnapshot` to manage verses collections

---

## Firestore Data Model

* Each verse document includes fields:

  * number (unique ID)
  * location (Bible reference)
  * theme (category such as Grace, Love, Hope, Resilience, Faith)
  * verse (text content)

* Verse counts by theme:

  * Grace: 58
  * Love: 64
  * Hope: 59
  * Résilience: 68
  * Faith: 80
  * **Total: 328 verses**

---

## Project Structure

* `app/` — main app structure

  * `index.tsx` — entry point, sets up root component/navigation
  * `(tabs)/` — folder for tab navigation screens

    * `index.tsx` — home screen
    * `_layout.tsx` — tab navigation configuration

* `assets/` — images, fonts, media

* `components/` — reusable React components (e.g., buttons)

* `constants/` — app-wide constants and config

* `hooks/` — custom React hooks

* `node_modules/` — installed npm packages

* `scripts/` — custom build or deploy scripts

* `app.json` — Expo/React Native app config

* `babel.config.js` — Babel transpiler config

* `tsconfig.json` — TypeScript compiler config

---

## Design

* Accent color: **white**
* Button color: `#132235`

---

## Web Equivalents

* Expo \~ Vite.js + React.js
* Native Wind \~ Tailwind CSS

---

## Icons Resources

* [https://fontawesome.com/icons](https://fontawesome.com/icons)
* [https://evil-icons.io/](https://evil-icons.io/)
* [https://ionic.io/ionicons](https://ionic.io/ionicons)
* [https://www.textsymbols.ne](https://www.textsymbols.ne)

---

## Font Weights Reference

| Weight | Description               |
| ------ | ------------------------- |
| 100    | Thin (Hairline)           |
| 200    | Extra Light (Ultra Light) |
| 300    | Light                     |
| 400    | Normal (Regular)          |
| 500    | Medium                    |
| 600    | Semi Bold                 |
| 700    | Bold                      |
| 800    | Extra Bold (Heavy)        |
| 900    | Black (Ultra Bold)        |

---

## Useful Video for Setup

[React Native Firebase Setup Tutorial](https://www.youtube.com/watch?v=y6DwGxe2E_k)

```
