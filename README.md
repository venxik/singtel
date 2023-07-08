## ⚡️Getting Started

Make sure you already React Native environment running in you machine. Please refer to the official [docs](https://reactnative.dev/docs/getting-started)

## 🚚 How to run

I build this on expo so there is no additional configuration needed but you need to download expo go application on your pyshical device.

```shell
yarn install

yarn start
# it will show qr code, you can scan it with your camera app then it will open expo go app

# you can also run it directly on simulator if you already have android/ios simulator installed by running:
yarn android # -> for android
yarn ios # -> for ios
```

## Structure

```
📦src
┣ 📂**mocks**
┃ ┣ 📜index.ts
┃ ┗ 📜wrapper.tsx
┣ 📂assets
┃ ┣ 📂fonts
┃ ┃ ┗ 📜ComicNeue-Regular.ttf
┃ ┗ 📂images
┃ ┃ ┣ 📜adaptive-icon.png
┃ ┃ ┣ 📜favicon.png
┃ ┃ ┣ 📜icon.png
┃ ┃ ┗ 📜splash.png
┣ 📂components
┃ ┣ 📂atoms
┃ ┃ ┣ 📂Button
┃ ┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┃ ┗ 📜Button.test.tsx.snap
┃ ┃ ┃ ┃ ┗ 📜Button.test.tsx
┃ ┃ ┃ ┣ 📜Button.tsx
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┣ 📂StyledText
┃ ┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┃ ┗ 📜StyledText.test.tsx.snap
┃ ┃ ┃ ┃ ┗ 📜StyledText.test.tsx
┃ ┃ ┃ ┣ 📜StyledText.tsx
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┣ 📂Themed
┃ ┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┃ ┗ 📜Themed.test.tsx.snap
┃ ┃ ┃ ┃ ┗ 📜Themed.test.tsx
┃ ┃ ┃ ┣ 📜Themed.tsx
┃ ┃ ┃ ┗ 📜index.ts
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂organisms
┃ ┃ ┣ 📂AnswerItem
┃ ┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┃ ┗ 📜AnswerItem.test.tsx.snap
┃ ┃ ┃ ┃ ┗ 📜AnswerItem.test.tsx
┃ ┃ ┃ ┣ 📜AnswerItem.tsx
┃ ┃ ┃ ┣ 📜index.ts
┃ ┃ ┃ ┗ 📜types.ts
┃ ┃ ┣ 📂Category
┃ ┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┃ ┗ 📜Category.test.tsx.snap
┃ ┃ ┃ ┃ ┗ 📜Category.test.tsx
┃ ┃ ┃ ┣ 📜Category.tsx
┃ ┃ ┃ ┣ 📜index.ts
┃ ┃ ┃ ┗ 📜types.ts
┃ ┃ ┣ 📂LeaderboardItem
┃ ┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┃ ┗ 📜LeaderboardItem.test.tsx.snap
┃ ┃ ┃ ┃ ┗ 📜LeaderboardItem.test.tsx
┃ ┃ ┃ ┣ 📜LeaderboardItem.tsx
┃ ┃ ┃ ┣ 📜index.ts
┃ ┃ ┃ ┗ 📜types.ts
┃ ┃ ┣ 📂QuestionItem
┃ ┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┃ ┗ 📜QuestionItem.test.tsx.snap
┃ ┃ ┃ ┃ ┗ 📜QuestionItem.test.tsx
┃ ┃ ┃ ┣ 📜QuestionItem.tsx
┃ ┃ ┃ ┣ 📜index.ts
┃ ┃ ┃ ┗ 📜types.ts
┃ ┃ ┗ 📜index.ts
┃ ┗ 📜index.ts
┣ 📂constants
┃ ┣ 📜Colors.ts
┃ ┗ 📜data.ts
┣ 📂hooks
┃ ┣ 📜index.ts
┃ ┣ 📜useCachedResources.ts
┃ ┗ 📜useColorScheme.ts
┣ 📂navigation
┃ ┣ 📜LinkingConfiguration.ts
┃ ┣ 📜index.tsx
┃ ┗ 📜types.tsx
┣ 📂redux
┃ ┣ 📂main
┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┗ 📜main.test.ts
┃ ┃ ┣ 📜index.ts
┃ ┃ ┣ 📜main.ts
┃ ┃ ┗ 📜types.ts
┃ ┣ 📜index.ts
┃ ┗ 📜rootReducer.ts
┣ 📂screens
┃ ┣ 📂LeaderboardScreen
┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┗ 📜LeaderboardScreen.test.tsx.snap
┃ ┃ ┃ ┗ 📜LeaderboardScreen.test.tsx
┃ ┃ ┣ 📜LeaderboardScreen.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂MainScreen
┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┗ 📜MainScreen.test.tsx.snap
┃ ┃ ┃ ┗ 📜MainScreen.test.tsx
┃ ┃ ┣ 📜MainScreen.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂QuestionFailedScreen
┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┗ 📜QuestionFailedScreen.test.tsx.snap
┃ ┃ ┃ ┗ 📜QuestionFailedScreen.test.tsx
┃ ┃ ┣ 📜QuestionFailedScreen.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂QuestionScreen
┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┗ 📜QuestionScreen.test.tsx
┃ ┃ ┣ 📜QuestionScreen.tsx
┃ ┃ ┗ 📜index.ts
┃ ┣ 📂QuestionSuccessScreen
┃ ┃ ┣ 📂**tests**
┃ ┃ ┃ ┣ 📂**snapshots**
┃ ┃ ┃ ┃ ┗ 📜QuestionSuccessScreen.test.tsx.snap
┃ ┃ ┃ ┗ 📜QuestionSuccessScreen.test.tsx
┃ ┃ ┣ 📜QuestionSuccessScreen.tsx
┃ ┃ ┗ 📜index.ts
┃ ┗ 📜index.ts
┗ 📂utils
┃ ┣ 📜datetime.ts
┃ ┣ 📜index.ts
┃ ┣ 📜layout.ts
┃ ┗ 📜question.ts
```

I'm using what's called [atomic system design](https://atomicdesign.bradfrost.com/chapter-2/) to structure my component folder.
For redux configuration I'm using [RTK](https://redux-toolkit.js.org/) to help me create store and reducer structure without too much boilerplate.
For unit testing I'm using some libraries to help me create tests easily such as [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) and [jest-native](https://testing-library.com/docs/ecosystem-jest-native)

## Release
