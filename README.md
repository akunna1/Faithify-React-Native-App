#### Setup
- https://docs.expo.dev/
- npx create-expo-app@latest (main terminal, cd to folder)
- npx expo start --ios

#### Firebase Setup
- npm install firebase

#### Useful video for setup
- https://www.youtube.com/watch?v=y6DwGxe2E_k

#### Design Features
- Accent color: white 
- Color for buttons: #132235

#### Web Equivalents
- Expo ~ Vite.js and React.js
- Native Wind ~ Tailwind CSS

#### Structure
- app Folder: Contains the main app structure. The index.tsx file here serves as the entry point, similar to index.js in a JavaScript setup. This file typically sets up the app's root component and navigation
-  app --> (tabs) --> index.tsx: entry point/ home screen
-  app --> (tabs) --> _layout.tsx: Configures tab navigation and screen options
  
- assets Folder: Stores static resources like images, fonts, and other media files
- components Folder: Contains reusable React components used throughout the app e.g buttons, etc
- constants Folder: Holds constant values and configuration settings used in the app
- hooks Folder: Contains custom hooks for reusable logic
- node_modules Folder: Contains all the installed npm packages
- scripts Folder: May include custom scripts for tasks like building or deploying the app
- app.json: Configuration file for your app, including settings for Expo or React Native CLI
- babel.config.js: Configuration file for Babel, used to transpile your code
- tsconfig.json: TypeScript configuration file that defines how TypeScript should compile your code


#### Where to get icons
- https://fontawesome.com/icons
- https://evil-icons.io/
- https://ionic.io/ionicons
- https://www.textsymbols.ne

#### Font Weight Values
- 100: Thin (Hairline)
- 200: Extra Light (Ultra Light)
- 300: Light
- 400: Normal (Regular)
- 500: Medium
- 600: Semi Bold (Semi Bold)
- 700: Bold
- 800: Extra Bold (Heavy)
- 900: Black (Ultra Bold)

#### Firebase Setup
- configure firebase first (set up project in firebase)
- npm install firebase
- register app as web app
- copy code for config file, create config.tsx file and paste it there
- firestore setup- addDoc, getFirestore, collection, getDocs, deleteDoc,  Timestamp, query, orderBy, onSnapshot
- each collection has number (unique), location, theme, verse

#### Firestore Functions
- collection: retrieves a reference to a specific collection in Firestore, where documents are stored

- addDoc: adds a new document to a specified collection, allowing one to store data in Firestore

- Timestamp: a utility that represents a point in time, often used to record when a document was created or updated

- query: creates a query object that can be used to filter documents from a collection based on specific criteria

- where: adds a condition to a query, allowing one to filter documents based on specific field values

- getDocs: retrieves the documents that match a given query, returning the results for further processing

- deleteDoc: removes the current verse from a collection

##### Verses
- Total: 328 verses
- Grace- 58 verses, Love- 64 verses, Hope- 59 verses, Résilience- 68 verses, Faith-  80 verses

