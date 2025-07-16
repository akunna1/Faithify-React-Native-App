# Faithify React Native App 📱

A React Native app built with Expo to provide users with categorized Bible verses on topics like Grace, Love, Hope, Resilience, and Faith. 🙏📖

---

Setup ⚙️

1. Follow Expo docs at [https://docs.expo.dev/](https://docs.expo.dev/)
2. Create app by running:
   npx create-expo-app\@latest
   then go into your app folder
3. Start the app on iOS simulator:
   npx expo start --ios

---

Firebase Setup 🔥

1. Create a Firebase project and register your app as a web app
2. Install Firebase by running:
   npm install firebase
3. Create a file named config.tsx and paste your Firebase config code from the Firebase console
4. Use Firestore functions such as addDoc, getFirestore, collection, getDocs, deleteDoc, Timestamp, query, orderBy, onSnapshot to manage verse data 📚

---

Firestore Data Model 🗂️

* Each verse document includes these fields:

  * number (unique ID) #️⃣
  * location (Bible reference) 📜
  * theme (category like Grace, Love, Hope, Resilience, Faith) 💖
  * verse (the verse text) ✍️

* Verse counts by theme:
  Grace: 58
  Love: 64
  Hope: 59
  Résilience: 68
  Faith: 80
  Total verses: 328

---

Project Structure 🏗️

* app/ folder contains main app code

  * index.tsx is the app entry point
  * (tabs)/ folder holds tab navigation screens

    * index.tsx is the home screen
    * \_layout.tsx configures tab navigation

* assets/ folder holds images, fonts, and media 🎨

* components/ folder has reusable components like buttons 🔘

* constants/ folder stores app-wide constants 📌

* hooks/ folder contains custom React hooks 🎣

* node\_modules/ has installed npm packages 📦

* scripts/ for custom build or deploy scripts 🛠️

* app.json is the Expo app configuration file ⚙️

* babel.config.js configures Babel compiler 🔄

* tsconfig.json configures TypeScript compiler 📐

---

Design 🎨

* Accent color: white ⚪
* Button color: #132235 🔵

---

Web Equivalents 🌐

* Expo is similar to Vite.js and React.js
* Native Wind is similar to Tailwind CSS

---

Icons Resources 🎭

* [https://fontawesome.com/icons](https://fontawesome.com/icons)
* [https://evil-icons.io/](https://evil-icons.io/)
* [https://ionic.io/ionicons](https://ionic.io/ionicons)
* [https://www.textsymbols.ne](https://www.textsymbols.ne)

---

Font Weights Reference 🔤

100: Thin (Hairline)
200: Extra Light (Ultra Light)
300: Light
400: Normal (Regular)
500: Medium
600: Semi Bold
700: Bold
800: Extra Bold (Heavy)
900: Black (Ultra Bold)

---

Useful Video for Setup ▶️

Watch this tutorial on React Native Firebase setup:
[https://www.youtube.com/watch?v=y6DwGxe2E\_k](https://www.youtube.com/watch?v=y6DwGxe2E_k)
