# 我的記賬本
***
此專案為使用node.js、Express與passport開發的簡易記賬本，使用者可以在註冊並(或使用facebook 登入)登入後，查看自己的每筆支出及總支出，並且可以新增、修改、刪除每筆資料，也可透過分類，查
看各分類的總支出。
[按此試玩一下](https://thawing-refuge-98071.herokuapp.com/users/login)
### 專案畫面如下
***
#### 登入頁
![image](https://user-images.githubusercontent.com/100898369/219706966-b02691c4-8722-4e23-8b4a-1edc85459b2b.png)

可透過以下測試資料進行登入或是以facebook登入

``` 
email: root@example.com
password: 12345678
```

#### 註冊頁
![image](https://user-images.githubusercontent.com/100898369/219707108-3126a2fe-8250-4ba5-a092-f204f1790292.png)

#### 首頁
![image](https://user-images.githubusercontent.com/100898369/219707200-757c4b2e-5081-496a-ab53-5e73319cc40f.png)


#### 新增頁面
![image](https://user-images.githubusercontent.com/100898369/219707350-7fc59408-1126-43bc-967e-fcc3ae1eae0f.png)


### 功能列表
***
- 使用者可以註冊、登入、登出，登入後即可使用自己的記帳簿
- 可於主畫面瀏覽所有支出，包含名稱、日期、類別、支出
- 可依類別進行搜尋，並依日期先後排序，最後在最上方
- 點擊下方+按鈕，可以新增支出
- 點擊每間餐廳右側鉛筆按鈕，可以進入修改支出資訊
- 點擊右方垃圾桶可以刪除此支出所有資訊


### Getting start
***
#### Prerequisites - 環境建置
1. [Node.js](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com/)
3. [Nodemon](https://www.npmjs.com/package/nodemon)
4. [Express](https://www.npmjs.com/package/express)


#### Installing - 安裝流程
1. 打開你的 terminal，Clone 此專案至本機電腦
          
           $ git clone https://github.com/Chloe905/expense-tracker.git
    
2. 開啟終端機(Terminal)，進入存放此專案的資料夾

            $ cd expense-tracker
    
3. 打開 VS code

            在 Terminal 輸入 $ code .
    
 即可開始編輯
 
4. 連線 mongoose

          MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
 
5. 啟動伺服器，執行 app.js 檔案

          在 Terminal 輸入 $ npm run seed
                          $ npm run dev
    
6. 當 terminal 出現以下字樣，表示本機伺服器已啟動並成功連結

           Express is running on http://localhost:3000

7. 若要暫停

          按下ctrl+c
          
現在，你可開啟任一瀏覽器瀏覽器輸入 http://localhost:3000 開始使用你的記帳簿

#### Built With - 使用工具
***
* [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
* [Node.js](https://nodejs.org/en/) v18.12.0
* [Express](https://www.npmjs.com/package/express) 4.18.2- 應用程式架構
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) 6.0.7 - 模板引擎
* [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) v5.1.3
* [fontawesome](https://fontawesome.com/v5/search?q=delete&o=r&m=free) v5.15.4
* [mongoDB](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-tw_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624371&adgroup=115749712503&gclid=CjwKCAiAjs2bBhACEiwALTBWZcUKpTcWMYz-H2ujR3AWXk8bd7bfPB458D5WrtfmwolB5WWeWjP3zRoC7BwQAvD_BwE)
* [mongoose](https://mongoosejs.com/) 6.9.1
* [dotenv](https://www.npmjs.com/package/dotenv) 8.2.0
* [method override](https://www.npmjs.com/package/method-override) 3.0.0
* [express-session](https://www.npmjs.com/package/express-session)^1.17.1
* [passport](http://www.passportjs.org/)0.4.1
* [passport-facebook](http://www.passportjs.org/packages/passport-facebook/)3.0.0
* [passport-local](http://www.passportjs.org/packages/passport-local/) 1.0.0
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)2.4.3
* [connect-flash](https://www.npmjs.com/package/connect-flash)0.1.1
#### Contributor - 專案開發人員
---
[Chloe905](https://github.com/Chloe905)
