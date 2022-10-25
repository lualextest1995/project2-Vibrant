# Project: 圖片收藏網站 Vibrant

這是一個圖片網站專案可以直接輸入關鍵字搜尋並下載原圖，或是註冊帳號收藏圖片資料。
<br />
圖片來源： [Pexels](https://www.pexels.com/)

# Demo

# Features

- MERN(MongoDB Atlas + Express.js + React.js + Node.js)
- User authentication (Login/Register/Logout) and authorization (Collection/Delete)
- React Hooks
- Responsive web design (RWD)
- ES6 and ES7 syntax(Operator,async/await)

# Technologies

## Frontend

- [Pexels API](https://www.pexels.com/api/)
- [React](https://zh-hant.reactjs.org/)
- [axios](https://github.com/axios/axios)

更多詳細資訊，請點擊 client 資料夾的 [package.json](https://github.com/lualextest1995/project2/blob/main/client/package.json)

## Backend

- [Node.js](https://nodejs.org/zh-tw/)
- [express](https://expressjs.com/zh-tw/)
- [cors](https://www.npmjs.com/package/cors)
- [passport]()
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)

更多詳細資訊，請點擊 server 資料夾的 [package.json](https://github.com/lualextest1995/project2/blob/main/server/package.json)

# Getting Started

1.Clone this repositories.

```
$ git clone https://github.com/lualextest1995/project2.git
```

2.Install NPM.

```
$ cd client
$ npm install
$ cd ..
$ cd server
$ npm install
```

3.Add .env file

```
* client file

$ cd client
$ create .env file
# open .env file and content writing

REACT_APP_PIXELS_API_KEY=<Your pixels api key>

* server file

$ cd server
$ create .env file
# open .env file and content writing

DB_CONNECT=<Your mongoDB Atlas key>
PASSPORT_SECRET=<Any string>
```

4.Run the client and server.

```
* client
npm start

* server
npm start
```

---

## Copyright © 2022 Alex Lu. All rights reserved.
