# React Native Todo App

This is my first attempt at making an android app, I'm using react native with expo due to hardware limitations (my current device is not powerful enough to handle android studio), but despite the limitations, this app is a great starting point to learn mobile development.

## Features

- Add, update, and delete todos
- Mark todos as completed
- Data persistence using local SQLite database

## Tech Stack

- [React Native](https://reactnative.dev/) (via [Expo](https://expo.dev/))
- [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/) — local database

## Getting Started

1. **Install Expo CLI**

   ```bash
   npm install -g expo-cli
   ```

2. **Clone this repository**

   ```bash
   git clone https://github.com/hanifas-cs50/ReactNative_Todo.git
   cd ReactNative_Todo
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the app**

   ```bash
   expo start
   ```

   > Then scan the QR code using Expo Go app on your Android device.

5. **Usage**

   - Type a new todo and press **Add**
   - Tap **Check** button to mark it as completed
   - Tap **Delete** button to delete it

## Version History

- **v1:** First version, first attempt using react native using expo, I plan to make a CRUD with SQLite, but I'm struggling on making a create function, the simplest one :(
- **v2:** Second version, done for now, it's a basic working app with SQLite as it's database, I'll update if I have time, for now, I'll move on to weather app.
- **v3:** Third version, UI improvements, added an about page.

(Note on how I fixed the first version, apparently I did not initialize the database, after that struggle the rest was smooth sailing)
